"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

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

const platforms = [
  { id: "instagram" as const, label: "Instagram", href: "/instagram-downloader" },
  { id: "youtube" as const, label: "YouTube", href: "/youtube-downloader" },
  { id: "twitter" as const, label: "Twitter / X", href: "/twitter-downloader" },
  { id: "tiktok" as const, label: "TikTok", href: "/tiktok-downloader" },
  { id: "facebook" as const, label: "Facebook", href: "/facebook-downloader" },
];

const platformColors: Record<Platform, string> = {
  instagram: "#E1306C",
  youtube: "#FF0000",
  twitter: "#1DA1F2",
  facebook: "#1877F2",
  tiktok: "#25F4EE",
  unknown: "#22d3ee",
};

type VideoResult = {
  title: string;
  thumbnail: string;
  duration: string;
  formats: { quality: string; url: string; size: string }[];
};

/* ── icons ──────────────────────────────────────────────── */
function DownloadIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" className="opacity-20" />
      <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-80" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

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

  return (
    <>
      {/* ── Nav ───────────────────────────────────────────── */}
      <nav className="px-6 py-5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-fg font-bold text-lg tracking-tight">
            save<span className="text-accent">clip</span>
          </Link>
          <div className="hidden sm:flex items-center gap-1">
            {platforms.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                className="px-3 py-1.5 text-xs text-dim hover:text-fg transition-colors rounded-md hover:bg-surface"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="flex-1 px-6 pt-16 sm:pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4 text-fg">
              Save any video.
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-10">
              Paste a link from Instagram, YouTube, Twitter, TikTok or Facebook.
              Pick a quality. Download the file.
            </p>
          </div>

          {/* ── Input bar ────────────────────────────────── */}
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-5 py-4 bg-surface text-fg placeholder:text-dim rounded-xl border border-border focus:border-accent focus:outline-none transition-colors text-base"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-7 py-4 bg-accent hover:bg-accent-hover text-bg font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 shrink-0 text-base"
              >
                {loading ? (
                  <>
                    <SpinnerIcon />
                    <span>Fetching…</span>
                  </>
                ) : (
                  <>
                    <DownloadIcon />
                    <span>Get video</span>
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="text-dim text-sm">
            Free, no account needed. We don&apos;t store anything.
          </p>

          {/* ── Error ─────────────────────────────────────── */}
          {error && (
            <div className="mt-6 px-5 py-4 rounded-xl bg-red/5 border border-red/15 text-red text-sm animate-fade-up">
              {error}
            </div>
          )}

          {/* ── Result ────────────────────────────────────── */}
          {result && (
            <div className="mt-8 animate-fade-up">
              <div className="rounded-xl border border-border bg-surface overflow-hidden">
                {/* Video info header */}
                <div className="flex gap-4 p-5 border-b border-border">
                  {result.thumbnail && (
                    <img
                      src={result.thumbnail}
                      alt=""
                      className="w-28 h-[72px] object-cover rounded-lg bg-surface-2 shrink-0"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <span
                      className="inline-block text-xs font-medium px-2 py-0.5 rounded mb-1.5"
                      style={{
                        background: platformColors[platform] + "15",
                        color: platformColors[platform],
                      }}
                    >
                      {platforms.find((p) => p.id === platform)?.label || "Video"}
                    </span>
                    <h3 className="font-medium text-sm leading-snug text-fg line-clamp-2">
                      {result.title || "Untitled video"}
                    </h3>
                    {result.duration && (
                      <span className="text-xs text-dim font-mono mt-1 block">{result.duration}</span>
                    )}
                  </div>
                </div>

                {/* Download options */}
                <div className="divide-y divide-border">
                  {result.formats.map((f, i) => (
                    <a
                      key={i}
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-5 py-3.5 hover:bg-surface-2 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-fg text-sm font-medium">{f.quality}</span>
                        <span className="text-dim text-xs">{f.size}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowDownIcon />
                        <span>Download</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── How it works — one compact line, not cards ──── */}
      <section className="px-6 py-14 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-12">
            <h2 className="text-sm font-semibold text-fg uppercase tracking-wider shrink-0 pt-0.5">
              How it works
            </h2>
            <div className="flex-1 grid sm:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <p className="text-fg text-sm font-medium mb-1">Copy the link</p>
                <p className="text-dim text-sm leading-relaxed">
                  Find a video on any supported platform. Tap share, copy the URL.
                </p>
              </div>
              <div>
                <p className="text-fg text-sm font-medium mb-1">Paste it here</p>
                <p className="text-dim text-sm leading-relaxed">
                  Drop the link into the input above. We&apos;ll detect the platform automatically.
                </p>
              </div>
              <div>
                <p className="text-fg text-sm font-medium mb-1">Download the file</p>
                <p className="text-dim text-sm leading-relaxed">
                  Pick your quality and save the video straight to your device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platforms ─────────────────────────────────────── */}
      <section className="px-6 py-14 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-12">
            <h2 className="text-sm font-semibold text-fg uppercase tracking-wider shrink-0 pt-0.5">
              Works with
            </h2>
            <div className="flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {platforms.map((p) => (
                  <Link
                    key={p.id}
                    href={p.href}
                    className="group px-4 py-3 rounded-lg bg-surface border border-border hover:border-accent/30 transition-all text-center"
                  >
                    <span className="text-sm text-muted group-hover:text-fg transition-colors font-medium">
                      {p.label}
                    </span>
                  </Link>
                ))}
              </div>
              <p className="text-dim text-xs mt-4">
                Public videos only. Private or friends-only content can&apos;t be accessed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="px-6 py-14 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-12">
            <h2 className="text-sm font-semibold text-fg uppercase tracking-wider shrink-0 pt-0.5">
              FAQ
            </h2>
            <div className="flex-1 space-y-0">
              {[
                {
                  q: "Is SaveClip free?",
                  a: "Yes, completely. No hidden charges, no signup, no limits.",
                },
                {
                  q: "Do you store the videos?",
                  a: "No. We fetch the download link on the fly and redirect you directly. Nothing touches our servers.",
                },
                {
                  q: "Is this legal?",
                  a: "SaveClip is a tool. Downloading for personal use is generally fine, but always respect the creator's rights and platform terms.",
                },
                {
                  q: "What quality can I get?",
                  a: "We serve the highest quality available from the source — up to 4K where the platform supports it.",
                },
                {
                  q: "Does it work on my phone?",
                  a: "Yes. Any device with a modern browser — phone, tablet, desktop.",
                },
              ].map((faq, i) => (
                <details key={i} className="group">
                  <summary className="py-4 cursor-pointer flex items-center justify-between text-left text-sm text-fg font-medium border-b border-border group-open:border-accent/20 transition-colors">
                    {faq.q}
                    <svg
                      className="w-4 h-4 text-dim group-open:rotate-180 transition-transform shrink-0 ml-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <p className="pb-5 pt-1 text-sm text-dim leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link href="/" className="text-fg font-bold text-sm tracking-tight">
            save<span className="text-accent">clip</span>
          </Link>
          <p className="text-xs text-dim">
            Not affiliated with Instagram, YouTube, Twitter, Facebook or TikTok.
          </p>
        </div>
      </footer>
    </>
  );
}
