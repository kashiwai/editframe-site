import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EditFrame — The AI Studio for Social Media",
  description: "Create. Go Viral. Sell. SNSで売れるコンテンツを、AIが量産する。UGC動画・台本・投稿まで全自動。",
  openGraph: {
    title: "EditFrame — The AI Studio for Social Media",
    description: "Create. Go Viral. Sell.",
    siteName: "EditFrame",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col bg-[#050508] text-white">{children}</body>
    </html>
  );
}
