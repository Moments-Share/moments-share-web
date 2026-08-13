"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function MVVHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#232a4d]" style={{ minHeight: "100svh" }}>

      {/* 背景 */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 120% 90% at 60% 40%, rgba(10,8,142,0.8) 0%, rgba(5,4,102,1) 60%)"
        }} />
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent 60px)"
        }} />
        {/* 大きな装飾文字 */}
        <div
          className="absolute right-[-3vw] bottom-[-4vw] font-black text-white/[0.03] select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(280px, 48vw, 720px)" }}
        >
          想
        </div>
      </motion.div>

      {/* パンくず */}
      <motion.div
        className="absolute top-28 left-8 md:left-20 z-10"
        style={{ opacity }}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link href="/" className="text-[11px] font-semibold tracking-[0.14em] text-white/30 hover:text-white/60 transition-colors uppercase">
          ← Top
        </Link>
      </motion.div>

      {/* コンテンツ */}
      <motion.div
        className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-20 flex flex-col justify-end pb-24 md:pb-36"
        style={{ minHeight: "100svh", opacity }}
      >
        <motion.p
          className="text-[10px] font-bold tracking-[0.3em] uppercase text-green mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Mission · Vision · Values
        </motion.p>

        <motion.h1
          className="font-black text-white leading-[1.07] tracking-[-0.05em] mb-10"
          style={{ fontSize: "clamp(44px, 8vw, 112px)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        >
          なぜ、<br />
          私たちは<br />
          <span className="text-green">動くのか。</span>
        </motion.h1>

        <motion.p
          className="text-[16px] md:text-[18px] text-white/38 leading-[2.1] max-w-[44ch]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          地域の未来を信じ、企業と人をつなぐ。<br />
          Moments Shareが大切にしていること。
        </motion.p>

        {/* スクロールヒント */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            className="w-px h-12 bg-white/20"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
