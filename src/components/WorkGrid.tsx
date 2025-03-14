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
        Next.js/Tailwind CSS\,\
        daisyUI/Threeを組み合わせることで、\
        モダンでレスポンシブなデザインを実現しています。\
        スケーラブルかつ高速なAmazon Amplify(AWS)を採用し、\
        Amazon SESを統合した信頼性の高いフォームを実装しています。\
        /\
        This site is built using the latest web technology stack.\
        By combining Next.js\, Tailwind CSS\, daisyUI\, and Three.js\,\
        it achieves a modern and responsive design.\
        Utilizing scalable and high-speed Amazon Amplify (AWS)\,\
        it implements a reliable form integrated with Amazon SES.",
      imageUrl: "/images/works/portfolio.webp",
      link: "https://portfolio.inagales.com",
    },
    {
      id: "music",
      title: "Music Works",
      description:
        "ギター演奏と打ち込みを駆使し、幅広い音楽を制作。\
        ビートルズ、80年代Fusion/Rockからアニメ劇中歌まで、多彩なジャンルに対応可能です。\
        \
        Utilizing guitar performance and programming, I create a wide range of music.\
        From The Beatles and '80s Fusion/Rock to anime soundtrack songs, I can accommodate various genres.",
      imageUrl: "/images/works/music.webp",
      link: "/works/music",
    },
    {
      id: "anochan",
      title: "Chatbot あのちゃん",
      description:
        "OpenAIのChatCompletion APIを利用してStreamItで作ったあのちゃんのように話す(?)チャットボット。\
         OpenAIが話題になり始めた2023年6月くらいに遊びで作ったもの。\
         あのちゃんのテレビ発言やツイートを少しだけ食わしただけなので、あのちゃんっぽいかどうかは疑問ですが。\
        \
A chatbot created with StreamIt that talks like Ano-chan (?) using OpenAI's ChatCompletion API.\
I made this for fun around June 2023 when OpenAI was becoming a hot topic.\
Since I only fed it a small amount of Ano-chan's TV statements and tweets, I'm not sure if it actually resembles Ano-chan or not.\
      ",
      imageUrl: "/images/works/ano.webp",
      link: "https://yostos-chatbot-ano-srcapp-1amc4o.streamlit.app/",
    },
    {
      id: "new-year",
      title: "New Year Greeting Site",
      description:
        "このサイトはJavascriptで動的な動きを取り込んだサイト例です。\
        特殊なフォントと効果の組み合わせで、80年代風のレトロなゲーム画面を意識したデザインとしています。\
        また、使用している楽曲、グラフィックの制作も行っています。\
        \
        This site is an example of incorporating dynamic motion using JavaScript.\
        By combining unique fonts and effects, it is designed with a retro 80s game screen aesthetic in mind.\
        Additionally, I also create the music and graphics used in this site.",
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
