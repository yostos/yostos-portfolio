// pages/web-design-guide.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faCheck,
  faStar as fasStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsUp,
  faCircleQuestion,
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";

export default function WebDesignGuide() {
  // 星評価を表示するためのヘルパー関数
  const renderStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i < count ? fasStar : farStar}
          className={i < count ? "text-warning" : "text-gray-300"}
        />,
      );
    }
    return stars;
  };

  // 適合性評価を表示するためのヘルパー関数
  const renderSuitability = (mark: string) => {
    switch (mark) {
      case "◎":
        return (
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="text-success text-sm"
            title="最適"
          />
        );
      case "○":
        return (
          <FontAwesomeIcon
            icon={faCheck}
            className="text-info text-xs"
            title="適している"
          />
        );
      case "△":
        return (
          <FontAwesomeIcon
            icon={faCircleQuestion}
            className="text-warning text-xs"
            title="条件付き"
          />
        );
      case "✖️":
        return (
          <FontAwesomeIcon
            icon={faThumbsDown}
            className="text-error text-sm"
            title="不向き"
          />
        );
      default:
        return mark;
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <article>
        <h1 className="text-3xl font-bold mb-10 border-b-2 border-base-300 pb-4 w-full">
          Webデザイナーの忍者的生き残り戦術
        </h1>

        {/* 免責事項をカードとして表示 */}
        <div className="card bg-base-200 border-l-4 border-neutral shadow-sm mb-8">
          <div className="card-body p-4">
            <h2 className="card-title text-sm">免責事項</h2>
            <p className="text-xs">
              本記事は筆者の個人的な経験と業界観察に基づく考察であり、Webデザイン業界の包括的な実態調査や統計的分析に基づくものではありません。
              <br />
              必ずしも最新の業界を正しく捉えたものではない可能性があります。また、各読者のバックグランドや状況により適用性は異なる場合があります。
            </p>
          </div>
        </div>

        <section className="text-base">
          <h2 className="text-2xl font-bold mb-6 text-base-content">
            Webデザイナーの種別
          </h2>

          <p>
            私自身はITエンジニアまたはアーキテクトとしてWebデザイナーに接することが大半でした。
            多くのプロジェクトで協業しましたが、一言で「Webデザイナー」と称していても一様でなく以下のようなタイプに分類できるかなと思っています。
          </p>
          <p>
            スキルレベルをこれまでの観測を元に勝手に忍者的に解釈したものです。特定の職種を貶める意図はありません。
          </p>
          <div className="overflow-x-auto px-4 py-2">
            <table className="text-xs table w-full border-collapse">
              <thead>
                <tr className="bg-gray-500 text-gray-100 dark:bg-gray-700 dark:text-white">
                  <th className="w-16 whitespace-nowrap">レベル</th>
                  <th className="w-48 whitespace-nowrap">カテゴリ</th>
                  <th className="px-3">仕事内容（Webデザイナーの関与領域）</th>
                  <th className="w-64">代表的なツール・技術</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600">
                    特殊
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    グラフィック職人
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3">
                    審美眼やデッサン力、デザインセンスでイラスト、画像加工などで勝負する職人。基本的はHTML/CSSなども多少必要
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    <ul className="list-disc pl-5">
                      <li>Adobe Illustrator, Photoshop</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600">
                    一般人
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    ノーコード/ローコード職人
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3">
                    コーディングを必要としないタイプCMS機能を利用したサイト構築を支援する対応。専門家でない人がサイトを構築できることを目指したツールなので、これを職種にするのは愚か。
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    <ul className="list-disc pl-5">
                      <li>Webflow, Wix, Squarespace</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td
                    rowSpan={2}
                    className="border border-gray-300 dark:border-gray-600"
                  >
                    下忍
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    手打ちHTML職人
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3">
                    デザインカンプを作成し、HTML/CSSを手書きでコーディング。JSで簡単な動きをつける。お客様が自分で更新することは想定せず、都度修正対応し納品する。
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    <ul className="list-disc pl-5">
                      <li>
                        HTML, CSS, CSSフレームーワーク、JavaScript（jQuery）
                      </li>
                      <li>Adobe Illustrator, Photoshop, Figma</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600">
                    レガシーWebアプリUI職人
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3">
                    基本的は手打ちHTML職人。バックエンドについて行うならばデザイナーでなく、ITエンジニアとして設計・開発スキルが必要。大抵は別部隊でバックエンドは開発していて、前提を渡されて画面のHTMLだけを作る。
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    <ul className="list-disc pl-5">
                      <li>HTML, CSS, JavaScript（jQuery）</li>
                      <li>Adobe Illustrator, Photoshop, Figma</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td
                    rowSpan={2}
                    className="border border-gray-300 dark:border-gray-600"
                  >
                    中忍
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    CMS設定職人
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3">
                    手打ちHTML職人がCMS/SSGの設定方法を習得し、CMS/SSGでHTML/CSSに加えこれらのテンプレート機能の知識を習得してサイトテーマのデザインが可能となる。デザインカンプ作成後、それを具体化するテンプレートをコードできる。さらにCMS/SSGの環境設定、テーマのカスタマイズ、権限設定、本番設置、運用セットアップを行い、非技術者のお客様に引き継げる。
                    企業案件でSSGはほとんど外注されないので、基本的にはCMS、しかもほぼWordPress。
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    <ul className="list-disc pl-5">
                      <li>WordPress, MovableType, Drupal, Ghost（CMS）</li>
                      <li>Hugo, Jekyll, Gatsby（SSG）</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600">
                    EC特化職人
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3">
                    ECサイトのデザインを作成し、ShopifyやBASEのテンプレートをカスタマイズ。商品ページやカート画面のデザインを調整し、EC運営に必要なバナーや広告素材の制作も担当。
                    CMS職人のCMSがECサイトツールになったと思えば良い。SEOに関するノウハウも必要になってくる。
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    <ul className="list-disc pl-5">
                      <li>Shopify, BASE, Magento</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600">
                    上忍
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    フルスタックエンジニア
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3">
                    デザインシステムを構築し、UIコンポーネントの設計/実装。HTML/CSSの知識は必要だが、Nodeなどモダンな技術スタックを駆使し、フロントエンドからバックエンドまで統合してカバーできる開発力が必要。スタイリングに関してはTailwind,
                    CSS-in-JSなどのフレームワークとこれをさらに組み合わせたUIフレームワークもあるので、開発力があればある程度センスはカバーできる（？）。
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    <ul className="list-disc pl-5">
                      <li>
                        Next.js, Nuxt.js, Astro, Tailwind CSS, Figma, Storybook
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="text-base">
          <h2 className="text-2xl font-bold mt-8 mb-6 text-base-content">
            制作するWebサイトの種類
          </h2>
          <p>
            次に「Webデザイナー」が関わりそうな仕事のタイプを分離してみました。
            どうか動画や音楽配信サイトのようなものは、Webデザイナーとして出会う方は限られていると思いますので、割愛しています。
          </p>
          <div className="overflow-x-auto">
            <table className="text-xs table w-full border-collapse">
              <thead>
                <tr className="bg-gray-500 text-gray-100 dark:bg-gray-700 dark:text-white">
                  <th className="w-30 whitespace-nowrap px-2">カテゴリ</th>
                  <th className="w-80">目的</th>
                  <th className="">主な特徴</th>
                  <th className="w-80">代表的な例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600">
                    情報提供型サイト
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    企業・団体・組織の情報を発信し、閲覧者に知識や理解を提供する
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    静的なコンテンツが中心で、更新頻度は低め。
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    <ul className="list-disc pl-5">
                      <li>コーポレートサイト（企業・団体の公式サイト）</li>
                      <li>官公庁・行政サイト（自治体・公共機関）</li>
                      <li>学校・教育機関サイト（大学・専門学校）</li>
                      <li>医療機関サイト（病院・クリニック）</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600">
                    情報配信型サイト
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    記事・ニュース、企業ブログなどの情報を定期的に発信する。多くはひたすらアフィリエイト的な切り抜き記事を量産するタイプ。
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    更新頻度は高いが、Webデザインよりはコピーライター的な資質が必要。
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    <ul className="list-disc pl-5">
                      <li>ニュースサイト（新聞社・メディア）</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600">
                    商取引型サイト（Eコマース）
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    商品・サービスをオンライン上で販売する
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    決済機能、在庫管理、カート機能などとの連携が必要
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    <ul className="list-disc pl-5">
                      <li>
                        一般的なECサイト（アパレル、食品、雑貨などのオンラインショップ）
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600">
                    マーケティング・プロモーション型サイト
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    商品やサービスの認知向上、購買促進、リード獲得を目的とする。一般的にシンプルな構造で、短期間の運用が多い。
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    シンプルで少ないページの構成が多いがデザイン勝負。短期間の運用が多い。
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    <ul className="list-disc pl-5">
                      <li>ランディングページ（広告やキャンペーン向け）</li>
                      <li>ブランドサイト（商品・サービスの世界観を伝える）</li>
                      <li>キャンペーンサイト（期間限定イベント向け）</li>
                      <li>採用サイト（企業の求人特化ページ）</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600">
                    Webアプリ
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    ユーザーがサイト上で何らかのアクションを行うことを目的とする。
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    UI/UXデザインが重視されるが、フロントエンドだけでなくバックエンドの能力が必要なのでフルスタックエンジニアか、フロントとバックエンドの混成チームとなる。
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600">
                    <ul className="list-disc pl-5">
                      <li>
                        Webアプリ（予約システム、インタラクティブなWebコンテンツ）
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="text-base">
          <h2 className="text-2xl font-bold mt-8 mb-6 text-base-content">
            Webデザイン市場分析（Webサイトの種類 × Webデザイナータイプ）
          </h2>

          <p>
            これも勝手な分析です。需要の多さや成長性も根拠があるわけでなく、筆者のこれまでの経験からの肌感覚です。
          </p>
          <div className="overflow-x-auto">
            <table className="text-xs table w-full border-collapse">
              <thead>
                <tr className="bg-gray-500 text-gray-100 dark:bg-gray-700 dark:text-white">
                  <th className="sticky left-00">Webサイトの種類</th>
                  <th className="w-20">需要の多さ</th>
                  <th className="w-20">成長性</th>
                  <th className="w-20">グラフィック職人</th>
                  <th className="w-20">ノーコード/ローコード職人</th>
                  <th className="w-20">手打ちHTML職人</th>
                  <th className="w-20">レガシーWebアプリUI職人</th>
                  <th className="w-20">CMS設定職人</th>
                  <th className="w-20">EC特化職人</th>
                  <th className="w-20">フルスタックエンジニア</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="sticky left-0 bg-gray-100 dark:bg-gray-700 font-medium z-10 text-gray-800 dark:text-gray-200">
                    情報提供型サイト
                  </td>
                  <td className="whitespace-nowrap">{renderStars(3)}</td>
                  <td className="whitespace-nowrap">{renderStars(2)}</td>
                  <td className="text-center">{renderSuitability("△")}</td>
                  <td className="text-center">{renderSuitability("△")}</td>
                  <td className="text-center">{renderSuitability("○")}</td>
                  <td className="text-center">{renderSuitability("○")}</td>
                  <td className="text-center">{renderSuitability("○")}</td>
                  <td className="text-center">{renderSuitability("○")}</td>
                  <td className="text-center">{renderSuitability("◎")}</td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-gray-100 dark:bg-gray-700 font-medium z-10 text-gray-800 dark:text-gray-200">
                    コンテンツ配信型サイト
                  </td>
                  <td className="whitespace-nowrap">{renderStars(3)}</td>
                  <td className="whitespace-nowrap">{renderStars(4)}</td>
                  <td className="text-center">{renderSuitability("✖️")}</td>
                  <td className="text-center">{renderSuitability("△")}</td>
                  <td className="text-center">{renderSuitability("✖️")}</td>
                  <td className="text-center">{renderSuitability("✖️")}</td>
                  <td className="text-center">{renderSuitability("◎")}</td>
                  <td className="text-center">{renderSuitability("○")}</td>
                  <td className="text-center">{renderSuitability("◎")}</td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-gray-100 dark:bg-gray-700 font-medium z-10 text-gray-800 dark:text-gray-200">
                    商取引型サイト（Eコマース）
                  </td>
                  <td className="whitespace-nowrap">{renderStars(5)}</td>
                  <td className="whitespace-nowrap">{renderStars(5)}</td>
                  <td className="text-center">{renderSuitability("✖️")}</td>
                  <td className="text-center">{renderSuitability("△")}</td>
                  <td className="text-center">{renderSuitability("✖️")}</td>
                  <td className="text-center">{renderSuitability("✖️")}</td>
                  <td className="text-center">{renderSuitability("△")}</td>
                  <td className="text-center">{renderSuitability("◎")}</td>
                  <td className="text-center">{renderSuitability("◎")}</td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-gray-100 dark:bg-gray-700 font-medium z-10 text-gray-800 dark:text-gray-200">
                    マーケティング・プロモーション型サイト
                  </td>
                  <td className="whitespace-nowrap">{renderStars(5)}</td>
                  <td className="whitespace-nowrap">{renderStars(4)}</td>
                  <td className="text-center">{renderSuitability("◎")}</td>
                  <td className="text-center">{renderSuitability("✖️")}</td>
                  <td className="text-center">{renderSuitability("△")}</td>
                  <td className="text-center">{renderSuitability("△")}</td>
                  <td className="text-center">{renderSuitability("○")}</td>
                  <td className="text-center">{renderSuitability("△")}</td>
                  <td className="text-center">{renderSuitability("○")}</td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-gray-100 dark:bg-gray-700 font-medium z-10 text-gray-800 dark:text-gray-200">
                    Webアプリ
                  </td>
                  <td className="whitespace-nowrap">{renderStars(5)}</td>
                  <td className="whitespace-nowrap">{renderStars(5)}</td>
                  <td className="text-center">{renderSuitability("✖️")}</td>
                  <td className="text-center">{renderSuitability("✖️")}</td>
                  <td className="text-center">{renderSuitability("✖️")}</td>
                  <td className="text-center">{renderSuitability("△")}</td>
                  <td className="text-center">{renderSuitability("✖️")}</td>
                  <td className="text-center">{renderSuitability("✖️")}</td>
                  <td className="text-center">{renderSuitability("◎")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <section className="mt-4 mb-2">
            <p>
              <strong>グラフィックデザイナー</strong>はちょっと特殊です。
              WebというよりグラフィカルなデザインをWebに適用したり、Web内のグラフィカルなリソースを提供する職種です。
              領域は限られているように見えますが、単独でなければどの領域でもそれなりの需要があります。
              センスさえあれば成長が期待できる領域でも活躍し、Webに限定せず紙媒体などでも活躍できます。
              ただし、狭き門ですし、グラフィックのコンクールなどでそれなりの評価を得ることができるセンス、審美眼を持つ
              達人でないと悲惨です。
            </p>
          </section>
          <section className="my-4">
            <p>
              <strong>ノンコード/ローコード職人</strong>は論外です。
              Webデザイナーを含む非技術者が<strong>いなくても</strong>
              Webサイトを構築できるツールを前提にしているので、これを職種に選ぶ選択は愚かです。
            </p>
          </section>

          <section className="my-4">
            <p>
              <strong>手打ちHTML職人</strong>と
              <strong>レガシーWebアプリUI職人</strong>、いわゆる
              <strong>下忍</strong>ですが、
              非常に活躍できる領域が限られています。
              Illustratorでデザインカンプを書いてクライアントを交渉しながら、シコシコとHTML/CSSに書き起こして行くという1990年代的スタイルの
              Webデザイナーはほとんど見かけなくなりました。10年前ならコーポレートサイトをまだ持っていないという田舎の中小企業があった
              かもしれませんが、今はどうなのでしょう。
            </p>
          </section>

          <section className="my-4">
            <p>
              企業の多くがコーポレートサイトにCMSを利用しているので
              <strong>CMS設定職人</strong>は一定の需要があるでしょう。
              HTML/CSSだけでなく、CMSのテーマを開発、カスタマイズできる能力が必要なので、CMS独自のテンプレート機能の理解、
              CSSだけでなく、CSSプリコンパイラの使いこなしなどが必要です。
              また、多くのCMSはHTMLでなくMarkdown記法をサポートしているので、知らないと恥をかきます。
              CMSはWordPressが支配的ですが、クライアントがCMSツールに拘っているケースは多くないので、自身が隅から隅まで
              知って使いこなせるCMSを作ることが重要。SSGも知っていると良いですが、企業がSSGを外注することはまずないでしょう。
              成長領域で活躍できるかは、グラフィックデザイナーとしてのセンスが問われてきますが、競合相手が中忍、上忍になってくるので
              ブルーオーシャンではないです。先行きはそれほど明るくない。
            </p>
          </section>

          <section className="my-4">
            <p>
              <strong>EC特化職人</strong>
              についてはECサイトを構築するツールに長けていれば案件も多く単価も高いので、
              活躍できる場は多いと思います。ただし、企業のビジネスに直結する領域なので、クライアントとの契約も
              請負契約で瑕疵担保付きなどになってくるので、それなりの企業に所属して活動するというのが現実的でしょう。
              SEOやメールマーケティングなどのスキルやノウハウが必要になってきます。
            </p>
          </section>
          <section className="my-4">
            <p>
              <strong>フルスタックエンジニア</strong>
              は、その名の通り、デザインからフロントエンド、バックエンドまでWebサイトのすべてを開発できます。
              Next.jsなどのモダンな技術スタック、クラウドサービスを駆使し、コードベースでサイトを構築を行います。
              もはや「デザイナー」ではなく「エンジニア」。
            </p>
            <p>
              技術力があればCMS対応など造作もないが、今やCMSすら不要。コードベースで統一感のあるサイトとコンテンツを量産できる時代です。
              美的センスがなくても、モダンなUIフレームワークを使えば破綻しない、それなりにセンスの良いUI
              は作れます。
            </p>
            <p>コードは力なり、まさに上忍。</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-6 text-base-content">
              Conclusion
            </h2>
            <p>こう見ていくと、どこを目指すか明確です。</p>
            <p>
              HTML/CSSだけで、Webで飯が食えるとかお花畑な世界がどこかにあると良いのですが、残念ながらそれは茨の道です。
              生きてくだけならば、下忍のようにSIerやアフィリエイト業者のしたでHTMLを量産する仕事はしばらくあるかもしれません。
              こんなデザイナー・エンジニアはたくさんいます。下忍ですから。
            </p>
            <p>
              自由に仕事をするには、上忍になるに限ります。
              HTML/CSSなんて当たり前、CMSも対応でき、モダンな技術スタックやAI、サービスAPIの活用などどんどん技術領域を広げ、
              フォントやグラフィック、動画、音楽制作などもこなし、空撮もできる、そんなフルスタックエンジニアしか生き残れにない世界です。
            </p>
            <p className="my-4">
              こう書くと身も蓋もありませんが・・
              <span className="text-lg font-bold my-8">世界は残酷です</span>。
            </p>
          </section>
        </section>
      </article>
    </main>
  );
}
