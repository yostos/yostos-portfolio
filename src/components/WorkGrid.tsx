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
        "当サイトは最新のWeb技術スタックを駆使して構築されています。\
         フロントエンドにはNext.jsとTailwind CSSをベースに、\
         daisyUIコンポーネントライブラリを組み合わせることで、\
         モダンでレスポンシブなデザインを実現しています。\
         インフラストラクチャとしてAWS(Amazon Amplify)を採用し、\
         スケーラブルかつ高速なパフォーマンスを確保。\
         さらに、Amazon SESを統合した安全で信頼性の高い問い合わせフォームを実装しています。",
      imageUrl: "/images/works/portfolio.webp",
      link: "https://portfolio.inagales.com",
    },
    {
      id: "music",
      title: "Music Works",
      description: "音楽関連の作品です。",
      imageUrl: "/images/works/music.webp",
      link: "/works/music",
    },
    {
      id: "new-year",
      title: "New Year Greeting Site",
      description:
        "このサイトはJavascriptで動的な動きを取り込んだサイト例です。\
         特殊なフォントと効果の組み合わせで、80年代風のレトロなゲーム画面を意識したデザインとしています。\
         また、使用している楽曲、グラフィックの制作も行っています。",
      imageUrl: "/images/works/new-year.webp",
      link: "https://www.inagales.com/new-years-greetings/",
    },
    {
      id: "blog-site",
      title: "Blog Site",
      description:
        "静的サイトジェネレータ Hugoを使った個人ブログサイトのデザイン例です。\
         同じ記事についてトップ画面ではサマリー、アーカイブではタイトルのみなど\
         来訪者に読みやすいサイトを心がけています。\
         多くの企業で使用されているMovable Type/WordPressなどのCMSのデザインも対応いたします。",
      imageUrl: "/images/works/blog-site.webp",
      link: "https://www.inagales.com/blog/",
    },
    {
      id: "project-5",
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
