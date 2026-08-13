"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function AboutCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="bg-[#f7f5ef]">
      <div
        ref={ref}
        className="max-w-[900px] mx-auto px-8 md:px-24 flex flex-col justify-center"
        style={{ minHeight: "70vh", paddingTop: "10vh", paddingBottom: "10vh" }}
      >
        <motion.h2
          className="font-black text-navy leading-[1.15] tracking-[-0.04em] mb-20 md:mb-28"
          style={{ fontSize: "clamp(34px, 5.5vw, 72px)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          この循環を、<br />
          <span className="text-green">次はあなたと。</span>
        </motion.h2>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        >
          <Link
            href="mailto:branding@momentsshare.com"
            className="inline-flex items-center gap-4 font-bold text-[15px] tracking-[0.04em] text-navy/75 hover:text-navy group transition-colors w-fit border-b border-navy/20 pb-1"
          >
            相談する
            <span className="group-hover:translate-x-2 transition-transform text-green">→</span>
          </Link>
          <Link
            href="/service-produce"
            className="inline-flex items-center gap-4 font-bold text-[15px] tracking-[0.04em] text-navy/45 hover:text-navy group transition-colors w-fit border-b border-navy/10 pb-1"
          >
            地域プロジェクトを見る
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </motion.div>

        <motion.div
          className="mt-24 pt-12 border-t border-black/[0.06] flex flex-col md:flex-row md:items-center gap-6 md:gap-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <p className="font-black text-navy/60 text-[14px]">Moments Share合同会社</p>
          <div className="flex gap-8">
            <Link href="/" className="text-[12px] text-ink/30 hover:text-ink/60 transition-colors">Home</Link>
            <Link href="/mvv" className="text-[12px] text-ink/30 hover:text-ink/60 transition-colors">MVV</Link>
            <Link href="/news" className="text-[12px] text-ink/30 hover:text-ink/60 transition-colors">News</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
