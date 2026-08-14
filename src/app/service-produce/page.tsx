import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/ui/Nav";
import { PhotoNeeded } from "@/components/ui/PhotoNeeded";

// 実在するプロジェクトのみ掲載する。架空の名称・事例は作成しない。
const projects = [
  {
    name: "西尾働き方図鑑",
    cat: "メディア",
    desc: "地域で働く人・企業を取材して発信するメディア。「こんな仕事があるんだ」という出会いが、地元で働く選択肢を広げる。",
    ongoing: false,
  },
  {
    name: "西尾筋肉祭り",
    cat: "イベント",
    desc: "体を動かして地域を盛り上げる体験型イベント。世代を越えた出会いをつくり、地域への愛着を育てる。",
    ongoing: false,
  },
  {
    name: "AI活用研究会",
    cat: "コミュニティ",
    desc: "地域の企業・個人がAIを学び合うコミュニティ。現場で使える知識を共有し、挑戦のきっかけをつくる。",
    ongoing: false,
  },
  {
    name: "その他のプロジェクト",
    cat: "PROJECTS",
    desc: "地域の「やってみたい」から、新しいプロジェクトが今も生まれ続けています。",
    ongoing: true,
  },
];

// 地域推し活サイクル（知るへループする循環）
const cycle = ["知る", "好きになる", "応援する", "関わる", "挑戦する", "共創する", "次の挑戦へ"];
// 円周上の座標（%）。中心(50,50)、半径42%、上(知る)から時計回り。
const cyclePos = [
  { left: 50, top: 8 },
  { left: 82.8, top: 23.8 },
  { left: 90.9, top: 59.3 },
  { left: 68.2, top: 87.8 },
  { left: 31.8, top: 87.8 },
  { left: 9.1, top: 59.3 },
  { left: 17.2, top: 23.8 },
];

const howWeWork = [
  { step: "01", title: "人をつなぐ。", body: "課題を持つ人と、「やってみたい」を持つ人を引き合わせる。" },
  { step: "02", title: "場をつくる。", body: "出会いが生まれ、挑戦が動き出すきっかけと場をつくる。" },
  { step: "03", title: "カタチにする。", body: "アイデアで終わらせず、プロジェクトや事業として動かす。" },
  { step: "04", title: "次につなぐ。", body: "一つの挑戦を、次の誰かの挑戦へとつなげていく。" },
];

export const metadata: Metadata = {
  title: "地域プロデュース | Moments Share合同会社",
  description:
    "地域課題を、挑戦のきっかけへ。地域の課題と、人や企業の「やってみたい」をつなぎ、新しいプロジェクトや事業が生まれる場をつくります。西尾働き方図鑑・西尾筋肉祭り・AI活用研究会など。愛知県西尾市発。",
  openGraph: {
    title: "地域プロデュース | Moments Share合同会社",
    description: "地域課題を、挑戦のきっかけへ。人・企業・地域をつなぎ、挑戦と共創の循環をつくります。",
    locale: "ja_JP",
    type: "website",
    url: "https://moments-share.com/service-produce",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "地域プロデュース | Moments Share合同会社",
    description: "地域課題を、挑戦のきっかけへ。挑戦と共創の循環を、西尾から。",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "地域プロデュース",
  "description":
    "地域の課題と、人や企業の「やってみたい」をつなぎ、新しいプロジェクトや事業が生まれるきっかけと場をつくります。",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Moments Share合同会社",
    "url": "https://moments-share.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "西尾市",
      "addressRegion": "愛知県",
      "addressCountry": "JP",
    },
  },
  "serviceType": "地域プロデュース・コミュニティ運営・イベント企画",
  "areaServed": { "@type": "Place", "name": "愛知県 西尾市" },
  "url": "https://moments-share.com/service-produce",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://moments-share.com/" },
      { "@type": "ListItem", "position": 2, "name": "地域プロデュース", "item": "https://moments-share.com/service-produce" },
    ],
  },
};

