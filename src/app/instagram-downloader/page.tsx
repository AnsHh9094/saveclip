import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instagram Video Downloader — Save Reels & Stories in HD | SaveClip",
  description:
    "Download Instagram Reels, Stories, IGTV and post videos for free. High quality, no watermark, no signup.",
  keywords: [
    "instagram video downloader",
    "instagram reels download",
    "save instagram video",
    "download reels",
    "instagram story downloader",
  ],
};

export default function InstagramDownloader() {
  return (
    <div className="grain min-h-screen flex flex-col">
      {/* Ambient glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full"
          style={{
            width: "500px", height: "500px",
            background: "radial-gradient(circle, rgba(225,48,108,0.08) 0%, transparent 65%)",
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
          <span className="text-xs text-dim">Instagram</span>
        </div>
      </nav>

      <main className="relative z-10 flex-1 px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-xl mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
              Instagram Video Downloader
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Save Reels, Stories, IGTV and post videos in full quality. No watermark.
            </p>
            <Link
              href="/"
              className="btn-glow inline-flex items-center gap-2.5 px-7 py-4 bg-accent hover:bg-accent-hover text-[#06060a] font-semibold rounded-xl transition-colors text-base"
            >
              Download Instagram video
            </Link>
          </div>

          <article className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h2 className="text-sm font-semibold text-fg mb-4">How to download</h2>
              <ol className="space-y-3 text-sm text-dim leading-relaxed list-decimal list-inside">
                <li>Open Instagram and find the video, Reel, or Story you want to save.</li>
                <li>Tap the three dots and select Copy Link.</li>
                <li>Paste the link on SaveClip and hit Get video.</li>
              </ol>
            </div>

            <div className="glass rounded-2xl p-6">
              <h2 className="text-sm font-semibold text-fg mb-4">What you can download</h2>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-dim leading-relaxed">
                <p>Reels — short-form videos, full quality, no watermark</p>
                <p>Stories — from public accounts only</p>
                <p>IGTV and long-form videos</p>
                <p>Carousel video posts</p>
              </div>
            </div>

            <p className="text-xs text-dim/40 pt-2">
              Only public content can be downloaded. Private accounts require the owner&apos;s permission.
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
