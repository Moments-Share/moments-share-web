"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Insight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section className="relative bg-[#faf9f7] overflow-hidden">

      {/* 背景装飾 */}
      <div className="absolute inset-0 flex items-center justify-end pr-[8vw] pointer-events-none select-none" aria-hidden>
        <span
          className="font-black text-black/[0.022] leading-none"
          style={{ fontSize: "clamp(200px, 42vw, 620px)" }}
        >
          循
        </span>
      </div>

      <div ref={ref} className="relative z-10 max-w-[1100px] mx-auto px-8 md:px-20 py-36 md:py-52">

        <motion.p
          className="text-[10px] font-bold tracking-[0.32em] uppercase text-black/22 mb-20 md:mb-28"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9 }}
        >
          Chapter 02 · 問題の本質
        </motion.p>

        <motion.h2
          className="font-black text-navy leading-[1.08] tracking-[-0.05em] mb-14"
          style={{ fontSize: "clamp(46px, 8.5vw, 116px)" }}
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          挑戦が、<br />
          循環していない。
        </motion.h2>

        <motion.div
          className="h-[2px] w-20 bg-green/50 mb-16"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.9, delay: 0.45 }}
        />

        <motion.div
          className="grid md:grid-cols-2 gap-12 max-w-[800px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.55 }}
        >
          <p className="text-[17px] text-ink/50 leading-[2.15]">
            地域に人がいなくなったのではない。<br />
            挑戦する場と機会が、<br />
            見えなくなっているだけだ。
          </p>
          <p className="text-[17px] text-ink/50 leading-[2.15]">
            企業の可能性と、地域の人材は<br />
            まだつながっていない。<br />
            可能性は、ここにある。
          </p>
        </motion.div>

        <motion.p
          className="mt-20 md:mt-28 font-black text-navy tracking-[-0.03em] leading-[1.3]"
          style={{ fontSize: "clamp(24px, 3.2vw, 46px)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.75 }}
        >
          地域には、まだ可能性がある。<br />
          <span className="text-green">形になるのを、待っている。</span>
        </motion.p>

      </div>
    </section>
  );
}
