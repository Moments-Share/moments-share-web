import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/ui/Nav";
import { PhotoNeeded } from "@/components/ui/PhotoNeeded";

export const metadata: Metadata = {
  title: "存在意義 — なぜ、私たちは在るのか | Moments Share合同会社",
  description:
    "すべてが繋がる瞬間を、共創する。「生きててよかった！」があふれる世界を創る。Moments Shareの存在意義（Purpose）・信念・3つの事業・原点・バリュー・会社概要。愛知県西尾市発。",
  openGraph: {
    title: "存在意義 — なぜ、私たちは在るのか | Moments Share合同会社",
    description:
      "すべてが繋がる瞬間を、共創する。「生きててよかった！」があふれる世界を創る。Moments Shareの存在意義と歩み。愛知県西尾市発。",
    locale: "ja_JP",
    type: "website",
    url: "https://moments-share.com/about",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "存在意義 — なぜ、私たちは在るのか | Moments Share合同会社",
    description:
      "すべてが繋がる瞬間を、共創する。「生きててよかった！」があふれる世界を創る。愛知県西尾市発。",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "存在意義 — なぜ、私たちは在るのか | Moments Share合同会社",
  "description":
    "すべてが繋がる瞬間を、共創する。「生きててよかった！」があふれる世界を創る。Moments Shareの存在意義・信念・事業・原点・バリュー・会社概要。",
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

// 3つの事業：存在意義を果たす手段として（サービスページの実在コピーに整合。新規事実は追加しない）
const businesses = [
  {
    en: "DX",
    name: "DX伴走支援（Core Shift）",
    lead: "人の時間を、価値創造へ。",
    body: "請求書・データ転記・日報集計など、毎月繰り返す業務をAI・自動化で減らす。人がやらなくてもいい仕事を仕組みに変え、人にしかできない価値へ時間を取り戻す。",
    href: "/service-dx",
  },
  {
    en: "BPO",
    name: "BPO（業務代行）",
    lead: "人手不足に、社外の力を。",
    body: "採用して人を増やす前に、仕事を外に出すという選択肢を。カスタマーサクセス・営業支援・SNS・経理事務。必要な仕事を、必要な分だけ支える。",
    href: "/service-bpo",
  },
  {
    en: "PRODUCE",
    name: "地域プロデュース",
    lead: "地域愛を、地域発展の力に。",
    body: "地域の課題と、人や企業の「やってみたい」をつなぎ、新しいプロジェクトや事業が生まれる場をつくる。挑戦と共創が循環する地域を、西尾から。",
    href: "/service-produce",
  },
];

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
    title: "「やりきってよかった」と思える瞬間を、共につくろう。",
    body: "最後まで向き合い、喜びを分かち合おう。",
  },
];

// 7つの判断基準（正式文言）：英語名＋日本語キャッチ
const stances = [
  { en: "Self Driven", ja: "自分ごとで動こう。" },
  { en: "Challenge", ja: "まず、やってみよう。" },
  { en: "Better Everyday", ja: "昨日より、少しずつ良くしよう。" },
  { en: "Legacy", ja: "100年後に、誇れる選択を。" },
  { en: "Purpose", ja: "目的から、考えよう。" },
  { en: "Co-Create", ja: "違いを力に、共に創ろう。" },
  { en: "Build Systems", ja: "仕組みを創ろう。" },
];

