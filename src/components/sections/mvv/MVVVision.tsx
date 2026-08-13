"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { CountUp } from "@/components/ui/CountUp";

export function MVVVision() {
  const ref = useRef(null);
  const numRef = useRef(null);
  const isInView = useInView(numRef, { once: true, amount: 0.4 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#060918]" style={{ minHeight: "85vh" }}>

      {/* 背景 */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 110% 80% at 25% 55%, rgba(5,4,102,0.65) 0%, transparent 60%), radial-gradient(ellipse 70% 70% at 85% 30%, rgba(0,196,122,0.05) 0%, transparent 55%)"
        }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent 80px)"
        }} />
        <div
          className="absolute right-[-2vw] top-1/2 -translate-y-1/2 font-black text-white/[0.025] select-none pointer-events-none leading-none hidden md:block"
          style={{ fontSize: "clamp(200px, 32vw, 480px)" }}
        >
          夢
        </div>
      </motion.div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-20 py-section">

        <FadeIn>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-green mb-6">
            02 · Vision
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="text-[13px] font-bold tracking-[0.18em] text-white/22 mb-10">ビジョン</p>
        </FadeIn>

        {/* メインビジョン */}
        <div className="max-w-[820px] mb-24">
          <FadeIn delay={0.12}>
            <h2
              className="font-black text-white leading-[1.12] tracking-[-0.04em] mb-14"
              style={{ fontSize: "clamp(34px, 5.5vw, 76px)" }}
            >
              「生きててよかった」が<br />
              あふれる地域を、<br />
              <span className="text-green">西尾から。</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="h-px w-16 bg-green/35 mb-12" />
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="grid md:grid-cols-2 gap-x-14 gap-y-5 text-[15px] text-white/42 leading-[2.1]">
              <p>
                学生が「ここで挑戦したい」と選ぶ地域。<br />
                地域の人が自分らしく、誇りを持って働ける場所。
              </p>
              <p>
                企業と地域がつながり、挑戦が挑戦を呼ぶ。<br />
                そんな循環が西尾に生まれることを信じています。
              </p>
            </div>
          </FadeIn>
        </div>

        {/* 2040 / 240 */}
        <FadeIn delay={0.18}>
          <div className="h-px w-full bg-white/[0.06] mb-16" />
        </FadeIn>

        <div ref={numRef} className="grid md:grid-cols-[1fr_1fr_1fr] gap-10 md:gap-0">
          {[
            {
              num: "2040",
              suffix: "",
              label: "年を目標に",
              desc: "持続する地域経済の仕組みを完成させる期限。2040年、西尾はどんな街になっているか。",
            },
            {
              num: 240,
              suffix: "",
              isCount: true,
              label: "事業を西尾に",
              desc: "2·4·0 = に·し·お。語呂合わせから始まった、本気の目標。240の灯りが西尾に灯るとき、循環は完成する。",
            },
            {
              num: "∞",
              suffix: "",
              label: "挑戦の連鎖",
              desc: "240が終点ではない。1つの挑戦が次の挑戦を生む、無限の循環をここから始める。",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="md:pr-10 md:border-r border-white/[0.07] last:border-r-0 md:pl-10 first:pl-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.12 }}
            >
              <p
                className="font-black text-white leading-none tracking-[-0.06em] mb-4"
                style={{ fontSize: "clamp(52px, 6.5vw, 88px)" }}
              >
                {item.isCount && isInView
                  ? <CountUp to={item.num as number} duration={2.2} />
                  : item.num}
              </p>
              <p className="text-[12px] font-bold tracking-[0.12em] text-green/70 mb-4">{item.label}</p>
              <p className="text-[13px] text-white/32 leading-[1.85]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
