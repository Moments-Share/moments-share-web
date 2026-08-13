"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AboutAccordionItem } from "./AboutAccordionItem";

const acts = [
  {
    title: "Moment.",
    copy: "今できる一歩を踏み出す。",
    body: "完璧な計画を待たない。今日できることを、今日やる。小さな一歩が、大きな変化の始まりになる。",
  },
  {
    title: "Moments.",
    copy: "挑戦を積み重ねる。",
    body: "一度の成功で終わらない。挑戦を重ねることで、見えてくるものがある。地域も、個人も、積み重ねで形になる。",
  },
  {
    title: "Moments Share.",
    copy: "挑戦を地域へ循環させる。",
    body: "自分の挑戦を、次の挑戦者へ渡す。誰かの経験が、誰かの勇気になる。その連鎖をつくることが、私たちの存在理由だ。",
  },
];

export function AboutHowWeAct() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="bg-[#f7f5ef]">
      <div className="max-w-[900px] mx-auto px-8 md:px-24 py-32 md:py-52">

        <div ref={ref} className="mb-16">
          <motion.p
            className="text-[10px] font-bold tracking-[0.32em] uppercase text-ink/20 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9 }}
          >
            How We Act
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {acts.map((a) => (
            <AboutAccordionItem
              key={a.title}
              title={a.title}
              titleSize="clamp(26px, 4vw, 56px)"
              light
            >
              <div className="max-w-[46ch]">
                <p
                  className="font-black text-navy leading-[1.4] tracking-[-0.02em] mb-5"
                  style={{ fontSize: "clamp(17px, 2.2vw, 28px)" }}
                >
                  {a.copy}
                </p>
                <p className="text-[14px] text-ink/45 leading-[2.1]">{a.body}</p>
              </div>
            </AboutAccordionItem>
          ))}
          <div className="border-t border-black/[0.07]" />
        </motion.div>
      </div>
    </section>
  );
}
