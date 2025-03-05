import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
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
    <html lang="en" data-theme="portfolioTheme">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
        {tinylyticsId && (
          <Script
            src={`https://tinylytics.app/embed/${tinylyticsId}.js`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
