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
    <div className="min-h-screen flex flex-col">
      <nav className="px-6 py-5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-fg font-bold text-lg tracking-tight">
            save<span className="text-accent">clip</span>
          </Link>
          <span className="text-xs text-dim">Instagram</span>
        </div>
      </nav>

      <main className="flex-1 px-6 py-16">
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
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-accent hover:bg-accent-hover text-bg font-semibold rounded-xl transition-colors text-base"
            >
              Download Instagram video
            </Link>
          </div>

          <article className="border-t border-border pt-10 space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-fg uppercase tracking-wider mb-4">How to download</h2>
              <ol className="space-y-3 text-sm text-dim leading-relaxed list-decimal list-inside">
                <li>Open Instagram and find the video, Reel, or Story you want to save.</li>
                <li>Tap the three dots (⋯) and select Copy Link.</li>
                <li>Paste the link on SaveClip and hit Get video.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-fg uppercase tracking-wider mb-4">What you can download</h2>
              <ul className="space-y-2 text-sm text-dim leading-relaxed">
                <li>Reels — short-form videos, full quality, no watermark</li>
                <li>Stories — from public accounts only</li>
                <li>IGTV and long-form videos</li>
                <li>Carousel video posts</li>
              </ul>
            </div>

            <p className="text-xs text-dim border-t border-border pt-6">
              Only public content can be downloaded. Private accounts require the owner&apos;s permission.
            </p>
          </article>
        </div>
      </main>

      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-fg font-bold text-sm tracking-tight">
            save<span className="text-accent">clip</span>
          </Link>
          <p className="text-xs text-dim">Free video downloader</p>
        </div>
      </footer>
    </div>
  );
}
