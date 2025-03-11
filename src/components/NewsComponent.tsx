import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
// ニュースデータの配列
const news = [
  {
    date: "2999-03-01",
    title: "このサイトについて",
    description:
      "暇つぶしに作ったWeb技術とデザイン検証のための練習用ポートフォリオです。そのため、予告なく停止、閉鎖されることがあります。",
    link: "/",
  },
  {
    date: "2025-03-05",
    title: "新記事",
    description: "記事「Webデザイナーの忍者的生き残り戦術」を書いてみました。",
    link: "/posts",
  },
  {
    date: "2025-03-04",
    title: "ニュース追加",
    description:
      "退校手続きが終わりひと段落ついたので、ニュース機能をつけてみました。",
    link: "/news",
  },
  {
    date: "2025-03-04",
    title: "英語表記",
    description:
      "知り合いから「日本語で読めねぇ」と言われ、国際化対応するほどでもないのでビジーになりましたが英語を併記しました。",
    link: "/news",
  },
  {
    date: "2025-03-02",
    title: "The Worst Birthday",
    description: "最悪に気分が悪い誕生日だったので、Worksに音楽を追加した。",
    link: "/works",
  },
  // 他のニュースアイテム...
];

// ニュースアイテムの型定義
export type NewsItem = {
  date: string;
  title: string;
  description: string;
  link?: string; // リンクはオプショナル
};

type NewsComponentProps = {
  // items: NewsItem[];
  limit?: number; // 表示上限（デフォルト値は下で設定）
};

const NewsComponent: React.FC<NewsComponentProps> = ({ limit = 5 }) => {
  // 日付のフォーマット関数
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${monthNames[date.getMonth()]} ${date.getDate().toString().padStart(2, "0")}, ${date.getFullYear()}`;
  };

  // 表示上限に基づいてアイテムを制限
  const displayItems = news.slice(0, limit);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
        <FontAwesomeIcon
          icon={faNewspaper}
          className="text-3xl font-regular text-neutral-700 dark:text-neutral-200 mr-2"
        />
        News
      </h2>

      {displayItems.length === 0 ? (
        <p className="text-neutral-500 dark:text-neutral-400 text-center py-4">
          ニュースはありません
        </p>
      ) : (
        <div className="border-t border-neutral-200 dark:border-neutral-700">
          {displayItems.map((item, index) => (
            <div
              key={index}
              className="py-1 border-b border-neutral-100 dark:border-neutral-800 last:border-b-0"
            >
              <div className="grid grid-cols-16 gap-2 items-center">
                {/* 日付: 固定幅 */}
                <div className="col-span-2 text-sm text-neutral-500 dark:text-neutral-400">
                  {formatDate(item.date)}
                </div>

                {/* タイトル: 固定幅、内部で折り返し */}
                <div className="col-span-4">
                  {item.link ? (
                    <Link
                      href={item.link}
                      className="text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-primary dark:hover:text-primary-light transition-colors break-words"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <div className="text-sm font-medium text-neutral-800 dark:text-neutral-200 break-words">
                      {item.title}
                    </div>
                  )}
                </div>

                {/* 説明: 残りのスペースを使用、内部で折り返し */}
                <p className="col-span-10 text-sm text-neutral-600 dark:text-neutral-300 break-words">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {news.length > limit && (
        <div className="mt-6 text-center">
          <Link
            href="/news"
            className="inline-block px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            すべてのニュースを見る
          </Link>
        </div>
      )}
    </div>
  );
};

export default NewsComponent;
