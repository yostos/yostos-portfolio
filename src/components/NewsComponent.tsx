import React from "react";
import Link from "next/link";

// ニュースアイテムの型定義
export type NewsItem = {
  date: string;
  title: string;
  description: string;
  link?: string; // リンクはオプショナル
};

type NewsComponentProps = {
  items: NewsItem[];
  limit?: number; // 表示上限（デフォルト値は下で設定）
};

const NewsComponent: React.FC<NewsComponentProps> = ({ items, limit = 5 }) => {
  // 日付のフォーマット関数
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  // 表示上限に基づいてアイテムを制限
  const displayItems = items.slice(0, limit);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
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

      {items.length > limit && (
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
