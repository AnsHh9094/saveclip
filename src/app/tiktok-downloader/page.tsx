import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TikTok Video Downloader — Save TikTok Without Watermark | SaveClip",
  description: "Download TikTok videos without watermark for free. Save TikTok videos in HD. No signup required.",
  keywords: ["tiktok downloader", "tiktok video download", "save tiktok", "tiktok without watermark", "download tiktok"],
};

export default function TikTokDownloader() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="px-4 py-4 border-b border-border">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-accent">SaveClip</Link>
          <span className="text-xs text-muted font-mono">tiktok downloader</span>
        </div>
      </nav>
      <main className="flex-1 px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-4xl mb-4 block">🎵</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">TikTok Video Downloader</h1>
          <p className="text-muted text-lg mb-8">Download TikTok videos without watermark. Free, fast, HD quality.</p>
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-2xl transition-colors text-lg">
            Download TikTok Video
          </Link>
          <article className="mt-12 text-left text-muted space-y-4">
            <h2 className="text-xl font-bold text-fg">How to download TikTok videos</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open TikTok and find the video you want to save.</li>
              <li>Tap Share → Copy Link.</li>
              <li>Paste the link on SaveClip and download.</li>
            </ol>
          </article>
        </div>
      </main>
      <footer className="py-6 px-4 border-t border-border text-center text-xs text-muted">
        <Link href="/" className="hover:text-accent">SaveClip</Link> &middot; Free video downloader
      </footer>
    </div>
  );
}
