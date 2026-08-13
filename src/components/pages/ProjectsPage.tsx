"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

const ease = [0.22, 1, 0.36, 1] as const;

const CATEGORIES = [
  "すべて",
  "仕事・キャリア",
  "IT・DX",
  "地域活性化",
  "子育て・教育",
  "健康・福祉",
  "観光・文化",
  "農業・食",
] as const;

type Category = (typeof CATEGORIES)[number];
type Status = "実施中" | "計画中" | "準備中";

interface Project {
  id: number;
  category: Category;
  title: string;
  desc: string;
  status: Status;
  service?: string;
}

const PROJECTS: Project[] = [
  // ── 実施中 ──
  {
    id: 1,
    category: "仕事・キャリア",
    title: "BPO：地域の人材に企業のバックオフィス業務を",
    desc: "西尾の子育て中・副業希望者が企業の定型業務を担うBPOモデル。採用コストを下げ、地域に仕事をつくる。",
    status: "実施中",
    service: "BPO",
  },
  {
    id: 2,
    category: "IT・DX",
    title: "中小企業のDX支援：やらされ仕事を自動化",
    desc: "業務フロー分析→ツール選定→導入→定着まで伴走。人がやらなくていい仕事をITでゼロに近づける。",
    status: "実施中",
    service: "DX",
  },
  {
    id: 3,
    category: "仕事・キャリア",
    title: "AI研修：現場担当者がAIを使いこなせる体制づくり",
    desc: "ツール提供ではなく人を育てる。現場の担当者が自走してAIを活用できるようになるまで伴走する研修。",
    status: "実施中",
    service: "AI研修",
  },
  {
    id: 4,
    category: "地域活性化",
    title: "地域プロデュース：西尾の「好き」を仕事に",
    desc: "地域の人・企業・行政をつなぎ、西尾らしい仕事と体験をつくるプロデュース事業。",
    status: "実施中",
    service: "プロデュース",
  },

  // ── 準備中 ──
  {
    id: 5,
    category: "子育て・教育",
    title: "子育て中の親が在宅で働ける仕組み",
    desc: "保育の合間にできるスキマ仕事を地域企業とマッチング。働く意欲はあっても出勤できない人の活躍を支援。",
    status: "準備中",
  },
  {
    id: 6,
    category: "IT・DX",
    title: "地域のDXリテラシー底上げ講座",
    desc: "ITが苦手な地域の個人事業主・商店に向けた、「まずここから」のDX入門ワークショップシリーズ。",
    status: "準備中",
  },

  // ── 計画中 ──
  {
    id: 7,
    category: "農業・食",
    title: "農家の後継ぎ問題×副業人材マッチング",
    desc: "農繁期だけ手伝える地域人材を農家につなぐプラットフォーム。農業の入口を増やす。",
    status: "計画中",
  },
  {
    id: 8,
    category: "観光・文化",
    title: "西尾の抹茶文化を世界に発信するDXプロジェクト",
    desc: "日本一の抹茶産地・西尾を、デジタルコンテンツとローカルガイドで世界につなぐ。",
    status: "計画中",
  },
  {
    id: 9,
    category: "健康・福祉",
    title: "高齢者の生活支援×デジタル活用",
    desc: "スマートフォンの使い方から始まる、シニア向けデジタル生活支援サービス。",
    status: "計画中",
  },
  {
    id: 10,
    category: "子育て・教育",
    title: "子どもたちへのプログラミング・AI体験教育",
    desc: "西尾の小中学生が「つくる楽しさ」を知るための、地域密着型STEAM教育プログラム。",
    status: "計画中",
  },
  {
    id: 11,
    category: "地域活性化",
    title: "空き店舗×スタートアップのマッチング",
    desc: "商店街の空き物件と起業家をつなぎ、西尾のまちなかに新しい挑戦の場をつくる。",
    status: "計画中",
  },
  {
    id: 12,
    category: "仕事・キャリア",
    title: "Uターン・Iターン人材の就労支援プログラム",
    desc: "西尾に戻りたい・来たいけど仕事がない人に、地域企業とのマッチングと伴走支援を提供。",
    status: "計画中",
  },
  {
    id: 13,
    category: "農業・食",
    title: "食の安全×農業のブランディング支援",
    desc: "地元農家の強みをストーリーで可視化し、価格競争から抜け出すブランディングを支援。",
    status: "計画中",
  },
  {
    id: 14,
    category: "観光・文化",
    title: "インバウンド向け西尾まち歩きコンテンツ開発",
    desc: "海外からの観光客に、西尾の本物の暮らし文化を体験してもらうツーリズムプログラム。",
    status: "計画中",
  },
  {
    id: 15,
    category: "地域活性化",
    title: "企業×学生の地域課題ハッカソン",
    desc: "地域の中小企業と大学生がチームを組み、リアルな業務課題をITで解決する場をつくる。",
    status: "計画中",
  },
];

const STATUS_STYLE: Record<Status, string> = {
  実施中: "bg-green text-white",
  準備中: "bg-navy/10 text-navy",
  計画中: "bg-black/5 text-muted",
};

