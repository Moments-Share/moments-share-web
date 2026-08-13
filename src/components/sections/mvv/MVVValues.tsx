"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

const values = [
  {
    num: "01",
    kanji: "余",
    en: "Make Room",
    title: "余白をつくる",
    body: "DXの目的は効率化ではなく、人の可能性を最大化すること。仕事の無駄を取り除き、本来やるべきことに時間とエネルギーを集中できる環境を追求します。",
    accent: "#0a088e",
  },
  {
    num: "02",
    kanji: "繋",
    en: "Bridge People",
    title: "人をつなぐ",
    body: "企業と地域、課題と解決者、挑戦者と支援者。孤立したものをつなぐことで、単体では生まれない価値が生まれると信じています。",
    accent: "#050466",
  },
  {
    num: "03",
    kanji: "挑",
    en: "Embrace Challenge",
    title: "挑戦を讃える",
    body: "失敗を恐れず動く人を全力で支えます。「挑戦しなかった後悔」より「挑戦した経験」を。正解のない問いに向き合う姿勢を、私たちも持ち続けます。",
    accent: "#00c47a",
  },
  {
    num: "04",
    kanji: "地",
    en: "Root Local",
    title: "地域から考える",
    body: "グローバルな視野を持ちながら、起点は常に西尾から。東京の成功事例をコピーするのではなく、この地で育った固有の解を探します。",
    accent: "#00c47a",
  },
];

export function MVVValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="relative overflow-hidden bg-[#faf9f7] py-section">

      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-[-2vw] top-[-2vw] font-black text-black/[0.022] select-none leading-none hidden md:block"
          style={{ fontSize: "clamp(280px, 44vw, 680px)" }}
        >
          誠
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-20">

        <FadeIn>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-green mb-6">
            03 · Values
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="text-[13px] font-bold tracking-[0.18em] text-black/25 mb-14">バリュー</p>
        </FadeIn>

        <FadeIn delay={0.12}>
          <h2
            className="font-black text-navy leading-[1.12] tracking-[-0.04em] mb-20"
            style={{ fontSize: "clamp(28px, 4.2vw, 58px)" }}
          >
            私たちが、<br />大切にしていること。
          </h2>
        </FadeIn>

        {/* Values グリッド */}
        <div ref={ref} className="grid md:grid-cols-2 gap-px bg-black/[0.06]">
          {values.map((v, i) => (
            <motion.div
              key={v.num}
              className="relative bg-[#faf9f7] p-10 md:p-14 overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.1 }}
            >
              {/* 背景漢字 */}
              <div
                className="absolute right-4 bottom-2 font-black select-none pointer-events-none leading-none"
                style={{ fontSize: "clamp(80px, 10vw, 140px)", color: v.accent, opacity: 0.06 }}
              >
                {v.kanji}
              </div>

              {/* 番号 + EN */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-black tracking-[0.2em]" style={{ color: v.accent }}>
                  {v.num}
                </span>
                <span className="h-px flex-1 bg-black/[0.07]" />
                <span className="text-[10px] font-bold tracking-[0.14em] text-black/25 uppercase">
                  {v.en}
                </span>
              </div>

              {/* タイトル */}
              <h3
                className="font-black text-navy tracking-[-0.03em] leading-[1.2] mb-6"
                style={{ fontSize: "clamp(22px, 2.4vw, 32px)" }}
              >
                {v.title}
              </h3>

              {/* 本文 */}
              <p className="text-[14px] text-ink/55 leading-[2.0] relative z-10">
                {v.body}
              </p>

              {/* アクセントライン */}
              <motion.div
                className="absolute bottom-0 left-0 h-[3px]"
                style={{ backgroundColor: v.accent }}
                initial={{ width: 0 }}
                animate={isInView ? { width: "32px" } : { width: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* 締めのコピー */}
        <FadeIn delay={0.3}>
          <div className="mt-24 pt-16 border-t border-black/[0.07]">
            <p
              className="font-black text-navy/65 leading-[1.45] tracking-[-0.025em]"
              style={{ fontSize: "clamp(20px, 2.8vw, 38px)" }}
            >
              余白をつくり、人をつなぎ、<br />
              <span className="text-navy">挑戦を循環させる。</span>
            </p>
            <p className="mt-4 text-[14px] text-ink/38 tracking-[0.04em]">Moments Share合同会社</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
