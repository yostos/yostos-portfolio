"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faPenRuler,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const Cube3D = dynamic(() => import("@/components/Cube3D"), { ssr: false });
import WorkGrid from "@/components/WorkGrid";
import NewsComponent from "@/components/NewsComponent";

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

      <NewsComponent limit={5} />

      {/* サービスセクション */}
      <section className="w-full py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Service</h2>
          <div className="text-center mb-8">
            <p lang="ja">
              <Link
                className="inline-block px-2 py-0.5 bg-neutral-200 dark:bg-neutral-700 rounded hover:bg-neutral-300 dark:hover:bg-neutral-600"
                href="/about"
              >
                理念
              </Link>
              の則り、次のようなサービスを提供いたします。
            </p>
            <p lang="en">
              In accordance with border-neutral-content
              <Link
                className="inline-block px-2 py-0.5 bg-neutral-200 dark:bg-neutral-700 rounded hover:bg-neutral-300 dark:hover:bg-neutral-600"
                href="/about"
              >
                philosophy
              </Link>
              , we provide the following services:
            </p>
          </div>

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
              <div className="text-base text-left">
                <p lang="ja">
                  大規模システム開発の経験を活かし現状の課題や要望から要件を明確に定義し効果的なプランを策定します。
                  実際のデザイン作業に入る前に、ビジネスの課題との対応により要件を整理することで、費用対効果の高いWebサイトの構築を可能にします。
                  見栄えの良いサイトを作って終わりでなく、御社のビジネスへの貢献を第一に考えさせていただきます。
                </p>
                <p lang="en">
                  We leverage our experience in large-scale system development
                  to clearly define requirements based on current challenges and
                  needs, formulating effective plans. Before proceeding with the
                  actual design work, we organize the requirements by aligning
                  them with business challenges, enabling the creation of a
                  cost-effective website. Rather than simply delivering a
                  visually appealing site, we prioritize contributing to your
                  business success.
                </p>
              </div>
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
              <div className="text-base text-left">
                <p lang="ja">
                  要件に基づいたプランに沿ってデザインを行います。
                  デザインは単なる見た目の美しさではなく、ユーザーが迷うことなく目的を達成できることを最優先に考えます。
                  最新技術から最適な技術を選択しつつ、アクセシビリティを重視した使いやすさと機能性を両立させたデザインを提供します。
                  システムの開発だけでなく、ライフサイクル全体をデザインいたします。
                </p>
                <p lang="en">
                  We design in accordance with plans based on requirements.
                  Design is not just about visual appeal; our top priority is
                  ensuring that users can achieve their goals without confusion.
                  While selecting the most suitable technologies from the latest
                  advancements, we focus on accessibility to provide a design
                  that balances usability and functionality. We design not only
                  system development but also the entire lifecycle.
                </p>
              </div>
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
              <div className="text-base text-left">
                <p lang="ja">
                  Webデザインはコードなしには成立しません。
                  コードが書けないデザイナーは、単なるデザイナーでありWebデザイナーではありません。
                  私は要件を具現化するスマートなコードを重視し、シンプルで美しくメンテナンスしやすい実装を心がけています。
                  デザインツールに依存せず、長期的に維持できる持続可能なコードを構築し、
                  柔軟性と拡張性のあるWebサイトを提供します。
                </p>
                <p lang="en">
                  Web design cannot exist without code. A designer who cannot
                  write code is merely a designer, not a web designer. I
                  prioritize writing smart code that brings requirements to
                  life, ensuring a simple, elegant, and maintainable
                  implementation. Rather than relying solely on design tools, I
                  build sustainable code that can be maintained long-term,
                  delivering flexible and scalable websites.
                </p>
              </div>
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
