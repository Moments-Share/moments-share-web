import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "なぜ、この会社があるのか | Moments Share合同会社",
  description:
    "人生は、やりたいことを実現するための時間。私たちは、その時間を増やしたい。Moments Shareの原点・ミッション・ビジョン・バリュー・代表・会社概要。愛知県西尾市発。",
  openGraph: {
    title: "なぜ、この会社があるのか | Moments Share合同会社",
    description:
      "人生は、やりたいことを実現するための時間。私たちは、その時間を増やしたい。Moments Shareの思想と歩み。愛知県西尾市発。",
    locale: "ja_JP",
    type: "website",
    url: "https://momentsshare.com/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "なぜ、この会社があるのか | Moments Share合同会社",
    description:
      "人生は、やりたいことを実現するための時間。私たちは、その時間を増やしたい。愛知県西尾市発。",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "なぜ、この会社があるのか | Moments Share合同会社",
  "description":
    "人生は、やりたいことを実現するための時間。私たちは、その時間を増やしたい。Moments Shareの原点・ミッション・ビジョン・バリュー・会社概要。",
  "url": "https://momentsshare.com/about",
  "publisher": {
    "@type": "Organization",
    "@id": "https://momentsshare.com/#organization",
    "name": "Moments Share合同会社",
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://momentsshare.com/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://momentsshare.com/about" },
    ],
  },
};

// 創業ストーリー：既存の Founder / AboutOrigin コンポーネントの実在内容を再構成（新規事実は追加しない）
const story = [
  "群馬の大学を経て、シンガポールのベンチャー企業へ。営業・CS・マーケティング・マネジメントを掛け持ちしながら、社員3名から10名へと成長する現場を走り抜けた。多いときは50社を担当しながら、新規営業も。夜も眠れない日々の中で、ひとつの問いに突き当たった。",
  "「この仕事、本当に人がやる必要があるのか。」——多くの企業が、人にしかできない仕事ではなく、人がやらなくてもいい仕事に、時間を使っていた。",
  "外に出たからこそ、やっぱり地元・西尾が好きだと気づいた。Uターンして地元企業と話すと、そこにも同じ問いがあった。「人手が足りない」「でも採れない」「社員は雑務で手一杯」。一方で若い人は「地元で働きたいけど仕事がない」と言う。この2つをつなぐ設計が必要だと確信した。",
  "100社以上の企業支援を重ねる中で、確信は強くなった。DXは効率化のためではない。人にしかできない価値を生み出すためのものだ。",
  "人口減少を止めることはできない。でも、挑戦と共創が循環する地域なら、豊かになれる。その仕組みを、西尾から創る。——それが、Moments Shareの原点になった。",
];

// バリュー：最も目立たせる3つ（大カード）
const coreValues = [
  {
    en: "Moment",
    title: "今、ここに全力を。",
    body: "いまに感謝する。いま、目の前の人にどう貢献できるか考える。いま、できることを実行する。",
  },
  {
    en: "Moments",
    title: "積み重ねが、未来を創る。",
    body: "行動を積み重ねる。改善を積み重ねる。理想と現実を往来する。",
  },
  {
    en: "Moments Share",
    title: "感動できる瞬間を、共創する。",
    body: "カタチになるまでやり続ける。感謝と愛を、行動で返す。価値を先に届ける。",
  },
];

// 7つのスタンス：3つのバリューより控えめに（名前のみ）
const stances = [
  "Purpose First",
  "Long-term Integrity",
  "Open, Flat & Fair",
  "Dream & Root",
  "Life is Now",
  "Give & Fun",
  "Self-Driven",
];

