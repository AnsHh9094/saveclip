import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube Video Downloader — Save Videos & Shorts in HD | SaveClip",
  description:
    "Download YouTube videos, Shorts, and music for free in HD, Full HD or 4K. No signup required. Paste the link and save.",
  keywords: [
    "youtube video downloader",
    "youtube shorts download",
    "download youtube video",
    "youtube mp4 download",
    "youtube to mp3",
    "save youtube video",
  ],
};

export default function YouTubeDownloader() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="px-4 py-4 border-b border-border">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-accent">SaveClip</Link>
          <span className="text-xs text-muted font-mono">youtube downloader</span>
        </div>
      </nav>

      <main className="flex-1 px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-4xl mb-4 block">▶️</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              YouTube Video Downloader
            </h1>
            <p className="text-muted text-lg">
              Download YouTube videos and Shorts in HD quality. MP4, MP3, and more formats.
            </p>
          </div>

          <div className="text-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-2xl transition-colors text-lg"
            >
              Download YouTube Video
            </Link>
          </div>

          <article className="prose-sm text-muted space-y-6">
            <section>
              <h2 className="text-xl font-bold text-fg mb-3">How to download YouTube videos</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Open YouTube and find the video you want to download.</li>
                <li>Copy the URL from the address bar or share menu.</li>
                <li>Paste the link on SaveClip and click Download.</li>
                <li>Select the quality (1080p, 720p, 480p, or MP3) and save.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-fg mb-3">Supported formats</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong className="text-fg">MP4</strong> — Video with audio, up to 4K</li>
                <li><strong className="text-fg">MP3</strong> — Audio only extraction</li>
                <li><strong className="text-fg">Shorts</strong> — Vertical short-form videos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-fg mb-3">Tips</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>For the fastest download, use 720p — good quality, smaller file size.</li>
                <li>YouTube Shorts work just like regular videos — paste the link and go.</li>
                <li>You can also add &quot;clip&quot; before youtube.com in any URL (e.g., clipyoutube.com/watch?v=...) to come here directly.</li>
              </ul>
            </section>
          </article>
        </div>
      </main>

      <footer className="py-6 px-4 border-t border-border text-center text-xs text-muted">
        <Link href="/" className="hover:text-accent">SaveClip</Link> &middot; Free video downloader
      </footer>
    </div>
  );
}
