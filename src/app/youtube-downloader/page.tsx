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
    <div className="min-h-screen flex flex-col">
      <nav className="px-6 py-5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-fg font-bold text-lg tracking-tight">
            save<span className="text-accent">clip</span>
          </Link>
          <span className="text-xs text-dim">YouTube</span>
        </div>
      </nav>

      <main className="flex-1 px-6 py-16">
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
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-accent hover:bg-accent-hover text-bg font-semibold rounded-xl transition-colors text-base"
            >
              Download YouTube video
            </Link>
          </div>

          <article className="border-t border-border pt-10 space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-fg uppercase tracking-wider mb-4">How to download</h2>
              <ol className="space-y-3 text-sm text-dim leading-relaxed list-decimal list-inside">
                <li>Open YouTube and find the video you want to download.</li>
                <li>Copy the URL from the address bar or share menu.</li>
                <li>Paste it on SaveClip and pick your quality.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-fg uppercase tracking-wider mb-4">Supported formats</h2>
              <ul className="space-y-2 text-sm text-dim leading-relaxed">
                <li>MP4 — video with audio, up to 4K resolution</li>
                <li>MP3 — audio-only extraction</li>
                <li>Shorts — vertical short-form videos work the same way</li>
              </ul>
            </div>

            <p className="text-xs text-dim border-t border-border pt-6">
              For fastest downloads, 720p gives the best balance of quality and file size.
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
