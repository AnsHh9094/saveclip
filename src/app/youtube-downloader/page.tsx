import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube Video Downloader — Save Videos & Shorts in HD | SaveClip",
  description:
    "Download YouTube videos, Shorts, and music for free in HD, Full HD or 4K. No signup required.",
  keywords: [
    "youtube video downloader",
    "youtube shorts download",
    "download youtube video",
    "youtube mp4 download",
    "youtube to mp3",
  ],
};

export default function YouTubeDownloader() {
  return (
    <div className="grain min-h-screen flex flex-col">
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full"
          style={{
            width: "500px", height: "500px",
            background: "radial-gradient(circle, rgba(255,0,0,0.06) 0%, transparent 65%)",
            top: "-10%", left: "20%",
            animation: "float 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "400px", height: "400px",
            background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 65%)",
            bottom: "10%", right: "-5%",
            animation: "float 24s ease-in-out infinite reverse",
          }}
        />
      </div>

      <nav className="relative z-10 px-6 py-5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-fg font-bold text-lg tracking-tight">
            save<span className="text-accent">clip</span>
          </Link>
          <span className="text-xs text-dim">YouTube</span>
        </div>
      </nav>

      <main className="relative z-10 flex-1 px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-xl mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
              YouTube Video Downloader
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Download YouTube videos and Shorts in HD. MP4 and MP3 formats available.
            </p>
            <Link
              href="/"
              className="btn-glow inline-flex items-center gap-2.5 px-7 py-4 bg-accent hover:bg-accent-hover text-[#06060a] font-semibold rounded-xl transition-colors text-base"
            >
              Download YouTube video
            </Link>
          </div>

          <article className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h2 className="text-sm font-semibold text-fg mb-4">How to download</h2>
              <ol className="space-y-3 text-sm text-dim leading-relaxed list-decimal list-inside">
                <li>Open YouTube and find the video you want to download.</li>
                <li>Copy the URL from the address bar or share menu.</li>
                <li>Paste it on SaveClip and pick your quality.</li>
              </ol>
            </div>

            <div className="glass rounded-2xl p-6">
              <h2 className="text-sm font-semibold text-fg mb-4">Supported formats</h2>
              <div className="grid sm:grid-cols-3 gap-3 text-sm text-dim leading-relaxed">
                <p>MP4 — video with audio, up to 4K resolution</p>
                <p>MP3 — audio-only extraction</p>
                <p>Shorts — vertical short-form videos work the same way</p>
              </div>
            </div>

            <p className="text-xs text-dim/40 pt-2">
              For fastest downloads, 720p gives the best balance of quality and file size.
            </p>
          </article>
        </div>
      </main>

      <footer className="relative z-10 px-6 py-8 border-t border-white/[0.04]">
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
