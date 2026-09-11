import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/ui/Nav";
import { BookingLink } from "@/components/ui/BookingLink";
import { SitePhoto, SitePhotoFill } from "@/components/ui/SitePhoto";

const problems = [
  "Excelやシステムへの転記が多い",
  "毎月同じ資料を手作業で作成している",
  "請求書作成・送付に時間がかかる",
  "社内情報がバラバラ",
  "ChatGPTを契約したが活用できていない",
  "DX担当者がいない",
  "何から改善すればいいかわからない",
];

const outcomes = [
  { title: "作業時間を減らす。", body: "毎月繰り返している手作業を自動化し、人にしかできない仕事へ時間を戻します。" },
  { title: "ミスを減らす。", body: "転記や集計を仕組み化することで、人的ミスの起きにくい流れに変えます。" },
  { title: "属人化を減らす。", body: "「あの人しかわからない」をなくし、誰が担当しても回る状態をつくります。" },
];

const menu = [
  { name: "AI活用支援", desc: "現場で使えるAIの使いどころを整理し、定着まで伴走。" },
  { name: "AI研修", desc: "チームがAIを使いこなすための実践研修。" },
  { name: "業務整理・DXコンサルティング", desc: "どの作業を減らすべきか、優先順位から設計。" },
  { name: "AI・RPA・GASによる業務自動化", desc: "入力・転記・集計を自動処理に置き換え。" },
  { name: "Notionなどを使った情報整理", desc: "散らばった社内情報を一元化。" },
  { name: "AIエージェント構築", desc: "定型業務を任せられる仕組みをつくる。" },
];

/* §3 時間とコストの試算。試算であることは本文の注記で明示する */
const savings = [
  { value: "60", unit: "分", label: "1日の手作業" },
  { value: "20", unit: "時間", label: "月あたり（20日換算）" },
  { value: "240", unit: "時間", label: "年間で戻る時間" },
  { value: "72", unit: "万円", label: "年間の削減額（試算）" },
];

const steps = [
  { num: "01", title: "相談", desc: "いまの業務と困りごとをお聞きします。何から手をつけるか、一緒に考えます。" },
  { num: "02", title: "業務整理", desc: "業務を分解し、どこに時間がかかっているかを見える化します。" },
  { num: "03", title: "改善提案", desc: "本当に効果のあるところから、改善の優先順位と方法を提案します。" },
  { num: "04", title: "導入・開発", desc: "AI・RPA・GASなどで、現場が実際に使える形に構築します。" },
  { num: "05", title: "運用・改善", desc: "使いながら詰まりを解消し、改善を続けられる状態にします。" },
];

export const metadata: Metadata = {
  title: "西尾・愛知の中小企業向けDX支援 ｜ 業務自動化・AI活用 ｜ Core Shift（Moments Share）",
  description:
    "その作業、人がやらなくていい。毎日の入力・転記・集計・定型対応をAIと自動化で手放す伴走型DX支援「Core Shift」。1日60分の手作業をなくすだけで、年間240時間が戻ります。愛知県西尾市発、中小企業向け。",
  openGraph: {
    title: "西尾・愛知の中小企業向けDX支援 ｜ Core Shift（Moments Share）",
    description:
      "その作業、人がやらなくていい。人の時間を、価値創造へ。毎日の入力・転記・集計をAIと自動化で手放す伴走型DX支援。愛知県西尾市発。",
    locale: "ja_JP",
    type: "website",
    url: "https://moments-share.com/service-dx",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "西尾・愛知の中小企業向けDX支援 ｜ Core Shift（Moments Share）",
    description: "その作業、人がやらなくていい。人の時間を、価値創造へ。愛知県西尾市発の伴走型DX支援。",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Core Shift（DX支援）",
  "description":
    "人の時間を、価値創造へ。毎日の入力・転記・集計・定型対応など、人がやらなくていい仕事をAIと自動化で減らします。まず業務を整理し、本当に効果のあるところから改善する伴走型DX支援です。",
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
  "serviceType": "DXコンサルティング・業務自動化",
  "areaServed": { "@type": "Place", "name": "愛知県 西尾市" },
  "url": "https://moments-share.com/service-dx",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://moments-share.com/" },
      { "@type": "ListItem", "position": 2, "name": "Core Shift（DX支援）", "item": "https://moments-share.com/service-dx" },
    ],
  },
};

