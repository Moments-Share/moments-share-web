"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lines = [
  {
    from: "やらなくていい仕事に費やす時間を、",
    to: "本来の力を発揮できる余白へ。",
  },
  {
    from: "地域に挑戦の場がないという閉塞感を、",
    to: "挑戦と共創が循環するまちの仕組みへ。",
  },
  {
    from: "人手不足で本業に集中できない限界を、",
    to: "DX×BPOで自走できる強い組織へ。",
  },
  {
    from: "人が減るから地域が沈む、という不安を、",
    to: "共創が地域を育てる希望へ。",
  },
];

function SwitchLine({ from, to, index }: { from: string; to: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="border-t border-white/[0.07] py-12 md:py-20">
      <motion.p
        className="font-black leading-[1.2] tracking-[-0.035em] text-white/22 mb-4"
        style={{ fontSize: "clamp(20px, 3vw, 44px)" }}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      >
        {from}
      </motion.p>
      <motion.p
        className="font-black leading-[1.2] tracking-[-0.035em] text-green"
        style={{ fontSize: "clamp(20px, 3vw, 44px)" }}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
      >
        {to}
      </motion.p>
    </div>
  );
}

export function SwitchSection() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const isHeadInView = useInView(headRef, { once: true, amount: 0.5 });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={sectionRef} className="relative bg-[#07070e] py-section overflow-hidden">

      {/* 背景 SWITCH 文字 */}
      <div className="absolute inset-0 flex items-end overflow-hidden pointer-events-none select-none">
        <motion.span
          className="font-black text-white leading-none tracking-[-0.07em] whitespace-nowrap"
          style={{ fontSize: "clamp(200px, 35vw, 480px)", opacity: 0.02, y: bgY, marginBottom: "-0.1em", marginLeft: "-0.05em" }}
        >
          HOPE
        </motion.span>
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-8 md:px-20">

        <div ref={headRef} className="mb-20 md:mb-28">
          <motion.p
            className="text-[9px] font-bold tracking-[0.36em] uppercase text-green mb-10"
            initial={{ opacity: 0 }}
            animate={isHeadInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            Switch
          </motion.p>
          <motion.h2
            className="font-black text-white leading-[1.06] tracking-[-0.05em]"
            style={{ fontSize: "clamp(52px, 10vw, 140px)" }}
            initial={{ opacity: 0, y: 32 }}
            animate={isHeadInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            課題を、<br />
            <span className="text-green">希望へ。</span>
          </motion.h2>
        </div>

        <div>
          {lines.map((line, i) => (
            <SwitchLine key={i} {...line} index={i} />
          ))}
        </div>

        <div className="border-t border-white/[0.07] pt-20 md:pt-28 mt-4">
          <SwitchClosing />
        </div>
      </div>
    </section>
  );
}

function SwitchClosing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const closingLines = [
    "課題の本質を見きわめ、",
    "原因を根本から変えるとき、",
    "そこには希望が生まれます。",
  ];

  return (
    <div ref={ref}>
      {closingLines.map((line, i) => (
        <motion.p
          key={i}
          className="font-bold text-white/40 leading-[1.9]"
          style={{ fontSize: "clamp(18px, 2.2vw, 30px)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.15 }}
        >
          {line}
        </motion.p>
      ))}
      <motion.p
        className="font-bold text-white leading-[1.9] mt-4"
        style={{ fontSize: "clamp(18px, 2.2vw, 30px)" }}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
      >
        それが、Moments Shareが西尾にいる理由です。
      </motion.p>
    </div>
  );
}
