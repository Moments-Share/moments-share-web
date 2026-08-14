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
    <section className="relative min-h-screen overflow-hidden bg-[#20261f]">

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
        {/* 暗幕グラデーション（ディープグリーン基調） */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(20,26,19,0.55) 0%, rgba(20,26,19,0.30) 32%, rgba(20,26,19,0.78) 70%, rgba(20,26,19,0.98) 100%)"
          }}
        />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end max-w-[1280px] mx-auto px-8 md:px-20 pb-20 md:pb-28 pt-36">

        {/* ラベル */}
        <motion.p
          className="text-[9px] font-bold tracking-[0.38em] uppercase text-terra mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Moments Share — Nishio, Aichi
        </motion.p>

        {/* キャッチコピー — サイト全体のVisual Peak */}
        <h1
          className="font-black text-white leading-[1.05] tracking-[-0.05em] mb-10"
          style={{ fontSize: "clamp(56px, 11vw, 150px)" }}
        >
          <Line delay={0.4}>地域に、</Line>
          <Line delay={0.65}>挑戦と共創の</Line>
          <Line delay={0.9} className="text-terra">循環を。</Line>
        </h1>

        {/* 説明文（正式サブコピー） */}
        <motion.div
          className="mb-12 max-w-[40ch]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.4 }}
        >
          <p className="text-white/60 leading-[2.0]" style={{ fontSize: "clamp(14px, 1.4vw, 17px)" }}>
            企業の仕事を変える。人の働き方を広げる。地域に、新しい挑戦を生み出す。
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
            href="#business"
            className="inline-flex items-center gap-2 bg-terra text-white font-bold text-[13px] tracking-[0.04em] px-7 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            事業を見る →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 font-bold text-[13px] tracking-[0.04em] px-7 py-4 rounded-full hover:border-white/50 hover:text-white transition-colors"
          >
            30分相談する →
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
