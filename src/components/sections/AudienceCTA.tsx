"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const cards = [
  {
    label: "DX支援",
    href: "/service-dx",
    headline: "終わらない転記作業を、\n人の仕事に変えたい企業の方へ",
    sub: "ツールより先に、課題を整理します。中小・地方企業専門の伴走型DX支援。",
    color: "#12a0ae",
    accent: "bg-green",
  },
  {
    label: "BPO",
    href: "/service-bpo",
    headline: "地元で、\n自分らしく働きたい方へ",
    sub: "企業のバックオフィス業務を、地域の人が担います。週3〜・在宅OKの仕事も。",
    color: "#232a4d",
    accent: "bg-navy",
  },
  {
    label: "地域プロデュース",
    href: "/service-produce",
    headline: "西尾で、\n何か始めたい方へ",
    sub: "コミュニティ・メディア・イベント。挑戦したい人の最初の一歩を、一緒につくります。",
    color: "#12a0ae",
    accent: "bg-green",
  },
];

export function AudienceCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="bg-[#f7f5ef] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-8 md:px-20 py-24 md:py-36">

        <div className="mb-14 md:mb-20">
          <motion.p
            className="text-[10px] font-bold tracking-[0.32em] uppercase text-ink/20 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            For You
          </motion.p>
          <motion.h2
            className="font-black text-navy leading-[1.1] tracking-[-0.04em]"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            あなたに合った入り口から。
          </motion.h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-px bg-black/[0.05]">
          {cards.map((card, i) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.12 }}
            >
              <Link
                href={card.href}
                className="group flex flex-col h-full bg-[#f7f5ef] hover:bg-white transition-colors p-10 md:p-12"
              >
                <span
                  className="text-[10px] font-black tracking-[0.22em] uppercase mb-6 inline-block"
                  style={{ color: card.color }}
                >
                  {card.label}
                </span>
                <p
                  className="font-black text-navy leading-[1.45] tracking-[-0.02em] mb-6 whitespace-pre-line flex-1"
                  style={{ fontSize: "clamp(17px, 1.8vw, 22px)" }}
                >
                  {card.headline}
                </p>
                <p className="text-[13px] text-ink/45 leading-[1.9] mb-8">{card.sub}</p>
                <span
                  className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] uppercase group-hover:gap-4 transition-all"
                  style={{ color: card.color }}
                >
                  詳しく見る
                  <span>→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
