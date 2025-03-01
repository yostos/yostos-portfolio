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

interface WorkGridProps {
  limit?: number; //表示する作品数を制御するプロパティ
}

export default function WorkGrid({ limit }: WorkGridProps) {
  //作品データ
  const works: WorkItem[] = [
    {
      id: "portfolio",
      title: "Inagales.com",
      description:
        "本サイトです。Next.js + Tailwind CSS + daisyUIでデザインし、Amazon Amplify上で稼働しAmazon SESを利用した問い合わせフォームを実装しています。",
      imageUrl: "/images/works/portfolio.webp",
      link: "https://portfolio.inagales.com",
    },
    {
      id: "new-year",
      title: "New Year Greeting Site",
      description:
        "このサイトはJavascriptで動的な動きを取り込んだサイト例です。使用している楽曲、グラフィックの制作も行っています。",
      imageUrl: "/images/works/new-year.webp",
      link: "https://www.inagales.com/new-years-greetings/",
    },
    {
      id: "blog-site",
      title: "Blog Site",
      description:
        "静的サイトジェネレータ Hugoを使ったブログサイトのデザイン例です。Movable Type/WordPressなどのCMSのデザインも対応可能です。",
      imageUrl: "/images/works/blog-site.webp",
      link: "https://www.inagales.com/blog/",
    },
    {
      id: "project-4",
      title: "Project Title",
      description: "プロジェクトの詳細説明文をここに入れます。",
      imageUrl: "/images/works/placeholder.webp",
      link: "https://example.com/project3",
    },
    // 必要に応じて作品を追加
  ];

  const displayWorks = limit ? works.slice(0, limit) : works;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayWorks.map((work) => (
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
  );
}