export default function ServiceDX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav heroTone="dark" />
      <main id="main-content">
        {/* ===== HERO — 写真背景ヒーロー（TOPと同じトーン） ===== */}
        <section className="relative min-h-[58vh] md:min-h-[66vh] overflow-hidden bg-[#16281f]">
          <div className="absolute inset-0">
            <SitePhotoFill name="dxPageHero" priority sizes="100vw" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, rgba(16,32,42,0.82) 0%, rgba(16,32,42,0.58) 40%, rgba(16,32,42,0.18) 72%, rgba(16,32,42,0) 100%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, rgba(16,32,42,0) 30%, rgba(16,32,42,0.35) 65%, rgba(16,32,42,0.75) 100%)" }}
            />
          </div>
          <div className="relative z-10 min-h-[58vh] md:min-h-[66vh] flex flex-col justify-end max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-14 md:pb-20 pt-32">
            <div className="text-[13px] font-bold tracking-[0.14em] text-white/70">Core Shift｜DX支援</div>
            <h1 className="mt-5 text-white font-semibold leading-[1.16] tracking-[-0.02em]"
                style={{ fontSize: "clamp(36px, 5.2vw, 76px)" }}>
              その作業、<br />人がやらなくていい。
            </h1>
            <p className="mt-6 text-cream font-bold tracking-[0.02em]" style={{ fontSize: "clamp(17px, 2vw, 24px)" }}>
              人の時間を、価値創造へ。
            </p>
            <p className="mt-7 max-w-xl text-[16px] md:text-[17px] leading-[2] text-white/80">
              毎日の入力・転記・集計・定型対応を、AIと自動化で手放す。1日60分の手作業をなくすだけで、年間240時間があなたの会社に戻ります。
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link
                href="/contact"
                className="inline-block text-[14px] font-bold text-white/85 border-b border-white/40 pb-0.5 hover:text-white hover:border-white transition-colors"
              >
                まずは無料でご相談 →
              </Link>
              {/* 話す内容が決まっている人向けの近道。フォームと同格に置く */}
              <BookingLink variant="onGreen" />
            </div>
          </div>
        </section>

        {/* ===== こんな課題 — 7項目を2カラムのテキストリストに ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-charcoal font-semibold leading-[1.25] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3.2vw, 42px)" }}>
                  こんな課題は<br className="hidden sm:block" />ありませんか？
                </h2>
                <p className="mt-6 max-w-md text-[15px] md:text-[16px] leading-[2] text-charcoal/80">
                  一つでも当てはまるなら、減らせる仕事があるかもしれません。まずは業務の整理から始めます。
                </p>
              </div>
              <div className="lg:col-span-8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t border-charcoal/10">
                  {problems.map((p) => (
                    <li key={p} className="flex items-start gap-4 border-b border-charcoal/10 py-5">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal/25" />
                      <p className="text-[15px] md:text-[16px] leading-[1.8] text-charcoal">{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 何が変わる？ — 3つの成果を言明で ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-ivory">
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-3xl">
              <h2 className="text-charcoal font-semibold leading-[1.2] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3.2vw, 42px)" }}>
                何が変わる？
              </h2>
              <p className="mt-6 max-w-[34em] text-[15px] md:text-[16px] leading-[2] text-charcoal/80">
                大切なのは、ツールを入れることではありません。「人がやらなくていい仕事（Non Human Task）」を減らし、時間を価値ある仕事へ戻すことです。
              </p>
            </div>

            {/* §3 削減規模の試算。カードにせず、罫線と数字だけで静かに見せる */}
            <div className="mt-12 md:mt-16">
              <div className="grid grid-cols-2 border-t border-charcoal/15 md:grid-cols-4 md:border-b">
                {savings.map((s) => (
                  <div
                    key={s.label}
                    className="border-t border-charcoal/15 py-7 even:border-l md:border-t-0 md:border-l md:px-7 md:py-9 md:first:border-l-0 md:first:pl-0"
                  >
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className="font-semibold leading-none tracking-[-0.03em] tabular-nums text-charcoal"
                        style={{ fontSize: "clamp(38px, 4.4vw, 60px)" }}
                      >
                        {s.value}
                      </span>
                      <span className="text-[14px] font-bold text-sage-ink">{s.unit}</span>
                    </div>
                    <div className="mt-3 text-[13px] leading-[1.8] text-charcoal/60">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-5 max-w-[40em] text-[12px] leading-[1.9] text-charcoal/55">
                1日60分 × 月20日 ＝ 月20時間、年間240時間。削減額は時給3,000〜3,500円で試算しています。
                ※ 試算および一例です。業務内容によって結果は異なり、効果を保証するものではありません。
              </p>
            </div>

            <div className="mt-14 md:mt-20 flex flex-col divide-y divide-charcoal/10 border-t border-charcoal/10">
              {outcomes.map((o) => (
                <div key={o.title} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-baseline py-9 md:py-11">
                  <h3 className="md:col-span-6 text-charcoal font-semibold leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(20px, 2.4vw, 32px)" }}>
                    {o.title}
                  </h3>
                  <p className="md:col-span-6 max-w-md text-[15px] md:text-[16px] leading-[2] text-charcoal/80">{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CASE — 実績。80％削減を主役に ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-3xl">
              <h2 className="text-charcoal font-semibold leading-[1.2] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3.2vw, 42px)" }}>
                業務を、余白に変えた事例。
              </h2>
            </div>

            {/* 主役：SNS自動化 約80％削減。数字は信頼を伝える情報として扱う */}
            <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end">
              <div className="md:col-span-5">
                <div className="text-[13px] font-semibold tracking-[0.08em] text-charcoal/45 mb-4">SNS自動化</div>
                <div className="flex items-end gap-3">
                  <span className="text-charcoal font-semibold leading-[0.9] tracking-[-0.03em]" style={{ fontSize: "clamp(48px, 6vw, 72px)" }}>
                    約80
                  </span>
                  <span className="text-charcoal font-semibold pb-2" style={{ fontSize: "clamp(18px, 2.2vw, 26px)" }}>％削減</span>
                </div>
              </div>
              <div className="md:col-span-7 md:pb-4">
                <h3 className="text-charcoal font-semibold leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(22px, 2.6vw, 34px)" }}>
                  投稿作業を、30分 → 約6分へ。
                </h3>
                <p className="mt-5 max-w-md text-[15px] md:text-[16px] leading-[2] text-charcoal/80">
                  投稿の企画から公開までの流れを自動化し、毎日の作業を大幅に削減。
                </p>
                <p className="mt-4 max-w-md text-[12px] leading-[1.9] text-charcoal/55">
                  ※ 特定業務での一例です。効果を保証するものではありません。
                </p>
              </div>
            </div>

            {/* 主役事例の現場写真。左揃え・横位置 */}
            <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-8">
                <SitePhoto name="dxWorkflow" sizes="(max-width: 768px) 100vw, 50vw" />
                <p className="mt-3 text-[12px] text-muted">毎日の投稿作業が、6分に。</p>
              </div>
            </div>

            {/* 請求書自動化。テキスト事例 */}
            <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-baseline border-t border-charcoal/10 pt-10 md:pt-12">
              <div className="md:col-span-4 text-[13px] font-semibold tracking-[0.08em] text-charcoal/45">請求書</div>
              <div className="md:col-span-8">
                <h3 className="text-charcoal font-semibold leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(22px, 2.8vw, 36px)" }}>
                  請求書発行の自動化
                </h3>
                <div className="mt-3 text-charcoal font-semibold tracking-[-0.02em]" style={{ fontSize: "clamp(19px, 2.2vw, 27px)" }}>
                  手作業 → 自動化<span className="text-charcoal/60 text-[15px] font-medium ml-3 align-middle">発行・送付を仕組み化</span>
                </div>
                <p className="mt-5 max-w-md text-[15px] md:text-[16px] leading-[2] text-charcoal/80">
                  手作業だった請求書の作成・送付を自動化し、転記の手間を解消。
                </p>
              </div>
            </div>

            {/* 在庫管理 — 左揃えで統一 */}
            <div className="mt-16 md:mt-24 border-t border-charcoal/10 pt-10 md:pt-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end">
                <div className="md:col-span-7">
                  <div className="text-[13px] font-semibold tracking-[0.08em] text-charcoal/45">在庫管理</div>
                  <h3 className="mt-5 text-charcoal font-semibold leading-[1.15] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3.4vw, 48px)" }}>
                    紙＋Excel →<br />一元管理
                  </h3>
                </div>
                <div className="md:col-span-5 md:pb-2">
                  <div className="text-charcoal font-semibold tracking-[-0.02em]" style={{ fontSize: "clamp(18px, 2vw, 24px)" }}>
                    在庫管理の一元化
                  </div>
                  <div className="mt-2 text-[13px] font-medium text-charcoal/50">二重管理を解消</div>
                  <p className="mt-4 max-w-md text-[15px] md:text-[16px] leading-[2] text-charcoal/80">
                    紙とExcelに分かれていた在庫情報を一元管理し、探す・照合する手間を削減。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 md:mt-20">
              <Link
                href="/works"
                className="inline-block border-b border-navy-ink/40 pb-0.5 text-[14px] font-bold text-navy-ink transition-colors hover:border-deep-green hover:text-deep-green"
              >
                実績をもっと見る →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== SERVICE — できること。6項目を番号付きリストに ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-ivory">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-charcoal font-semibold leading-[1.2] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3.2vw, 42px)" }}>
                  できること。
                </h2>
              </div>
              <div className="lg:col-span-8">
                <ul className="border-t border-charcoal/10">
                  {menu.map((m, i) => (
                    <li key={m.name} className="flex items-baseline gap-6 border-b border-charcoal/10 py-6">
                      <span className="text-charcoal/30 font-medium tabular-nums leading-none w-10 shrink-0" style={{ fontSize: "clamp(18px, 2vw, 28px)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-charcoal font-semibold leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(18px, 2vw, 26px)" }}>
                          {m.name}
                        </p>
                        <p className="mt-2 max-w-[30em] text-[14px] md:text-[15px] leading-[1.9] text-charcoal/70">
                          {m.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROCESS — 進め方。01–05のステップ行 ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-3xl">
              <h2 className="text-charcoal font-semibold leading-[1.2] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3.2vw, 42px)" }}>
                進め方。
              </h2>
              {/* §6 着手前の不安を先に消す。距離・期間・保証の3点 */}
              <dl className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-3">
                <div className="border-t-2 border-sage pt-4">
                  <dt className="text-[12px] font-bold tracking-[0.1em] text-charcoal/50">ご対応</dt>
                  <dd className="mt-2 text-[15px] font-bold leading-[1.6] text-charcoal">オンラインで完結</dd>
                </div>
                <div className="border-t-2 border-sage pt-4">
                  <dt className="text-[12px] font-bold tracking-[0.1em] text-charcoal/50">期間</dt>
                  <dd className="mt-2 text-[15px] font-bold leading-[1.6] text-charcoal">全体で約3週間</dd>
                </div>
                <div className="border-t-2 border-sage pt-4">
                  <dt className="text-[12px] font-bold tracking-[0.1em] text-charcoal/50">保証</dt>
                  <dd className="mt-2 text-[15px] font-bold leading-[1.6] text-charcoal">納品後30日間の無料保証</dd>
                </div>
              </dl>
            </div>

            <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
              {steps.map((s) => (
                <div key={s.num} className="border-t border-charcoal/10 pt-5">
                  <div className="text-charcoal/30 font-medium tabular-nums leading-none" style={{ fontSize: "clamp(18px, 2vw, 28px)" }}>
                    {s.num}
                  </div>
                  <h3 className="mt-4 text-charcoal font-semibold tracking-[-0.02em]" style={{ fontSize: "clamp(18px, 2vw, 24px)" }}>
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14px] md:text-[15px] leading-[1.9] text-charcoal/80">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== GOAL — 言明 ===== */}
        <section className="py-20 md:py-36 px-6 md:px-10 bg-ivory">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="max-w-5xl text-charcoal font-semibold leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(26px, 3.6vw, 48px)" }}>
              AIを使える会社ではなく、<br className="hidden sm:block" />仕事を改善し続けられる会社へ。
            </h2>
          </div>
        </section>

        {/* ===== CTA — 緑のバンド＋テラコッタボタン ===== */}
        <section id="contact" className="scroll-mt-20 py-20 md:py-28 px-6 md:px-10 bg-green-deep text-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <h2 className="lg:col-span-8 font-semibold leading-[1.15] tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 3.6vw, 52px)" }}>
                ご相談はこちらから
              </h2>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="text-[15px] leading-[2] text-white/75">
                  「何をAI化すればいいかわからない」という段階でも大丈夫です。
                </p>
                <Link href="/contact" className="mt-6 btn btn-ghost-on-green px-9 py-4">
                  まずは無料でご相談 →
                </Link>
                <p className="mt-5 text-[14px] leading-[1.9] text-white/70">
                  日程が決まっている方は <BookingLink variant="onGreen">予約ページから</BookingLink>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
