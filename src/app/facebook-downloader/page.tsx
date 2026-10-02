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
    <div className="min-h-screen flex flex-col">
      <nav className="px-6 py-5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-fg font-bold text-lg tracking-tight">
            save<span className="text-accent">clip</span>
          </Link>
          <span className="text-xs text-dim">Facebook</span>
        </div>
      </nav>

      <main className="flex-1 px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-xl mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
              Facebook Video Downloader
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Download videos from Facebook in HD. Public videos, Reels and more.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-accent hover:bg-accent-hover text-bg font-semibold rounded-xl transition-colors text-base"
            >
              Download Facebook video
            </Link>
          </div>

          <article className="border-t border-border pt-10 space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-fg uppercase tracking-wider mb-4">How to download</h2>
              <ol className="space-y-3 text-sm text-dim leading-relaxed list-decimal list-inside">
                <li>Find the video on Facebook you want to download.</li>
                <li>Click the three dots (⋯), then Copy Link.</li>
                <li>Paste the link on SaveClip and hit Get video.</li>
              </ol>
            </div>

            <p className="text-xs text-dim border-t border-border pt-6">
              Only public videos can be downloaded. Private or friends-only videos are not accessible.
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