// 会社概要：タスク指定の実在事実のみ（不明項目は掲載しない）
const company: { label: string; value: string; email?: boolean }[] = [
  { label: "正式名称", value: "Moments Share合同会社" },
  { label: "代表者名", value: "中根 隆（Ryu Nakane）" },
  { label: "所在地", value: "愛知県西尾市" },
  { label: "設立", value: "2025年11月" },
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
      <Nav heroTone="dark" />
      <main id="main-content">

        {/* ===== 1. PURPOSE — 存在意義。写真背景ヒーロー（TOPと同じトーン） ===== */}
        <section className="relative min-h-[58vh] md:min-h-[66vh] overflow-hidden bg-[#16281f]">
          <div className="absolute inset-0">
            <Image
              src="/photos/hero-nishio.jpg"
              alt="西尾市の川辺の風景"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, rgba(16,32,42,0.82) 0%, rgba(16,32,42,0.58) 40%, rgba(16,32,42,0.18) 72%, rgba(16,32,42,0) 100%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, rgba(16,32,42,0) 30%, rgba(16,32,42,0.35) 65%, rgba(16,32,42,0.75) 100%)" }}
            />
          </div>
          <div className="relative z-10 min-h-[58vh] md:min-h-[66vh] flex flex-col justify-end max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-16 md:pb-24 pt-32">
            <div className="text-[12px] font-bold tracking-[0.24em] text-white/70">
              Purpose — 存在意義
            </div>
            <h1
              className="mt-10 md:mt-14 text-white font-semibold leading-[1.14] tracking-[-0.03em] max-w-[16ch]"
              style={{ fontSize: "clamp(40px, 8vw, 104px)" }}
            >
              すべてが繋がる瞬間を、共創する。
            </h1>
            <p className="mt-12 md:mt-16 max-w-xl text-[16px] md:text-[18px] leading-[2.1] text-white/80">
              人と人。仕事と人。想いと地域。
              そのすべてが繋がる瞬間に、価値が生まれる。
              私たちは、その瞬間を共に創るために在ります。
            </p>
          </div>
        </section>

        {/* ===== 2. BELIEF（なぜ）— その先にある世界＝ビジョン。大きく、静かに ===== */}
        <section className="py-24 md:py-40 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="text-[12px] font-bold tracking-[0.24em] text-navy-ink">
              Belief — 私たちが信じていること
            </div>
            <h2
              className="mt-10 md:mt-14 text-navy-ink font-semibold leading-[1.24] tracking-[-0.02em] max-w-[18ch]"
              style={{ fontSize: "clamp(30px, 5.4vw, 72px)" }}
            >
              「生きててよかった！」が<br className="hidden md:block" />あふれる世界を創る。
            </h2>
            <p className="mt-12 md:mt-16 max-w-2xl text-[16px] md:text-[18px] leading-[2.1] text-charcoal/85">
              やってみたかったことに挑戦できた。仲間と一緒に、何かを生み出せた。
              自分の仕事が、誰かの役に立った。——そんな瞬間が、一人ひとりの人生に増えていく。
              私たちは、その積み重ねの先にある世界を信じています。だから、繋がる瞬間を増やしつづける。
            </p>
          </div>
        </section>

        {/* ===== 3. HOW（だから、私たちは）— 存在意義を果たす手段としての3事業。purpose目線 ===== */}
        <section className="py-24 md:py-36 bg-ivory">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="max-w-2xl">
              <div className="text-[12px] font-bold tracking-[0.24em] text-navy-ink">
                How — だから、私たちは
              </div>
              <h2
                className="mt-6 text-navy-ink font-semibold leading-[1.3] tracking-[-0.02em]"
                style={{ fontSize: "clamp(26px, 3.4vw, 44px)" }}
              >
                存在意義を、3つの事業で果たす。
              </h2>
            </div>

            <div className="mt-14 md:mt-20 border-t border-navy-ink/12">
              {businesses.map((b) => (
                <Link
                  key={b.en}
                  href={b.href}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-y-3 md:gap-x-12 py-10 md:py-14 border-b border-navy-ink/12"
                >
                  <div className="md:col-span-4">
                    <div className="text-[11px] font-bold tracking-[0.22em] text-navy-ink">{b.en}</div>
                    <div className="mt-3 text-navy-ink font-semibold leading-[1.4] tracking-[-0.01em]" style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}>
                      {b.name}
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <div className="text-navy-ink font-bold leading-[1.5] tracking-[-0.01em]" style={{ fontSize: "clamp(17px, 1.9vw, 22px)" }}>
                      {b.lead}
                    </div>
                    <p className="mt-4 max-w-xl text-[15px] md:text-[17px] leading-[2.1] text-charcoal/80">{b.body}</p>
                    <span className="mt-5 inline-block text-[13px] font-bold text-navy-ink border-b border-navy-ink/40 pb-0.5 group-hover:text-deep-green group-hover:border-deep-green transition-colors">
                      詳しく見る →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 静かな一枚：西尾。存在意義の原点へつなぐ ===== */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-6 md:pt-10">
            <div className="relative aspect-[21/9] w-full">
              <Image src="/photos/hero.png" alt="愛知県西尾の街並み" fill sizes="(max-width:1400px) 100vw, 1400px" className="object-cover" />
            </div>
            <p className="mt-3 text-[12px] text-muted">愛知県西尾市。すべては、この街から始まった。</p>
          </div>
        </section>

        {/* ===== 4. STORY（原体験）— 既存ナラティブをそのまま流用して接続 ===== */}
        <section className="py-24 md:py-36 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <div className="text-[12px] font-bold tracking-[0.24em] text-navy-ink">Story — 原点</div>
                <div className="mt-8 lg:mt-10 lg:mr-6">
                  <PhotoNeeded ratio="4/5" kind="PEOPLE" note="西尾の地元企業と対話する代表（横位置・ドキュメンタリー）" />
                  <p className="mt-3 text-[12px] leading-[1.8] text-muted">問いは、現場の対話から生まれた。</p>
                </div>
              </div>
              <div className="lg:col-span-8 lg:pl-6">
                <h2 className="text-navy-ink font-semibold leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(26px, 3.2vw, 44px)" }}>
                  なぜ、この存在意義に<br className="hidden sm:block" />たどり着いたのか。
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

        {/* ===== 5. VALUES — 核「一歩ずつ、できるまで続けるだけ。」から行動×判断へ繋げる ===== */}
        <section className="py-24 md:py-36 bg-ivory">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="text-[12px] font-bold tracking-[0.24em] text-navy-ink">Values — 大切にしていること</div>

            {/* 核：VALUESセクションのVisual Peak。静かに、余白たっぷりに */}
            <h2
              className="mt-12 md:mt-20 text-navy-ink font-semibold leading-[1.16] tracking-[-0.03em] max-w-[15ch]"
              style={{ fontSize: "clamp(32px, 5.4vw, 68px)" }}
            >
              一歩ずつ、できるまで続けるだけ<span className="text-charcoal">。</span>
            </h2>

            {/* ブリッジ文：核と基準を繋ぐ橋渡し */}
            <p className="mt-8 md:mt-10 max-w-xl text-[16px] md:text-[18px] leading-[2] text-charcoal/80">
              その一歩を、3つの行動基準と7つの判断基準で支える。
            </p>

            {/* 連結：核 → 行動（どう動くか） → 判断（どう選ぶか）を一本の流れとして */}
            <div className="mt-16 md:mt-24 border-t border-navy-ink/20">

              {/* 3つの行動基準 */}
              <div className="pt-9 md:pt-12">
                <div className="text-[12px] font-bold tracking-[0.22em] text-navy-ink/45">
                  3つの行動基準 <span className="text-navy-ink/30">— どう動くか</span>
                </div>
                <div className="mt-5 border-t border-navy-ink/12">
                  {coreValues.map((v) => (
                    <div key={v.en} className="grid grid-cols-1 md:grid-cols-12 gap-y-3 md:gap-x-12 py-9 md:py-12 border-b border-navy-ink/12">
                      <div className="md:col-span-4">
                        <div className="text-navy-ink font-semibold tracking-[0.01em]" style={{ fontSize: "clamp(20px, 2.4vw, 30px)" }}>{v.en}</div>
                      </div>
                      <div className="md:col-span-8">
                        <h3 className="text-navy-ink font-medium leading-[1.5] tracking-[-0.01em]" style={{ fontSize: "clamp(19px, 2.2vw, 27px)" }}>
                          {v.title}
                        </h3>
                        <p className="mt-4 max-w-xl text-[15px] md:text-[17px] leading-[2.1] text-charcoal/80">{v.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7つの判断基準（行動から地続きに） */}
              <div className="pt-12 md:pt-16">
                <div className="text-[12px] font-bold tracking-[0.22em] text-navy-ink/45">
                  7つの判断基準 <span className="text-navy-ink/30">— どう選ぶか</span>
                </div>
                <ul className="mt-5 border-t border-navy-ink/12">
                  {stances.map((s) => (
                    <li
                      key={s.en}
                      className="grid grid-cols-1 sm:grid-cols-[minmax(160px,0.4fr)_1fr] gap-1 sm:gap-8 py-5 border-b border-navy-ink/12 items-baseline"
                    >
                      <span className="text-navy-ink font-semibold tracking-[0.01em]" style={{ fontSize: "clamp(17px, 1.9vw, 22px)" }}>{s.en}</span>
                      <span className="text-navy-ink/85 font-medium leading-[1.6] tracking-[-0.01em] text-[15px] md:text-[17px]">{s.ja}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ===== 6. FOUNDER — 写真とバイオ（既存流用） ===== */}
        <section className="py-24 md:py-36 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <div className="text-[12px] font-bold tracking-[0.24em] text-navy-ink">Founder — 代表</div>
                <div className="mt-8">
                  {/* TODO: 代表写真 — 中根 隆のポートレート（縦 4:5）。public/photos に置いて site-images.ts に登録する */}
                  <PhotoNeeded ratio="4/5" kind="PEOPLE" note="代表・中根 隆のポートレート（縦）" />
                </div>
              </div>

              <div className="lg:col-span-7 lg:pt-8">
                <h2 className="text-navy-ink font-bold leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 3.6vw, 46px)" }}>
                  中根 隆
                </h2>
                <div className="mt-3 text-[14px] font-bold text-charcoal/55">
                  代表社員 / Ryu Nakane — DX伴走パートナー
                </div>

                <div className="mt-10 max-w-xl space-y-6 text-[16px] md:text-[18px] leading-[2.1] text-charcoal/85">
                  <p>
                    1997年、愛知県西尾市生まれ。高崎経済大学経営学部卒。
                    就活に疑問を感じ200社以上を見て回ったのち、シンガポールのベンチャーで
                    営業・マーケティング・採用・地方創生に携わり、大手から自治体まで100社以上を担当。
                  </p>
                  <p>
                    組織づくりに追われる日々のなかで「人がやらなくていい仕事を減らしたい」と
                    業務効率化へ。2024年に独立、2025年11月に Moments Share 合同会社を設立。
                  </p>
                  <p>
                    眠れない夜を越えてたどり着いた答えが、
                    挑戦と共創が循環する地域をつくるという一文でした。
                  </p>
                </div>

                {/* 経歴の要点。本文を追いきれない読み手のための補助線 */}
                <dl className="mt-10 grid max-w-xl grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-3">
                  <div className="border-t-2 border-sage pt-4">
                    <dt className="text-[12px] font-bold tracking-[0.1em] text-charcoal/50">出身</dt>
                    <dd className="mt-2 text-[15px] font-bold leading-[1.6] text-charcoal">愛知県西尾市</dd>
                  </div>
                  <div className="border-t-2 border-sage pt-4">
                    <dt className="text-[12px] font-bold tracking-[0.1em] text-charcoal/50">支援実績</dt>
                    <dd className="mt-2 text-[15px] font-bold leading-[1.6] text-charcoal">100社以上</dd>
                  </div>
                  <div className="border-t-2 border-sage pt-4">
                    <dt className="text-[12px] font-bold tracking-[0.1em] text-charcoal/50">設立</dt>
                    <dd className="mt-2 text-[15px] font-bold leading-[1.6] text-charcoal">2025年11月</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 7. COMPANY — 会社概要は素直な定義リスト（既存流用） ===== */}
        <section className="py-24 md:py-36 bg-ivory">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <div className="text-[12px] font-bold tracking-[0.24em] text-navy-ink">Company — 会社概要</div>
                <h2 className="mt-4 text-navy-ink font-semibold leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(26px, 3.4vw, 44px)" }}>
                  会社概要。
                </h2>
              </div>
              <div className="lg:col-span-8">
                <dl className="border-t border-navy-ink/12">
                  {company.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-col sm:flex-row gap-1 sm:gap-10 py-6 border-b border-navy-ink/12"
                    >
                      <dt className="text-[12px] font-bold tracking-[0.16em] text-muted min-w-[140px] pt-1">
                        {row.label}
                      </dt>
                      <dd className="text-[16px] md:text-[17px] text-navy-ink">
                        {row.email ? (
                          <a href="mailto:branding@momentsshare.com" className="text-navy-ink font-bold border-b border-navy-ink/40 pb-0.5 hover:text-deep-green hover:border-deep-green transition-colors">
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

        {/* ===== 8. FINAL CTA — Deep Green のバンドで締める（見せ場帯・既存締めを流用） ===== */}
        <section id="contact" className="scroll-mt-20 py-20 md:py-28 bg-green-deep text-white">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <h2 className="lg:col-span-8 font-semibold leading-[1.2] tracking-[-0.01em]" style={{ fontSize: "clamp(30px, 4.5vw, 60px)" }}>
                ご相談はこちらから
              </h2>
              <div className="lg:col-span-4 lg:pb-3">
                <p className="text-[15px] leading-[2] text-white/75">
                  やってみたいこと、困っていること。まだカタチになっていなくても大丈夫です。
                </p>
                <Link href="/contact" className="mt-6 btn btn-ghost-on-green px-9 py-4">
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
