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
    <div className="grain">
      {/* ── Ambient glow orbs ─────────────────────────────── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full"
          style={{
            width: "clamp(400px, 50vw, 700px)",
            height: "clamp(400px, 50vw, 700px)",
            background: "radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 65%)",
            top: "-15%",
            left: "15%",
            animation: "float 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "clamp(300px, 40vw, 550px)",
            height: "clamp(300px, 40vw, 550px)",
            background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 65%)",
            top: "40%",
            right: "-8%",
            animation: "float 25s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "clamp(250px, 35vw, 450px)",
            height: "clamp(250px, 35vw, 450px)",
            background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 65%)",
            bottom: "5%",
            left: "-5%",
            animation: "float 22s ease-in-out infinite 3s",
          }}
        />
      </div>

      {/* ── Nav ───────────────────────────────────────────── */}
      <nav className="relative z-10 px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-fg font-bold text-lg tracking-tight">
            save<span className="text-accent">clip</span>
          </Link>
          <div className="hidden sm:flex items-center gap-0.5">
            {platforms.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                className="px-3 py-1.5 text-xs text-dim hover:text-fg transition-colors rounded-lg hover:bg-white/[0.04]"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative z-10 px-6 pt-16 sm:pt-28 pb-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[2.5rem] sm:text-[3.75rem] font-extrabold tracking-[-0.03em] leading-[1.1] mb-5 text-fg">
            Save any video,<br />from anywhere
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Paste a link from Instagram, YouTube, Twitter, TikTok or Facebook. Pick a quality. Download.
          </p>

          {/* ── Input bar ────────────────────────────────── */}
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="glass-strong rounded-2xl p-1.5 sm:p-2 shadow-2xl shadow-accent/[0.04]">
                <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2">
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste video URL here..."
                    className="flex-1 px-5 py-3.5 bg-transparent text-fg placeholder:text-dim/50 rounded-xl focus:outline-none text-[15px]"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-glow px-7 py-3.5 bg-accent hover:bg-accent-hover text-[#06060a] font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shrink-0 text-[15px]"
                  >
                    {loading ? (
                      <>
                        <SpinnerIcon />
                        <span>Fetching…</span>
                      </>
                    ) : (
                      <>
                        <DownloadIcon className="w-[18px] h-[18px]" />
                        <span>Get video</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>

            <p className="text-dim/40 text-xs text-center mt-4 tracking-wide">
              No account needed · Nothing stored · Completely free
            </p>
          </div>

          {/* ── Error ─────────────────────────────────────── */}
          {error && (
            <div className="max-w-xl mx-auto mt-5 px-5 py-4 rounded-xl bg-red/5 border border-red/15 text-red text-sm animate-fade-up">
              {error}
            </div>
          )}

          {/* ── Result ────────────────────────────────────── */}
          {result && (
            <div className="max-w-xl mx-auto mt-6 animate-fade-up text-left">
              <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <div className="flex gap-4 p-5 border-b border-white/[0.06]">
                  {result.thumbnail && (
                    <img
                      src={result.thumbnail}
                      alt=""
                      className="w-28 h-[72px] object-cover rounded-lg bg-white/[0.03] shrink-0"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <span
                      className="inline-block text-xs font-medium px-2.5 py-1 rounded-md mb-2"
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

                <div className="divide-y divide-white/[0.04]">
                  {result.formats.map((f, i) => (
                    <a
                      key={i}
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-5 py-3.5 hover:bg-white/[0.03] transition-colors group"
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

      {/* ── Platform strip ────────────────────────────────── */}
      <section className="relative z-10 px-6 py-10">
        <div className="max-w-xl mx-auto flex flex-wrap justify-center gap-2">
          {platforms.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="glass rounded-xl px-5 py-2.5 text-sm text-muted hover:text-fg hover:bg-white/[0.04] transition-all font-medium"
            >
              {p.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────── */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-fg text-center mb-8">
            Three steps, that&apos;s it
          </h2>

          <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {[
              {
                step: "Copy",
                desc: "Find a video on any supported platform and copy its share link or URL.",
              },
              {
                step: "Paste",
                desc: "Drop the link into the input above. We detect the platform and fetch the video.",
              },
              {
                step: "Download",
                desc: "Pick your preferred quality and save the file directly to your device.",
              },
            ].map((item, i) => (
              <div key={i} className="glass rounded-2xl p-5 hover:bg-white/[0.04] transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center text-sm font-semibold mb-4 group-hover:bg-accent/15 transition-colors">
                  {i + 1}
                </div>
                <h3 className="text-fg font-semibold text-[15px] mb-1.5">{item.step}</h3>
                <p className="text-dim text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-fg text-center mb-8">
            Frequently asked
          </h2>

          <div className="max-w-xl mx-auto glass rounded-2xl overflow-hidden divide-y divide-white/[0.04]">
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
                <summary className="px-5 py-4 cursor-pointer flex items-center justify-between text-left text-sm text-fg font-medium transition-colors hover:bg-white/[0.02]">
                  {faq.q}
                  <svg
                    className="w-4 h-4 text-dim group-open:rotate-45 transition-transform shrink-0 ml-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-sm text-dim leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="relative z-10 px-6 py-8 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-fg font-bold text-sm tracking-tight">
            save<span className="text-accent">clip</span>
          </Link>
          <p className="text-xs text-dim/40">
            Not affiliated with Instagram, YouTube, Twitter, Facebook or TikTok.
          </p>
        </div>
      </footer>
    </div>
  );
}
