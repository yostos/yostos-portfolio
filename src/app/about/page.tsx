"use client";

export default function About() {
  return (
    <main className="min-h-screen bg-base-100 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">Our Principles</h1>

        <p className="text-lg mb-8 text-center">
          私たちは
          <span className="font-bold">「Design the Era. Code with Vera.」</span>
          （時代をデザインし、真実をコードする）を実現するため、次のような理念に則り、常に行動します。
        </p>

        <div className="space-y-8">
          {/* 各原則 */}
          <div className="border-l-4 border-primary pl-4 py-2">
            <h2 className="text-xl font-bold mb-2">
              1. Value First（価値の創出が最優先）
            </h2>
            <p>
              私たちは、デザインとテクノロジーを通じて、お客様に本質的な価値を
              提供することを最優先に考えます。美しいデザインだけではなく、課題
              を解決し、ビジネスに貢献することを常に意識します。
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h2 className="text-xl font-bold mb-2">
              2. Future-Driven Innovation（未来志向の革新）
            </h2>
            <p>
              私たちは、単なる現在のニーズに応えるのではなく、未来を見据えたソリューション
              を提供します。時代の変化を先取りし、長期的な成長を支えるデザインとテクノロジー
              を創り出します。
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h2 className="text-xl font-bold mb-2">
              3. Clarity in Design（シンプルで伝わるデザイン）
            </h2>
            <p>
              複雑なものをシンプルに、直感的に伝えることが、最高のデザイン
              だと考えます。「誰でも使いやすく、伝わりやすく、美しい」
              そんなデジタル体験を設計します。
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h2 className="text-xl font-bold mb-2">
              4. Technology with Purpose（目的を持ったテクノロジー）
            </h2>
            <p>
              最新技術を使うことが目的ではなく、本当に意味のあるソリューション
              を構築することが重要です。無駄に複雑な技術を選ぶのではなく、お客
              様にとって最適な技術を選び、実装することを徹底します。
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h2 className="text-xl font-bold mb-2">
              5. Partnership, Not Just
              Service（サービスではなく、パートナーとして）
            </h2>
            <p>
              私たちは、お客様に本質的な価値を
              サービスを提供するのではなく、共に未来を創るパートナー
              です。ビジネスの成長を支援し、長期的な信頼関係を築くことを目指します。
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h2 className="text-xl font-bold mb-2">
              6. Code with Vera（真実をコードする）
            </h2>
            <p>
              「Code with Vera（真実をコードする）」を体現するため、プロダクト
              の設計、コード、UXデザインすべてにおいて誠実さと品質を追求しま
              す。お客様の信頼に応え、持続可能なデジタル資産 を提供します。
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h2 className="text-xl font-bold mb-2">
              7. Compliance is a Standard（コンプライアンスは最低基準）
            </h2>
            <p>
              私たちは、法規制やデータプライバシーを遵守することを最低限の基準
              とし、さらに高い倫理観を持ち、透明性のあるデザインとシステムを構
              築します。
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h2 className="text-xl font-bold mb-2">
              8. Security by Design（設計段階からのセキュリティ）
            </h2>
            <p>
              お客様のデータとシステムを守ることは、私たちの責任です。後付けで
              はなく、設計段階からセキュリティを考慮し、信頼できるプロダクトを
              作ることを徹底します。
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h2 className="text-xl font-bold mb-2">
              9. Collaborative Excellence（共創こそが最強の力）
            </h2>
            <p>
              優れたプロダクトは、個人ではなく、チームの力から生まれます。デザ
              イナー、エンジニア、クライアントが連携し、最良のアウトプットを生
              み出す文化を築きます。
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4 py-2">
            <h2 className="text-xl font-bold mb-2">
              10. Challenge the Ordinary（常識を疑い、最高を目指す）
            </h2>
            <p>
              「当たり前」の方法にとらわれず、常に最適解を追求し、創造する姿勢
              を持ち続けます。デザインとコードで、時代を前進させる存在であるこ
              とを誇りに思う。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
