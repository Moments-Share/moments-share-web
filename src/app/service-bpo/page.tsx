import { Nav } from "@/components/ui/Nav";
import { ServiceHero } from "@/components/ui/ServiceHero";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

const services = [
  { cat: "カスタマーサポート", title: "CS代行", desc: "メール対応・チャット対応・クレーム対応。丁寧なCS業務を、地域の人材が担います。" },
  { cat: "SNS・デジタル", title: "SNS運用代行", desc: "投稿企画から運用まで。DXツールと組み合わせ、低コストで質の高い発信を実現。" },
  { cat: "バックオフィス", title: "事務・データ入力", desc: "書類整理・データ入力・請求書処理。正確さと誠実さで、現場の負荷を下げます。" },
  { cat: "営業サポート", title: "インサイドセールス", desc: "見込み客のリストアップ・アポ取得・フォロー。地方の人材が全国の営業を支援。" },
  { cat: "コンテンツ", title: "ライティング・編集", desc: "ブログ・メルマガ・資料作成。AIとの組み合わせで、スピードと品質を両立。" },
  { cat: "採用・HR", title: "採用サポート", desc: "求人票作成・応募者対応・面接調整。採用の煩雑な作業をアウトソース。" },
];

const fits = {
  yes: [
    "本業に集中したいが、バックオフィスが手薄",
    "DX導入したが人手が足りない",
    "地方・リモート対応に前向き",
    "採用コストより業務委託のほうがフレキシブル",
    "業務が定型化されている（またはしたい）",
  ],
  no: [
    "毎日対面でのやりとりが必要",
    "機密性が高く外部委託が難しい業務",
    "業務が毎回異なり、マニュアル化が困難",
    "品質より最低コストを最優先にしたい",
  ],
};

export const metadata = {
  title: "BPO | Moments Share合同会社",
  description: "都会に流れていた仕事を、地元で働きたい人の手へ。DXで生まれた余白を地域人材が担う、Moments ShareのBPOサービス。愛知県西尾市発。",
  openGraph: {
    title: "BPO | Moments Share合同会社",
    description: "都会に流れていた仕事を、地元で働きたい人の手へ。企業の集中と地域雇用を、同時に実現します。",
    locale: "ja_JP",
    type: "website",
    url: "https://momentsshare.com/service-bpo",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BPO | Moments Share合同会社",
    description: "都会に流れていた仕事を、地元で働きたい人の手へ。企業の集中と地域雇用を同時に実現。",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "BPO（業務プロセスアウトソーシング）",
  "description": "DXで生まれた余白を地域人材が担う。企業は本業に集中し、地域に自分らしい働き方が生まれます。",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Moments Share合同会社",
    "url": "https://momentsshare.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "西尾市",
      "addressRegion": "愛知県",
      "addressCountry": "JP",
    },
  },
  "serviceType": "BPO・業務委託・アウトソーシング",
  "areaServed": { "@type": "Place", "name": "愛知県 西尾市" },
  "url": "https://momentsshare.com/service-bpo",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://momentsshare.com/" },
      { "@type": "ListItem", "position": 2, "name": "BPO", "item": "https://momentsshare.com/service-bpo" },
    ],
  },
};

