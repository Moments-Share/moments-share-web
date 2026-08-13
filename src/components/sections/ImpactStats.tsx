"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { num: "6",       suffix: "",       label: "共創する仲間",   desc: "共に地域に挑戦するメンバー数" },
  { num: "—",       suffix: "",       label: "協賛企業",       desc: "活動を支援してくださる企業（準備中）" },
  { num: "4",       suffix: " / 240", label: "生み出した事業", desc: "目標240事業に向けた現在の実績" },
  { num: "100",     suffix: "+",      label: "挑戦した数",     desc: "西尾で生まれた挑戦のトータル数" },
];

export function ImpactStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section className="bg-[#06091a] overflow-hidden border-t border-white/[0.05]">
      <div className="max-w-[1100px] mx-auto px-8 md:px-20 pb-section">

        <div ref={ref} className="grid md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="py-12 md:py-0 md:px-10 first:pl-0 last:pr-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.12 }}
            >
              <p
                className="font-black text-white leading-none tracking-[-0.06em] mb-3"
                style={{ fontSize: "clamp(44px, 5.5vw, 72px)" }}
              >
                {s.num}
                {s.suffix && (
                  <span
                    className="font-black text-white/60"
                    style={{ fontSize: "clamp(18px, 2vw, 26px)", letterSpacing: "-0.03em" }}
                  >
                    {s.suffix}
                  </span>
                )}
              </p>
              <p className="text-[11px] font-black tracking-[0.12em] text-green/70 mb-2">{s.label}</p>
              <p className="text-[11px] text-white/35 leading-[1.85]">{s.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
