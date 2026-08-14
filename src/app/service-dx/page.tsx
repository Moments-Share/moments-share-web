import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { ServiceHero } from "@/components/ui/ServiceHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { CountUp } from "@/components/ui/CountUp";

const problems = [
  "Excelやシステムへの転記が多い",
  "毎月同じ資料を手作業している",
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

const cases = [
  {
    tag: "SNS自動化",
    title: "SNS投稿の自動化",
    result: "30分 → 約6分",
    note: "作業時間 約80％削減",
    desc: "投稿の企画から公開までの流れを自動化し、毎日の作業を大幅に削減。",
  },
  {
    tag: "請求書",
    title: "請求書発行の自動化",
    result: "手作業 → 自動化",
    note: "発行・送付を仕組み化",
    desc: "手作業だった請求書の作成・送付を自動化し、転記の手間をなくした。",
  },
  {
    tag: "在庫管理",
    title: "在庫管理の一元化",
    result: "紙＋Excel → 一元管理",
    note: "二重管理を解消",
    desc: "紙とExcelに分かれていた在庫情報を一元管理し、探す・照合する手間を削減。",
  },
];

const menu = [
  "AI活用支援",
  "AI研修",
  "業務整理・DXコンサルティング",
  "AI・RPA・GASによる業務自動化",
  "Notionなどを使った情報整理",
  "AIエージェント構築",
];

const steps = [
  { num: "01", title: "相談", desc: "いまの業務と困りごとをお聞きします。何から手をつけるか、一緒に考えます。" },
  { num: "02", title: "業務整理", desc: "業務を分解し、どこに時間がかかっているかを見える化します。" },
  { num: "03", title: "改善提案", desc: "本当に効果のあるところから、改善の優先順位と方法を提案します。" },
  { num: "04", title: "導入・開発", desc: "AI・RPA・GASなどで、現場が実際に使える形に構築します。" },
  { num: "05", title: "運用・改善", desc: "使いながら詰まりを解消し、改善を続けられる状態にします。" },
];

export const metadata: Metadata = {
  title: "DX支援 Core Shift | Moments Share合同会社",
  description:
    "忙しさを、余白へ。請求書・データ転記・日報集計など、毎月繰り返す業務をAI・自動化で減らす伴走型DX支援。まず業務を整理し、本当に効果のあるところから改善します。愛知県西尾市発。",
  openGraph: {
    title: "DX支援 Core Shift | Moments Share合同会社",
    description:
      "忙しさを、余白へ。毎月繰り返す業務をAI・自動化で減らす伴走型DX支援。まず業務を整理し、効果のあるところから改善します。愛知県西尾市発。",
    locale: "ja_JP",
    type: "website",
    url: "https://moments-share.com/service-dx",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DX支援 Core Shift | Moments Share合同会社",
    description: "忙しさを、余白へ。毎月繰り返す業務をAI・自動化で減らす伴走型DX支援。愛知県西尾市発。",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "DX支援（Core Shift）",
  "description":
    "忙しさを、余白へ。請求書・データ転記・日報集計・情報整理など毎月繰り返す業務を、AIや自動化で減らします。まず業務を整理し、本当に効果のあるところから改善する伴走型DX支援です。",
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
      { "@type": "ListItem", "position": 2, "name": "DX支援", "item": "https://moments-share.com/service-dx" },
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
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <ServiceHero
          label="DX支援"
          brand="Core Shift"
          headline={"忙しさを、\n余白へ。"}
          sub="毎月繰り返している、その仕事。AIや自動化で減らせるかもしれません。請求書。データ転記。日報集計。情報整理。まず業務を整理し、本当に効果のあるところから改善します。"
          accent="#12a0ae"
        />

        {/* Hero CTA */}
        <section className="py-14 px-8 md:px-12 bg-white border-b border-border">
          <div className="mx-auto max-w-5xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="text-[16px] md:text-[18px] font-bold text-navy leading-body">
              どの業務が自動化できそうか、まず一緒に見てみませんか。
            </p>
            <a
              href="/contact"
              className="inline-block shrink-0 bg-teal text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity text-center"
            >
              自動化できる業務を相談する →
            </a>
          </div>
        </section>

        {/* こんな課題はありませんか？ */}
        <section className="py-section px-8 md:px-12 bg-warm">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-teal">CHECK</div>
              <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">
                こんな課題は<br className="hidden sm:block" />ありませんか？
              </h2>
            </FadeIn>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {problems.map((p, i) => (
                <FadeIn key={p} delay={i * 0.05}>
                  <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-border h-full">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-[13px] font-black text-teal">
                      ✓
                    </span>
                    <p className="text-[15px] md:text-[16px] font-bold text-navy leading-body">{p}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.1}>
              <p className="mt-10 text-[15px] md:text-[17px] leading-body text-muted max-w-2xl">
                一つでも当てはまるなら、減らせる仕事があるかもしれません。まずは業務の整理から始めます。
              </p>
            </FadeIn>
          </div>
        </section>

        {/* 何が変わる？ */}
        <section className="py-section px-8 md:px-12">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-teal">WHAT CHANGES</div>
              <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">何が変わる？</h2>
              <p className="mt-6 text-[15px] md:text-[17px] leading-body text-muted max-w-2xl">
                大切なのは、どのツールを使うかではありません。仕事がどう変わるか、です。
              </p>
            </FadeIn>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {outcomes.map((o, i) => (
                <FadeIn key={o.title} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl p-8 border border-border h-full">
                    <h3 className="text-[22px] font-black tracking-heading text-navy leading-heading">{o.title}</h3>
                    <p className="mt-4 text-[14px] leading-relaxed text-muted">{o.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CASE（実績） */}
        <section className="py-section px-8 md:px-12 bg-warm">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-teal">CASE</div>
              <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">
                業務を、余白に変えた事例。
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-10 flex flex-wrap items-baseline gap-3 border-t border-border pt-8">
                <p className="text-[44px] md:text-[64px] font-black tracking-tight text-navy leading-none">
                  <CountUp to={80} suffix="%" duration={2} />
                </p>
                <p className="text-[14px] md:text-[15px] font-bold text-teal">
                  SNS投稿の自動化で、作業時間を約80％削減（30分 → 約6分）
                </p>
              </div>
            </FadeIn>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {cases.map((c, i) => (
                <FadeIn key={c.title} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl p-8 border border-border h-full">
                    <div className="text-[11px] font-bold tracking-wide text-teal">{c.tag}</div>
                    <div className="mt-3 text-[17px] font-bold text-navy">{c.title}</div>
                    <div className="mt-4 text-[24px] md:text-[26px] font-black tracking-tight text-navy leading-tight">
                      {c.result}
                    </div>
                    <div className="mt-1 text-[13px] font-bold text-teal">{c.note}</div>
                    <p className="mt-4 text-[14px] leading-relaxed text-muted">{c.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE（できること） */}
        <section className="py-section px-8 md:px-12">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-teal">SERVICE</div>
              <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">できること。</h2>
            </FadeIn>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {menu.map((m, i) => (
                <FadeIn key={m} delay={i * 0.05}>
                  <div className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-border h-full">
                    <span className="text-[13px] font-black tracking-widest-label text-teal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[16px] md:text-[17px] font-bold text-navy">{m}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-section px-8 md:px-12 bg-warm">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-teal">PROCESS</div>
              <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">進め方。</h2>
            </FadeIn>
            <div className="mt-12 divide-y divide-border border-t border-border">
              {steps.map((s, i) => (
                <FadeIn key={s.num} delay={i * 0.06}>
                  <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-3 md:gap-10 py-8">
                    <div className="text-[40px] font-black text-teal/25 leading-none">{s.num}</div>
                    <div>
                      <h3 className="text-[20px] md:text-[22px] font-black tracking-heading text-navy leading-heading">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-body text-muted max-w-2xl">{s.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* GOAL */}
        <section className="py-section px-8 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-teal">GOAL</div>
              <h2 className="mt-5 text-h2 font-black tracking-heading leading-heading text-navy">
                AIを使える会社ではなく、<br className="hidden sm:block" />仕事を改善し続けられる会社へ。
              </h2>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-24 px-8 md:px-12 bg-navy text-white text-center scroll-mt-24">
          <div className="mx-auto max-w-2xl">
            <div className="text-[11px] font-bold tracking-widest-label text-teal">CONTACT</div>
            <h2 className="mt-5 text-h3 font-black tracking-heading leading-heading">
              まず、自動化できる仕事があるか<br className="hidden sm:block" />一緒に見てみませんか。
            </h2>
            <p className="mt-6 text-[15px] md:text-[16px] leading-body text-white/70">
              「何をAI化すればいいかわからない」という段階でも大丈夫です。
            </p>
            <a
              href="/contact"
              className="mt-10 inline-block bg-teal text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              30分無料相談 →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
