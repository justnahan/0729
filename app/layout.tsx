import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavBar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "現在買 NowBuy | 鄰里互助，便民生活",
  description: "現在買 NowBuy 是一個專為社區居民設計的即時代買與共享購物平台，連結鄰里關係，創造便利生活。",
  keywords: "代買服務, 社區購物, 鄰里互助, 共享經濟, 便民服務",
  openGraph: {
    title: "現在買 NowBuy | 鄰里互助，便民生活",
    description: "專為社區居民設計的即時代買與共享購物平台",
    type: "website",
    locale: "zh_TW",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
