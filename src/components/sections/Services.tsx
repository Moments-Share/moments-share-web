"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import Image from "next/image";

function ServiceDX() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className="grid md:grid-cols-[3fr_2fr] border-t border-black/[0.06]" style={{ minHeight: "80vh" }}>
      <div className="relative overflow-hidden min-h-[55vmin]">
        <motion.div className="absolute inset-0" style={{ scale: photoScale, y: photoY }}>
          <Image
            src="/photos/service-dx.png"
            alt="DX支援"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </motion.div>
        <div className="absolute bottom-6 left-6 pointer-events-none select-none">
          <span className="text-[9px] font-black tracking-[0.3em] uppercase text-white/30">01 / 04</span>
        </div>
      </div>

      <div className="flex flex-col justify-center px-12 md:px-14 py-20 bg-white">
        <FadeIn>
          <p className="text-[9px] font-black tracking-[0.4em] uppercase text-green mb-6">DX支援</p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h3
            className="font-black text-navy leading-[1.08] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            やらされ仕事を、<br />ゼロに。
          </h3>
        </FadeIn>
        <FadeIn delay={0.18}>
          <p className="text-[15px] text-ink/55 leading-[2.1] mb-10 max-w-[28ch]">
            中小企業の請求書発行・データ転記・日報まとめなどをITで自動化し、
            社員が本当にやるべき仕事に集中できる環境をつくります。
          </p>
        </FadeIn>
        <FadeIn delay={0.26}>
          <Link
            href="/service-dx"
            className="inline-flex items-center gap-2 border border-navy/25 text-navy font-bold text-[13px] tracking-[0.04em] px-6 py-3 rounded-full hover:bg-navy hover:text-white transition-colors w-fit"
          >
            くわしく見る →
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}

function ServiceBPO() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ minHeight: "80vh" }}>
      <motion.div className="absolute inset-0 scale-[1.08]" style={{ y: photoY }}>
        <Image
          src="/photos/service-bpo.png"
          alt="BPO"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(5,4,102,0.80) 0%, rgba(5,4,102,0.62) 45%, rgba(6,9,24,0.55) 100%)"
        }} />
      </motion.div>

      <div className="relative z-10 h-full flex items-center" style={{ minHeight: "80vh" }}>
        <div className="max-w-[1100px] mx-auto px-8 md:px-20 w-full">
          <FadeIn>
            <p className="text-[9px] font-black tracking-[0.4em] uppercase text-green mb-6">BPO</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3
              className="font-black text-white leading-[1.08] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(36px, 6vw, 84px)" }}
            >
              採用の前に、<br />外注という選択肢。
            </h3>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[16px] text-white/55 leading-[2.1] mb-10 max-w-[38ch]">
              求人を出しても来ない。それなら、定型業務は地域のプロへ。
              採用コストをかけずに、社員はコア業務に集中できます。
            </p>
          </FadeIn>
          <FadeIn delay={0.28}>
            <Link
              href="/service-bpo"
              className="inline-flex items-center gap-2 border border-white/35 text-white font-bold text-[13px] tracking-[0.04em] px-6 py-3 rounded-full hover:bg-white hover:text-navy transition-colors w-fit"
            >
              くわしく見る →
            </Link>
          </FadeIn>
          <div className="absolute bottom-8 right-8 md:right-20 select-none pointer-events-none">
            <span className="text-[9px] font-black tracking-[0.3em] uppercase text-white/20">02 / 04</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceProduce() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className="grid md:grid-cols-[2fr_3fr] border-t border-black/[0.06] bg-[#f7f5ef]" style={{ minHeight: "80vh" }}>
      <div className="flex flex-col justify-center px-12 md:px-14 py-20">
        <FadeIn>
          <p className="text-[9px] font-black tracking-[0.4em] uppercase text-green mb-6">地域プロデュース</p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h3
            className="font-black text-navy leading-[1.08] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            「好き」を、<br />力に変える。
          </h3>
        </FadeIn>
        <FadeIn delay={0.18}>
          <p className="text-[15px] text-ink/55 leading-[2.1] mb-10 max-w-[28ch]">
            西尾市内で働き方図鑑・AI研究会など複数のプロジェクトを運営し、
            地域の人が挑戦しやすい場をつくっています。
          </p>
        </FadeIn>
        <FadeIn delay={0.26}>
          <Link
            href="/service-produce"
            className="inline-flex items-center gap-2 border border-navy/25 text-navy font-bold text-[13px] tracking-[0.04em] px-6 py-3 rounded-full hover:bg-navy hover:text-white transition-colors w-fit"
          >
            くわしく見る →
          </Link>
        </FadeIn>
      </div>

      <div className="relative overflow-hidden min-h-[55vmin]">
        <motion.div className="absolute inset-0" style={{ scale: photoScale, y: photoY }}>
          <Image
            src="/photos/service-produce.png"
            alt="地域プロデュース"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </motion.div>
        <div className="absolute bottom-6 right-6 pointer-events-none select-none">
          <span className="text-[9px] font-black tracking-[0.3em] uppercase text-white/50">03 / 04</span>
        </div>
      </div>
    </div>
  );
}

