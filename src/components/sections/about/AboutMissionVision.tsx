"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AboutAccordionItem } from "./AboutAccordionItem";

export function AboutMissionVision() {
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
            Mission &amp; Vision
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <AboutAccordionItem
            title="地域に、挑戦と共創が循環する仕組みを創る。"
            titleSize="clamp(22px, 3.2vw, 44px)"
            light
          >
            <div className="pl-0 md:pl-0 max-w-[52ch]">
              <p className="text-[15px] text-ink/52 leading-[2.2] mb-5">
                一時的な解決ではなく、地域自身が課題を解決し続けられる状態をつくる。
                DX・BPO・地域プロデュースの3つの事業が循環することで、それは可能になる。
              </p>
              <p className="text-[11px] font-bold tracking-[0.18em] text-green/60 uppercase">Mission</p>
            </div>
          </AboutAccordionItem>

          <AboutAccordionItem
            title="「生きててよかった！」があふれる世界を創る。"
            titleSize="clamp(22px, 3.2vw, 44px)"
            light
          >
            <div className="max-w-[52ch]">
              <p className="text-[15px] text-ink/52 leading-[2.2] mb-5">
                学生が「ここで挑戦したい」と選ぶ地域。地域の人が自分らしく働ける場所。
                挑戦が挑戦を呼ぶ連鎖が起きる街を、西尾から広げていく。
              </p>
              <p className="text-[11px] font-bold tracking-[0.18em] text-green/60 uppercase">Vision — 2040 / 240プロジェクト</p>
            </div>
          </AboutAccordionItem>

          <div className="border-t border-black/[0.07]" />
        </motion.div>
      </div>
    </section>
  );
}
