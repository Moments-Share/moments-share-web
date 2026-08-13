"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    num: "01",
    kanji: "余",
    en: "Make Room",
    title: "余白をつくる",
    body: "DXの目的は効率化ではなく、人の可能性を最大化すること。仕事の無駄を取り除き、本来やるべきことに時間とエネルギーを集中できる環境を追求します。",
    color: "#12a0ae",
  },
  {
    num: "02",
    kanji: "繋",
    en: "Bridge People",
    title: "人をつなぐ",
    body: "企業と地域、課題と解決者、挑戦者と支援者。孤立したものをつなぐことで、単体では生まれない価値が生まれると信じています。",
    color: "#232a4d",
  },
  {
    num: "03",
    kanji: "挑",
    en: "Embrace Challenge",
    title: "挑戦を讃える",
    body: "失敗を恐れず動く人を全力で支えます。「挑戦しなかった後悔」より「挑戦した経験」を。正解のない問いに向き合う姿勢を、私たちも持ち続けます。",
    color: "#12a0ae",
  },
  {
    num: "04",
    kanji: "地",
    en: "Root Local",
    title: "地域から考える",
    body: "グローバルな視野を持ちながら、起点は常に西尾から。東京の成功事例をコピーするのではなく、この地で育った固有の解を探します。",
    color: "#12a0ae",
  },
];

export function AboutValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="bg-[#f7f5ef] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-8 md:px-20 py-28 md:py-40">

        <div className="mb-16 md:mb-24">
          <motion.p
            className="text-[10px] font-bold tracking-[0.32em] uppercase text-green mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            Values
          </motion.p>
          <motion.h2
            className="font-black text-navy leading-[1.08] tracking-[-0.04em]"
            style={{ fontSize: "clamp(34px, 5.5vw, 72px)" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            私たちが、<br />
            <span className="text-navy/40">大切にしていること。</span>
          </motion.h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-px bg-black/[0.05]">
          {values.map((v, i) => (
            <motion.div
              key={v.num}
              className="relative bg-[#f7f5ef] p-10 md:p-14 overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.1 }}
            >
              <div
                className="absolute right-4 bottom-2 font-black select-none pointer-events-none leading-none"
                style={{ fontSize: "clamp(80px, 10vw, 140px)", color: v.color, opacity: 0.05 }}
              >
                {v.kanji}
              </div>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-black tracking-[0.2em]" style={{ color: v.color }}>
                  {v.num}
                </span>
                <span className="h-px flex-1 bg-black/[0.07]" />
                <span className="text-[10px] font-bold tracking-[0.14em] text-black/22 uppercase">
                  {v.en}
                </span>
              </div>

              <h3
                className="font-black text-navy tracking-[-0.03em] leading-[1.2] mb-5"
                style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
              >
                {v.title}
              </h3>
              <p className="text-[14px] text-ink/52 leading-[2.0] relative z-10">{v.body}</p>

              <motion.div
                className="absolute bottom-0 left-0 h-[3px]"
                style={{ backgroundColor: v.color }}
                initial={{ width: 0 }}
                animate={isInView ? { width: "32px" } : { width: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
