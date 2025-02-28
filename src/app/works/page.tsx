"use client";

import Image from "next/image";
import Link from "next/link";

interface WorkItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const works: WorkItem[] = [
  {
    id: "new-year",
    title: "New Year Greeting Site",
    description: "このサイトはJavascriptで動的な動きを取り込んだサイト例です",
    imageUrl: "/images/works/new-year.webp",
    link: "https://www.inagales.com/new-years-greetings/",
  },
  {
    id: "blog-site",
    title: "Blog Site",
    description: "静的サイトジェネレータを使ったブログサイトのデザイン例です。",
    imageUrl: "/images/works/blog-site.webp",
    link: "https://www.inagales.com/blog/",
  },
  {
    id: "project-3",
    title: "Project Title",
    description: "プロジェクトの詳細説明文をここに入れます。",
    imageUrl: "/images/works/placeholder.webp",
    link: "https://example.com/project3",
  },
  // 必要に応じて作品を追加
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work.id} className="flex flex-col">
              <Link href={work.link} className="group">
                <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
                  <Image
                    src={work.imageUrl}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">{work.title}</h2>
              </Link>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
