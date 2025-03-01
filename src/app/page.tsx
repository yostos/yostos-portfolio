"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faPenRuler,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import Cube3D from "../components/Cube3D";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4">
      {/* 3Dキューブセクション */}
      <div className="w-full max-w-4xl mx-auto py-8">
        <Cube3D />
      </div>
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">Inagales.com</h1>
        <p className="text-lg mb-2 text-neutral-400">
          Digital Craftsman ( Architect / Developer / Designer )
        </p>

        <div className="my-6 py-3 border-y border-neutral-content/10">
          <p className="text-xl font-medium mb-1 text-neutral-content/70">
            Design the Era. Code with Vera.
          </p>
          <p className="text-sm text-neutral-content/50">
            時代をデザインし、真実をコードする
          </p>
        </div>
        <div className="text-xs text-neutral-content/40 mt-8 max-w-lg mx-auto">
          <p>
            ※ 人生で最も無駄な時間を少しでも有意義にするため、
            <br />
            Web技術とデザイン手法の検証を目的として
            片手間で作った練習用ポートフォリオです。
          </p>
        </div>
      </div>
      {/* サービスセクション */}
      <div className="w-full bg-neutral-100 dark:bg-neutral-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Service</h2>
          <p className="text-center mb-12">
            <Link href="/about">理念</Link>
            の則り、次のようなサービスを提供いたします。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Produce */}
            <div className="text-center">
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
            </div>

            {/* Design */}
            <div className="text-center">
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
            </div>

            {/* Coding */}
            <div className="text-center">
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
