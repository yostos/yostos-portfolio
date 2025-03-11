import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { getBerkeleyMonoFontStyles } from "./fonts";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // 必要な太さを指定
  variable: "--font-noto-sans-jp",
  preload: true,
});

export const metadata: Metadata = {
  title: "Inagales.com - Portofolio",
  description: "Personal portfolio of Inagales.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tinylyticsId = process.env.NEXT_PUBLIC_TINYLYTICS_ID;
  return (
    <html lang="ja" data-theme="portfolioTheme" className={notoSansJP.variable}>
      <head>
        <meta charSet="UTF-8"></meta>
        <style
          dangerouslySetInnerHTML={{ __html: getBerkeleyMonoFontStyles() }}
        />
      </head>
      <body
        className={`flex flex-col min-h-screen`}
        style={{
          fontFamily: "BerkeleyMono, var(--font-noto-sans-jp), sans-serif",
        }}
      >
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
        {tinylyticsId && (
          <Script
            src={`https://tinylytics.app/embed/${tinylyticsId}.js?countries`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
