"use client";

import { useState, FormEvent } from "react";

/* ── platform detection ─────────────────────────────────── */
type Platform = "instagram" | "youtube" | "twitter" | "facebook" | "tiktok" | "unknown";

function detectPlatform(url: string): Platform {
  if (/instagram\.com|instagr\.am/i.test(url)) return "instagram";
  if (/youtu\.?be|youtube\.com/i.test(url)) return "youtube";
  if (/twitter\.com|x\.com/i.test(url)) return "twitter";
  if (/facebook\.com|fb\.watch/i.test(url)) return "facebook";
  if (/tiktok\.com/i.test(url)) return "tiktok";
  return "unknown";
}

const platformMeta: Record<Platform, { label: string; color: string; icon: string }> = {
  instagram: { label: "Instagram", color: "#E1306C", icon: "📸" },
  youtube: { label: "YouTube", color: "#FF0000", icon: "▶️" },
  twitter: { label: "Twitter / X", color: "#1DA1F2", icon: "🐦" },
  facebook: { label: "Facebook", color: "#1877F2", icon: "📘" },
  tiktok: { label: "TikTok", color: "#00F2EA", icon: "🎵" },
  unknown: { label: "Video", color: "#6c5ce7", icon: "🔗" },
};

type VideoResult = {
  title: string;
  thumbnail: string;
  duration: string;
  formats: { quality: string; url: string; size: string }[];
};

/* ── page ───────────────────────────────────────────────── */
export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<VideoResult | null>(null);
  const [platform, setPlatform] = useState<Platform>("unknown");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = url.trim();
    if (!trimmed) return;

    setLoading(true);
    setError("");
    setResult(null);
    setPlatform(detectPlatform(trimmed));

    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: trimmed }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setResult(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to fetch video");
    } finally {
      setLoading(false);
    }
  }

  const meta = platformMeta[platform];

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 pt-16 pb-8">
        <div className="w-full max-w-2xl text-center">
          {/* logo */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-surface border border-border text-sm text-muted">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            Free &middot; No signup &middot; Unlimited
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Download videos from{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              anywhere
            </span>
          </h1>
          <p className="text-muted text-lg mb-10 max-w-lg mx-auto">
            Paste a link from Instagram, YouTube, Twitter, Facebook or TikTok and download in seconds.
          </p>

          {/* ── URL input ─────────────────────────────────── */}
          <form onSubmit={handleSubmit} className="relative group">
            <div className="flex items-center bg-surface border border-border rounded-2xl overflow-hidden focus-within:border-accent transition-colors">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste video link here..."
                className="flex-1 bg-transparent px-5 py-4 text-fg placeholder:text-muted/60 outline-none text-base"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="m-1.5 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2 shrink-0"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                      <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                    </svg>
                    Fetching...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download
                  </>
                )}
              </button>
            </div>
          </form>

          {/* ── Error ──────────────────────────────────────── */}
          {error && (
            <div className="mt-4 p-3 rounded-xl bg-red/10 border border-red/20 text-red text-sm animate-[fade-in_0.3s_ease-out]">
              {error}
            </div>
          )}

          {/* ── Result ─────────────────────────────────────── */}
          {result && (
            <div className="mt-8 bg-surface border border-border rounded-2xl p-6 text-left animate-[fade-in_0.4s_ease-out]">
              <div className="flex gap-4 items-start mb-5">
                {result.thumbnail && (
                  <img
                    src={result.thumbnail}
                    alt=""
                    className="w-32 h-20 object-cover rounded-lg bg-surface-2 shrink-0"
                  />
                )}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-md"
                      style={{ background: meta.color + "22", color: meta.color }}
                    >
                      {meta.icon} {meta.label}
                    </span>
                    {result.duration && (
                      <span className="text-xs text-muted font-mono">{result.duration}</span>
                    )}
                  </div>
                  <h3 className="font-semibold text-sm leading-snug line-clamp-2">
                    {result.title || "Video"}
                  </h3>
                </div>
              </div>

              <div className="space-y-2">
                {result.formats.map((f, i) => (
                  <a
                    key={i}
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-surface-2 border border-border hover:border-accent transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-accent font-mono text-sm font-bold">{f.quality}</span>
                      <span className="text-muted text-xs">{f.size}</span>
                    </div>
                    <span className="text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Download →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Platforms ──────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Supported platforms</h2>
          <p className="text-muted mb-8">Works with all major social media platforms</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {(Object.entries(platformMeta) as [Platform, typeof meta][])
              .filter(([k]) => k !== "unknown")
              .map(([key, m]) => (
                <div
                  key={key}
                  className="flex flex-col items-center gap-2 py-5 rounded-xl bg-surface border border-border hover:border-accent/40 transition-colors"
                >
                  <span className="text-2xl">{m.icon}</span>
                  <span className="text-sm font-medium">{m.label}</span>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────── */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Paste link", desc: "Copy the video URL from any supported platform" },
              { step: "2", title: "Choose quality", desc: "Select from available resolutions and formats" },
              { step: "3", title: "Download", desc: "Save the video directly to your device" },
            ].map((s) => (
              <div key={s.step} className="p-6 rounded-xl bg-surface border border-border">
                <div className="w-10 h-10 rounded-full bg-accent/15 text-accent font-bold flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">FAQ</h2>
          {[
            { q: "Is SaveClip free?", a: "Yes, 100% free. No hidden charges, no signup required." },
            { q: "Do you store the videos?", a: "No. We fetch the download link in real time and redirect you. Nothing is stored on our servers." },
            { q: "Is it legal?", a: "SaveClip is a tool. Downloading videos for personal use is generally fine, but always respect the content creator's rights." },
            { q: "What quality can I download?", a: "We offer the highest quality available — up to 1080p or 4K depending on the source." },
            { q: "Does it work on mobile?", a: "Yes. SaveClip works on any device with a browser — phone, tablet, or desktop." },
          ].map((faq, i) => (
            <details key={i} className="group border-b border-border">
              <summary className="py-4 cursor-pointer font-medium flex items-center justify-between text-left">
                {faq.q}
                <span className="text-muted group-open:rotate-45 transition-transform text-lg">+</span>
              </summary>
              <p className="pb-4 text-sm text-muted leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="py-8 px-4 border-t border-border text-center text-xs text-muted">
        <p>SaveClip &middot; Free video downloader &middot; Not affiliated with Instagram, YouTube, Twitter, Facebook or TikTok.</p>
      </footer>
    </>
  );
}
