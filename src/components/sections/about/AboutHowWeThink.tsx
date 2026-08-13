"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AboutAccordionItem } from "./AboutAccordionItem";

const values = [
  {
    en: "Challenge First",
    copy: "迷ったら、挑戦を選ぶ。",
    body: "安全な道と、難しい道があるとき。私たちは難しい道を選ぶことを恥じない。挑戦しなかった後悔より、挑戦した経験を大切にする。",
  },
  {
    en: "Human First",
    copy: "人のために、テクノロジーを使う。",
    body: "AIも自動化も、目的は人のため。人が本来やるべき仕事に集中できるよう、テクノロジーを道具として扱う。",
  },
  {
    en: "Purpose First",
    copy: "なぜやるかを、常に問い直す。",
    body: "手段が目的になっていないか。常に「なぜ」に立ち返る。意味のない仕事を増やすより、やめる勇気を持つ。",
  },
  {
    en: "Co-Create",
    copy: "独りで抱えず、一緒につくる。",
    body: "課題も、解決策も、成果も。分かち合うことで遠くへ行ける。地域の人材・パートナー・お客様と共につくる姿勢を忘れない。",
  },
  {
    en: "Integrity",
    copy: "言ったことを、やる。",
    body: "正直にお伝えする。向いていなければ、向いていないと言う。できないことは、できないと言う。信頼は約束の積み重ねでできている。",
  },
  {
    en: "Better Everyday",
    copy: "昨日より、少しだけよくする。",
    body: "完璧を求めない。小さな改善を積み重ねる。毎日0.1%ずつよくなれば、一年後には別のチームになれる。",
  },
  {
    en: "Think Circular",
    copy: "循環するかどうかで、判断する。",
    body: "一度きりで終わる施策より、次の挑戦を生む施策を選ぶ。誰かの成功が、誰かの挑戦を生む。その連鎖が、私たちが目指す地域の姿だ。",
  },
];

export function AboutHowWeThink() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-[#09090f]">
      <div className="max-w-[900px] mx-auto px-8 md:px-24 py-32 md:py-52">

        <div ref={ref} className="mb-16">
          <motion.p
            className="text-[10px] font-bold tracking-[0.32em] uppercase text-white/20 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9 }}
          >
            How We Think
          </motion.p>
          <motion.p
            className="text-[14px] text-white/28 tracking-[0.04em]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            私たちが意思決定するときの判断基準
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {values.map((v, i) => (
            <AboutAccordionItem
              key={v.en}
              title={v.en}
              titleSize="clamp(20px, 2.5vw, 34px)"
              light={false}
            >
              <div className="max-w-[46ch]">
                <p
                  className="font-black text-white leading-[1.5] tracking-[-0.02em] mb-6"
                  style={{ fontSize: "clamp(16px, 2vw, 24px)" }}
                >
                  {v.copy}
                </p>
                <p className="text-[14px] text-white/40 leading-[2.1]">{v.body}</p>
              </div>
            </AboutAccordionItem>
          ))}
          <div className="border-t border-white/[0.07]" />
        </motion.div>
      </div>
    </section>
  );
}