// 会社概要：タスク指定の実在事実のみ（不明項目は掲載しない）
const company: { label: string; value: string; email?: boolean }[] = [
  { label: "正式名称", value: "Moments Share合同会社" },
  { label: "代表者名", value: "中根 隆（Ryu Nakane）" },
  { label: "所在地", value: "愛知県西尾市" },
  { label: "設立", value: "2025年" },
  { label: "事業内容", value: "DX支援・BPO・地域プロデュース" },
  { label: "Email", value: "branding@momentsshare.com", email: true },
  // TODO: 資本金・従業員数などは未確定のため掲載しない（架空の数値を入れない）
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content">

        {/* 1. HERO */}
        <section className="pt-40 pb-20 px-8 md:px-12 bg-warm">
          <div className="mx-auto max-w-5xl">
            <div className="text-[11px] font-bold tracking-widest-label text-teal">WHY WE EXIST</div>
            <h1 className="mt-5 text-h2 font-black tracking-heading leading-heading text-navy">
              なぜ、この会社が<br className="hidden sm:block" />あるのか。
            </h1>
            <p className="mt-6 text-[16px] md:text-[18px] leading-body text-muted max-w-2xl">
              人生は、やりたいことを実現するための時間。
              私たちは、その時間を増やしたいと思っています。
            </p>
          </div>
        </section>

        {/* 2. STORY */}
        <section className="py-section px-8 md:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="text-[11px] font-bold tracking-widest-label text-teal">OUR STORY</div>
            <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">
              一つの問いから、始まった。
            </h2>
            <div className="mt-10 space-y-6 text-[16px] md:text-[18px] leading-body text-ink/80">
              {story.map((p, i) => (
                <FadeIn key={i} delay={i * 0.04}>
                  <p>{p}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 3. MISSION */}
        <section className="py-section px-8 md:px-12 bg-warm">
          <div className="mx-auto max-w-3xl">
            <div className="text-[11px] font-bold tracking-widest-label text-teal">MISSION</div>
            <h2 className="mt-5 text-h2 font-black tracking-heading leading-heading text-navy">
              すべてが繋がる瞬間を、<br className="hidden sm:block" />共創する。
            </h2>
            <p className="mt-8 text-[16px] md:text-[18px] leading-body text-muted max-w-2xl">
              人と人。仕事と人。想いと地域。それぞれがつながり、
              「やりたかったこと」がカタチになる瞬間を、一緒につくります。
            </p>
          </div>
        </section>

        {/* 4. VISION */}
        <section className="py-section px-8 md:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="text-[11px] font-bold tracking-widest-label text-teal">VISION</div>
            <h2 className="mt-5 text-h2 font-black tracking-heading leading-heading text-navy">
              「生きててよかった」が<br className="hidden sm:block" />あふれる世界を創る。
            </h2>
            <p className="mt-8 text-[16px] md:text-[18px] leading-body text-muted max-w-2xl">
              やってみたかったことに挑戦できた。仲間と一緒に何かを生み出せた。
              自分の仕事が誰かの役に立った。そんな瞬間が、一人ひとりの人生に増えていく。
              私たちは、そんな世界を目指します。
            </p>
          </div>
        </section>

        {/* 5. MID-TERM GOAL */}
        <section className="py-section px-8 md:px-12 bg-warm">
          <div className="mx-auto max-w-3xl">
            <div className="text-[11px] font-bold tracking-widest-label text-teal">MID-TERM GOAL</div>
            <div className="mt-5 text-[15px] md:text-[17px] font-bold text-muted">まずは、西尾から。</div>
            <h2 className="mt-3 text-h2 font-black tracking-heading leading-heading text-navy">
              2040年までに、<br className="hidden sm:block" />西尾に240の事業を。
            </h2>
            <p className="mt-8 text-[16px] md:text-[18px] leading-body text-muted max-w-2xl">
              240の事業をつくること自体がゴールではありません。
              一人の「やってみたい」から挑戦が始まり、仲間が集まり、仕事や事業が生まれる。
              その経験が、また次の誰かの挑戦につながっていく。
              そんな循環が地域に根づいている状態をつくる。そのための中期目標です。
            </p>
          </div>
        </section>

        {/* 6. VALUES */}
        <section className="py-section px-8 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="text-[11px] font-bold tracking-widest-label text-teal">VALUES</div>
            <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">
              私たちが、大切にしていること。
            </h2>

            {/* 3つのコアバリュー（最も目立たせる） */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreValues.map((v, i) => (
                <FadeIn key={v.en} delay={i * 0.08}>
                  <div className="h-full bg-white rounded-2xl p-8 border border-border">
                    <div className="text-[12px] font-bold tracking-widest-label text-teal uppercase">{v.en}</div>
                    <h3 className="mt-4 text-[22px] font-black tracking-heading text-navy leading-heading">{v.title}</h3>
                    <p className="mt-4 text-[15px] leading-body text-muted">{v.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* 7つのスタンス（3つより控えめ） */}
            <div className="mt-14 border-t border-border pt-10">
              <div className="text-[11px] font-bold tracking-widest-label text-muted">OUR STANCE</div>
              <div className="mt-6 flex flex-wrap gap-3">
                {stances.map((s) => (
                  <span
                    key={s}
                    className="text-[13px] font-medium text-muted border border-border rounded-full px-4 py-1.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. FOUNDER */}
        <section className="py-section px-8 md:px-12 bg-warm">
          <div className="mx-auto max-w-5xl">
            <div className="text-[11px] font-bold tracking-widest-label text-teal">FOUNDER</div>
            <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">代表について。</h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 md:gap-16 items-start">
              {/* 代表写真プレースホルダー（専用の写真ファイルが未配置のため） */}
              {/* TODO: 代表写真（中根 隆）を用意でき次第、この枠を実画像に差し替える */}
              <div className="aspect-[3/4] w-full rounded-2xl bg-white border border-border flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full bg-warm border border-border flex items-center justify-center">
                  <span className="text-[24px] font-black text-muted tracking-tight">RN</span>
                </div>
                <div className="text-center">
                  <div className="text-[13px] font-bold text-navy">中根 隆</div>
                  <div className="mt-1 text-[11px] tracking-widest-label text-muted">写真準備中</div>
                </div>
              </div>

              <div>
                <div className="text-[22px] font-black tracking-heading text-navy leading-heading">中根 隆</div>
                <div className="mt-1 text-[12px] tracking-widest-label text-muted">RYU NAKANE</div>
                <div className="mt-1 text-[14px] font-bold text-teal">代表社員</div>

                <div className="mt-6 space-y-5 text-[15px] md:text-[16px] leading-body text-ink/80">
                  <p>
                    群馬・シンガポールを経て西尾へ。シンガポールのベンチャー企業で
                    営業・CS・マーケティング・マネジメントを経験し、100社以上の企業支援を重ねる中で、
                    「人が疲弊する構造」と「DXが変える可能性」を目の当たりにしました。
                  </p>
                  <p>
                    眠れない夜を越えてたどり着いた答えが、
                    挑戦と共創が循環する地域をつくるという一文でした。
                    独立・西尾市へのUターンを経て、Moments Share合同会社を設立。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. COMPANY */}
        <section className="py-section px-8 md:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="text-[11px] font-bold tracking-widest-label text-teal">COMPANY</div>
            <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">会社概要。</h2>

            <dl className="mt-12">
              {company.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-8 py-5 border-b border-border"
                >
                  <dt className="text-[12px] font-bold tracking-widest-label text-muted min-w-[120px] pt-1">
                    {row.label}
                  </dt>
                  <dd className="text-[15px] md:text-[16px] text-ink">
                    {row.email ? (
                      <a href="mailto:branding@momentsshare.com" className="text-teal font-bold hover:underline">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 9. FINAL CTA */}
        <section id="contact" className="py-section px-8 md:px-12 bg-navy text-white text-center scroll-mt-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-[11px] font-bold tracking-widest-label text-teal">CONTACT</div>
            <h2 className="mt-5 text-[34px] md:text-[52px] font-black tracking-heading leading-heading">
              この循環を、次はあなたと。
            </h2>
            <p className="mt-6 text-[16px] leading-body text-white/70">
              やってみたいこと、困っていること。<br />
              まだカタチになっていなくても大丈夫です。
            </p>
            <a
              href="mailto:branding@momentsshare.com"
              className="mt-10 inline-block bg-teal text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              30分相談する →
            </a>
          </div>
        </section>

      </main>
    </>
  );
}
