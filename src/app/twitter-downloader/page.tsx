import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Twitter / X Video Downloader — Save Tweets & Videos | SaveClip",
  description:
    "Download videos from Twitter (X) for free. Save tweet videos, GIFs, and media in HD. No signup required.",
  keywords: ["twitter video downloader", "x video downloader", "download twitter video", "save tweet video", "twitter gif download"],
};

export default function TwitterDownloader() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="px-4 py-4 border-b border-border">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-accent">SaveClip</Link>
          <span className="text-xs text-muted font-mono">twitter downloader</span>
        </div>
      </nav>
      <main className="flex-1 px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-4xl mb-4 block">🐦</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Twitter / X Video Downloader</h1>
          <p className="text-muted text-lg mb-8">Download videos and GIFs from Twitter (X) in one click. Free and fast.</p>
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-2xl transition-colors text-lg">
            Download Twitter Video
          </Link>
          <article className="mt-12 text-left text-muted space-y-4">
            <h2 className="text-xl font-bold text-fg">How to download Twitter videos</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Find the tweet with the video you want to save.</li>
              <li>Tap Share → Copy Link (or copy the URL from your browser).</li>
              <li>Paste it on SaveClip and hit Download.</li>
            </ol>
            <p>Works with both twitter.com and x.com links. GIFs are downloaded as MP4 files.</p>
          </article>
        </div>
      </main>
      <footer className="py-6 px-4 border-t border-border text-center text-xs text-muted">
        <Link href="/" className="hover:text-accent">SaveClip</Link> &middot; Free video downloader
      </footer>
    </div>
  );
}