function ServiceAITraining() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className="grid md:grid-cols-[3fr_2fr] border-t border-black/[0.06]" style={{ minHeight: "80vh" }}>
      <div className="relative overflow-hidden min-h-[55vmin] bg-[#1b2140]">
        <motion.div className="absolute inset-0" style={{ scale: photoScale, y: photoY }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span style={{ fontSize: "clamp(80px, 14vw, 180px)" }} className="select-none opacity-10">🤖</span>
          </div>
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse at 30% 50%, rgba(0,200,120,0.12) 0%, transparent 70%)"
          }} />
        </motion.div>
        <div className="absolute bottom-6 left-6 pointer-events-none select-none">
          <span className="text-[9px] font-black tracking-[0.3em] uppercase text-white/30">04 / 04</span>
        </div>
      </div>

      <div className="flex flex-col justify-center px-12 md:px-14 py-20 bg-white">
        <FadeIn>
          <p className="text-[9px] font-black tracking-[0.4em] uppercase text-green mb-6">AI研修・教育訓練</p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h3
            className="font-black text-navy leading-[1.08] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            AIを、<br />現場の武器に。
          </h3>
        </FadeIn>
        <FadeIn delay={0.18}>
          <p className="text-[15px] text-ink/55 leading-[2.1] mb-10 max-w-[28ch]">
            ChatGPT・生成AIの基礎から実務活用まで、中小企業の現場に合わせた研修・勉強会を提供します。
            「使えるAI人材」を、地域の中から育てます。
          </p>
        </FadeIn>
        <FadeIn delay={0.26}>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 border border-navy/25 text-navy font-bold text-[13px] tracking-[0.04em] px-6 py-3 rounded-full hover:bg-navy hover:text-white transition-colors w-fit"
          >
            相談してみる →
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}

const approachCards = [
  {
    num: "01",
    label: "DX支援",
    heading: "やらされ仕事を、ゼロに。",
    body: "中小企業の繰り返し業務をITで自動化し、社員が本当にやるべき仕事に集中できる環境をつくります。",
    href: "/service-dx",
    color: "#232a4d",
  },
  {
    num: "02",
    label: "BPO",
    heading: "採用の前に、外注という選択肢。",
    body: "定型業務を地域のプロへ。採用コストをかけずに、社員はコア業務に集中できます。",
    href: "/service-bpo",
    color: "#232a4d",
  },
  {
    num: "03",
    label: "地域プロデュース",
    heading: "「好き」を、力に変える。",
    body: "西尾市内で複数のプロジェクトを運営し、地域の人が挑戦しやすい場をつくっています。",
    href: "/service-produce",
    color: "#12a0ae",
  },
];

function ApproachCard({
  num, label, heading, body, href, color, index,
}: {
  num: string; label: string; heading: string; body: string; href: string; color: string; index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="border border-black/[0.08] rounded-2xl p-8 md:p-10 flex flex-col gap-6 bg-white hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, x: -48 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-black tracking-[0.32em] uppercase" style={{ color }}>
          {label}
        </span>
        <span className="text-[11px] font-black tracking-[0.1em] text-black/20">{num}</span>
      </div>
      <h3
        className="font-black text-navy leading-[1.2] tracking-[-0.03em]"
        style={{ fontSize: "clamp(20px, 2.2vw, 30px)" }}
      >
        {heading}
      </h3>
      <p className="text-[14px] text-ink/50 leading-[1.9] flex-1">{body}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.04em] text-navy/60 hover:text-navy transition-colors w-fit mt-auto"
      >
        くわしく見る →
      </Link>
    </motion.div>
  );
}

export function Services() {
  const headRef = useRef(null);
  const isHeadInView = useInView(headRef, { once: true, amount: 0.4 });

  return (
    <section id="services">

      {/* ─── 大見出し ─── */}
      <div className="max-w-[1100px] mx-auto px-8 md:px-20 pt-section pb-16">
        <div ref={headRef}>
          <motion.p
            className="text-[9px] font-black tracking-[0.36em] uppercase text-green mb-12"
            initial={{ opacity: 0 }}
            animate={isHeadInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            OUR APPROACH
          </motion.p>
          <motion.h2
            className="font-black text-navy leading-[1.06] tracking-[-0.05em] mb-6"
            style={{ fontSize: "clamp(52px, 10vw, 140px)" }}
            initial={{ opacity: 0, y: 32 }}
            animate={isHeadInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            DX × BPO ×<br />
            <span className="text-green">地域プロデュース</span>
          </motion.h2>
          <motion.p
            className="text-ink/45 font-medium"
            style={{ fontSize: "clamp(15px, 1.6vw, 20px)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={isHeadInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          >
            3つのアプローチで、<br />
            地域に挑戦と共創の循環を生み出します。
          </motion.p>
        </div>

        {/* ─── スライドカード ─── */}
        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {approachCards.map((card, i) => (
            <ApproachCard key={i} index={i} {...card} />
          ))}
        </div>
      </div>

      {/* ─── 詳細セクション ─── */}
      <ServiceDX />
      <ServiceBPO />
      <ServiceProduce />
      <ServiceAITraining />
    </section>
  );
}
