import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Twitter / X Video Downloader — Save Tweets & Videos | SaveClip",
  description:
    "Download videos from Twitter (X) for free. Save tweet videos, GIFs, and media in HD. No signup required.",
  keywords: [
    "twitter video downloader",
    "x video downloader",
    "download twitter video",
    "save tweet video",
    "twitter gif download",
  ],
};

export default function TwitterDownloader() {
  return (
    <div className="grain min-h-screen flex flex-col">
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full"
          style={{
            width: "500px", height: "500px",
            background: "radial-gradient(circle, rgba(29,161,242,0.07) 0%, transparent 65%)",
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
          <span className="text-xs text-dim">Twitter / X</span>
        </div>
      </nav>

      <main className="relative z-10 flex-1 px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-xl mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
              Twitter / X Video Downloader
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Download videos and GIFs from Twitter (X) in one click.
            </p>
            <Link
              href="/"
              className="btn-glow inline-flex items-center gap-2.5 px-7 py-4 bg-accent hover:bg-accent-hover text-[#06060a] font-semibold rounded-xl transition-colors text-base"
            >
              Download Twitter video
            </Link>
          </div>

          <article className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h2 className="text-sm font-semibold text-fg mb-4">How to download</h2>
              <ol className="space-y-3 text-sm text-dim leading-relaxed list-decimal list-inside">
                <li>Find the tweet with the video you want to save.</li>
                <li>Tap Share, then Copy Link — or copy the URL from your browser.</li>
                <li>Paste it on SaveClip and hit Get video.</li>
              </ol>
            </div>

            <p className="text-xs text-dim/40 pt-2">
              Works with both twitter.com and x.com links. GIFs are downloaded as MP4 files.
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
