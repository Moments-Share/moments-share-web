"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function AboutFinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="bg-[#faf9f7] overflow-hidden">
      <div ref={ref} className="max-w-[1100px] mx-auto px-8 md:px-20 py-28 md:py-48">

        <motion.p
          className="text-[10px] font-bold tracking-[0.32em] uppercase text-ink/20 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9 }}
        >
          Next Step
        </motion.p>

        <motion.h2
          className="font-black text-navy leading-[1.08] tracking-[-0.04em] mb-8"
          style={{ fontSize: "clamp(38px, 6.5vw, 88px)" }}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          一緒に、<br />
          <span className="text-green">循環をつくりませんか。</span>
        </motion.h2>

        <motion.p
          className="text-[17px] text-ink/50 leading-[2.2] max-w-[52ch] mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
        >
          DXで余白をつくりたい企業、地域でBPOを担いたい人材、<br />
          地域で挑戦したい事業家。あなたの「一歩」が循環のはじまりです。
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-navy text-white font-black text-[14px] tracking-[0.08em] px-9 py-5 hover:bg-[#0a088e] transition-colors"
          >
            お問い合わせ
            <span className="text-green">→</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-3 border border-navy/20 text-navy font-bold text-[14px] tracking-[0.06em] px-9 py-5 hover:border-navy/50 transition-colors"
          >
            サービスを見る
          </Link>
        </motion.div>

        <motion.div
          className="mt-24 pt-12 border-t border-black/[0.06] flex flex-col md:flex-row md:items-center gap-6 md:gap-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <p className="font-black text-navy tracking-[-0.01em] text-[15px]">Moments Share合同会社</p>
          <div className="flex gap-8">
            <Link href="/" className="text-[12px] text-ink/35 hover:text-ink/60 transition-colors tracking-[0.06em]">Home</Link>
            <Link href="/mvv" className="text-[12px] text-ink/35 hover:text-ink/60 transition-colors tracking-[0.06em]">MVV</Link>
            <Link href="/contact" className="text-[12px] text-ink/35 hover:text-ink/60 transition-colors tracking-[0.06em]">Contact</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
