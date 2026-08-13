"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface ServiceHeroProps {
  label: string;
  brand?: string;
  headline: string;
  sub: string;
  accent: string;
}

export function ServiceHero({ label, brand, headline, sub, accent }: ServiceHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] flex items-end overflow-hidden bg-[#060918]">
      {/* 背景グラデーション */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 60% 40%, ${accent}22 0%, transparent 60%), radial-gradient(ellipse 50% 80% at 20% 80%, ${accent}11 0%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, #060918 100%)" }} />
      </motion.div>

      {/* テキスト */}
      <motion.div
        className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-16 pb-20 w-full"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 hover:text-white/70 transition-colors mb-12"
          >
            ← Back to Top
          </Link>

          <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-3" style={{ color: accent }}>
            {label}{brand ? ` — ${brand}` : ""}
          </p>

          <h1
            className="font-black text-white leading-[1.15] tracking-[-0.03em] mb-8"
            style={{ fontSize: "clamp(44px, 7vw, 100px)" }}
          >
            {headline}
          </h1>

          <p className="text-[17px] md:text-[19px] text-white/50 leading-[1.9] max-w-xl">
            {sub}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
