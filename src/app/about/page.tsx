"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Cube3D from "../../components/Cube3D";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  // ページロード後3秒後に表示
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500); // 遅延
    return () => clearTimeout(timer);
  }, []);

  // リスト全体のアニメーション
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // 1つずつ遅れて降ってくる
      },
    },
  };

  // 各リストアイテムのアニメーション
  const itemVariants = {
    hidden: { opacity: 0, y: "100vh" }, // 画面上から落とす
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut", // 自然な落ち方
      },
    },
  };
  const principles = [
    {
      title: "1. Value First（価値の創出が最優先）",
      text: "私たちは、デザインとテクノロジーを通じて、お客様に本質的な価値を提供することを最優先に考えます。美しいデザインだけではなく、課題を解決し、ビジネスに貢献することを常に意識します。",
    },
    {
      title: "2. Future-Driven Innovation（未来志向の革新）",
      text: "私たちは、単なる現在のニーズに応えるのではなく、未来を見据えたソリューションを提供します。時代の変化を先取りし、長期的な成長を支えるデザインとテクノロジーを創り出します。",
    },
    {
      title: "3. Clarity in Design（シンプルで伝わるデザイン）",
      text: "複雑なものをシンプルに、直感的に伝えることが、最高のデザインだと考えます。「誰でも使いやすく、伝わりやすく、美しい」そんなデジタル体験を設計します。",
    },
    {
      title: "4. Technology with Purpose（目的を持ったテクノロジー）",
      text: "最新技術を使うことが目的ではなく、本当に意味のあるソリューションを構築することが重要です。無駄に複雑な技術を選ぶのではなく、お客様にとって最適な技術を選び、実装することを徹底します。",
    },
    {
      title:
        "5. Partnership, Not Just Service（サービスではなく、パートナーとして）",
      text: "私たちは、お客様に本質的な価値を提供するのではなく、共に未来を創るパートナーです。ビジネスの成長を支援し、長期的な信頼関係を築くことを目指します。",
    },
    {
      title: "6. Code with Vera（真実をコードする）",
      text: "「Code with Vera（真実をコードする）」を体現するため、プロダクトの設計、コード、UXデザインすべてにおいて誠実さと品質を追求します。お客様の信頼に応え、持続可能なデジタル資産を提供します。",
    },
    {
      title: "7. Compliance is a Standard（コンプライアンスは最低基準）",
      text: "私たちは、法規制やデータプライバシーを遵守することを最低限の基準とし、さらに高い倫理観を持ち、透明性のあるデザインとシステムを構築します。",
    },
    {
      title: "8. Security by Design（設計段階からのセキュリティ）",
      text: "お客様のデータとシステムを守ることは、私たちの責任です。後付けではなく、設計段階からセキュリティを考慮し、信頼できるプロダクトを作ることを徹底します。",
    },
    {
      title: "9. Collaborative Excellence（共創こそが最強の力）",
      text: "優れたプロダクトは、個人ではなく、チームの力から生まれます。デザイナー、エンジニア、クライアントが連携し、最良のアウトプットを生み出す文化を築きます。",
    },
    {
      title: "10. Challenge the Ordinary（常識を疑い、最高を目指す）",
      text: "「当たり前」の方法にとらわれず、常に最適解を追求し、創造する姿勢を持ち続けます。デザインとコードで、時代を前進させる存在であることを誇りに思います。",
    },
  ];

  return (
    <main className="min-h-screen bg-base-100 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">Our Principles</h1>

        {/* ヒーローセクション */}
        <div className="max-w-6xl mx-auto py-16 flex items-center space-x-6">
          <div className="w-3/4 h-3/4">
            <Cube3D />
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              &quot; Design the Era. Code with Vera. &ldquo;
            </h1>
            <p className="text-lg mb-8">
              時代をデザインし真実をコードするため、私たちは次の理念に則り常に行動します。
            </p>
          </div>
        </div>

        {/* 各原則セクション */}
        <div className="space-y-8 mt-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            className="space-y-8 mt-8"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-l-4 border-primary pl-4 py-2 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg transform scale-95 hover:scale-100 transition-all duration-700"
              >
                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {principle.title}
                </h2>
                <p className="text-gray-800 dark:text-gray-200">
                  {principle.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
