import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instagram Video Downloader — Save Reels, Stories & IGTV | SaveClip",
  description:
    "Download Instagram Reels, Stories, IGTV videos and photos for free. No signup required. Paste the link and save in HD quality.",
  keywords: [
    "instagram video downloader",
    "instagram reels download",
    "save instagram video",
    "download reels",
    "instagram story downloader",
    "igtv downloader",
  ],
};

export default function InstagramDownloader() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="px-4 py-4 border-b border-border">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-accent">SaveClip</Link>
          <span className="text-xs text-muted font-mono">instagram downloader</span>
        </div>
      </nav>

      <main className="flex-1 px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-4xl mb-4 block">📸</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Instagram Video Downloader
            </h1>
            <p className="text-muted text-lg">
              Download Reels, Stories, IGTV and photo posts from Instagram. Free and unlimited.
            </p>
          </div>

          <div className="text-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-2xl transition-colors text-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Instagram Video
            </Link>
          </div>

          <article className="prose-sm text-muted space-y-6">
            <section>
              <h2 className="text-xl font-bold text-fg mb-3">How to download Instagram videos</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Open Instagram and find the video, Reel, or Story you want to save.</li>
                <li>Tap the three dots (⋯) and select &quot;Copy Link&quot;.</li>
                <li>Come back here, paste the link, and hit Download.</li>
                <li>Choose your preferred quality and save the file.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-fg mb-3">What can you download?</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong className="text-fg">Reels</strong> — Short-form videos up to 90 seconds</li>
                <li><strong className="text-fg">Stories</strong> — 24-hour disappearing content (public accounts only)</li>
                <li><strong className="text-fg">IGTV</strong> — Long-form videos</li>
                <li><strong className="text-fg">Posts</strong> — Photo and video posts from public profiles</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-fg mb-3">Frequently asked questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-fg">Can I download private Instagram videos?</h3>
                  <p>No. Only videos from public accounts can be downloaded. This is to respect user privacy.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-fg">Is it free?</h3>
                  <p>Yes, SaveClip is completely free. No signup, no watermarks, no limits.</p>
                </div>
              </div>
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
