import { Nav } from "@/components/ui/Nav";
import { ServiceHero } from "@/components/ui/ServiceHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { CountUp } from "@/components/ui/CountUp";
import Link from "next/link";

const strengths = [
  {
    num: "01",
    title: "ツールより先に、課題を整理する",
    body: "「AIを入れたい」という要望の多くは、実は業務フローの問題です。まずヒアリングと業務分解から始め、本当に必要な手を見極めます。",
  },
  {
    num: "02",
    title: "現場に入る伴走型支援",
    body: "ツールを入れて終わりではなく、定着まで伴走します。「使いこなせない」「元に戻った」を繰り返さない、現場起点の支援です。",
  },
  {
    num: "03",
    title: "中小・地方企業専門",
    body: "大企業向けの大がかりなシステムは不要。低コスト・短期間・担当者1人でも回せる、現実的なDXを設計します。",
  },
];

const menuItems = [
  { cat: "AI活用", items: ["ChatGPT業務活用", "AIエージェント構築", "画像生成・音声AI"] },
  { cat: "業務自動化", items: ["Make（旧Integromat）", "GAS（Google Apps Script）", "Zapier連携"] },
  { cat: "情報基盤", items: ["Notion社内OS構築", "ペーパーレス化", "クラウド移行"] },
  { cat: "SNS・発信", items: ["SNS投稿自動化", "コンテンツ生成AI", "分析・改善"] },
];

const steps = [
  { num: "01", title: "ヒアリング", desc: "業務フローを丸ごと把握。どこで時間が消えているかを可視化します。" },
  { num: "02", title: "課題整理", desc: "「やらなくていい仕事」を特定。優先順位と改善ロードマップを設計。" },
  { num: "03", title: "ツール選定", desc: "課題に合ったツールを選定。過剰な投資をせず、費用対効果を最大化。" },
  { num: "04", title: "設計・構築", desc: "現場担当者が実際に使えるフローを設計・構築。" },
  { num: "05", title: "研修・定着", desc: "ツールの使い方レクチャーと運用マニュアル整備。" },
  { num: "06", title: "運用改善", desc: "定期チェックインで現場の詰まりを解消。継続的に改善します。" },
  { num: "07", title: "自立化", desc: "最終的には自社で運用できる状態を目指します。" },
];

const cases = [
  { cat: "SNS自動化", title: "SNS投稿の自動化", kpi: "作業時間 80%削減", detail: "30分 → 6分。AIが企画・執筆 → 自動投稿。人は確認ボタンだけ押す運用へ。" },
  { cat: "請求書 / GAS", title: "請求書発行の完全自動化", kpi: "月15時間 → 0時間", detail: "Googleフォーム入力から送信まで完全自動化。人的ミスもゼロ。" },
  { cat: "在庫管理", title: "在庫管理DX", kpi: "転記作業ゼロ", detail: "スマホから入力 → クラウド管理。紙×Excelの二重管理を完全解消。" },
  { cat: "社内情報", title: "Notion社内OS構築", kpi: "情報コスト大幅削減", detail: "タスク管理・DB設計・GAS連携を一気通貫構築。属人化を解消。" },
];

