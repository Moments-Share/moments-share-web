import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { ServiceHero } from "@/components/ui/ServiceHero";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "BPO | Moments Share合同会社",
  description:
    "採用して人を増やす前に、仕事を外に出すという選択肢があります。カスタマーサクセス・営業支援・SNS・経理事務。必要な仕事を、必要な分だけ支えるMoments ShareのBPOサービス。",
  openGraph: {
    title: "BPO | Moments Share合同会社",
    description:
      "人手不足を、多様な働き方へ。必要な仕事を、必要な分だけ支えます。採用する・外注する・自動化する、その前に、まず仕事そのものを整理します。",
    locale: "ja_JP",
    type: "website",
    url: "https://moments-share.com/service-bpo",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BPO | Moments Share合同会社",
    description: "人手不足を、多様な働き方へ。必要な仕事を、必要な分だけ支えます。",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "BPO（業務プロセスアウトソーシング）",
  "description":
    "採用して人を増やす前に、仕事を外に出すという選択肢。カスタマーサクセス・営業支援・SNS運用・経理事務など、人が必要な仕事だけを、必要な分だけ支えます。",
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
  "serviceType": "BPO・業務委託・アウトソーシング",
  "areaServed": { "@type": "Place", "name": "愛知県 西尾市" },
  "url": "https://moments-share.com/service-bpo",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://moments-share.com/" },
      { "@type": "ListItem", "position": 2, "name": "BPO", "item": "https://moments-share.com/service-bpo" },
    ],
  },
};

const painPoints = [
  "求人を出しても応募が来ない",
  "社員が事務作業に追われている",
  "1人採用するほどの仕事量ではない",
  "CSやSNSをやりたいが担当者がいない",
  "一時的に人手が必要",
  "何を外注できるかわからない",
];

const services = [
  { title: "カスタマーサクセス", desc: "顧客対応・フォロー・継続支援など" },
  { title: "営業支援", desc: "リスト作成・アポイント・フォローなど" },
  { title: "SNS運用", desc: "投稿企画・作成・運用など" },
  { title: "経理・事務", desc: "データ入力・請求処理・日程調整・書類整理など" },
  { title: "その他", desc: "業務を整理し、外部に任せられる仕事を一緒に考えます" },
];

const team = [
  { label: "専門人材", desc: "各領域の経験を持つプロフェッショナル" },
  { label: "副業人材", desc: "本業の知見を活かして関わる人" },
  { label: "子育て中の人", desc: "自分のペースで働きたい人" },
  { label: "地域で働く人", desc: "地元で仕事に関わりたい人" },
];

const process = [
  { step: "01", title: "相談", body: "いまの課題や困りごとをお聞きします。" },
  { step: "02", title: "業務整理", body: "何が本当に必要な仕事かを一緒に洗い出します。" },
  { step: "03", title: "業務設計", body: "任せられる形に、業務を組み立て直します。" },
  { step: "04", title: "チーム編成", body: "得意を持ち寄る最適なチームをつくります。" },
  { step: "05", title: "開始・改善", body: "実際に動かしながら、継続的に改善します。" },
];

