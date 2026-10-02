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
    <div className="min-h-screen flex flex-col">
      <nav className="px-6 py-5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-fg font-bold text-lg tracking-tight">
            save<span className="text-accent">clip</span>
          </Link>
          <span className="text-xs text-dim">Twitter / X</span>
        </div>
      </nav>

      <main className="flex-1 px-6 py-16">
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
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-accent hover:bg-accent-hover text-bg font-semibold rounded-xl transition-colors text-base"
            >
              Download Twitter video
            </Link>
          </div>

          <article className="border-t border-border pt-10 space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-fg uppercase tracking-wider mb-4">How to download</h2>
              <ol className="space-y-3 text-sm text-dim leading-relaxed list-decimal list-inside">
                <li>Find the tweet with the video you want to save.</li>
                <li>Tap Share, then Copy Link — or copy the URL from your browser.</li>
                <li>Paste it on SaveClip and hit Get video.</li>
              </ol>
            </div>

            <p className="text-xs text-dim border-t border-border pt-6">
              Works with both twitter.com and x.com links. GIFs are downloaded as MP4 files.
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
