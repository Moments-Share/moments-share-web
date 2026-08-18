import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/ui/Nav";
import { PhotoNeeded } from "@/components/ui/PhotoNeeded";

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
    url: "https://moments-share.com/about",
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
  "url": "https://moments-share.com/about",
  "publisher": {
    "@type": "Organization",
    "@id": "https://moments-share.com/#organization",
    "name": "Moments Share合同会社",
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://moments-share.com/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://moments-share.com/about" },
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

// 3つの行動基準：Moment / Moments / Moments Share（正式文言）
const coreValues = [
  {
    en: "Moment",
    title: "いま、できることをしよう。",
    body: "いまに感謝する。いま、目の前の人にどう貢献できるか考える。いま、できることを実行する。",
  },
  {
    en: "Moments",
    title: "一歩ずつ、積み重ねよう。",
    body: "行動し、改善し、前に進もう。",
  },
  {
    en: "Moments Share",
    title: "「やってよかった」と思える瞬間を、共につくろう。",
    body: "最後まで向き合い、喜びを分かち合おう。",
  },
];

// 7つの判断基準（正式文言）：英語名＋日本語キャッチ
const stances = [
  { en: "Legacy", ja: "100年後に、誇れる選択を。" },
  { en: "Purpose", ja: "目的から、考えよう。" },
  { en: "Self Driven", ja: "自分ごとで動こう。" },
  { en: "Challenge", ja: "まず、やってみよう。" },
  { en: "Co-Create", ja: "違いを力に、共に創ろう。" },
  { en: "Better Everyday", ja: "昨日より、少しずつ良くしよう。" },
  { en: "Build Systems", ja: "仕組みを創ろう。" },
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

        {/* ===== 1. HERO — 文章＋大きな実写写真＋余白。装飾ラベルは置かない ===== */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-ivory">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <h1 className="text-green font-semibold leading-[1.16] tracking-[-0.02em]"
                style={{ fontSize: "clamp(34px, 5vw, 68px)" }}>
              なぜ、この会社が<br />あるのか。
            </h1>
            <p className="mt-8 max-w-xl text-[16px] md:text-[18px] leading-[2.1] text-charcoal/85">
              人生は、やりたいことを実現するための時間。
              私たちは、その時間を増やしたいと思っています。
            </p>

            <div className="relative mt-14 md:mt-20 aspect-[21/9] w-full">
              <Image src="/photos/hero.png" alt="愛知県西尾の街並み" fill priority sizes="(max-width:1400px) 100vw, 1400px" className="object-cover" />
            </div>
            <p className="mt-3 text-[12px] text-muted">愛知県西尾市。すべては、この街から始まった。</p>
          </div>
        </section>

        {/* ===== 2. STORY — 長文プロセ。写真を静かに添える ===== */}
        <section className="py-20 md:py-32 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <div className="text-[12px] font-bold tracking-[0.16em] text-charcoal/40">STORY</div>
                <div className="mt-8 lg:mt-10 lg:mr-6">
                  <PhotoNeeded ratio="4/5" kind="PEOPLE" note="西尾の地元企業と対話する代表（横位置・ドキュメンタリー）" />
                  <p className="mt-3 text-[12px] leading-[1.8] text-muted">問いは、現場の対話から生まれた。</p>
                </div>
              </div>
              <div className="lg:col-span-8 lg:pl-6">
                <h2 className="text-green font-semibold leading-[1.3] tracking-[-0.01em]" style={{ fontSize: "clamp(26px, 3.2vw, 44px)" }}>
                  Moments Shareに込めた想い
                </h2>
                <div className="mt-10 max-w-2xl space-y-7 text-[16px] md:text-[18px] leading-[2.1] text-charcoal/85">
                  {story.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 3. MISSION / VISION — 競合させず、それぞれを静かに読ませる ===== */}
        <section className="py-20 md:py-32 bg-ivory">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-16">
              <div className="lg:col-span-6">
                <div className="text-[12px] font-bold tracking-[0.16em] text-charcoal/40">MISSION</div>
                <h2 className="mt-6 text-green font-semibold leading-[1.35] tracking-[-0.01em]" style={{ fontSize: "clamp(26px, 3.4vw, 44px)" }}>
                  すべてが繋がる瞬間を、<br />共創する。
                </h2>
                <p className="mt-8 max-w-md text-[15px] md:text-[17px] leading-[2.1] text-charcoal/80">
                  人と人。仕事と人。想いと地域。それぞれがつながり、
                  「やりたかったこと」がカタチになる瞬間を、一緒につくります。
                </p>
              </div>
              <div className="lg:col-span-6 lg:border-l lg:border-charcoal/10 lg:pl-16">
                <div className="text-[12px] font-bold tracking-[0.16em] text-charcoal/40">VISION</div>
                <h2 className="mt-6 text-green font-semibold leading-[1.35] tracking-[-0.01em]" style={{ fontSize: "clamp(26px, 3.4vw, 44px)" }}>
                  「生きててよかった」が<br />あふれる世界を創る。
                </h2>
                <p className="mt-8 max-w-md text-[15px] md:text-[17px] leading-[2.1] text-charcoal/80">
                  やってみたかったことに挑戦できた。仲間と一緒に何かを生み出せた。
                  自分の仕事が誰かの役に立った。そんな瞬間が、一人ひとりの人生に増えていく。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 6. VALUES — MOMENT / MOMENTS / MOMENTS SHARE を静かに読ませる ===== */}
        <section className="py-20 md:py-32 bg-ivory">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="max-w-2xl">
              <div className="text-[12px] font-bold tracking-[0.16em] text-charcoal/40">VALUES</div>
              <h2 className="mt-4 text-green font-semibold leading-[1.3] tracking-[-0.01em]" style={{ fontSize: "clamp(24px, 3.2vw, 42px)" }}>
                私たちが、<br className="hidden sm:block" />大切にしていること。
              </h2>
              <p className="mt-6 text-[15px] md:text-[16px] leading-[2] text-charcoal/70">
                3つの行動基準と、7つの判断基準。
              </p>
            </div>

            {/* 3つの行動基準 — 先に少し大きく。言葉を静かに読ませる（カードにしない） */}
            <div className="mt-14 md:mt-20">
              <div className="text-[12px] font-bold tracking-[0.16em] text-charcoal/40">3つの行動基準</div>
              <div className="mt-6 border-t border-charcoal/10">
                {coreValues.map((v) => (
                  <div key={v.en} className="grid grid-cols-1 md:grid-cols-12 gap-y-3 md:gap-x-12 py-10 md:py-14 border-b border-charcoal/10">
                    <div className="md:col-span-4">
                      <div className="text-green font-semibold tracking-[0.01em]" style={{ fontSize: "clamp(20px, 2.4vw, 30px)" }}>{v.en}</div>
                    </div>
                    <div className="md:col-span-8">
                      <h3 className="text-green font-medium leading-[1.5] tracking-[-0.01em]" style={{ fontSize: "clamp(19px, 2.2vw, 27px)" }}>
                        {v.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-[15px] md:text-[17px] leading-[2.1] text-charcoal/80">{v.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7つの判断基準 — 英語名＋日本語キャッチ。一覧性を重視（pill/badgeにしない） */}
            <div className="mt-16 md:mt-24">
              <div className="text-[12px] font-bold tracking-[0.16em] text-charcoal/40">7つの判断基準</div>
              <ul className="mt-6 border-t border-charcoal/10">
                {stances.map((s) => (
                  <li
                    key={s.en}
                    className="grid grid-cols-1 sm:grid-cols-[minmax(160px,0.4fr)_1fr] gap-1 sm:gap-8 py-5 border-b border-charcoal/10 items-baseline"
                  >
                    <span className="text-green font-semibold tracking-[0.01em]" style={{ fontSize: "clamp(17px, 1.9vw, 22px)" }}>{s.en}</span>
                    <span className="text-charcoal/80 font-medium leading-[1.6] tracking-[-0.01em] text-[15px] md:text-[17px]">{s.ja}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== 7. FOUNDER — 写真とバイオ ===== */}
        <section className="py-20 md:py-32 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <div className="text-[12px] font-bold tracking-[0.16em] text-charcoal/40">FOUNDER</div>
                <div className="mt-8">
                  <PhotoNeeded ratio="4/5" kind="PEOPLE" note="代表・中根 隆のポートレート（縦）" />
                </div>
              </div>

              <div className="lg:col-span-7 lg:pt-8">
                <h2 className="text-green font-bold leading-[1.3] tracking-[-0.01em]" style={{ fontSize: "clamp(28px, 3.6vw, 46px)" }}>
                  中根 隆
                </h2>
                <div className="mt-3 text-[14px] font-bold text-charcoal/55">代表社員 / Ryu Nakane</div>

                <div className="mt-10 max-w-xl space-y-6 text-[16px] md:text-[18px] leading-[2.1] text-charcoal/85">
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

        {/* ===== 8. COMPANY — 会社概要は素直な定義リスト（表） ===== */}
        <section className="py-20 md:py-32 bg-ivory">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <div className="text-[12px] font-bold tracking-[0.16em] text-charcoal/40">COMPANY</div>
                <h2 className="mt-4 text-green font-semibold leading-[1.3] tracking-[-0.01em]" style={{ fontSize: "clamp(26px, 3.4vw, 44px)" }}>
                  会社概要。
                </h2>
              </div>
              <div className="lg:col-span-8">
                <dl className="border-t border-charcoal/10">
                  {company.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-col sm:flex-row gap-1 sm:gap-10 py-6 border-b border-charcoal/10"
                    >
                      <dt className="text-[12px] font-bold tracking-[0.16em] text-muted min-w-[140px] pt-1">
                        {row.label}
                      </dt>
                      <dd className="text-[16px] md:text-[17px] text-charcoal">
                        {row.email ? (
                          <a href="mailto:branding@momentsshare.com" className="text-green font-bold border-b border-green/60 pb-0.5 hover:text-terra-ink hover:border-terra transition-colors">
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
            </div>
          </div>
        </section>

        {/* ===== 9. FINAL CTA — Deep Green のバンドで締める ===== */}
        <section id="contact" className="scroll-mt-20 py-20 md:py-28 bg-green text-white">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <h2 className="lg:col-span-8 font-semibold leading-[1.2] tracking-[-0.01em]" style={{ fontSize: "clamp(30px, 4.5vw, 60px)" }}>
                まず、話して<br />みませんか。
              </h2>
              <div className="lg:col-span-4 lg:pb-3">
                <p className="text-[15px] leading-[2] text-white/75">
                  やってみたいこと、困っていること。まだカタチになっていなくても大丈夫です。
                </p>
                <Link href="/contact" className="mt-6 inline-block bg-terra text-white font-bold px-9 py-4 rounded-full hover:opacity-90 transition-opacity">
                  まず相談してみる →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
