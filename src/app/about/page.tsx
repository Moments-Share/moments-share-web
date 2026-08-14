import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/ui/Nav";

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

// バリュー：最も目立たせる3つ（編集的な大リスト）
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

        {/* ===== 1. HERO — 余白と大きな見出しが主役。写真は下端に細く editorial に添える ===== */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-ivory">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="flex items-center gap-3 text-terra text-[12px] font-bold tracking-[0.2em]">
              <span className="w-8 h-px bg-terra" />
              WHY WE EXIST
            </div>
            <h1 className="mt-8 text-green font-black leading-[1.12] tracking-[-0.03em]"
                style={{ fontSize: "clamp(40px, 6.4vw, 96px)" }}>
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

        {/* ===== 2. STORY — 長文プロセ。ドキュメンタリー写真を左マージンに非対称に添える ===== */}
        <section className="py-20 md:py-32 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 text-terra text-[12px] font-bold tracking-[0.2em] lg:sticky lg:top-24">
                  <span className="w-8 h-px bg-terra" />OUR STORY
                </div>
              </div>
              <div className="lg:col-span-8 lg:pl-6">
                <h2 className="text-green font-black leading-[1.18] tracking-[-0.02em]" style={{ fontSize: "clamp(30px, 4.4vw, 60px)" }}>
                  一つの問いから、<br className="hidden sm:block" />始まった。
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

        {/* ===== 3. MISSION — 大きな一文。箱にせず、余白の中で言葉を立たせる ===== */}
        <section className="py-20 md:py-32 bg-ivory">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="flex items-center gap-3 text-terra text-[12px] font-bold tracking-[0.2em]">
              <span className="w-8 h-px bg-terra" />
              MISSION
            </div>
            <h2 className="mt-8 text-green font-black leading-[1.15] tracking-[-0.02em]" style={{ fontSize: "clamp(34px, 6vw, 84px)" }}>
              すべてが繋がる瞬間を、<br />共創する。
            </h2>
            <p className="mt-10 max-w-2xl text-[16px] md:text-[18px] leading-[2.1] text-charcoal/85">
              人と人。仕事と人。想いと地域。それぞれがつながり、
              「やりたかったこと」がカタチになる瞬間を、一緒につくります。
            </p>
          </div>
        </section>

        {/* ===== 4. VISION — MISSION と対になる大きな一文（同じ ivory 地でマニフェストの見開き） ===== */}
        <section className="pb-20 md:pb-32 bg-ivory">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="border-t border-charcoal/10 pt-20 md:pt-28">
              <div className="flex items-center gap-3 text-terra text-[12px] font-bold tracking-[0.2em]">
                <span className="w-8 h-px bg-terra" />
                VISION
              </div>
              <h2 className="mt-8 text-green font-black leading-[1.15] tracking-[-0.02em]" style={{ fontSize: "clamp(34px, 6vw, 84px)" }}>
                「生きててよかった」が<br />あふれる世界を創る。
              </h2>
              <p className="mt-10 max-w-2xl text-[16px] md:text-[18px] leading-[2.1] text-charcoal/85">
                やってみたかったことに挑戦できた。仲間と一緒に何かを生み出せた。
                自分の仕事が誰かの役に立った。そんな瞬間が、一人ひとりの人生に増えていく。
                私たちは、そんな世界を目指します。
              </p>
            </div>
          </div>
        </section>

        {/* ===== 5. MID-TERM GOAL — 巨大な terracotta の「240」をグラフィックに。TOP の大数字の呼応 ===== */}
        <section className="py-16 md:py-28 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
              <div className="md:col-span-5">
                <div className="text-terra text-[12px] font-bold tracking-[0.2em]">MID-TERM GOAL</div>
                <div className="mt-6 text-[15px] md:text-[17px] font-bold text-charcoal/60">まずは、西尾から。</div>
                <div className="mt-2 flex items-end gap-4">
                  <span className="text-terra font-black leading-[0.8] tracking-[-0.04em]" style={{ fontSize: "clamp(140px, 22vw, 300px)" }}>240</span>
                </div>
                <div className="text-[15px] font-bold text-charcoal">の事業を、2040年までに。</div>
              </div>
              <div className="md:col-span-7 md:pl-6">
                <h2 className="text-green font-black leading-[1.25] tracking-[-0.02em]" style={{ fontSize: "clamp(26px, 3.6vw, 46px)" }}>
                  2040年までに、<br className="hidden sm:block" />西尾に240の事業を。
                </h2>
                <p className="mt-8 max-w-xl text-[16px] md:text-[18px] leading-[2.1] text-charcoal/85">
                  240の事業をつくること自体がゴールではありません。
                  一人の「やってみたい」から挑戦が始まり、仲間が集まり、仕事や事業が生まれる。
                  その経験が、また次の誰かの挑戦につながっていく。
                  そんな循環が地域に根づいている状態をつくる。そのための中期目標です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 6. VALUES — 3つのコアは非対称な編集リスト。7つのスタンスは控えめに ===== */}
        <section className="py-20 md:py-32 bg-ivory">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="max-w-3xl">
              <div className="text-terra text-[12px] font-bold tracking-[0.2em]">VALUES</div>
              <h2 className="mt-4 text-green font-black leading-[1.2] tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
                私たちが、<br className="hidden sm:block" />大切にしていること。
              </h2>
            </div>

            {/* 3つのコアバリュー（大きな番号付きの編集リスト。均等カードにしない） */}
            <div className="mt-16 md:mt-24 flex flex-col">
              {coreValues.map((v, i) => (
                <div
                  key={v.en}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start py-10 md:py-14 ${i > 0 ? "border-t border-charcoal/10" : ""}`}
                >
                  <div className="md:col-span-4">
                    <div className="flex items-baseline gap-4">
                      <span className="text-terra font-black leading-none tracking-[-0.03em]" style={{ fontSize: "clamp(40px, 5vw, 68px)" }}>0{i + 1}</span>
                      <span className="text-charcoal/40 text-[13px] font-bold tracking-[0.14em] uppercase pb-2">{v.en}</span>
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="text-green font-black leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3.2vw, 40px)" }}>{v.title}</h3>
                    <p className="mt-5 max-w-xl text-[16px] md:text-[17px] leading-[2.1] text-charcoal/85">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 7つのスタンス（3つより控えめ・小さな文字） */}
            <div className="mt-16 md:mt-20 border-t border-charcoal/10 pt-10">
              <div className="text-[11px] font-bold tracking-[0.2em] text-muted">OUR STANCE</div>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                {stances.map((s) => (
                  <span key={s} className="text-[14px] font-medium text-charcoal/60">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== 7. FOUNDER — 写真プレースホルダーとバイオを非対称に。カードにしない ===== */}
        <section className="py-20 md:py-32 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <div className="text-terra text-[12px] font-bold tracking-[0.2em]">FOUNDER</div>
                {/* 代表写真プレースホルダー（専用の写真ファイルが未配置のため） */}
                {/* TODO: 代表写真（中根 隆）を用意でき次第、この枠を実画像に差し替える */}
                <div className="mt-8 relative aspect-[3/4] w-full bg-ivory flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                    <span className="text-[24px] font-black text-charcoal/40 tracking-tight">RN</span>
                  </div>
                  <div className="text-center">
                    <div className="text-[13px] font-bold text-green">中根 隆</div>
                    <div className="mt-1 text-[11px] tracking-[0.2em] text-muted">写真準備中</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 lg:pt-8">
                <div className="text-charcoal/40 text-[13px] font-bold tracking-[0.16em]">RYU NAKANE</div>
                <h2 className="mt-3 text-green font-black leading-[1.2] tracking-[-0.02em]" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
                  中根 隆
                </h2>
                <div className="mt-3 text-[14px] font-bold text-terra">代表社員</div>

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

        {/* ===== 8. COMPANY — 会社概要は素直な定義リスト（表）で。ivory 地 ===== */}
        <section className="py-20 md:py-32 bg-ivory">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <div className="text-terra text-[12px] font-bold tracking-[0.2em]">COMPANY</div>
                <h2 className="mt-4 text-green font-black leading-[1.2] tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
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
                          <a href="mailto:branding@momentsshare.com" className="text-green font-bold border-b-2 border-green pb-0.5 hover:text-terra hover:border-terra transition-colors">
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
            <div className="text-white/60 text-[12px] font-bold tracking-[0.2em]">CONTACT</div>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <h2 className="lg:col-span-8 font-black leading-[1.15] tracking-[-0.02em]" style={{ fontSize: "clamp(34px, 5.5vw, 76px)" }}>
                この循環を、<br />次はあなたと。
              </h2>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="text-[15px] leading-[2] text-white/75">
                  やってみたいこと、困っていること。まだカタチになっていなくても大丈夫です。
                </p>
                <Link href="/contact" className="mt-6 inline-block bg-terra text-white font-bold px-9 py-4 rounded-full hover:opacity-90 transition-opacity">
                  30分相談する →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
