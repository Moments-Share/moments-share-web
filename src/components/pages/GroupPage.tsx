"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

const ease = [0.22, 1, 0.36, 1] as const;

const BUSINESSES = [
  {
    num: "01",
    tag: "DX支援",
    title: "やらされ仕事を、ゼロに。",
    desc: "業務フロー分析から自動化ツール導入まで、企業の「人がやらなくていい仕事」をITで消していきます。",
    color: "bg-navy",
    textColor: "text-white",
    href: "/service-dx",
  },
  {
    num: "02",
    tag: "BPO",
    title: "採用の前に、外注という選択肢。",
    desc: "定型業務を地域の専門人材へ。採用コストをかけずに、社員はコア業務に集中できます。",
    color: "bg-[#f4f6ff]",
    textColor: "text-ink",
    href: "/service-bpo",
  },
  {
    num: "03",
    tag: "地域プロデュース",
    title: "「好き」を、力に変える。",
    desc: "地域の人・企業・行政をつなぎ、西尾らしい仕事と体験をつくります。",
    color: "bg-green",
    textColor: "text-white",
    href: "/service-produce",
  },
  {
    num: "04",
    tag: "AI研修・教育訓練",
    title: "AIを、現場の武器に。",
    desc: "現場担当者が自走できるAI活用スキルを伝えます。ツール提供ではなく、使いこなす人を育てます。",
    color: "bg-ink",
    textColor: "text-white",
    href: "/#services",
  },
];

const NUMBERS = [
  { value: "4", unit: "事業", label: "DX・BPO・プロデュース・AI研修" },
  { value: "240", unit: "の夢", label: "取り組みたい地域課題プロジェクト数" },
  { value: "2024", unit: "年創業", label: "愛知県西尾市発" },
  { value: "1", unit: "人から", label: "小さく始め、大きく育てる" },
];

