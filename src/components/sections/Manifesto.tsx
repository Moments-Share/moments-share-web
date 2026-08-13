"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export function Manifesto() {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#060918]" style={{ minHeight: "95vh" }}>

      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 110% 90% at 20% 55%, rgba(5,4,102,0.6) 0%, transparent 58%), radial-gradient(ellipse 60% 70% at 85% 30%, rgba(0,196,122,0.04) 0%, transparent 55%)"
        }} />
        <div
          className="absolute right-[-3vw] bottom-[-2vw] font-black text-white/[0.022] select-none pointer-events-none leading-none hidden md:block"
          aria-hidden
          style={{ fontSize: "clamp(220px, 36vw, 560px)" }}
        >
          仕
        </div>
      </motion.div>

      <div
        ref={contentRef}
        className="relative z-10 max-w-[1100px] mx-auto px-8 md:px-20 flex flex-col justify-center"
        style={{ minHeight: "95vh", paddingTop: "12vh", paddingBottom: "12vh" }}
      >
        <motion.p
          className="text-[10px] font-bold tracking-[0.32em] uppercase text-white/20 mb-16 md:mb-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9 }}
        >
          Chapter 03 — 私たちの答え
        </motion.p>

        {/* Prelude */}
        <motion.p
          className="font-black leading-[1.3] tracking-[-0.02em] mb-8"
          style={{ fontSize: "clamp(20px, 2.6vw, 36px)", color: "rgba(255,255,255,0.3)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15 }}
        >
          私たちは、課題を解決する会社ではありません。
        </motion.p>

        {/* Core */}
        <motion.h2
          className="font-black text-white leading-[1.08] tracking-[-0.04em] mb-16"
          style={{ fontSize: "clamp(40px, 6.5vw, 90px)" }}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
        >
          課題が、<br />
          解決され続ける<br />
          <span className="text-green">仕組みを創ります。</span>
        </motion.h2>

        <motion.div
          className="h-[2px] w-20 bg-green/35 mb-14"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.9, delay: 0.55 }}
        />

        <motion.p
          className="text-[17px] text-white/35 leading-[2.2] max-w-[48ch] mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.65 }}
        >
          一時的な解決ではなく、地域が自分自身の力で<br className="hidden md:block" />
          課題を解決し続けられる状態をつくる。<br />
          この一文が、私たちのすべてです。
        </motion.p>

        <motion.blockquote
          className="border-l-[3px] border-green/50 pl-8 max-w-[52ch]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.85 }}
        >
          <p
            className="font-black text-white leading-[1.45] tracking-[-0.03em]"
            style={{ fontSize: "clamp(19px, 2.3vw, 32px)" }}
          >
            「生きててよかった」が<br />
            あふれる地域を、西尾から。
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
