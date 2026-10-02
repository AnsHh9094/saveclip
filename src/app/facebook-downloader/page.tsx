import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Facebook Video Downloader — Save FB Videos in HD | SaveClip",
  description: "Download Facebook videos for free in HD quality. Save public FB videos, Reels and stories. No signup required.",
  keywords: ["facebook video downloader", "fb video download", "save facebook video", "download fb reels"],
};

export default function FacebookDownloader() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="px-4 py-4 border-b border-border">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-accent">SaveClip</Link>
          <span className="text-xs text-muted font-mono">facebook downloader</span>
        </div>
      </nav>
      <main className="flex-1 px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-4xl mb-4 block">📘</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Facebook Video Downloader</h1>
          <p className="text-muted text-lg mb-8">Download videos from Facebook in HD. Public videos, Reels and more.</p>
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-2xl transition-colors text-lg">
            Download Facebook Video
          </Link>
          <article className="mt-12 text-left text-muted space-y-4">
            <h2 className="text-xl font-bold text-fg">How to download Facebook videos</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Find the video on Facebook you want to download.</li>
              <li>Click the three dots (⋯) → Copy Link.</li>
              <li>Paste the link here and click Download.</li>
            </ol>
            <p>Only public videos can be downloaded. Private or friends-only videos are not accessible.</p>
          </article>
        </div>
      </main>
      <footer className="py-6 px-4 border-t border-border text-center text-xs text-muted">
        <Link href="/" className="hover:text-accent">SaveClip</Link> &middot; Free video downloader
      </footer>
    </div>
  );
}