export default function ServiceProduce() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content">
        {/* ===== HERO — 光の編集表紙。大きな緑の見出し＋夜市の写真（人が主役）を非対称に ===== */}
        <section className="pt-28 md:pt-32 pb-16 md:pb-24 px-6 md:px-10">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
              <div className="lg:col-span-7 lg:pb-6">
                <div className="flex items-center gap-3 text-terra text-[12px] font-bold tracking-[0.2em]">
                  <span className="w-8 h-px bg-terra" />
                  地域プロデュース — NISHIO, AICHI
                </div>
                <h1
                  className="mt-8 text-green font-black leading-[1.12] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(44px, 7vw, 104px)" }}
                >
                  地域課題を、<br />挑戦の<br />きっかけへ。
                </h1>
                <p className="mt-8 max-w-xl text-[16px] md:text-[17px] leading-[2] text-charcoal/80">
                  地域の課題と、人や企業の「やってみたい」をつなぐ。人をつなぎ、仲間を集め、
                  新しいプロジェクトや事業が生まれるきっかけと場をつくります。
                </p>
                <div className="mt-8 flex items-center gap-8 text-[14px] font-bold">
                  <Link
                    href="/contact"
                    className="text-green border-b border-green/60 pb-0.5 hover:text-terra hover:border-terra transition-colors"
                  >
                    一緒にプロジェクトをつくる
                  </Link>
                  <Link href="#projects" className="text-charcoal/60 hover:text-green transition-colors">
                    取り組みを見る →
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/photos/service-produce.png"
                    alt="西尾の夜市で笑い合う地域の人々"
                    fill
                    priority
                    sizes="(max-width:1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-[12px] text-muted">西尾の夜市にて。地域を動かすのは、いつも一人ひとりの人だ。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== OUR PHILOSOPHY — 大きなタイポ主体。余白に西尾の街の写真を小さく添える ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-3">
                <div className="text-charcoal/40 text-[12px] font-bold tracking-[0.16em] lg:sticky lg:top-24">
                  OUR PHILOSOPHY
                </div>
                <div className="hidden lg:block relative aspect-[3/4] mt-8 w-full">
                  <Image
                    src="/photos/hero.png"
                    alt="西尾の街並み"
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-9 lg:pl-8">
                <h2
                  className="text-green font-semibold leading-[1.18] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}
                >
                  地域愛を、<br />地域発展の力に。
                </h2>
                <div className="mt-10 max-w-2xl space-y-6 text-[16px] md:text-[18px] leading-[2.1] text-charcoal/85">
                  <p>
                    地域を良くするために、最初から大きなことをする必要はないと思っています。
                    好きなお店に行く。面白い人を誰かに紹介する。地域のイベントに参加する。「こんなことをやってみたい」と声にする。
                  </p>
                  <p>
                    そんな一人ひとりの小さな行動が、人をつなぎ、新しい挑戦を生み、やがて地域を動かす力になっていく。
                  </p>
                  <p className="text-green font-semibold text-[19px] md:text-[24px] leading-[1.6] tracking-[-0.01em] pt-2">
                    私たちは、地域への「好き」を、行動へ変えていきます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROJECTS — 均等カードをやめ、案件ごとに異なる誌面レイアウトで見せる ===== */}
        <section id="projects" className="scroll-mt-20 py-16 md:py-28 px-6 md:px-10 bg-ivory">
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-3xl">
              <div className="text-charcoal/40 text-[12px] font-bold tracking-[0.16em]">PROJECTS</div>
              <h2
                className="mt-4 text-green font-semibold leading-[1.25] tracking-[-0.02em]"
                style={{ fontSize: "clamp(26px, 3.4vw, 42px)" }}
              >
                挑戦の、入り口をつくる。
              </h2>
              <p className="mt-6 text-[16px] md:text-[18px] leading-[2] text-charcoal/80">
                人・企業・地域をつなぎながら、西尾で取り組んでいるプロジェクト。
                一つひとつが、次の挑戦者を呼ぶ入り口になる。
              </p>
            </div>

            <div className="mt-16 md:mt-24 flex flex-col gap-20 md:gap-32">
              {/* 01 西尾働き方図鑑 — FEATURE。大きな写真を主役に据えた誌面特集 */}
              <article>
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-charcoal/30 font-medium tabular-nums leading-none"
                    style={{ fontSize: "clamp(18px, 2vw, 28px)" }}
                  >
                    01
                  </span>
                  <span className="text-charcoal/40 text-[13px] font-semibold tracking-[0.16em]">
                    {projects[0].cat}
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
                  <div className="md:col-span-8">
                    <PhotoNeeded ratio="16/10" kind="MOMENTS" note="取材・活動中の様子（横）" />
                  </div>
                  <div className="md:col-span-4">
                    <h3
                      className="text-green font-semibold leading-[1.22] tracking-[-0.02em]"
                      style={{ fontSize: "clamp(26px, 3.2vw, 40px)" }}
                    >
                      {projects[0].name}
                    </h3>
                    <p className="mt-5 text-[15px] md:text-[16px] leading-[2] text-charcoal/80">
                      {projects[0].desc}
                    </p>
                  </div>
                </div>
              </article>

              {/* 02 西尾筋肉祭り — 写真を横に添えた中サイズ。01と異なる左右構成 */}
              <article className="border-t border-charcoal/10 pt-12 md:pt-16">
                <div className="flex items-baseline gap-3">
                  <span className="text-charcoal/30 font-medium tabular-nums leading-none" style={{ fontSize: "clamp(18px, 2vw, 28px)" }}>02</span>
                  <span className="text-charcoal/40 text-[13px] font-semibold tracking-[0.16em]">{projects[1].cat}</span>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
                  <div className="md:col-span-5">
                    <PhotoNeeded ratio="4/3" kind="MOMENTS" note="イベント準備・活動中の様子（横）" />
                  </div>
                  <div className="md:col-span-7">
                    <h3 className="text-green font-semibold leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 2.8vw, 34px)" }}>{projects[1].name}</h3>
                    <p className="mt-4 max-w-xl text-[15px] md:text-[16px] leading-[2] text-charcoal/80">{projects[1].desc}</p>
                  </div>
                </div>
              </article>

              {/* 03 AI活用研究会 — 写真なしのテキスト誌面ロウ。連番＋本文の非対称 */}
              <article className="border-t border-charcoal/10 pt-12 md:pt-16">
                <div className="flex items-baseline gap-3">
                  <span className="text-charcoal/30 font-medium tabular-nums leading-none" style={{ fontSize: "clamp(18px, 2vw, 28px)" }}>03</span>
                  <span className="text-charcoal/40 text-[13px] font-semibold tracking-[0.16em]">{projects[2].cat}</span>
                </div>
                <div className="mt-4 max-w-xl">
                  <h3 className="text-green font-semibold leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 2.8vw, 34px)" }}>{projects[2].name}</h3>
                  <p className="mt-4 text-[15px] md:text-[16px] leading-[2] text-charcoal/80">{projects[2].desc}</p>
                </div>
              </article>

              {/* 04 その他 — 進行中のステートメントバンド（緑帯・角丸なし・バッジなし） */}
              <article className="bg-green text-white p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
                  <div className="md:col-span-8">
                    <div className="flex items-baseline gap-4 text-[13px] font-semibold tracking-[0.16em]">
                      <span className="text-white/50">{projects[3].cat}</span>
                      {projects[3].ongoing && <span className="text-white/60">進行中</span>}
                    </div>
                    <h3
                      className="mt-4 font-semibold leading-[1.25] tracking-[-0.02em]"
                      style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
                    >
                      {projects[3].name}
                    </h3>
                    <p className="mt-5 max-w-lg text-[15px] md:text-[16px] leading-[2] text-white/80">
                      {projects[3].desc}
                    </p>
                  </div>
                  <div className="md:col-span-4">
                    <Link
                      href="/contact"
                      className="inline-block bg-terra text-white font-bold px-9 py-4 rounded-full hover:opacity-90 transition-opacity"
                    >
                      次の挑戦を持ち込む →
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ===== 地域推し活 — 循環リング。緑×テラコッタ / アイボリー基調 ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-3xl">
              <div className="text-charcoal/40 text-[12px] font-bold tracking-[0.16em]">地域推し活</div>
              <h2
                className="mt-4 text-green font-semibold leading-[1.25] tracking-[-0.02em]"
                style={{ fontSize: "clamp(26px, 3.4vw, 42px)" }}
              >
                好きになることから、<br className="hidden sm:block" />地域は動きはじめる。
              </h2>
              <p className="mt-6 text-[16px] md:text-[18px] leading-[2] text-charcoal/80">
                「好き」から始まる関わりが、応援を生み、行動になり、やがて挑戦と共創へ。
                その循環が、また次の「好き」を連れてくる。
              </p>
            </div>

            {/* 循環サイクル図 */}
            <div className="mt-16 md:mt-20">
              {/* デスクトップ：リング */}
              <div className="hidden md:block">
                <div className="relative mx-auto aspect-square w-full max-w-[620px]">
                  {/* リングの土台 */}
                  <div className="absolute inset-[9%] rounded-full border-2 border-dashed border-green/25" />
                  {/* 中心 */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[46%]">
                    <div className="text-[15px] font-semibold tracking-[-0.02em] text-green">地域推し活</div>
                    <div className="mt-2 text-[12px] font-medium text-charcoal/60 leading-[1.8]">
                      好き → 応援 → 行動<br />→ 挑戦 → 共創
                    </div>
                  </div>
                  {/* ノード */}
                  {cycle.map((label, i) => (
                    <div
                      key={label}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${cyclePos[i].left}%`, top: `${cyclePos[i].top}%` }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-green text-white text-[13px] font-semibold flex items-center justify-center">
                          {i + 1}
                        </div>
                        <div className="mt-2 whitespace-nowrap rounded-full bg-ivory border border-charcoal/10 px-4 py-1.5 text-[13px] font-semibold text-green">
                          {label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-center text-[13px] font-medium text-terra">
                  ↻ 「次の挑戦へ」は、また「知る」へ戻り、循環しつづける。
                </p>
              </div>

              {/* モバイル：縦フロー */}
              <div className="md:hidden mt-4">
                <div className="rounded-2xl border border-charcoal/10 bg-ivory p-6">
                  <div className="text-center text-[14px] font-semibold tracking-[-0.02em] text-green">地域推し活</div>
                  <div className="mt-1 text-center text-[12px] font-medium text-charcoal/60">
                    好き → 応援 → 行動 → 挑戦 → 共創
                  </div>
                  <ol className="mt-6 space-y-0">
                    {cycle.map((label, i) => (
                      <li key={label}>
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 shrink-0 rounded-full bg-green text-white text-[12px] font-semibold flex items-center justify-center">
                            {i + 1}
                          </div>
                          <div className="text-[15px] font-semibold text-green">{label}</div>
                        </div>
                        {i < cycle.length - 1 && (
                          <div className="ml-3 h-5 border-l-2 border-green/25" aria-hidden="true" />
                        )}
                      </li>
                    ))}
                  </ol>
                  <div className="mt-4 text-[12px] font-medium text-terra">↻ 「知る」へ戻り、循環しつづける。</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== OUR GOAL — 大きなステートメント ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-ivory">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-5">
                <div className="text-charcoal/40 text-[12px] font-bold tracking-[0.16em]">OUR GOAL</div>
                <h2
                  className="mt-4 text-green font-semibold leading-[1.2] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}
                >
                  挑戦する人を、<br />一人ずつ増やす。
                </h2>
              </div>
              <div className="lg:col-span-7 lg:pt-3">
                <div className="max-w-2xl space-y-6 text-[16px] md:text-[18px] leading-[2.1] text-charcoal/85">
                  <p>
                    イベントを開催すること自体がゴールではありません。地域の中に「自分もやってみよう」と思う人が増えること。
                  </p>
                  <p>
                    一人の挑戦に仲間が集まり、新しい仕事や価値が生まれ、その姿が次の誰かを動かす。
                    そんな挑戦と共創の循環をつくります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MID-TERM GOAL — 240 をテラコッタの大数字グラフィックで（TOP呼応） ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-charcoal/40 text-[12px] font-bold tracking-[0.16em]">MID-TERM GOAL</div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="md:col-span-7">
                <div className="text-[15px] md:text-[17px] font-semibold text-charcoal/70">2040年までに、</div>
                <div className="mt-2 flex flex-wrap items-end gap-x-5 gap-y-2">
                  <div className="flex items-end text-green leading-[0.85] font-semibold tracking-[-0.04em]">
                    <span style={{ fontSize: "clamp(88px, 13vw, 160px)" }}>
                      240
                    </span>
                    <span className="text-[26px] md:text-[40px] ml-2 pb-2 md:pb-4">事業</span>
                  </div>
                  <div className="text-[20px] md:text-[28px] font-semibold text-green pb-3 md:pb-5">を、西尾に。</div>
                </div>
              </div>
              <div className="md:col-span-5 md:pl-10">
                <h2
                  className="text-green font-semibold leading-[1.25] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}
                >
                  まずは、西尾から。
                </h2>
                <p className="mt-5 text-[15px] leading-[2] text-charcoal/80">
                  数を追うことが目的ではありません。一つひとつの事業の裏に、挑戦した人がいる。その積み重ねを、西尾で。
                </p>
                <p className="mt-4 text-[13px] text-muted">
                  ※ 240事業はVisionではなく、私たちが掲げる中期目標です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== HOW WE WORK — 4ステップを大きな連番の編集ロウで（均等カードをやめる） ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-ivory">
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-3xl">
              <div className="text-charcoal/40 text-[12px] font-bold tracking-[0.16em]">HOW WE WORK</div>
              <h2
                className="mt-4 text-green font-semibold leading-[1.25] tracking-[-0.02em]"
                style={{ fontSize: "clamp(26px, 3.4vw, 42px)" }}
              >
                私たちの進め方。
              </h2>
            </div>

            <div className="mt-14 md:mt-20 flex flex-col divide-y divide-charcoal/10">
              {howWeWork.map((h) => (
                <div
                  key={h.step}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 items-baseline py-8 md:py-10"
                >
                  <div className="md:col-span-3">
                    <span
                      className="text-charcoal/30 font-medium tabular-nums leading-none"
                      style={{ fontSize: "clamp(18px, 2vw, 28px)" }}
                    >
                      {h.step}
                    </span>
                  </div>
                  <h3
                    className="md:col-span-4 text-green font-semibold tracking-[-0.02em] leading-[1.3]"
                    style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
                  >
                    {h.title}
                  </h3>
                  <p className="md:col-span-5 text-[15px] md:text-[16px] leading-[2] text-charcoal/80">
                    {h.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA — Deep Green のバンド＋テラコッタボタンで締める ===== */}
        <section id="contact" className="scroll-mt-20 py-20 md:py-28 px-6 md:px-10 bg-green text-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-white/60 text-[12px] font-bold tracking-[0.16em]">CONTACT</div>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <h2
                className="lg:col-span-8 font-semibold leading-[1.15] tracking-[-0.02em]"
                style={{ fontSize: "clamp(30px, 4.6vw, 60px)" }}
              >
                地域に、<br />一緒に仕掛けませんか。
              </h2>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="text-[15px] leading-[2] text-white/75">
                  「こんなことをやってみたい」から話しましょう。まだアイデアがふわっとしていても大丈夫です。
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-block bg-terra text-white font-bold px-9 py-4 rounded-full hover:opacity-90 transition-opacity"
                >
                  一緒にプロジェクトをつくる →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
