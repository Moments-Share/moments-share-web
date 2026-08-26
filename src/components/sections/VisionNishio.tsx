"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   OUR VISION FOR NISHIO — 2040 / 240
   全幅の西尾の風景写真＋暗色オーバーレイ。数字「240」が主役。
   派手なCG・未来都市・イラストは禁止。粒子は入れない（静かに）。
   ============================================================ */

export function VisionNishio() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const rawInView = useInView(ref, { once: true, amount: 0.3 });
  const inView = reduce ? true : rawInView;

  const up = (delay: number, y = 20) => ({
    initial: reduce ? false : { opacity: 0, y },
    animate: { opacity: inView ? 1 : 0, y: inView ? 0 : y },
    transition: reduce ? { duration: 0 } : { duration: 0.9, ease, delay },
  });

  return (
    <section ref={ref} aria-labelledby="vision-nishio-heading" className="relative overflow-hidden bg-[#16281f]">
      {/* 背景：西尾の風景写真 */}
      <div className="absolute inset-0">
        <Image src="/photos/hero-nishio.jpg" alt="地域の川辺の風景" fill sizes="100vw" className="object-cover object-center" />
        {/* 暗色オーバーレイ（左〜下を暗く／ネイビー系・可読性確保） */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(16,32,42,0.90) 0%, rgba(16,32,42,0.70) 42%, rgba(16,32,42,0.34) 74%, rgba(16,32,42,0.18) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(16,32,42,0.30) 0%, rgba(16,32,42,0) 38%, rgba(16,32,42,0.40) 78%, rgba(16,32,42,0.75) 100%)",
          }}
        />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 py-28 md:py-44">
        <motion.p {...up(0)} className="text-[11px] font-bold tracking-[0.34em] text-white/70">
          OUR VISION
        </motion.p>

        <motion.p {...up(0.12)} className="mt-6 font-bold tracking-[0.06em] text-white/80" style={{ fontSize: "clamp(20px, 2.4vw, 30px)" }}>
          2040 GOAL
        </motion.p>

        <h2 id="vision-nishio-heading" className="mt-4 font-bold text-white leading-[1.02] tracking-[-0.02em]">
          <motion.span {...up(0.24)} className="block" style={{ fontSize: "clamp(30px, 5vw, 66px)" }}>
            西尾から、
          </motion.span>
          <motion.span {...up(0.36)} className="mt-2 flex items-baseline gap-3 flex-wrap">
            <span
              className="text-leaf font-black leading-[0.9] tracking-[-0.04em] tabular-nums"
              style={{ fontSize: "clamp(120px, 26vw, 340px)" }}
            >
              240
            </span>
            <span className="font-bold text-white" style={{ fontSize: "clamp(30px, 5vw, 66px)" }}>
              の事業を。
            </span>
          </motion.span>
        </h2>

        <motion.div {...up(0.55)} className="mt-10 md:mt-14 max-w-[46ch] space-y-2">
          <p className="text-white/75 leading-[2.0]" style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}>
            挑戦が当たり前になり、地域内外の人や企業とともに、事業を共創し続ける。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