const TOTAL_GOAL = 240;
const ACTIVE_COUNT = PROJECTS.filter((p) => p.status === "実施中").length;

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("すべて");

  const filtered =
    activeCategory === "すべて"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const completedInFilter = filtered.filter((p) => p.status === "実施中").length;

  return (
    <div className="bg-white">

      {/* ─── Hero / Counter ─── */}
      <section className="relative bg-[#1b2140] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 85% 20%, rgba(0,196,122,0.07) 0%, transparent 50%), radial-gradient(ellipse at 5% 85%, rgba(5,4,102,0.25) 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-20 pt-40 pb-24 md:pb-32">
          <motion.p
            className="text-[10px] font-bold tracking-[0.3em] uppercase text-green mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            240 Projects
          </motion.p>

          {/* Big counter */}
          <motion.div
            className="flex items-end gap-4 mb-8"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.4 }}
          >
            <span
              className="font-black text-white leading-none tracking-[-0.05em]"
              style={{ fontSize: "clamp(72px, 13vw, 180px)" }}
            >
              {ACTIVE_COUNT}
            </span>
            <div className="flex flex-col pb-4">
              <span
                className="font-black text-white/25 leading-none tracking-[-0.04em]"
                style={{ fontSize: "clamp(36px, 6vw, 90px)" }}
              >
                / {TOTAL_GOAL}
              </span>
            </div>
          </motion.div>

          <motion.p
            className="text-white/50 leading-[2.0] max-w-[50ch] mb-4"
            style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
          >
            Moments Shareが取り組む、西尾の地域課題プロジェクト。<br />
            240の課題に、一つひとつ答えを出していく。
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6 text-[12px] font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green inline-block" />
              <span className="text-white/60">実施中 {PROJECTS.filter(p => p.status === "実施中").length}件</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-navy/40 inline-block" />
              <span className="text-white/60">準備中 {PROJECTS.filter(p => p.status === "準備中").length}件</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
              <span className="text-white/60">計画中 {PROJECTS.filter(p => p.status === "計画中").length}件</span>
            </span>
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-20 pb-12">
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(ACTIVE_COUNT / TOTAL_GOAL) * 100}%` }}
              transition={{ duration: 1.4, ease, delay: 0.8 }}
            />
          </div>
          <p className="text-[11px] text-white/25 mt-2 font-bold tracking-[0.1em]">
            {((ACTIVE_COUNT / TOTAL_GOAL) * 100).toFixed(1)}% 達成
          </p>
        </div>
      </section>

      {/* ─── Filter + Cards ─── */}
      <section className="py-section bg-white">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">

          {/* Category filter */}
          <FadeIn>
            <div className="mb-12">
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-muted mb-4">
                地域課題カテゴリから選ぶ
              </p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[13px] font-bold px-4 py-2 rounded-full border transition-all ${
                      activeCategory === cat
                        ? "bg-ink text-white border-ink"
                        : "bg-white text-ink/60 border-black/12 hover:border-ink/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Result count */}
          <FadeIn delay={0.05}>
            <p className="text-[13px] text-muted mb-8">
              {filtered.length}件のプロジェクト
              {activeCategory !== "すべて" && (
                <span className="text-green font-bold ml-2">— {activeCategory}</span>
              )}
            </p>
          </FadeIn>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease }}
                  className={`relative rounded-[4px] p-7 border flex flex-col gap-4 ${
                    project.status === "実施中"
                      ? "border-green/20 bg-[#e9f6f7]"
                      : project.status === "準備中"
                      ? "border-navy/10 bg-[#eef1f6]/60"
                      : "border-black/[0.06] bg-white"
                  }`}
                >
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold tracking-[0.12em] px-2.5 py-1 rounded-full ${STATUS_STYLE[project.status]}`}
                    >
                      {project.status}
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.08em] text-muted/60 border border-black/[0.06] px-2 py-0.5 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-black leading-[1.35] tracking-[-0.02em] ${
                      project.status === "計画中" ? "text-ink/45" : "text-ink"
                    }`}
                    style={{ fontSize: "clamp(15px, 1.4vw, 17px)" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-[13px] leading-[1.9] ${
                      project.status === "計画中" ? "text-muted/50" : "text-muted"
                    }`}
                  >
                    {project.desc}
                  </p>

                  {/* Service tag */}
                  {project.service && (
                    <div className="mt-auto pt-2">
                      <span className="text-[10px] font-bold text-green tracking-[0.1em]">
                        ▸ {project.service}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Remaining slots (計画中の空枠) */}
              {activeCategory === "すべて" &&
                Array.from({ length: Math.min(6, TOTAL_GOAL - PROJECTS.length) }).map(
                  (_, i) => (
                    <motion.div
                      key={`empty-${i}`}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="rounded-[4px] p-7 border border-dashed border-black/[0.06] flex items-center justify-center min-h-[160px]"
                    >
                      <p className="text-[12px] text-muted/30 font-bold tracking-[0.1em] text-center leading-[2.0]">
                        次の課題を<br />探しています
                      </p>
                    </motion.div>
                  )
                )}
            </AnimatePresence>
          </div>

          {/* More hint */}
          <FadeIn delay={0.2}>
            <div className="mt-12 py-10 border-t border-black/[0.06] text-center">
              <p className="text-[14px] text-muted leading-[2.0] mb-6">
                まだ{TOTAL_GOAL - PROJECTS.length}件分の課題が、西尾には眠っています。<br />
                「こんな課題を解決してほしい」という声も大歓迎です。
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-green text-white font-bold text-[14px] tracking-[0.02em] px-7 py-3.5 rounded-full hover:bg-[#0f8f9c] transition-colors"
              >
                課題を相談する →
              </Link>
            </div>
          </FadeIn>

        </div>
      </section>

    </div>
  );
}
