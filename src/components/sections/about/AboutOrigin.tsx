"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const story = [
  {
    place: "群馬",
    label: "大学進学",
    text: "地元・西尾を離れ、群馬へ。地方の若者が地元を出ていくことが「当たり前」だと思っていた。",
  },
  {
    place: "Singapore",
    label: "就職",
    text: "さらに海を越え、シンガポールへ。外に出たからこそ、初めて見えてきたものがあった。",
  },
  {
    place: "西尾",
    label: "気づき",
    text: "「やっぱり、西尾が好きだ。」\n遠くから地元を見ると、誰かが守り続けてきた場所の価値がわかった。",
    accent: true,
  },
  {
    place: "100社",
    label: "支援の現場",
    text: "100社以上の企業支援を重ねる中で、繰り返し目にした光景がある。\n人が疲弊し、辞めていく。誰も救われない現場を。",
  },
  {
    place: "3 → 10名",
    label: "成長の痛み",
    text: "自社の成長過程でも、「成長」とは何か、ずっと問い続けた。",
  },
  {
    place: "確信",
    label: "DXの本質",
    text: "DXは効率化のためではない。\n人にしかできない価値を生み出すためのものだ、と確信した。",
    accent: true,
  },
  {
    place: "決意",
    label: "地域への答え",
    text: "人口減少を止めることはできない。\nでも、挑戦と共創が循環する地域なら、豊かになれる。\nその仕組みを、西尾から創る。",
    accent: true,
    large: true,
  },
];

function Beat({ item, index }: { item: typeof story[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div ref={ref} className="grid md:grid-cols-[160px_1fr] gap-8 md:gap-16 py-16 md:py-20 border-t border-white/[0.07] first:border-t-0">
      <div>
        <motion.p
          className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/22 mb-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: index * 0.05 }}
        >
          {item.label}
        </motion.p>
        <motion.p
          className="font-black text-white/15 tracking-[-0.02em] leading-none"
          style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1 + index * 0.05 }}
        >
          {item.place}
        </motion.p>
      </div>
      <motion.p
        className={`leading-[2.1] whitespace-pre-line ${
          item.large
            ? "font-black tracking-[-0.03em] text-white"
            : item.accent
            ? "font-bold text-white/80"
            : "text-white/42"
        }`}
        style={{ fontSize: item.large ? "clamp(22px, 2.8vw, 38px)" : "clamp(16px, 1.6vw, 20px)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
      >
        {item.text}
        {item.accent && !item.large && (
          <span className="block mt-2 h-[2px] w-12 bg-green/50" />
        )}
      </motion.p>
    </div>
  );
}

export function AboutOrigin() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-[#1b2140] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-8 md:px-20 py-28 md:py-40">

        <div ref={ref} className="mb-20 md:mb-32">
          <motion.p
            className="text-[10px] font-bold tracking-[0.32em] uppercase text-white/20 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9 }}
          >
            Why Moments Share — 創業の原点
          </motion.p>
          <motion.h2
            className="font-black text-white leading-[1.1] tracking-[-0.04em]"
            style={{ fontSize: "clamp(34px, 5.5vw, 72px)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            なぜ、Moments Shareを<br />
            <span className="text-green">始めたのか。</span>
          </motion.h2>
        </div>

        <div>
          {story.map((item, i) => (
            <Beat key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