export default function ServiceBPO() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content">
        {/* HERO */}
        <ServiceHero
          label="BPO"
          headline={"人手不足を、\n多様な働き方へ。"}
          sub="採用して人を増やす前に、仕事を外に出すという選択肢があります。カスタマーサクセス。営業支援。SNS。経理・事務。必要な仕事を、必要な分だけ支えます。"
          accent="#12a0ae"
        />

        {/* HERO CTA */}
        <section className="py-section-sm px-8 md:px-12 bg-navy text-white text-center">
          <div className="mx-auto max-w-2xl">
            <a
              href="/contact"
              className="inline-block bg-teal text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              外注できる業務を相談する →
            </a>
          </div>
        </section>

        {/* こんな企業に */}
        <section className="py-section px-8 md:px-12">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-teal">FOR THESE COMPANIES</div>
              <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">
                こんな企業に。
              </h2>
            </FadeIn>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {painPoints.map((p, i) => (
                <FadeIn key={p} delay={i * 0.06}>
                  <div className="bg-white rounded-2xl p-8 border border-border flex items-start gap-4">
                    <span className="text-teal font-black shrink-0" aria-hidden="true">✓</span>
                    <p className="text-[15px] md:text-[17px] leading-body text-ink/80">{p}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 重要メッセージ */}
        <section className="py-section px-8 md:px-12 bg-warm">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-teal">MESSAGE</div>
              <h2 className="mt-5 text-h2 font-black tracking-heading leading-heading text-navy">
                その仕事、本当に<br className="hidden sm:block" />採用が必要ですか？
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-10 space-y-6 text-[16px] md:text-[18px] leading-body text-ink/80">
                <p>自動化できる仕事は、DXで減らす。人が必要な仕事だけ、BPOで支える。</p>
                <p className="text-navy font-bold text-[19px] md:text-[22px] leading-heading">
                  Moments Shareは、採用する・外注する・自動化する、その前に、まず仕事そのものを整理します。
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SERVICE */}
        <section className="py-section px-8 md:px-12">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-teal">SERVICE</div>
              <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">
                支えられる仕事。
              </h2>
            </FadeIn>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.06}>
                  <div className="bg-white rounded-2xl p-8 border border-border h-full">
                    <div className="text-[18px] font-black tracking-heading text-navy leading-heading">{s.title}</div>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted">{s.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* DX × BPO */}
        <section className="py-section px-8 md:px-12 bg-navy text-white">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-teal">DX × BPO</div>
              <h2 className="mt-5 text-h2 font-black tracking-heading leading-heading">
                自動化できる仕事は減らす。<br />
                人が必要な仕事だけ支える。
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-8 text-[16px] md:text-[18px] leading-body text-white/70">
                単に人を増やすのではなく、まず仕事を整理する。
              </p>
            </FadeIn>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-section px-8 md:px-12 bg-warm">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-teal">TEAM</div>
              <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">
                多様な人と、一緒に支える。
              </h2>
              <p className="mt-6 text-[16px] md:text-[18px] leading-body text-muted max-w-2xl">
                それぞれの得意を組み合わせて、企業の業務を支えます。
              </p>
            </FadeIn>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
              {team.map((t, i) => (
                <FadeIn key={t.label} delay={i * 0.06}>
                  <div className="bg-white rounded-2xl p-8 border border-border h-full">
                    <div className="text-[17px] font-black tracking-heading text-navy leading-heading">{t.label}</div>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted">{t.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-section px-8 md:px-12">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-teal">PROCESS</div>
              <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">
                進め方。
              </h2>
            </FadeIn>
            <div className="mt-12 divide-y divide-border border-t border-border">
              {process.map((p, i) => (
                <FadeIn key={p.step} delay={i * 0.05}>
                  <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-3 md:gap-10 py-10">
                    <div className="text-[40px] font-black text-teal/25 leading-none">{p.step}</div>
                    <div>
                      <h3 className="text-[22px] font-black tracking-heading text-navy leading-heading">{p.title}</h3>
                      <p className="mt-3 text-[15px] md:text-[17px] leading-body text-muted max-w-2xl">{p.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-section px-8 md:px-12 bg-navy text-white text-center">
          <div className="mx-auto max-w-2xl">
            <div className="text-[11px] font-bold tracking-widest-label text-teal">CONTACT</div>
            <h2 className="mt-5 text-[34px] md:text-[52px] font-black tracking-heading leading-heading">
              どの仕事を外に出せるか、一緒に整理します。
            </h2>
            <p className="mt-6 text-[16px] leading-body text-white/70">
              採用するべきか、外注するべきか迷っている段階からご相談ください。
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
