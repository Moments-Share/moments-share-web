"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { CountUp } from "@/components/ui/CountUp";

export function Goal240() {
  const numRef = useRef(null);
  const isInView = useInView(numRef, { once: true, amount: 0.4 });

  return (
    <section className="relative overflow-hidden bg-[#faf9f7]">

      {/* 背景の巨大な「240」 */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
      >
        <span
          className="font-black text-black/[0.03] leading-none"
          style={{ fontSize: "clamp(200px, 42vw, 600px)" }}
        >
          240
        </span>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-20 py-section">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* 左: 大きな数字 */}
          <div ref={numRef}>
            <FadeIn>
              <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-green mb-8">
                2040 Vision
              </p>
            </FadeIn>

            <div className="flex items-end gap-3 mb-6">
              <motion.p
                className="font-black text-navy leading-none tracking-[-0.06em]"
                style={{ fontSize: "clamp(96px, 14vw, 190px)" }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {isInView && (
                  <CountUp to={240} suffix="" duration={2.0} />
                )}
              </motion.p>
              <FadeIn delay={0.4}>
                <div className="pb-4 md:pb-6">
                  <p className="text-[13px] font-bold text-muted/60 tracking-[0.1em] leading-[1.7]">
                    事業を<br />西尾市に
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* 語呂合わせ */}
            <FadeIn delay={0.3}>
              <div className="inline-flex items-center gap-3 border border-navy/10 px-5 py-2.5 mb-2">
                <span className="text-[13px] font-black text-navy tracking-[0.05em]">2 · 4 · 0</span>
                <span className="text-[11px] text-muted/50">=</span>
                <span className="text-[13px] font-bold text-navy tracking-[0.1em]">に · し · お</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.36}>
              <p className="text-[12px] text-muted/45 tracking-[0.06em]">
                ニシオに240の事業。
              </p>
            </FadeIn>
          </div>

          {/* 右: ビジョンコピー */}
          <div>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-ink leading-[1.15] tracking-[-0.04em] mb-10"
                style={{ fontSize: "clamp(28px, 3.8vw, 52px)" }}
              >
                2040年までに、<br />
                西尾に240の<br />
                事業を。
              </h2>
            </FadeIn>

            <FadeIn delay={0.22}>
              <div className="h-px w-12 bg-green/40 mb-10" />
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-6 text-[16px] text-muted leading-[2.0]">
                <p>
                  地域の挑戦者が課題を解決し、<br />
                  その解決が次の挑戦を生む。
                </p>
                <p className="font-bold text-ink">
                  自走する地域経済の仕組みを、<br />
                  西尾からつくります。
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-12 grid grid-cols-3 gap-6 pt-10 border-t border-black/[0.06]">
                {[
                  { num: "2040", label: "年を目標に" },
                  { num: "240",  label: "事業を西尾に" },
                  { num: "∞",    label: "挑戦の連鎖" },
                ].map((item) => (
                  <div key={item.label}>
                    <p
                      className="font-black text-navy leading-none tracking-[-0.04em] mb-2"
                      style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
                    >
                      {item.num}
                    </p>
                    <p className="text-[12px] text-muted/55 leading-[1.7]">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