export function GroupPage() {
  return (
    <div className="bg-white">

      {/* ─── Hero ─── */}
      <section className="relative min-h-[70vh] bg-[#06091a] flex flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 30%, rgba(0,196,122,0.08) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(5,4,102,0.3) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-20 pb-20 md:pb-28 pt-40">
          <motion.p
            className="text-[10px] font-bold tracking-[0.3em] uppercase text-green mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Company
          </motion.p>
          <motion.h1
            className="font-black text-white leading-[1.08] tracking-[-0.04em] mb-8"
            style={{ fontSize: "clamp(44px, 7.5vw, 108px)" }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.4 }}
          >
            地域に循環を。<br />
            <span className="text-green">西尾から始める。</span>
          </motion.h1>
          <motion.p
            className="text-white/50 leading-[2.0] max-w-[52ch]"
            style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.7 }}
          >
            Moments Share合同会社は、愛知県西尾市を拠点に<br />
            DX・BPO・地域プロデュース・AI研修の4事業を展開する会社です。<br />
            企業の「やらされ仕事」をITでなくし、<br />
            生まれた時間と仕事を地域でつなぐ——その循環を、ここから始めます。
          </motion.p>
        </div>
      </section>

      {/* ─── 循環モデル ─── */}
      <section className="py-section bg-warm">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <FadeIn>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-5">
              Our Model
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2
              className="font-black text-ink leading-[1.2] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              「やらされ仕事ゼロ」で<br />
              地域に好循環を生む。
            </h2>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-muted leading-[2.0] max-w-[60ch] mb-16" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
              企業がITで繰り返し作業をなくすと、空いた仕事と時間が生まれます。
              その仕事を地域で働きたい人につなぎ、企業は本業に集中できる。
              地域の人は好きなまちで稼げる。その循環が、西尾を元気にします。
            </p>
          </FadeIn>

          {/* 循環図 */}
          <FadeIn delay={0.2}>
            <div className="relative max-w-[800px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {[
                  { step: "STEP 1", label: "企業のやらされ仕事を", highlight: "ITでゼロに", icon: "⚡" },
                  { step: "STEP 2", label: "空いた時間と仕事を", highlight: "地域の人へ", icon: "🔗" },
                  { step: "STEP 3", label: "地域が活性化し", highlight: "挑戦が生まれる", icon: "🌱" },
                ].map((item, i) => (
                  <div key={i} className="relative flex flex-col items-center text-center p-8">
                    {i < 2 && (
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10">
                        <div className="w-8 h-[2px] bg-green/40" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-green/40 border-y-[4px] border-y-transparent" />
                      </div>
                    )}
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-green mb-3">{item.step}</p>
                    <p className="text-[14px] text-muted leading-[1.7] mb-1">{item.label}</p>
                    <p className="text-[16px] font-black text-ink">{item.highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 4事業 ─── */}
      <section className="py-section bg-white">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <FadeIn>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-5">
              4 Businesses
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2
              className="font-black text-ink leading-[1.2] tracking-[-0.03em] mb-16"
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              4つの事業が、<br />地域を動かす。
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-4">
            {BUSINESSES.map((b, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <Link
                  href={b.href}
                  className={`group block rounded-[4px] p-10 md:p-12 transition-transform hover:-translate-y-1 ${b.color}`}
                >
                  <div className="flex items-start justify-between mb-8">
                    <span className={`text-[10px] font-bold tracking-[0.22em] uppercase opacity-50 ${b.textColor}`}>
                      {b.num}
                    </span>
                    <span className={`text-[11px] font-bold tracking-[0.1em] border px-3 py-1 rounded-full ${
                      b.textColor === "text-white"
                        ? "border-white/25 text-white/70"
                        : "border-ink/20 text-ink/60"
                    }`}>
                      {b.tag}
                    </span>
                  </div>
                  <h3
                    className={`font-black leading-[1.2] tracking-[-0.03em] mb-4 ${b.textColor}`}
                    style={{ fontSize: "clamp(20px, 2.2vw, 30px)" }}
                  >
                    {b.title}
                  </h3>
                  <p className={`text-[14px] leading-[1.9] ${
                    b.textColor === "text-white" ? "text-white/60" : "text-muted"
                  }`}>
                    {b.desc}
                  </p>
                  <div className={`mt-8 text-[12px] font-bold tracking-[0.1em] flex items-center gap-2 ${
                    b.textColor === "text-white" ? "text-white/50" : "text-muted"
                  }`}>
                    詳しく見る <span>→</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 数字で見るMoments Share ─── */}
      <section className="py-section bg-[#06091a]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <FadeIn>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-5">
              Numbers
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2
              className="font-black text-white leading-[1.2] tracking-[-0.03em] mb-16"
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              数字で見る<br />Moments Share
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {NUMBERS.map((n, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-end gap-1 mb-2">
                    <span
                      className="font-black text-white leading-none tracking-[-0.04em]"
                      style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
                    >
                      {n.value}
                    </span>
                    <span className="text-green font-bold text-[16px] mb-1">{n.unit}</span>
                  </div>
                  <p className="text-[12px] text-white/35 leading-[1.7]">{n.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 会社情報 ─── */}
      <section className="py-section bg-warm">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <FadeIn>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-5">
              Company Info
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2
              className="font-black text-ink leading-[1.2] tracking-[-0.03em] mb-12"
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              会社情報
            </h2>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="max-w-[640px]">
              {[
                { label: "会社名", value: "Moments Share合同会社" },
                { label: "代表社員", value: "中根 隆（Ryu Nakane）" },
                { label: "所在地", value: "愛知県西尾市" },
                { label: "設立", value: "2024年" },
                { label: "事業内容", value: "DX支援・BPO・地域プロデュース・AI研修・教育訓練" },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-8 py-5 border-b border-black/[0.06]"
                >
                  <span className="text-[12px] font-bold tracking-[0.1em] text-muted min-w-[100px]">
                    {row.label}
                  </span>
                  <span className="text-[15px] text-ink">{row.value}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-section bg-white">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 text-center">
          <FadeIn>
            <h2
              className="font-black text-ink leading-[1.2] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
            >
              まず、<span className="text-green">30分だけ話しませんか。</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted leading-[2.0] mb-10" style={{ fontSize: "clamp(14px, 1.5vw, 16px)" }}>
              業務課題のご相談から、地域連携のアイデアまで。<br />
              まずは気軽にお話しください。
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-green text-white font-bold text-[14px] tracking-[0.02em] px-8 py-4 rounded-full hover:bg-[#00a868] transition-colors"
              >
                お問い合わせ →
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-black/15 text-ink font-bold text-[14px] tracking-[0.02em] px-8 py-4 rounded-full hover:bg-black/5 transition-colors"
              >
                240プロジェクトの進捗を見る →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
