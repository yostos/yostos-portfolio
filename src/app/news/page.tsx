"use client";

import NewsComponent from "@/components/NewsComponent";

export default function Home() {
  return (
    <main className="min-h-screen py-16 bg-base-100">
      <div className="container mx-auto px-4">
        {/*ニュースセクション */}
        <NewsComponent limit={100} />
      </div>
    </main>
  );
}
