"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

export function Vision() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#1b2140]" style={{ minHeight: "70vh" }}>

      {/* 背景 */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-[#1b2140]" />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 100% 80% at 20% 50%, rgba(5,4,102,0.5) 0%, transparent 60%), radial-gradient(ellipse 60% 70% at 80% 60%, rgba(0,196,122,0.05) 0%, transparent 55%)"
        }} />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 72px)"
        }} />
      </motion.div>

      {/* 右側の大きな装飾 */}
      <div
        className="absolute right-[-4vw] top-1/2 -translate-y-1/2 font-black text-white/[0.025] select-none pointer-events-none leading-none hidden md:block"
        aria-hidden
        style={{ fontSize: "clamp(180px, 28vw, 380px)" }}
      >
        想
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-20 py-28 md:py-36">

        <FadeIn>
          <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-green mb-12">Our Vision</p>
        </FadeIn>

        <div className="max-w-[760px]">
          <FadeIn delay={0.1}>
            <h2
              className="font-black text-white leading-[1.15] tracking-[-0.04em] mb-14"
              style={{ fontSize: "clamp(34px, 5.5vw, 76px)" }}
            >
              企業はAIで、<br />余白をつくる。<br />
              <span className="text-white/50">地域は、</span><br />
              <span className="text-green">その余白で動き出す。</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="h-px w-16 bg-green/40 mb-12" />
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 text-[15px] text-white/40 leading-[2.0]">
              <p>学生が「ここで挑戦したい」と選ぶ。<br />地域の人が自分らしく働ける。</p>
              <p>企業と地域がつながり、<br />挑戦と共創が循環している。</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <blockquote className="mt-16 border-l border-green/40 pl-8">
              <p
                className="font-black text-white leading-[1.4] tracking-[-0.03em]"
                style={{ fontSize: "clamp(20px, 2.8vw, 36px)" }}
              >
                「生きててよかった」が<br />あふれる地域を、西尾から。
              </p>
            </blockquote>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
