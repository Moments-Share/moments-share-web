"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

const timeline = [
  {
    year: "2019–",
    title: "シンガポール、ベンチャーの現場",
    body: "営業・CS・マーケティング・マネジメントを掛け持ちしながら、社員3名→10名の成長を走り抜けた。目の前のお客様に十分な時間を使えないもどかしさ。部下が深夜まで転記作業をしている背中。「この仕事、本当に人がやる必要あるのか？」——その問いが、すべての出発点になった。",
    accent: false,
  },
  {
    year: "2022",
    title: "「帰りたい」と、気づいた日",
    body: "外に出たからこそ、やっぱり地元が好きだと気づいた。シンガポールで見えた「やらされ仕事をなくす」という答えを、そのまま西尾に持ち帰ることにした。",
    accent: false,
  },
  {
    year: "2023",
    title: "西尾で見た、同じ景色",
    body: "Uターン後に地元企業と話すと、同じ問いがあった。「人手が足りない」「でも採れない」「社員は雑務で手一杯」。さらに、若い人は「地元で働きたいけど仕事がない」と言っていた。2つをつなぐ設計が必要だと確信した。",
    accent: false,
  },
  {
    year: "2024",
    title: "Moments Share 創業",
    body: "DXで繰り返し仕事を消し、生まれた仕事を地域の人につなぎ、地元で挑戦できる循環を育てる——3事業をひとつのストーリーとして設計し、会社を立ち上げた。やらされ仕事のない世界を、地域から実現する。",
    accent: true,
  },
];

const whyNishioTags = ["地元への愛着", "企業との信頼", "地域規模で実証できる", "変化をともに感じられる"];

export function Founder() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.0]);

  return (
    <section ref={ref} id="about" className="py-section bg-[#f7f5ef] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16">

        <FadeIn>
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">
            Why We Started
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2
            className="font-black text-ink leading-[1.25] tracking-[-0.03em] mb-16"
            style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}
          >
            「なんで、こんな仕事を<br />続けているんだろう。」
          </h2>
        </FadeIn>

        {/* 2カラム：左写真 / 右ナラティブ */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* 左：ポートレート */}
          <FadeIn delay={0.1}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2px]">
              <motion.div className="absolute inset-0" style={{ scale: photoScale }}>
                <div className="w-full h-full bg-[#e8e4dd] flex flex-col items-center justify-center gap-5">
                  <div className="w-24 h-24 rounded-full bg-[#c8c2b8] flex items-center justify-center">
                    <span className="text-[28px] font-black text-white/80 tracking-[-0.02em]">RN</span>
                  </div>
                  <div className="text-center">
                    <p className="text-ink/50 text-[13px] font-bold tracking-[0.08em]">中根 隆</p>
                    <p className="text-ink/30 text-[11px] tracking-[0.16em] uppercase mt-1">写真準備中</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* 右：ストーリーナラティブ */}
          <div className="md:pt-4">
            {/* 冒頭引用 */}
            <FadeIn delay={0.14}>
              <blockquote className="border-l-[3px] border-green pl-7 py-2 mb-10">
                <p className="text-[15px] md:text-[16px] text-ink leading-[1.9]">
                  「多いときに50社を担当しながら新規営業も。夜眠れない日々の中で気づいた——<br />
                  <strong className="font-bold">多くの企業が、人にしかできない仕事ではなく、人がやらなくてもいい仕事に時間を使っている。</strong>」
                </p>
              </blockquote>
            </FadeIn>

            {/* 年表タイムライン */}
            <div className="space-y-7">
              {timeline.map((item, i) => (
                <FadeIn key={item.year} delay={0.18 + i * 0.08}>
                  <div className={`flex gap-6 ${item.accent ? "bg-navy/[0.04] rounded-xl p-5 -mx-1" : ""}`}>
                    <div className="flex-shrink-0 w-[52px] pt-0.5">
                      <span className={`text-[11px] font-black tracking-[0.1em] ${item.accent ? "text-green" : "text-ink/30"}`}>
                        {item.year}
                      </span>
                    </div>
                    <div>
                      <h3 className={`text-[14px] font-black tracking-[-0.01em] mb-2 ${item.accent ? "text-ink" : "text-ink/80"}`}>
                        {item.title}
                      </h3>
                      <p className={`text-[14px] leading-[1.9] ${item.accent ? "text-ink/80" : "text-muted"}`}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* なぜ西尾なのか：インラインブロック（ネイビー背景） */}
        <FadeIn delay={0.12}>
          <div className="mt-20 bg-navy text-white rounded-2xl px-10 py-12 md:px-16 md:py-14">
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-3">Why Nishio?</p>
            <h3
              className="font-black leading-[1.3] tracking-[-0.02em] mb-6 text-white"
              style={{ fontSize: "clamp(22px, 2.6vw, 36px)" }}
            >
              なぜ、西尾なのか。
            </h3>
            <p className="text-[15px] md:text-[16px] text-white/70 leading-[2.0] mb-8">
              人口9万人の地方都市。全国的に有名ではない、ふつうのまち。<br />
              でも、ここには何かある——その感覚はずっと持ち続けていた。<br />
              地元のつながりがある。企業との信頼が築ける。
              <strong className="text-white font-bold">変化を一緒に体感できる規模感がある。</strong><br />
              「西尾でできれば、どこでもできる」——そう思って、ここを起点に選んだ。
            </p>
            <div className="flex flex-wrap gap-2">
              {whyNishioTags.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] font-bold border border-green/50 text-green px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* プロフィール + リンク */}
        <FadeIn delay={0.1}>
          <div className="mt-12 pt-10 border-t border-black/[0.08] flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-1">
              <p className="text-[14px] font-bold text-ink">中根 隆（Ryu Nakane）</p>
              <p className="text-[13px] text-muted mt-1">Moments Share合同会社 代表社員</p>
              <p className="text-[12px] text-muted/70 mt-2 leading-[1.8]">
                シンガポールのベンチャー企業に新卒入社 →<br />
                営業・CS・マーケティング・マネジメントを経験 →<br />
                独立・西尾市へUターン → Moments Share合同会社設立
              </p>
            </div>
            <a
              href="/about"
              className="flex-shrink-0 inline-flex items-center text-[13px] font-bold text-green border border-green rounded-full px-6 py-2.5 hover:bg-green hover:text-white transition-colors duration-200"
            >
              代表プロフィールを詳しく読む →
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
