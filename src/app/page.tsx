"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faPenRuler,
  faCode,
  faComment,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import Cube3D from "@/components/Cube3D";
import WorkGrid from "@/components/WorkGrid";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4">
      {/* 3Dキューブセクション */}
      <div className="w-full max-w-4xl mx-auto py-8">
        <Cube3D />
      </div>
      <h1 className="text-5xl font-bold mb-4">Inagales.com</h1>
      <div className="text-center max-w-2xl">
        <p className="text-base mb-2 text-neutral-400">
          Digital Craftsman ( Architect / Developer / Designer )
        </p>

        <section className="my-6 py-3 border-y border-neutral-content/10">
          <p className="text-xl font-medium mb-1 text-neutral-content/70">
            Design the Era. Code with Vera.
          </p>
          <p className="text-sm text-neutral-content/50">
            時代をデザインし、真実をコードする
          </p>
        </section>

        <section className="text-xs text-neutral-content/40 mt-8 max-w-lg mx-auto">
          <p>
            <FontAwesomeIcon
              icon={faComment}
              className="text-base text-neutral-700 dark:text0neutral-200 mr-2"
            />
            人生で最も無駄な時間を少しでも有意義にするため、
            Web技術とデザイン手法の検証を目的として
            片手間で作った練習用ポートフォリオです。
          </p>
          <p>
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-base text-neutral-700 dark:text-neutral-200 mr-2"
            />
            このサイトは予告なく、停止、閉鎖されることがあります。
          </p>
        </section>
      </div>
      {/* サービスセクション */}
      <section className="w-full bg-neutral-100 dark:bg-neutral-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Service</h2>
          <p className="text-center mb-12">
            <Link href="/about">理念</Link>
            の則り、次のようなサービスを提供いたします。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Produce */}
            <article className="text-center">
              <div className="inline-block bg-neutral-200 dark:bg-neutral-700 rounded-full p-6 mb-4">
                <FontAwesomeIcon
                  icon={faCompass}
                  className="text-4xl text-neutral-700 dark:text-neutral-200"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Produce</h3>
              <p className="text-sm text-left">
                大規模システム開発の経験を活かし現状の課題や要望を丁寧にヒアリングした上で、
                それらを解決するための要件を明確に定義し、効果的なプランを策定します。
                実際のデザイン作業に入る前に、ビジネスの課題と関連付けて要件を整理することで、
                費用対効果の高いWebサイトの構築を可能にします。
                見栄えの良いサイトを作って終わりでなく、御社のビジネスへの貢献を第一に考えさせていただきます。
              </p>
            </article>

            {/* Design */}
            <article className="text-center">
              <div className="inline-block bg-neutral-200 dark:bg-neutral-700 rounded-full p-6 mb-4">
                <FontAwesomeIcon
                  icon={faPenRuler}
                  className="text-4xl text-neutral-700 dark:text-neutral-200"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Design</h3>
              <p className="text-sm text-left">
                要件に基づいたプランに沿ってデザインを行います。
                デザインは単なる見た目の美しさではなく、ユーザーが迷うことなく目的を達成できることを最優先に考えます。
                アクセシビリティを重視し、使いやすさと機能性を両立させたデザインを提供します。
                WordPress,
                MovableTypeなど代表的なCMSのテンプレート設計はもちろん、
                Hugo/Jekyll/Pelican/Zolaなどの静的サイトジェネレレータを使用したサイトのデザイン、
                基盤設計などお客様サイトのライフサイクル全体をデザインいたします。
              </p>
            </article>

            {/* Coding */}
            <article className="text-center">
              <div className="inline-block bg-neutral-200 dark:bg-neutral-700 rounded-full p-6 mb-4">
                <FontAwesomeIcon
                  icon={faCode}
                  className="text-4xl text-neutral-700 dark:text-neutral-200"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Coding</h3>
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
