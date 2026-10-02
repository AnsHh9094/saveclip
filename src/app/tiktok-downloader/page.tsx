import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TikTok Video Downloader — Save TikTok Without Watermark | SaveClip",
  description:
    "Download TikTok videos without watermark for free. Save TikTok videos in HD. No signup required.",
  keywords: [
    "tiktok downloader",
    "tiktok video download",
    "save tiktok",
    "tiktok without watermark",
    "download tiktok",
  ],
};

export default function TikTokDownloader() {
  return (
    <div className="grain min-h-screen flex flex-col">
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full"
          style={{
            width: "clamp(500px, 60vw, 900px)",
            height: "clamp(500px, 60vw, 900px)",
            background: "radial-gradient(circle, rgba(37,244,238,0.09) 0%, rgba(37,244,238,0.03) 35%, transparent 65%)",
            top: "-20%", left: "10%",
            animation: "float 22s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "clamp(400px, 50vw, 700px)",
            height: "clamp(400px, 50vw, 700px)",
            background: "radial-gradient(circle, rgba(254,44,85,0.06) 0%, transparent 60%)",
            bottom: "5%", right: "-5%",
            animation: "float 26s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "100%", height: "50%",
            background: "radial-gradient(ellipse at 50% 0%, rgba(37,244,238,0.03) 0%, transparent 55%)",
            top: "0", left: "0",
          }}
        />
      </div>

      <nav className="relative z-10 px-6 py-5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-fg font-bold text-lg tracking-tight">
            save<span className="text-accent">clip</span>
          </Link>
          <span className="text-xs text-dim">TikTok</span>
        </div>
      </nav>

      <main className="relative z-10 flex-1 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-xl mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-tight mb-5">
              TikTok Video Downloader
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Download TikTok videos without watermark. Free, fast, HD quality.
            </p>
            <Link
              href="/"
              className="btn-glow inline-flex items-center gap-2.5 px-7 py-4 bg-accent hover:bg-accent-hover text-[#050508] font-semibold rounded-xl transition-all text-base"
            >
              Download TikTok video
            </Link>
          </div>

          <article className="space-y-5">
            <div className="glass gradient-border rounded-2xl p-6">
              <h2 className="text-sm font-semibold text-fg mb-4">How to download</h2>
              <ol className="space-y-3 text-sm text-dim leading-relaxed list-decimal list-inside">
                <li>Open TikTok and find the video you want to save.</li>
                <li>Tap Share, then Copy Link.</li>
                <li>Paste the link on SaveClip and download.</li>
              </ol>
            </div>

            <p className="text-xs text-dim/40 pt-2">
              Videos are saved without the TikTok watermark whenever possible.
            </p>
          </article>
        </div>
      </main>

      <footer className="relative z-10 px-6 py-10 border-t border-white/[0.05]">
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
