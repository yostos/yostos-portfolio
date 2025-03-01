"use client";

import WorkGrid from "@/components/WorkGrid";

export default function Works() {
  return (
    <main className="min-h-screen py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Works</h1>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            お客様のビジネス課題を解決するために手がけた実績の一部をご紹介します。
            各プロジェクトは、戦略立案から設計、実装まで一貫して携わっています。
          </p>
        </div>

        {/* WorkGridコンポーネントを使用 - 全ての作品を表示 */}
        <WorkGrid />
      </div>
    </main>
  );
}
