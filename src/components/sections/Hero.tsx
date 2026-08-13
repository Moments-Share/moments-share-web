"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

function Line({ children, delay, className = "" }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1b2140]">

      {/* Ken Burns 写真背景 */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 scale-[1.12]"
          animate={{ scale: [1.12, 1.04], x: ["0%", "-2%"], y: ["0%", "1%"] }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src="/photos/hero.png"
            alt="西尾市の風景"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
        {/* 暗幕グラデーション */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(6,9,26,0.60) 0%, rgba(6,9,26,0.32) 35%, rgba(6,9,26,0.80) 72%, rgba(6,9,26,1.0) 100%)"
          }}
        />
      </div>

      {/* 背景超大型テキスト SWITCH */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none z-[1]">
        <motion.span
          className="font-black text-white leading-none tracking-[-0.07em] whitespace-nowrap"
          style={{ fontSize: "clamp(160px, 28vw, 380px)", opacity: 0.03, marginLeft: "-2vw" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 3, delay: 0.6 }}
        >
          SWITCH
        </motion.span>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end max-w-[1280px] mx-auto px-8 md:px-20 pb-24 md:pb-40 pt-40">

        {/* ラベル */}
        <motion.p
          className="text-[9px] font-bold tracking-[0.38em] uppercase text-green mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Moments Share — Nishio, Aichi
        </motion.p>

        {/* キャッチコピー */}
        <h1
          className="font-black text-white leading-[1.04] tracking-[-0.05em] mb-12"
          style={{ fontSize: "clamp(64px, 13vw, 180px)" }}
        >
          <Line delay={0.4}>地域に、</Line>
          <Line delay={0.65}>挑戦と共創の</Line>
          <Line delay={0.9} className="text-green">循環を。</Line>
        </h1>

        {/* 説明文 */}
        <motion.div
          className="mb-16 max-w-[44ch]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.4 }}
        >
          <p className="text-white/45 leading-[2.0]" style={{ fontSize: "clamp(14px, 1.4vw, 17px)" }}>
            人がやらなくていい仕事をDXでなくし、<br />
            生まれた余白から地域の挑戦を増やす。
          </p>
        </motion.div>

        {/* CTAボタン */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.9 }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-green text-white font-bold text-[13px] tracking-[0.04em] px-7 py-4 rounded-full hover:bg-[#0f8f9c] transition-colors"
          >
            まず話を聞いてみる →
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 font-bold text-[13px] tracking-[0.04em] px-7 py-4 rounded-full hover:border-white/50 hover:text-white transition-colors"
          >
            事業を見る →
          </Link>
        </motion.div>

      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-10 right-10 md:right-20 z-10 flex flex-col items-center gap-2">
        <motion.p
          className="text-[8px] tracking-[0.3em] uppercase text-white/20 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
        >
          Scroll
        </motion.p>
        <motion.div
          className="w-px h-14 bg-white/15 origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 }}
        />
      </div>

    </section>
  );
}
