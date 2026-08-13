"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-[#f7f5ef] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-8 md:px-20 py-28 md:py-40">

        <div ref={ref}>
          <motion.p
            className="text-[10px] font-bold tracking-[0.32em] uppercase text-green mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9 }}
          >
            Mission
          </motion.p>

          <motion.h2
            className="font-black text-navy leading-[1.08] tracking-[-0.04em] mb-16"
            style={{ fontSize: "clamp(38px, 6.5vw, 90px)" }}
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            やらなくていい仕事を<br />
            なくし、余白で<br />
            <span className="text-green">地域を動かす。</span>
          </motion.h2>

          <div className="grid md:grid-cols-[3fr_2fr] gap-16 md:gap-24 items-start">
            <motion.p
              className="text-[17px] text-ink/58 leading-[2.2]"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            >
              テクノロジーで業務の無駄を省き、人が本当にやるべきことに集中できる環境をつくる。
              そうして生まれた余白を、地域の人材と挑戦者へつなぐ。<br /><br />
              それが、Moments Shareがすべての事業を通じて追い求めていることです。
            </motion.p>

            <motion.div
              className="space-y-0"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              {[
                { label: "効率のため、ではない", body: "DXは「コスト削減」が目的ではない。人の時間を解放し、可能性を広げるための手段。" },
                { label: "地域の外に出ない", body: "余白は東京に流れない。地域の人材へ委託し、働く場所と誇りを地元に残す。" },
                { label: "一度きりで終わらない", body: "地域の活性化が企業の成長を生み、新たな挑戦へとつながる。循環する仕組みをつくる。" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="py-7 border-t border-black/[0.06] first:border-t-0"
                  initial={{ opacity: 0, x: 12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 + i * 0.1 }}
                >
                  <p className="text-[13px] font-black text-navy tracking-[-0.01em] mb-2">{item.label}</p>
                  <p className="text-[13px] text-ink/45 leading-[1.85]">{item.body}</p>
                </motion.div>
              ))}
              <div className="border-t border-black/[0.06]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
