"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutName() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section className="bg-[#09090f] overflow-hidden">
      <div ref={ref} className="max-w-[1100px] mx-auto px-8 md:px-20 py-28 md:py-40">

        <motion.p
          className="text-[10px] font-bold tracking-[0.32em] uppercase text-white/20 mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9 }}
        >
          The Name — 社名の由来
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <p
                className="font-black text-white leading-[1.35] tracking-[-0.03em] mb-2"
                style={{ fontSize: "clamp(14px, 1.8vw, 22px)" }}
              >
                <span className="text-white/30">Moments</span>
              </p>
              <p
                className="font-black text-white leading-[1.1] tracking-[-0.05em] mb-12"
                style={{ fontSize: "clamp(52px, 8vw, 108px)" }}
              >
                瞬間。
              </p>
              <p className="text-[16px] text-white/45 leading-[2.2] mb-10">
                「瞬間」は、記憶になる。<br />
                挑戦した日、誰かとつながった日、地域が動き始めた日。<br />
                人生を変える瞬間は、気づかないうちに訪れる。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <p
                className="font-black text-white leading-[1.35] tracking-[-0.03em] mb-2"
                style={{ fontSize: "clamp(14px, 1.8vw, 22px)" }}
              >
                <span className="text-white/30">Share</span>
              </p>
              <p
                className="font-black text-green leading-[1.1] tracking-[-0.05em] mb-12"
                style={{ fontSize: "clamp(52px, 8vw, 108px)" }}
              >
                分かち合う。
              </p>
              <p className="text-[16px] text-white/45 leading-[2.2]">
                「分かち合う」は、循環をつくる。<br />
                喜びも、課題も、挑戦も。<br />
                独りで抱えるより、誰かと共有するほうが、遠くへ行ける。
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="md:pt-16"
          >
            <div className="border-l-2 border-green/30 pl-10 py-4 mb-16">
              <p
                className="font-black text-white leading-[1.5] tracking-[-0.03em]"
                style={{ fontSize: "clamp(20px, 2.8vw, 36px)" }}
              >
                「その瞬間を、<br />一緒に分かち合いたい。」
              </p>
            </div>
            <p className="text-[15px] text-white/38 leading-[2.2]">
              企業が変わった瞬間。地域の人が自分らしく働き始めた瞬間。挑戦者が一歩を踏み出した瞬間。
            </p>
            <p className="mt-6 text-[15px] text-white/38 leading-[2.2]">
              そのどれもが、誰かと分かち合うことで、もっと大きな意味を持つ。
            </p>
            <p className="mt-6 text-[15px] text-white/60 leading-[2.2] font-medium">
              Moments Share。それが、私たちが大切にしている姿勢です。
            </p>

            <div className="mt-16 pt-10 border-t border-white/[0.06]">
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/15 mb-4">設立</p>
              <p className="text-[14px] text-white/35">Moments Share合同会社</p>
              <p className="text-[13px] text-white/22 mt-1">愛知県西尾市</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
