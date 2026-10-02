import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Facebook Video Downloader — Save FB Videos in HD | SaveClip",
  description:
    "Download Facebook videos for free in HD quality. Save public FB videos, Reels and stories. No signup required.",
  keywords: [
    "facebook video downloader",
    "fb video download",
    "save facebook video",
    "download fb reels",
  ],
};

export default function FacebookDownloader() {
  return (
    <div className="grain min-h-screen flex flex-col">
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full"
          style={{
            width: "clamp(500px, 60vw, 900px)",
            height: "clamp(500px, 60vw, 900px)",
            background: "radial-gradient(circle, rgba(24,119,242,0.1) 0%, rgba(24,119,242,0.03) 35%, transparent 65%)",
            top: "-20%", left: "10%",
            animation: "float 22s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "clamp(400px, 50vw, 700px)",
            height: "clamp(400px, 50vw, 700px)",
            background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 60%)",
            bottom: "5%", right: "-5%",
            animation: "float 26s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "100%", height: "50%",
            background: "radial-gradient(ellipse at 50% 0%, rgba(24,119,242,0.04) 0%, transparent 55%)",
            top: "0", left: "0",
          }}
        />
      </div>

      <nav className="relative z-10 px-6 py-5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-fg font-bold text-lg tracking-tight">
            save<span className="text-accent">clip</span>
          </Link>
          <span className="text-xs text-dim">Facebook</span>
        </div>
      </nav>

      <main className="relative z-10 flex-1 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-xl mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-tight mb-5">
              Facebook Video Downloader
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Download videos from Facebook in HD. Public videos, Reels and more.
            </p>
            <Link
              href="/"
              className="btn-glow inline-flex items-center gap-2.5 px-7 py-4 bg-accent hover:bg-accent-hover text-[#050508] font-semibold rounded-xl transition-all text-base"
            >
              Download Facebook video
            </Link>
          </div>

          <article className="space-y-5">
            <div className="glass gradient-border rounded-2xl p-6">
              <h2 className="text-sm font-semibold text-fg mb-4">How to download</h2>
              <ol className="space-y-3 text-sm text-dim leading-relaxed list-decimal list-inside">
                <li>Find the video on Facebook you want to download.</li>
                <li>Click the three dots, then Copy Link.</li>
                <li>Paste the link on SaveClip and hit Get video.</li>
              </ol>
            </div>

            <p className="text-xs text-dim/40 pt-2">
              Only public videos can be downloaded. Private or friends-only videos are not accessible.
            </p>
          </article>
        </div>
      </main>

      <footer className="relative z-10 px-6 py-10 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-fg font-bold text-sm tracking-tight">
            save<span className="text-accent">clip</span>
          </Link>
          <p className="text-xs text-dim/40">Free video downloader</p>
        </div>
      </footer>
    </div>
  );
}