export const metadata = {
  title: "DX支援 Core Shift | Moments Share合同会社",
  description: "人の時間を、価値創造へ。AIより先に課題を整理する、伴走型DX支援サービス。愛知県西尾市の中小企業専門DXコンサルティング。",
  openGraph: {
    title: "DX支援 Core Shift | Moments Share合同会社",
    description: "人の時間を、価値創造へ。AIを選ぶ前に課題を整理する伴走型DX支援。愛知県西尾市発。",
    locale: "ja_JP",
    type: "website",
    url: "https://momentsshare.com/service-dx",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DX支援 Core Shift | Moments Share合同会社",
    description: "人の時間を、価値創造へ。AIを選ぶ前に課題を整理する伴走型DX支援。",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "DX支援（Core Shift）",
  "description": "AIを選ぶ前に、課題を整理する。ヒアリングから開発・運用改善まで伴走し、現場で使えるDXを実現します。",
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
  "serviceType": "DXコンサルティング・業務自動化",
  "areaServed": { "@type": "Place", "name": "愛知県 西尾市" },
  "url": "https://momentsshare.com/service-dx",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://momentsshare.com/" },
      { "@type": "ListItem", "position": 2, "name": "DX支援", "item": "https://momentsshare.com/service-dx" },
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
          headline={"人の時間を、\n価値創造へ。"}
          sub="AIを選ぶ前に、課題を整理する。ツールを入れる前に、業務を設計する。現場で本当に使えるDXを、伴走します。"
          accent="#12a0ae"
        />

        {/* Why DX is hard */}
        <section className="py-section bg-white">
          <div className="max-w-[1200px] mx-auto px-8 md:px-16">
            <FadeIn>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">The Problem</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-ink leading-[1.2] tracking-[-0.03em] mb-10"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
              >
                DXは、なぜ<br />失敗するのか。
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-px bg-black/[0.06] mt-16">
              {[
                { icon: "×", title: "ツールから入る", body: "「AIを入れたい」から始めると、課題がずれたまま高額ツールだけ導入して終わる。" },
                { icon: "×", title: "現場が使わない", body: "導入して終わり。研修もなく、現場は「前のやり方の方が早い」と戻ってしまう。" },
                { icon: "×", title: "属人化したまま", body: "担当者だけが使いこなし、その人が抜けた瞬間にすべてが崩壊する。" },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div className="bg-white p-10 md:p-12 h-full">
                    <p className="text-[32px] font-black text-accent/20 mb-4">{item.icon}</p>
                    <p className="text-[16px] font-bold text-ink mb-3">{item.title}</p>
                    <p className="text-[14px] text-muted leading-[1.9]">{item.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 3つの強み */}
        <section className="py-section bg-[#f7f5ef]">
          <div className="max-w-[1200px] mx-auto px-8 md:px-16">
            <FadeIn>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">Our Approach</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-ink leading-[1.2] tracking-[-0.03em] mb-20"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
              >
                Core Shiftの<br />3つの約束。
              </h2>
            </FadeIn>
            <div className="space-y-0 divide-y divide-black/[0.06]">
              {strengths.map((s, i) => (
                <FadeIn key={s.num} delay={i * 0.1}>
                  <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-16 py-12">
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.22em] text-muted uppercase">{s.num}</p>
                    </div>
                    <div>
                      <p className="text-[20px] md:text-[22px] font-black text-ink mb-4 leading-[1.4]">{s.title}</p>
                      <p className="text-[16px] text-muted leading-[2.0]">{s.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* サービスメニュー */}
        <section className="py-section bg-navy">
          <div className="max-w-[1200px] mx-auto px-8 md:px-16">
            <FadeIn>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">Service Menu</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-white leading-[1.2] tracking-[-0.03em] mb-20"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
              >
                対応できること。
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-px bg-white/[0.06]">
              {menuItems.map((menu, i) => (
                <FadeIn key={menu.cat} delay={i * 0.08}>
                  <div className="bg-navy p-10 md:p-12 h-full">
                    <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-green mb-6">{menu.cat}</p>
                    <div className="flex flex-wrap gap-2">
                      {menu.items.map((item) => (
                        <span
                          key={item}
                          className="text-[13px] font-semibold text-white/70 border border-white/15 px-4 py-2"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 7ステップフロー */}
        <section className="py-section bg-white">
          <div className="max-w-[1200px] mx-auto px-8 md:px-16">
            <FadeIn>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">Process</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-ink leading-[1.2] tracking-[-0.03em] mb-20"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
              >
                7ステップで、<br />現場に定着させる。
              </h2>
            </FadeIn>
            <div className="relative">
              <div className="absolute left-[calc(28px+2rem)] top-0 bottom-0 w-px bg-black/[0.06] hidden md:block" />
              <div className="space-y-0">
                {steps.map((step, i) => (
                  <FadeIn key={step.num} delay={i * 0.07}>
                    <div className="grid md:grid-cols-[56px_1fr] gap-6 md:gap-16 py-10 border-b border-black/[0.06] relative">
                      <div className="flex items-start">
                        <span
                          className="w-14 h-14 rounded-full flex items-center justify-center text-[12px] font-black text-white bg-accent shrink-0 relative z-10"
                        >
                          {step.num}
                        </span>
                      </div>
                      <div className="md:pt-3">
                        <p className="text-[18px] font-black text-ink mb-2">{step.title}</p>
                        <p className="text-[15px] text-muted leading-[1.9]">{step.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 実績 */}
        <section className="py-section bg-[#f7f5ef]">
          <div className="max-w-[1200px] mx-auto px-8 md:px-16">
            <FadeIn>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">Results</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-ink leading-[1.2] tracking-[-0.03em] mb-8"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
              >
                数字で見る成果。
              </h2>
            </FadeIn>
            <FadeIn delay={0.18}>
              <div className="flex flex-wrap gap-12 mb-20 pt-8 border-t border-black/[0.06]">
                {[
                  { num: 90, suffix: "%超", label: "業務時間削減\n最大事例" },
                  { num: 100, suffix: "社+", label: "代表の企業\n支援経験" },
                  { num: 10, suffix: "社+", label: "DX支援\n実績" },
                ].map((s) => (
                  <div key={s.label}>
                    <p
                      className="font-black text-navy leading-none tracking-[-0.04em] mb-2"
                      style={{ fontSize: "clamp(44px, 5vw, 72px)" }}
                    >
                      <CountUp to={s.num} suffix={s.suffix} duration={2} />
                    </p>
                    <p className="text-[13px] text-muted leading-[1.7] whitespace-pre-line">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-px bg-black/[0.06]">
              {cases.map((c, i) => (
                <FadeIn key={c.title} delay={i * 0.08}>
                  <div className="bg-white p-10 md:p-12 space-y-4 h-full">
                    <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-green">{c.cat}</p>
                    <p className="text-[17px] font-bold text-ink">{c.title}</p>
                    <p
                      className="font-black text-accent tracking-[-0.02em] leading-none"
                      style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
                    >
                      {c.kpi}
                    </p>
                    <p className="text-[14px] text-muted leading-[1.9]">{c.detail}</p>
                  </div>
                </FadeIn>
              ))}
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
                「何から始めればいいかわからない」。それが、最初の一歩です。<br />
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
