"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({
  children,
  delay = 0,
  className = "",
  from = "bottom",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  from?: "bottom" | "left" | "right";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const initial =
    from === "left"
      ? { opacity: 0, x: -40, y: 0 }
      : from === "right"
      ? { opacity: 0, x: 40, y: 0 }
      : { opacity: 0, x: 0, y: 36 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

const leftIssue = {
  label: "企業の現場から",
  title: "「人が来ない、\n仕事も回らない」",
  body: "採用コストが上がっても人が来ない。社員は毎日、転記・集計・報告書作成に追われる。本来やるべき「お客様との時間」が、全然取れていない。",
  tags: ["採用難", "業務過多", "生産性低下"],
};

const rightIssue = {
  label: "地域で働きたい人から",
  title: "「出たくないけど、\n仕事がない」",
  body: "スキルはある。時間もある。でも地元に合う仕事がない。主婦・学生・シニア・副業人材——「週3日・在宅・スキル活用」を探し続けている。",
  tags: ["雇用機会の不足", "人材流出", "スキル未活用"],
};

export function Issue() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="issue" className="bg-[#f5f4f0]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-section">

        {/* ラベル + タイトル */}
        <div ref={ref}>
          <motion.p
            className="text-[10px] font-black tracking-[0.34em] uppercase text-green mb-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            Issue
          </motion.p>
          <motion.h2
            className="font-black text-ink leading-[1.15] tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(34px, 5.5vw, 72px)" }}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            企業は人手が足りない。<br />
            若者は地元に仕事がない。
          </motion.h2>
          <motion.p
            className="text-[16px] md:text-[18px] text-ink/60 mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            この2つは、実はひとつの構造問題です。
          </motion.p>
        </div>

        {/* VS 構造 */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-stretch mb-10 md:mb-14">

          {/* 左：企業側 */}
          <FadeIn from="left">
            <div className="bg-white rounded-2xl p-8 md:p-10 h-full border border-black/06 shadow-sm">
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-navy/50 mb-5">
                {leftIssue.label}
              </p>
              <h3
                className="font-black text-navy leading-[1.35] mb-6"
                style={{ fontSize: "clamp(24px, 2.8vw, 36px)" }}
              >
                {leftIssue.title.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h3>
              <p className="text-[15px] md:text-[16px] text-ink/70 leading-[1.9] border-l-2 border-navy/20 pl-4 mb-6">
                {leftIssue.body}
              </p>
              <div className="flex flex-wrap gap-2">
                {leftIssue.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] font-bold text-navy border border-navy/25 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 中央：VS コネクター */}
          <FadeIn delay={0.1}>
            <div className="flex md:flex-col items-center justify-center gap-3 py-4 md:py-0">
              <div className="hidden md:block w-px flex-1 bg-black/10" />
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-ink text-white font-black text-[13px] shrink-0">
                VS
              </div>
              <div className="hidden md:block w-px flex-1 bg-black/10" />
              <div className="block md:hidden h-px flex-1 bg-black/10" />
              <div className="block md:hidden h-px flex-1 bg-black/10" />
            </div>
          </FadeIn>

          {/* 右：地域人材側 */}
          <FadeIn from="right">
            <div className="bg-white rounded-2xl p-8 md:p-10 h-full border border-green/20 shadow-sm">
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green/70 mb-5">
                {rightIssue.label}
              </p>
              <h3
                className="font-black text-green leading-[1.35] mb-6"
                style={{ fontSize: "clamp(24px, 2.8vw, 36px)" }}
              >
                {rightIssue.title.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h3>
              <p className="text-[15px] md:text-[16px] text-ink/70 leading-[1.9] border-l-2 border-green/30 pl-4 mb-6">
                {rightIssue.body}
              </p>
              <div className="flex flex-wrap gap-2">
                {rightIssue.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] font-bold text-green border border-green/30 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Root Cause → Our Approach ブリッジ */}
        <FadeIn delay={0.15}>
          <div className="bg-navy rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="flex-1">
                <p className="text-[10px] font-black tracking-[0.3em] uppercase text-green mb-4">
                  Root Cause → Our Approach
                </p>
                <p
                  className="font-bold text-white leading-[1.85]"
                  style={{ fontSize: "clamp(17px, 2.2vw, 24px)" }}
                >
                  2つの問題は、切り離されているから解けない。<br />
                  <span className="text-green">企業の繰り返し仕事をITで消し</span>、<br />
                  <span className="text-green">生まれた仕事を地域の人へつなぐ</span>——<br />
                  この循環を設計すれば、両方が動き出します。
                </p>
                <p className="text-[14px] text-white/50 mt-5 leading-[1.7]">
                  これがMoments Shareの出発点であり、3事業が一体である理由です。
                </p>
              </div>
              <div className="flex flex-col items-center shrink-0 text-center">
                <span className="text-[40px] text-green font-black leading-none">↓</span>
                <span className="text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase mt-1">
                  Solution
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
