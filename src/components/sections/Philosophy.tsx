"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

const values = [
  {
    num: "VALUE 01",
    title: "地域起点で\n考える",
    body: "東京の成功事例を輸入するのではなく、西尾というリアルな現場で磨いたモデルを持って動く。",
    accent: "#050466",
  },
  {
    num: "VALUE 02",
    title: "問いから\n始める",
    body: "ソリューションを先に売らない。「なぜこの仕事が存在するか」という問いから始め、根本から変える。",
    accent: "#00c47a",
  },
  {
    num: "VALUE 03",
    title: "循環で\n設計する",
    body: "3事業は単体で完結しない。DX→BPO→地域プロデュースがひとつの循環として機能するよう設計する。",
    accent: "#050466",
  },
  {
    num: "VALUE 04",
    title: "伴走し\n続ける",
    body: "「数字が改善しました」で終わらない。変化の手触りをお客様と一緒に体感し、次の一手まで一緒に考える。",
    accent: "#00c47a",
  },
];

const businesses = [
  {
    tag: "DX支援",
    title: "「やらされ仕事」\nを消す技術",
    contribution: "仕事の質を変える",
    accent: "#050466",
  },
  {
    tag: "BPO",
    title: "地域の人が\n活きる仕組み",
    contribution: "地域の働き方を変える",
    accent: "#00c47a",
  },
  {
    tag: "地域プロデュース",
    title: "挑戦できる\nまちをつくる",
    contribution: "地域の可能性を変える",
    accent: "#050466",
  },
];

