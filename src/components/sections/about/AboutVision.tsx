"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-[#1b2140] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-8 md:px-20 py-28 md:py-40">

        <div ref={ref}>
          <motion.p
            className="text-[10px] font-bold tracking-[0.32em] uppercase text-green mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9 }}
          >
            Vision
          </motion.p>

          <motion.h2
            className="font-black text-white leading-[1.08] tracking-[-0.04em] mb-20"
            style={{ fontSize: "clamp(38px, 6.5vw, 90px)" }}
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            「生きててよかった」が<br />
            あふれる地域を、<br />
            <span className="text-green">西尾から。</span>
          </motion.h2>

          <motion.div
            className="h-px bg-white/[0.06] mb-20"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          />

          <div className="grid md:grid-cols-3 gap-0">
            {[
              {
                num: "2040",
                label: "年を目標に",
                body: "持続する地域経済の仕組みを完成させる期限。2040年、西尾はどんな街になっているか。",
              },
              {
                num: "240",
                label: "事業を西尾に",
                body: "2·4·0 = に·し·お。語呂合わせから始まった、本気の目標。240の灯りが西尾に灯るとき、循環は完成する。",
              },
              {
                num: "∞",
                label: "挑戦の連鎖",
                body: "240が終点ではない。1つの挑戦が次の挑戦を生む、無限の循環をここから始める。",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="px-0 md:px-10 py-12 md:py-0 md:border-r border-b md:border-b-0 border-white/[0.06] last:border-r-0 last:border-b-0 first:pl-0"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 + i * 0.12 }}
              >
                <p
                  className="font-black text-white leading-none tracking-[-0.06em] mb-4"
                  style={{ fontSize: "clamp(52px, 6.5vw, 80px)" }}
                >
                  {item.num}
                </p>
                <p className="text-[11px] font-bold tracking-[0.14em] text-green/65 mb-5">{item.label}</p>
                <p className="text-[13px] text-white/30 leading-[1.9]">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-24 pt-16 border-t border-white/[0.06]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.7 }}
          >
            <p
              className="font-black text-white/50 leading-[1.5] tracking-[-0.02em]"
              style={{ fontSize: "clamp(18px, 2.5vw, 34px)" }}
            >
              学生が「ここで挑戦したい」と選ぶ地域。<br />
              地域の人が自分らしく、誇りを持って働ける場所。<br />
              <span className="text-white/80">企業と地域がつながり、挑戦が挑戦を呼ぶ。</span><br />
              <span className="text-white/80">そんな循環が西尾に生まれることを信じています。</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