export default function ServiceBPO() {
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
          label="BPO"
          headline={"地域の人が、\n企業の力になる。"}
          sub="DXで生まれた余白を、地域の人材が担う。企業は本業に集中し、地域は自分らしい働き方を手に入れる。"
          accent="#232a4d"
        />

        {/* DX → BPO → 地域雇用の流れ */}
        <section className="py-section bg-white">
          <div className="max-w-[1200px] mx-auto px-8 md:px-16">
            <FadeIn>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">The Concept</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-ink leading-[1.2] tracking-[-0.03em] mb-16"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
              >
                DXの次は、<br />人の力を活かす。
              </h2>
            </FadeIn>

            {/* フロー図 */}
            <div className="relative">
              <div className="grid md:grid-cols-3 gap-0">
                {[
                  {
                    step: "Step 01",
                    color: "bg-accent",
                    title: "DXで余白をつくる",
                    body: "業務を自動化・効率化し、「人がやらなくていい仕事」を削減。企業に余白が生まれる。",
                  },
                  {
                    step: "Step 02",
                    color: "bg-navy",
                    title: "余白を地域人材に渡す",
                    body: "残った業務を、地域で働く人材がリモートで担う。企業はコア業務に集中できる。",
                  },
                  {
                    step: "Step 03",
                    color: "bg-green",
                    title: "地域に自分らしい働き方が生まれる",
                    body: "子育て中・介護中・地方在住。様々な事情を持つ人が、自分のペースで仕事に関わることができる。",
                  },
                ].map((item, i) => (
                  <FadeIn key={item.step} delay={i * 0.12}>
                    <div className="relative">
                      <div className={`${item.color} px-10 py-12 h-full`}>
                        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 mb-6">{item.step}</p>
                        <p className="text-[19px] font-black text-white leading-[1.4] mb-5">{item.title}</p>
                        <p className="text-[14px] text-white/60 leading-[1.9]">{item.body}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn delay={0.4}>
                <div className="mt-12 p-8 border border-black/[0.06] bg-[#f7f5ef]">
                  <p className="text-[14px] text-muted leading-[2.0] text-center">
                    DX支援で業務を整理した後にBPOへ移行するのが、Moments Shareの一気通貫モデルです。<br />
                    ツールと人材を同じチームが設計するから、引き渡しがスムーズ。
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* サービスメニュー */}
        <section className="py-section bg-[#f7f5ef]">
          <div className="max-w-[1200px] mx-auto px-8 md:px-16">
            <FadeIn>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">Service Menu</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-ink leading-[1.2] tracking-[-0.03em] mb-20"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
              >
                対応できる業務。
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-px bg-black/[0.06]">
              {services.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.07}>
                  <div className="bg-white p-10 h-full space-y-3">
                    <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-green">{s.cat}</p>
                    <p className="text-[17px] font-black text-ink">{s.title}</p>
                    <p className="text-[14px] text-muted leading-[1.9]">{s.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 向いてる / 向いてない */}
        <section className="py-section bg-navy">
          <div className="max-w-[1200px] mx-auto px-8 md:px-16">
            <FadeIn>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">Fit Check</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-white leading-[1.2] tracking-[-0.03em] mb-20"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
              >
                こんな企業に<br />向いています。
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-px bg-white/[0.06]">
              <FadeIn delay={0.1}>
                <div className="bg-navy p-10 md:p-12 h-full">
                  <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-green mb-8">向いている</p>
                  <ul className="space-y-4">
                    {fits.yes.map((item) => (
                      <li key={item} className="flex items-start gap-4 text-[15px] text-white/70 leading-[1.8]">
                        <span className="text-green font-bold shrink-0 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-[#1b2140] p-10 md:p-12 h-full">
                  <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-white/30 mb-8">向いていない</p>
                  <ul className="space-y-4">
                    {fits.no.map((item) => (
                      <li key={item} className="flex items-start gap-4 text-[15px] text-white/30 leading-[1.8]">
                        <span className="text-white/20 font-bold shrink-0 mt-0.5">×</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[13px] text-white/20 mt-8 leading-[1.8]">
                    正直にお伝えします。向いていない場合は、他の選択肢をご提案します。
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* なぜ西尾の人材か */}
        <section className="py-section bg-white">
          <div className="max-w-[1200px] mx-auto px-8 md:px-16">
            <FadeIn>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">Why Nishio</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-ink leading-[1.2] tracking-[-0.03em] mb-10"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
              >
                なぜ、地域の<br />人材なのか。
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <FadeIn delay={0.18}>
                <p className="text-[17px] text-muted leading-[2.0]">
                  都市部の人材と比べて、地域の人材は「コストが安い」と思われがちです。でもそれは本質ではありません。
                </p>
                <p className="text-[17px] text-muted leading-[2.0] mt-6">
                  地域で長く暮らし、地元の企業文化を理解している人材は、<strong className="text-ink font-bold">誠実さと継続性</strong>を持っています。
                  単発の仕事ではなく、長く一緒に働ける関係を築けます。
                </p>
                <p className="text-[17px] text-muted leading-[2.0] mt-6">
                  そして何より、その仕事が地域の雇用・収入・やりがいになる。企業と地域が、同時に豊かになるモデルを目指しています。
                </p>
              </FadeIn>
              <FadeIn delay={0.24}>
                <div className="space-y-0 divide-y divide-black/[0.06]">
                  {[
                    { label: "誠実さ", desc: "仕事を丁寧に、長く続ける" },
                    { label: "定着率", desc: "地域に根付いているため離職リスクが低い" },
                    { label: "地域理解", desc: "愛知・西尾の文化・産業への深い理解" },
                    { label: "社会的意義", desc: "企業の利益が地域の雇用になる" },
                  ].map((item) => (
                    <div key={item.label} className="py-6 grid grid-cols-[120px_1fr] gap-4">
                      <p className="text-[13px] font-bold text-accent">{item.label}</p>
                      <p className="text-[14px] text-muted">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-section bg-navy">
          <div className="max-w-[1200px] mx-auto px-8 md:px-16">
            <FadeIn>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">Contact</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-white leading-[1.2] tracking-[-0.03em] mb-8"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
              >
                まず、話してみてください。
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[17px] text-white/50 leading-[2.0] mb-14 max-w-xl">
                どの業務を外部委託できるか、一緒に整理します。<br />
                ヒアリングは無料です。
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="mailto:branding@momentsshare.com"
                  className="inline-flex items-center justify-center gap-3 bg-green text-white font-bold text-[15px] px-10 py-5 hover:bg-[#0f8f9c] transition-colors"
                >
                  メールで相談する →
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-semibold text-[15px] px-10 py-5 hover:border-white/50 transition-colors"
                >
                  ← トップページへ
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  );
}
