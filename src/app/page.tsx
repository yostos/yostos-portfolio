"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faPenRuler,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import Cube3D from "@/components/Cube3D";
import WorkGrid from "@/components/WorkGrid";
import NewsComponent from "@/components/NewsComponent";

// ニュースデータの配列
const news = [
  {
    date: "2025-03-04",
    title: "退校記念",
    description:
      "手続きが終わりひと段落ついたので、ニュース機能をつけてみました。",
    link: "/",
  },
  {
    date: "2025-03-02",
    title: "The Worst Birthday",
    description: "最悪に気分が悪い誕生日だったので、Worksに音楽を追加した。",
    link: "/",
  },
  {
    date: "2025-03-01",
    title: "注意！",
    description: "このサイトは予告なく停止、閉鎖されることがあります。",
    link: "/",
  },
  {
    date: "2025-03-01",
    title: "サイト目的",
    description:
      "当てにできない他人は無視して自己研鑽。Web技術とデザイン検証のための片手間の練習用ポートフォリオ。",
    link: "/",
  },
  // 他のニュースアイテム...
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4">
      {/* 3Dキューブセクション */}
      <div className="w-full max-w-4xl mx-auto py-4">
        <h1 aria-label="Inagales.com">
          <Cube3D
            text="Inagales.com"
            subtitle="Digital Craftsman ( Architect / Developer / Designer )"
          />
        </h1>
      </div>
      <div className="text-center max-w-2xl">
        <section className="my-3 py-2 border-y border-neutral-content/10">
          <p className="text-xl font-bold mb-1 text-neutral-content/70">
            Design the Era. Code with Vera.
          </p>
          <p className="text-sm text-neutral-content/50">
            時代をデザインし、真実をコードする
          </p>
        </section>
      </div>

      {/*ニュースセクション */}
      <NewsComponent items={news} limit={5} />

      {/* サービスセクション */}
      <section className="w-full bg-neutral-100 dark:bg-neutral-800 py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Service</h2>
          <p className="text-center mb-8">
            <Link
              className="inline-block px-2 py-0.5 bg-neutral-200 dark:bg-neutral-700 rounded hover:bg-neutral-300 dark:hover:bg-neutral-600"
              href="/about"
            >
              理念
            </Link>
            の則り、次のようなサービスを提供いたします。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Produce */}
            <article className="text-center">
              <div className="flex items-center mb-4">
                <div className="bg-neutral-200 dark:bg-neutral-700 rounded-full p-6 mr-4">
                  <FontAwesomeIcon
                    icon={faCompass}
                    className="text-4xl text-neutral-700 dark:text-neutral-200"
                  />
                </div>
                <h3 className="text-xl font-bold">Produce</h3>
              </div>
              <p className="text-sm text-left">
                大規模システム開発の経験を活かし現状の課題や要望から要件を明確に定義し効果的なプランを策定します。
                実際のデザイン作業に入る前に、ビジネスの課題との対応により要件を整理することで、費用対効果の高いWebサイトの構築を可能にします。
                見栄えの良いサイトを作って終わりでなく、御社のビジネスへの貢献を第一に考えさせていただきます。
              </p>
            </article>

            {/* Design */}
            <article className="text-center">
              <div className="flex items-center mb-4">
                <div className="bg-neutral-200 dark:bg-neutral-700 rounded-full p-6 mr-4">
                  <FontAwesomeIcon
                    icon={faPenRuler}
                    className="text-4xl text-neutral-700 dark:text-neutral-200"
                  />
                </div>
                <h3 className="text-xl font-bold">Design</h3>
              </div>
              <p className="text-sm text-left">
                要件に基づいたプランに沿ってデザインを行います。
                デザインは単なる見た目の美しさではなく、ユーザーが迷うことなく目的を達成できることを最優先に考えます。
                最新技術から最適な技術を選択しつつ、アクセシビリティを重視した使いやすさと機能性を両立させたデザインを提供します。
                システムの開発だけでなく、ライフサイクル全体をデザインいたします。
              </p>
            </article>

            {/* Coding */}
            <article className="text-center">
              <div className="flex items-center mb-4">
                <div className="bg-neutral-200 dark:bg-neutral-700 rounded-full p-6 mr-4">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="text-4xl text-neutral-700 dark:text-neutral-200"
                  />
                </div>
                <h3 className="text-xl font-bold">Coding</h3>
              </div>
              <p className="text-sm text-left">
                Webデザインはコードなしには成立しません。
                コードが書けないデザイナーは、単なるデザイナーでありWebデザイナーではありません。
                私は要件を具現化するスマートなコードを重視し、シンプルで美しくメンテナンスしやすい実装を心がけています。
                デザインツールに依存せず、長期的に維持できる持続可能なコードを構築し、
                柔軟性と拡張性のあるWebサイトを提供します。
              </p>
            </article>
          </div>
        </div>
      </section>

      {/*作品セクション*/}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Works
          </h2>
          <WorkGrid limit={3} />

          <div className="text-center mt-8">
            <Link href="/works" className="btn btn-primary">
              View All Works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
