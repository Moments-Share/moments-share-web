"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export function AboutHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#060918]" style={{ minHeight: "100svh" }}>

      <motion.div className="absolute inset-0 scale-[1.1]" style={{ y: photoY }}>
        <Image
          src="/photos/hero.png"
          alt="西尾市"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, rgba(6,9,24,0.45) 0%, rgba(6,9,24,0.15) 35%, rgba(6,9,24,0.80) 100%)"
        }} />
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col justify-end px-8 md:px-24 pb-24 md:pb-44"
        style={{ minHeight: "100svh", opacity }}
      >
        <motion.p
          className="text-[10px] font-bold tracking-[0.36em] uppercase text-white/22 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          About Moments Share
        </motion.p>

        <motion.h1
          className="font-black text-white leading-[1.2] tracking-[-0.04em]"
          style={{ fontSize: "clamp(28px, 4.5vw, 64px)" }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
        >
          地域課題を解決する会社ではない。<br />
          <br />
          地域が、<br />
          自ら課題を解決し続けられる<br />
          <span className="text-green">仕組みをデザインする会社。</span>
        </motion.h1>

        <motion.div
          className="absolute bottom-10 left-8 md:left-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <Link href="/" className="text-[11px] font-semibold tracking-[0.14em] text-white/25 hover:text-white/55 transition-colors uppercase">
            ← Home
          </Link>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-8 md:right-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <motion.div
            className="w-px h-14 bg-white/18 origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
