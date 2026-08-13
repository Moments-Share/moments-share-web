"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const items = [
  {
    label: "Mission",
    ja: "ミッション",
    copy: "やらなくていい仕事をなくし、余白で地域を動かす。",
  },
  {
    label: "Vision",
    ja: "ビジョン",
    copy: "「生きててよかった」があふれる地域を、西尾から。",
  },
  {
    label: "Values",
    ja: "バリュー",
    copy: "余白をつくる。人をつなぐ。挑戦を讃える。地域から考える。",
  },
];

export function AboutMVVSummary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-[#faf9f7] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-8 md:px-20 py-24 md:py-36">

        <div ref={ref} className="grid md:grid-cols-[1fr_auto] md:items-end gap-12 mb-16 md:mb-20">
          <div>
            <motion.p
              className="text-[10px] font-bold tracking-[0.32em] uppercase text-green mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.9 }}
            >
              Mission / Vision / Values
            </motion.p>
            <motion.h2
              className="font-black text-navy leading-[1.08] tracking-[-0.04em]"
              style={{ fontSize: "clamp(28px, 4vw, 54px)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              私たちが大切にしていること。
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="/mvv"
              className="group inline-flex items-center gap-3 font-black text-[13px] tracking-[0.08em] uppercase text-navy/50 hover:text-green transition-colors"
            >
              詳しく読む
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-black/[0.05]">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              className="bg-[#faf9f7] px-8 py-10"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.1 }}
            >
              <p className="text-[10px] font-black tracking-[0.2em] text-green mb-1">{item.label}</p>
              <p className="text-[11px] text-ink/25 tracking-[0.06em] mb-5">{item.ja}</p>
              <p className="text-[16px] font-black text-navy leading-[1.55] tracking-[-0.02em]">{item.copy}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
