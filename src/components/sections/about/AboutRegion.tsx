"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const beliefs = [
  {
    title: "人口が減っても、地域は豊かになれる",
    body: "人の数ではなく、一人ひとりの挑戦の密度が、地域の豊かさを決める。",
  },
  {
    title: "地域課題は、地域の外では解けない",
    body: "東京発のソリューションが、すべての地域に当てはまるわけではない。現場を知る者が、現場から解を出す。",
  },
  {
    title: "挑戦が連鎖する地域は、強い",
    body: "1つの挑戦が次の挑戦者を生む。その連鎖が起きている地域は、外部のショックに揺るがない。",
  },
];

function Belief({ item, index }: { item: typeof beliefs[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <div ref={ref} className="grid md:grid-cols-[80px_1fr] gap-8 md:gap-16 py-14 border-t border-black/[0.06] first:border-t-0">
      <motion.p
        className="font-black text-navy/10 tracking-[-0.04em] leading-none"
        style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.p>
      <div>
        <motion.h3
          className="font-black text-navy tracking-[-0.02em] leading-[1.3] mb-4"
          style={{ fontSize: "clamp(18px, 2.2vw, 28px)" }}
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {item.title}
        </motion.h3>
        <motion.p
          className="text-[15px] text-ink/50 leading-[2.1]"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
        >
          {item.body}
        </motion.p>
      </div>
    </div>
  );
}

export function AboutRegion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true, amount: 0.3 });

  return (
    <section className="bg-[#faf9f7] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-8 md:px-20 py-28 md:py-40">

        <div ref={ref} className="mb-20 md:mb-32">
          <motion.p
            className="text-[10px] font-bold tracking-[0.32em] uppercase text-green mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9 }}
          >
            Regional Philosophy — 地域観
          </motion.p>
          <motion.h2
            className="font-black text-navy leading-[1.08] tracking-[-0.04em]"
            style={{ fontSize: "clamp(34px, 5.5vw, 72px)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            私たちが信じる、<br />
            <span className="text-navy/38">地域の可能性。</span>
          </motion.h2>
        </div>

        {/* 写真 */}
        <div ref={imgRef} className="relative w-full mb-20 md:mb-32 overflow-hidden rounded-sm" style={{ aspectRatio: "16/7" }}>
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.05 }}
            animate={imgInView ? { scale: 1 } : {}}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/photos/hero.png"
              alt="西尾市"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to right, rgba(5,4,102,0.55) 0%, rgba(5,4,102,0.10) 50%, transparent 100%)"
            }} />
          </motion.div>
          <motion.div
            className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10"
            initial={{ opacity: 0, y: 16 }}
            animate={imgInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <p className="font-black text-white leading-[1.2] tracking-[-0.03em]"
              style={{ fontSize: "clamp(22px, 3vw, 44px)" }}>
              西尾から、始める。
            </p>
            <p className="text-white/45 text-[13px] mt-2 tracking-[0.04em]">愛知県西尾市 — 私たちの起点</p>
          </motion.div>
        </div>

        {/* 3つの信念 */}
        <div>
          {beliefs.map((b, i) => (
            <Belief key={i} item={b} index={i} />
          ))}
          <div className="border-t border-black/[0.06]" />
        </div>
      </div>
    </section>
  );
}
