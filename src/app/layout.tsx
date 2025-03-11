import type { Metadata } from "next";
import { M_PLUS_1_Code } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { getBerkeleyMonoFontStyles } from "./fonts";
import "./globals.css";

const mPlus1Code = M_PLUS_1_Code({
  subsets: ["latin"],
  weight: ["300", "700"], // 必要な太さを指定
  variable: "--font-mplus-1-code",
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
    <html lang="ja" data-theme="portfolioTheme" className={mPlus1Code.variable}>
      <head>
        <meta charSet="UTF-8"></meta>
        <style
          dangerouslySetInnerHTML={{ __html: getBerkeleyMonoFontStyles() }}
        />
      </head>
      <body
        className={`flex flex-col min-h-screen bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 `}
        style={{
          fontFamily: "BerkeleyMono, var(--font-mplus-1-code), sans-serif",
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
