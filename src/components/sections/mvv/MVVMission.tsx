"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

export function MVVMission() {
  const ref = useRef(null);
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#f7f5ef]" style={{ minHeight: "80vh" }}>

      {/* 背景装飾 */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div
          className="absolute left-[-4vw] top-1/2 -translate-y-1/2 font-black text-black/[0.025] select-none leading-none hidden md:block"
          style={{ fontSize: "clamp(220px, 36vw, 560px)" }}
        >
          使
        </div>
      </motion.div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-20 py-section">

        <FadeIn>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-green mb-6">
            01 · Mission
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="text-[13px] font-bold tracking-[0.18em] text-black/25 mb-8">ミッション</p>
        </FadeIn>

        <div className="grid md:grid-cols-[1.1fr_1fr] gap-16 md:gap-24 items-start">

          {/* 左: ミッション文 */}
          <div>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-navy leading-[1.12] tracking-[-0.04em] mb-12"
                style={{ fontSize: "clamp(32px, 4.8vw, 66px)" }}
              >
                やらなくていい仕事を<br />
                なくし、余白で<br />
                <span className="text-green">地域を動かす。</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="h-px w-12 bg-navy/20 mb-10" />
            </FadeIn>

            <FadeIn delay={0.28}>
              <p className="text-[16px] text-ink/60 leading-[2.1] max-w-[42ch]">
                テクノロジーで業務の無駄を省き、人が本当にやるべきことに集中できる環境をつくる。そうして生まれた余白を、地域の人材と挑戦者へつなぐ。
              </p>
            </FadeIn>

            <FadeIn delay={0.38}>
              <p className="mt-6 text-[16px] text-ink/60 leading-[2.1] max-w-[42ch]">
                それが、Moments Shareがすべての事業を通じて追い求めていることです。
              </p>
            </FadeIn>
          </div>

          {/* 右: 3つのWHY */}
          <div ref={lineRef} className="pt-2 md:pt-16">
            {[
              {
                num: "01",
                title: "効率のため、ではない",
                body: "DXは「コスト削減」が目的ではない。人の時間を解放し、可能性を広げるための手段です。",
              },
              {
                num: "02",
                title: "地域の外に出ない",
                body: "余白は東京に流れない。地域の人材へ委託し、働く場所と誇りを地元に残します。",
              },
              {
                num: "03",
                title: "一度きりで終わらない",
                body: "地域の活性化が企業の成長を生み、新たなDX需要へとつながる。循環する仕組みをつくります。",
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                className="py-8 border-t border-black/[0.07] first:border-t-0"
                initial={{ opacity: 0, x: 16 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.12 }}
              >
                <p className="text-[10px] font-bold tracking-[0.2em] text-green/70 mb-3">{item.num}</p>
                <p className="text-[17px] font-black text-navy tracking-[-0.02em] mb-3 leading-[1.4]">{item.title}</p>
                <p className="text-[14px] text-ink/50 leading-[1.85]">{item.body}</p>
              </motion.div>
            ))}
            <div className="border-t border-black/[0.07]" />
          </div>
        </div>
      </div>
    </section>
  );
}
