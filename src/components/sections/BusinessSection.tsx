"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const CARDS = [
  {
    num: "01",
    location: "愛知・西尾",
    category: "DX支援",
    heading: "やらされ仕事を、\nゼロに。",
    href: "/service-dx",
    photo: "/photos/service-dx.png",
    accentColor: "#00c47a",
  },
  {
    num: "02",
    location: "愛知・西尾",
    category: "BPO",
    heading: "採用の前に、\n外注という選択肢。",
    href: "/service-bpo",
    photo: "/photos/service-bpo.png",
    accentColor: "#00c47a",
  },
  {
    num: "03",
    location: "愛知・西尾",
    category: "地域プロデュース",
    heading: "「好き」を、\n力に変える。",
    href: "/service-produce",
    photo: "/photos/service-produce.png",
    accentColor: "#00c47a",
  },
  {
    num: "04",
    location: "愛知・西尾",
    category: "AI研修・教育訓練",
    heading: "AIを、\n現場の武器に。",
    href: "#contact",
    photo: null,
    accentColor: "#00c47a",
  },
];

export function BusinessSection() {
  const headRef = useRef(null);
  const isHeadInView = useInView(headRef, { once: true, amount: 0.35 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    const target = cards[index];
    if (!target) return;
    el.scrollTo({ left: target.offsetLeft - 32, behavior: "smooth" });
    setCurrent(index);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-card]"));
      const midX = el.scrollLeft + el.clientWidth / 2;
      let nearest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - midX);
        if (dist < minDist) { minDist = dist; nearest = i; }
      });
      setCurrent(nearest);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="services" className="bg-white overflow-hidden">

      {/* ── ヘッダー ── */}
      <div ref={headRef} className="max-w-[1100px] mx-auto px-8 md:px-20 pt-section pb-14">
        <motion.p
          className="text-[9px] font-black tracking-[0.38em] uppercase text-green mb-10"
          initial={{ opacity: 0 }}
          animate={isHeadInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          OUR BUSINESS
        </motion.p>
        <motion.h2
          className="font-black text-navy leading-[1.06] tracking-[-0.05em]"
          style={{ fontSize: "clamp(40px, 7.5vw, 100px)" }}
          initial={{ opacity: 0, y: 32 }}
          animate={isHeadInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          DX・BPO・<br />
          <span className="text-green">地域プロデュース</span>で、<br />
          挑戦の循環をつくります。
        </motion.h2>
      </div>

      {/* ── カルーセル ── */}
      <div
        ref={scrollRef}
        className="flex gap-5 pl-8 md:pl-20 overflow-x-auto snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
      >
        {CARDS.map((card, i) => (
          <Link
            key={i}
            href={card.href}
            data-card=""
            className="flex-shrink-0 snap-start group block"
            style={{ width: "clamp(280px, 40vw, 480px)" }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              style={{ height: "clamp(380px, 58vw, 600px)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            >
              {/* 背景 */}
              {card.photo ? (
                <Image
                  src={card.photo}
                  alt={card.category}
                  fill
                  className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
              ) : (
                <div className="absolute inset-0 bg-[#0a0f2e] flex items-center justify-center">
                  <span style={{ fontSize: "clamp(80px, 12vw, 140px)" }} className="opacity-[0.08] select-none">🤖</span>
                </div>
              )}

              {/* グラデーション */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(5,4,102,0.88) 0%, rgba(5,4,102,0.35) 45%, rgba(5,4,102,0.05) 75%, transparent 100%)"
                }}
              />

              {/* 上部：番号 + 地域 */}
              <div className="absolute top-5 left-6 flex items-center gap-3">
                <span className="text-[10px] font-black tracking-[0.18em] text-white/40">{card.num}</span>
                <span className="text-white/20 text-[10px]">|</span>
                <span className="text-[10px] text-white/40 tracking-[0.06em]">{card.location}</span>
              </div>

              {/* 下部：カテゴリ + 見出し + リンク */}
              <div className="absolute bottom-0 left-0 right-0 px-6 md:px-8 pb-7 md:pb-8">
                <p
                  className="text-[9px] font-black tracking-[0.3em] uppercase mb-4"
                  style={{ color: card.accentColor }}
                >
                  {card.category}
                </p>
                <p
                  className="font-black text-white leading-[1.22] tracking-[-0.03em] whitespace-pre-line"
                  style={{ fontSize: "clamp(22px, 3.2vw, 38px)" }}
                >
                  {card.heading}
                </p>
                <div className="flex items-center gap-2 mt-5 text-white/40 text-[11px] font-bold tracking-[0.1em] group-hover:text-white transition-colors duration-300">
                  くわしく見る
                  <span className="inline-block group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}

        {/* 末尾スペーサー */}
        <div className="flex-shrink-0" style={{ width: "clamp(16px, 5vw, 64px)" }} />
      </div>

      {/* ── ナビゲーション ── */}
      <div className="max-w-[1100px] mx-auto px-8 md:px-20 pt-10 pb-section flex items-center gap-5">
        <button
          onClick={() => scrollTo(Math.max(0, current - 1))}
          disabled={current === 0}
          aria-label="前へ"
          className="w-11 h-11 rounded-full border border-black/[0.13] flex items-center justify-center text-navy text-[13px] disabled:opacity-20 hover:bg-navy hover:text-white hover:border-navy transition-colors"
        >
          ←
        </button>
        <span className="text-[11px] font-black tracking-[0.12em] text-ink/30 tabular-nums min-w-[3rem]">
          {String(current + 1).padStart(2, "0")} / {String(CARDS.length).padStart(2, "0")}
        </span>
        <button
          onClick={() => scrollTo(Math.min(CARDS.length - 1, current + 1))}
          disabled={current === CARDS.length - 1}
          aria-label="次へ"
          className="w-11 h-11 rounded-full border border-black/[0.13] flex items-center justify-center text-navy text-[13px] disabled:opacity-20 hover:bg-navy hover:text-white hover:border-navy transition-colors"
        >
          →
        </button>
        <div className="flex gap-2 ml-2">
          {CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`${i + 1}番目へ`}
              className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
              style={{ background: i === current ? "#050466" : "rgba(5,4,102,0.15)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