export function Philosophy() {
  const valuesRef = useRef(null);
  const flowRef = useRef(null);
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.15 });
  const isFlowInView = useInView(flowRef, { once: true, amount: 0.2 });

  return (
    <section className="relative overflow-hidden bg-[#faf9f7] py-32 md:py-44">

      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-[-3vw] top-1/2 -translate-y-1/2 font-black text-black/[0.022] select-none leading-none hidden md:block"
          style={{ fontSize: "clamp(240px, 38vw, 580px)" }}
        >
          使
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-20">

        {/* ヘッダー */}
        <FadeIn>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-green mb-6">
            Our Philosophy
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2
            className="font-black text-navy leading-[1.12] tracking-[-0.04em] mb-16 md:mb-24"
            style={{ fontSize: "clamp(28px, 4.2vw, 58px)" }}
          >
            ミッション・バリュー・ビジョン、<br />三位一体で。
          </h2>
        </FadeIn>

        {/* Mission Hero Card */}
        <FadeIn delay={0.14}>
          <div className="relative overflow-hidden rounded-2xl bg-[#050466] px-10 py-14 md:px-20 md:py-20 mb-20 md:mb-28">
            {/* 背景グロー */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] pointer-events-none"
              style={{
                width: "60%",
                height: "60%",
                background: "radial-gradient(circle, rgba(0,196,122,0.18) 0%, transparent 70%)",
              }}
            />
            {/* ウォーターマーク */}
            <div
              className="absolute right-[-2vw] bottom-[-4vw] font-black text-white/[0.04] select-none leading-none pointer-events-none"
              style={{ fontSize: "clamp(160px, 22vw, 340px)" }}
            >
              M
            </div>

            <p className="relative z-10 text-[10px] font-bold tracking-[0.3em] uppercase text-green/80 mb-6">
              Mission
            </p>
            <h3
              className="relative z-10 font-black text-white leading-[1.18] tracking-[-0.04em] mb-8"
              style={{ fontSize: "clamp(28px, 4.5vw, 64px)" }}
            >
              やらされ仕事のない世界を、<br />
              <span className="text-green">地域から。</span>
            </h3>
            <p className="relative z-10 text-[15px] md:text-[16px] text-white/48 leading-[2.0] max-w-[48ch]">
              繰り返し作業に時間を奪われず、地域の人が本来やりたい仕事に向き合い、
              挑戦できる社会をつくる。これが、すべての出発点です。
            </p>
          </div>
        </FadeIn>

        {/* Values：4カード */}
        <div className="mb-20 md:mb-28">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-black/[0.07]" />
            <p className="text-[11px] font-bold tracking-[0.18em] text-black/30 whitespace-nowrap">
              Values — このミッションを支える4つの価値観
            </p>
            <div className="flex-1 h-px bg-black/[0.07]" />
          </div>

          <div ref={valuesRef} className="grid sm:grid-cols-2 gap-px bg-black/[0.06]">
            {values.map((v, i) => (
              <motion.div
                key={v.num}
                className="relative bg-[#faf9f7] p-8 md:p-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 + i * 0.09 }}
              >
                <p className="text-[10px] font-bold tracking-[0.2em] mb-4" style={{ color: v.accent }}>
                  {v.num}
                </p>
                <h3
                  className="font-black text-navy tracking-[-0.03em] leading-[1.3] mb-4 whitespace-pre-line"
                  style={{ fontSize: "clamp(18px, 2vw, 24px)" }}
                >
                  {v.title}
                </h3>
                <p className="text-[13px] text-black/48 leading-[1.95]">{v.body}</p>
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px]"
                  style={{ backgroundColor: v.accent }}
                  initial={{ width: 0 }}
                  animate={isValuesInView ? { width: "28px" } : { width: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.09 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission → 3事業 フロー図 */}
        <div className="mb-20 md:mb-28">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-black/[0.07]" />
            <p className="text-[11px] font-bold tracking-[0.18em] text-black/30 whitespace-nowrap">
              このミッションから、3事業が生まれた
            </p>
            <div className="flex-1 h-px bg-black/[0.07]" />
          </div>

          <div ref={flowRef} className="flex flex-col items-center">
            {/* Center Node */}
            <motion.div
              className="w-full max-w-[420px] rounded-xl bg-[#050466] px-8 py-7 text-center mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isFlowInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-green/70 mb-3">Mission</p>
              <p className="text-[15px] font-black text-white leading-[1.5] tracking-[-0.02em]">
                やらされ仕事のない世界を、地域から。
              </p>
            </motion.div>

            {/* コネクター縦線 */}
            <motion.div
              className="w-px h-8 bg-navy/20"
              initial={{ scaleY: 0 }}
              animate={isFlowInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              style={{ transformOrigin: "top" }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-navy/30"
              initial={{ opacity: 0 }}
              animate={isFlowInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.35 }}
            />

            {/* 3事業カード */}
            <div className="w-full grid md:grid-cols-3 gap-4 mt-4">
              {businesses.map((b, i) => (
                <motion.div
                  key={b.tag}
                  className="rounded-xl border border-black/[0.07] bg-white px-6 py-7 flex flex-col"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isFlowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.1 }}
                >
                  <span
                    className="inline-block text-[10px] font-bold tracking-[0.14em] px-2.5 py-1 rounded-full mb-4 self-start"
                    style={{ backgroundColor: b.accent + "18", color: b.accent }}
                  >
                    {b.tag}
                  </span>
                  <h4
                    className="font-black text-navy leading-[1.35] tracking-[-0.02em] mb-4 whitespace-pre-line"
                    style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}
                  >
                    {b.title}
                  </h4>
                  <p className="text-[12px] text-black/38 mt-auto flex items-center gap-1.5">
                    <span style={{ color: b.accent }}>→</span>
                    {b.contribution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Block */}
        <FadeIn delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl bg-[#06091a] px-10 py-14 md:px-20 md:py-18 flex flex-col md:flex-row md:items-center md:gap-16">
            {/* ウォーターマーク */}
            <div
              className="absolute right-[-1vw] bottom-[-2vw] font-black text-white/[0.03] select-none leading-none pointer-events-none"
              style={{ fontSize: "clamp(140px, 18vw, 280px)" }}
            >
              V
            </div>

            <div className="relative z-10 flex-1">
              <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-green/70 mb-5">
                3事業の循環が生み出す未来 · Vision
              </p>
              <h3
                className="font-black text-white leading-[1.2] tracking-[-0.04em] mb-6"
                style={{ fontSize: "clamp(22px, 3.2vw, 44px)" }}
              >
                好きなまちで、好きな仕事をして、<br />
                <span className="text-green">挑戦できる日本を。</span>
              </h3>
              <p className="text-[14px] text-white/38 leading-[2.0] max-w-[40ch]">
                やらされ仕事がなくなった先にある世界——<br />
                それが、Moments Shareが向かっている場所です。
              </p>
            </div>

            <div className="relative z-10 mt-10 md:mt-0 flex-shrink-0">
              <Link
                href="/mvv"
                className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.12em] text-green border border-green/30 rounded-full px-6 py-3 hover:bg-green/10 transition-colors"
              >
                MVV 詳細を見る
                <span>→</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
