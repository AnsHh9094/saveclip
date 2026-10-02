import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 30;

/* ── helpers ──────────────────────────────────────────────── */
function json(data: Record<string, unknown>, status = 200) {
  return Response.json(data, { status });
}

function extractVideoId(url: string): string | null {
  // youtube.com/watch?v=xxx | youtu.be/xxx | youtube.com/shorts/xxx
  const m =
    url.match(/(?:youtube\.com\/(?:watch\?.*v=|shorts\/)|youtu\.be\/)([\w-]{11})/) ??
    url.match(/youtube\.com\/embed\/([\w-]{11})/);
  return m?.[1] ?? null;
}

/* ── Instagram fetcher ────────────────────────────────────── */
async function fetchInstagram(url: string) {
  // Use the public oembed endpoint to get metadata
  const oembedUrl = `https://api.instagram.com/oembed/?url=${encodeURIComponent(url)}`;

  try {
    const res = await fetch(oembedUrl, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error("Could not fetch Instagram post");
    const data = await res.json();

    return {
      title: data.title || "Instagram Video",
      thumbnail: data.thumbnail_url || "",
      duration: "",
      formats: [
        {
          quality: "Original",
          url: url, // Direct link - user opens in browser
          size: "Open in Instagram",
        },
      ],
      note: "Instagram restricts direct downloads. Tap the link to open the post, then use your browser's save option or a mobile app.",
    };
  } catch {
    throw new Error("Could not fetch this Instagram post. Make sure the post is public.");
  }
}

/* ── YouTube fetcher ──────────────────────────────────────── */
async function fetchYouTube(url: string) {
  const videoId = extractVideoId(url);
  if (!videoId) throw new Error("Invalid YouTube URL");

  // Use youtube's oembed for metadata
  const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;

  let title = "YouTube Video";
  let thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  try {
    const res = await fetch(oembedUrl, { signal: AbortSignal.timeout(5000) });
    if (res.ok) {
      const data = await res.json();
      title = data.title || title;
      thumbnail = data.thumbnail_url || thumbnail;
    }
  } catch {
    // fallback to defaults
  }

  // Provide cobalt.tools as a reliable third-party downloader
  return {
    title,
    thumbnail,
    duration: "",
    formats: [
      {
        quality: "1080p",
        url: `https://cobalt.tools/#url=${encodeURIComponent(`https://www.youtube.com/watch?v=${videoId}`)}`,
        size: "via Cobalt",
      },
      {
        quality: "720p",
        url: `https://cobalt.tools/#url=${encodeURIComponent(`https://www.youtube.com/watch?v=${videoId}`)}`,
        size: "via Cobalt",
      },
      {
        quality: "Audio MP3",
        url: `https://cobalt.tools/#url=${encodeURIComponent(`https://www.youtube.com/watch?v=${videoId}`)}`,
        size: "via Cobalt",
      },
    ],
  };
}

/* ── Twitter/X fetcher ────────────────────────────────────── */
async function fetchTwitter(url: string) {
  // Normalize x.com to twitter.com for API compatibility
  const normalizedUrl = url.replace("x.com", "twitter.com");

  // Use fxtwitter/vxtwitter for metadata
  const fxUrl = normalizedUrl.replace("twitter.com", "api.fxtwitter.com");

  let title = "Twitter Video";
  let thumbnail = "";
  const formats: { quality: string; url: string; size: string }[] = [];

  try {
    const res = await fetch(fxUrl, {
      signal: AbortSignal.timeout(8000),
      headers: { "User-Agent": "SaveClip/1.0" },
    });

    if (res.ok) {
      const data = await res.json();
      const tweet = data.tweet;
      if (tweet) {
        title = tweet.text?.substring(0, 100) || title;

        if (tweet.media?.videos?.[0]) {
          const video = tweet.media.videos[0];
          thumbnail = video.thumbnail_url || tweet.media.photos?.[0]?.url || "";

          if (video.url) {
            formats.push({
              quality: "Best Quality",
              url: video.url,
              size: "MP4",
            });
          }
        } else if (tweet.media?.all) {
          // fallback
          for (const m of tweet.media.all) {
            if (m.type === "video" && m.url) {
              thumbnail = m.thumbnail_url || "";
              formats.push({ quality: "Video", url: m.url, size: "MP4" });
            }
          }
        }
      }
    }
  } catch {
    // fallback
  }

  if (formats.length === 0) {
    // Fallback: use cobalt
    formats.push({
      quality: "Best Quality",
      url: `https://cobalt.tools/#url=${encodeURIComponent(url)}`,
      size: "via Cobalt",
    });
  }

  return { title, thumbnail, duration: "", formats };
}

/* ── Generic fallback ─────────────────────────────────────── */
async function fetchGeneric(url: string) {
  return {
    title: "Video",
    thumbnail: "",
    duration: "",
    formats: [
      {
        quality: "Download",
        url: `https://cobalt.tools/#url=${encodeURIComponent(url)}`,
        size: "via Cobalt",
      },
    ],
  };
}

/* ── POST handler ─────────────────────────────────────────── */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const url = body?.url?.trim();

    if (!url) return json({ error: "Please provide a URL" }, 400);

    // Basic URL validation
    try {
      new URL(url);
    } catch {
      return json({ error: "Invalid URL" }, 400);
    }

    let result;
    if (/instagram\.com|instagr\.am/i.test(url)) {
      result = await fetchInstagram(url);
    } else if (/youtu\.?be|youtube\.com/i.test(url)) {
      result = await fetchYouTube(url);
    } else if (/twitter\.com|x\.com/i.test(url)) {
      result = await fetchTwitter(url);
    } else if (/facebook\.com|fb\.watch/i.test(url)) {
      result = await fetchGeneric(url);
    } else if (/tiktok\.com/i.test(url)) {
      result = await fetchGeneric(url);
    } else {
      result = await fetchGeneric(url);
    }

    return json(result);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error";
    return json({ error: message }, 500);
  }
}
