import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/ui/Nav";
import { Reveal } from "@/components/ui/Reveal";
import { RevealChars } from "@/components/ui/RevealChars";
import { charStarts } from "@/lib/reveal-timing";

/* ============================================================
   About — 会社案内ではなく、思想に共感してもらうためのページ。

   読む → 考える → 少し自分と重ねる → 一緒に何かやってみたい
   という流れを、上から下へ一本の物語として通す。

   3つの言葉は役割を混ぜない：
     PURPOSE  すべてがつながる瞬間を、共創する。   なぜ在るのか
     BELIEF   一歩ずつ、できるまで続けるだけ。      どう構えるか
     VISION   「生きててよかった！」があふれる世界。 その先の世界

   冒頭のPURPOSEと最後のVISIONがつながる円環にしてある。
   「すべてがつながる瞬間」が何なのかを、最後まで読むと分かる。

   写真は実写だけを使い、足りないところは無理に埋めない。
   余白・タイポグラフィ・罫線で持たせる。カードを並べない。
   ============================================================ */

export const metadata: Metadata = {
  title: "会社概要・存在意義｜Moments Share合同会社",
  description:
    "Moments Share合同会社の会社概要と存在意義。すべてがつながる瞬間を、共創する。愛知県西尾市を拠点に、DX/AX支援・BPO・地域プロデュースの3事業を展開しています。信念・行動指針・原点・会社情報をご紹介します。",
  openGraph: {
    title: "会社概要・存在意義｜Moments Share合同会社",
    description:
      "すべてがつながる瞬間を、共創する。「生きててよかった！」があふれる世界へ。Moments Shareの存在意義と歩み。愛知県西尾市発。",
    locale: "ja_JP",
    type: "website",
    url: "https://moments-share.com/about",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "会社概要・存在意義｜Moments Share合同会社",
    description:
      "すべてがつながる瞬間を、共創する。「生きててよかった！」があふれる世界へ。愛知県西尾市発。",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "会社概要・存在意義｜Moments Share合同会社",
  "description":
    "すべてがつながる瞬間を、共創する。「生きててよかった！」があふれる世界へ。Moments Shareの存在意義・信念・行動指針・事業・原点・会社概要。",
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

/* PURPOSE の本文。1行ずつ改行を保つ（詩として読ませる） */
const purposeLines = [
  "目指していたことが、カタチになる瞬間。",
  "つらかった経験も、大変だった時間も、",
  "振り返れば、そこへつながる伏線だったと思える。",
  "そんな人生のハイライトを、",
  "一人でも多くの人と共につくり続けていきます。",
];
const purposeStarts = charStarts(purposeLines, 14, 140);

/* BELIEF の本文 */
const beliefLines = [
  "本気で何かを目指せば、",
  "壁にぶつかることも、立ち止まることもある。",
  "そのたびに問い直す。",
  "本当にやりたいことは何か。",
  "本当に成し遂げたいことは何か。",
  "自分と向き合い、人と向き合い、社会と向き合いながら、",
  "今日できる一歩を積み重ねていく。",
  "すぐに答えが出なくてもいい。",
  "すぐにカタチにならなくてもいい。",
];

/* 3つの行動指針（正式文言。一字も変えない）。
   個人の一歩 → 積み重ね → 共創、の順に並べる */
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
    body: "最後までかたちにして、喜びを分かち合おう。",
  },
];

/* 7つの判断基準（正式文言。一字も変えない）。
   補足文を持っていないので、開閉させるものが無い。
   行動指針の <details> と並べるが、こちらは開閉しない一覧にする */
const stances = [
  { en: "Self Driven", ja: "自分ごとで動こう。" },
  { en: "Challenge", ja: "まず、やってみよう。" },
  { en: "Better Everyday", ja: "昨日より、少しずつ良くしよう。" },
  { en: "Legacy", ja: "100年後に、誇れる選択を。" },
  { en: "Purpose", ja: "目的から、考えよう。" },
  { en: "Co-Create", ja: "違いを力に、共に創ろう。" },
  { en: "Build Systems", ja: "仕組みを創ろう。" },
];

/* 3事業。サービスとしてではなく「担う役割」から書く */
const businesses = [
  {
    role: "余白をつくる",
    en: "DX / AX",
    name: "DX・AX支援",
    body: "人がやらなくてもいい仕事を減らし、挑戦するための余白をつくる。",
    href: "/service-dx",
  },
  {
    role: "人と仕事をつなぐ",
    en: "BPO",
    name: "BPO",
    body: "必要な仕事と多様な人の力をつなぎ、挑戦を続けられる体制をつくる。",
    href: "/service-bpo",
  },
  {
    role: "きっかけをつくる",
    en: "PRODUCE",
    name: "地域プロデュース",
    body: "人・企業・想いが出会い、新しい挑戦が生まれるきっかけをつくる。",
    href: "/service-produce",
  },
];

/* 3事業の先に起きること。最後は最初へ戻る */
const cycle = [
  "余白が生まれる",
  "人と仕事がつながる",
  "挑戦が生まれる",
  "新しい仕事・事業が生まれる",
  "次の挑戦へ",
];

/* 創業ストーリー（既存の文章をそのまま。新しい事実は足していない）。
   5段落目は結論として本文から抜き、大きく見せる */
const story = [
  "群馬の大学を経て、シンガポールのベンチャー企業へ。営業・CS・マーケティング・マネジメントを掛け持ちしながら、社員3名から10名へと成長する現場を走り抜けた。多いときは50社を担当しながら、新規営業も。夜も眠れない日々の中で、ひとつの問いに突き当たった。",
  "「この仕事、本当に人がやる必要があるのか。」——多くの企業が、人にしかできない仕事ではなく、人がやらなくてもいい仕事に、時間を使っていた。",
  "外に出たからこそ、やっぱり地元・西尾が好きだと気づいた。Uターンして地元企業と話すと、そこにも同じ問いがあった。「人手が足りない」「でも採れない」「社員は雑務で手一杯」。一方で若い人は「地元で働きたいけど仕事がない」と言う。この2つをつなぐ設計が必要だと確信した。",
  "100社以上の企業支援を重ねる中で、確信は強くなった。DXは効率化のためではない。人にしかできない価値を生み出すためのものだ。",
  "人口減少を止めることはできない。でも、挑戦と共創が循環する地域なら、豊かになれる。その仕組みを、西尾から創る。",
];

/* 4th Place が何を指すか。5つ並べて、最後だけ長くする */
const placeLines = [
  "想いを話せる。",
  "仲間と出会える。",
  "挑戦できる。",
  "失敗できる。",
  "そして、カタチになるまで続けられる。",
];

/* VISION。挑戦から「生きててよかった」までの道のり */
const visionSteps = ["挑戦した。", "失敗した。", "誰かと出会った。", "続けた。", "カタチになった。"];

/* 会社概要：確認できている事実のみ（不明項目は載せない） */
const company: { label: string; value: string; email?: boolean }[] = [
  { label: "正式名称", value: "Moments Share合同会社" },
  { label: "代表者名", value: "中根 隆（Ryu Nakane）" },
  { label: "所在地", value: "愛知県西尾市" },
  { label: "設立", value: "2025年11月" },
  { label: "事業内容", value: "DX・AX支援／BPO／地域プロデュース" },
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
        {/* ===== 01 PURPOSE — 思想の起点。写真と余白だけで受ける ===== */}
        <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-[#16281f]">
          <div className="absolute inset-0">
            <Image
              src="/photos/hero-nishio.jpg"
              alt="愛知県西尾市の川辺の風景"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(16,32,42,0.62) 0%, rgba(16,32,42,0.42) 42%, rgba(16,32,42,0.86) 100%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 pt-40 md:px-10 md:pb-28">
            <p className="text-[12px] font-bold tracking-[0.28em] text-white/70">PURPOSE</p>
            <h1
              className="mt-7 max-w-[15em] font-bold leading-[1.28] tracking-[-0.03em] text-white"
              style={{ fontSize: "clamp(34px, 6.4vw, 92px)" }}
            >
              すべてがつながる瞬間を、
              <br className="hidden sm:block" />
              共創する。
            </h1>

            {/* 本文だけ1文字ずつ現れる。ここはページの入口なので、
                読み手の速度に合わせて言葉が置かれていく形にする */}
            <div className="mt-12 max-w-[34em] space-y-2 text-[15px] leading-[2.2] text-white/85 md:mt-14 md:text-[17px]">
              {purposeLines.map((line, i) => (
                <RevealChars key={line} text={line} start={purposeStarts[i]} step={14} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== 02 BELIEF — 白と余白。9行を静かに積む ===== */}
        <section className="bg-white py-28 md:py-44">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Reveal>
              <p className="text-[12px] font-bold tracking-[0.28em] text-sage-ink">
                BELIEF — 私たちが信じていること
              </p>
              <h2
                className="mt-7 max-w-[13em] font-bold leading-[1.32] tracking-[-0.03em] text-charcoal"
                style={{ fontSize: "clamp(30px, 4.8vw, 66px)" }}
              >
                一歩ずつ、
                <br className="hidden sm:block" />
                できるまで続けるだけ。
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              {/* 左寄せのまま。中央寄せの長文はスマホで行頭が揃わず読みにくい */}
              <div className="mt-12 max-w-[32em] space-y-1 text-[15px] leading-[2.3] text-charcoal/80 md:mt-16 md:text-[17px]">
                {beliefLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </Reveal>

            {/* 最後の一行だけ、大きさを変えて言い切る */}
            <Reveal delay={0.2}>
              <p
                className="mt-10 font-bold leading-[1.5] tracking-[-0.02em] text-charcoal"
                style={{ fontSize: "clamp(20px, 2.6vw, 32px)" }}
              >
                一歩ずつ、できるまで続けるだけ。
              </p>
            </Reveal>
          </div>
        </section>

        {/* ===== 03 HOW WE ACT — 信念を、日々の行動へ落とす ===== */}
        <section className="bg-ivory py-24 md:py-36">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Reveal>
              <p className="text-[12px] font-bold tracking-[0.28em] text-sage-ink">HOW WE ACT</p>
              <h2
                className="mt-7 max-w-[16em] font-bold leading-[1.35] tracking-[-0.02em] text-charcoal"
                style={{ fontSize: "clamp(26px, 3.8vw, 50px)" }}
              >
                想いだけで、終わらせないために。
              </h2>
              <p className="mt-8 max-w-[32em] text-[15px] leading-[2.1] text-charcoal/80 md:text-[16px]">
                Beliefを、きれいな言葉だけで終わらせない。日々の行動に落とし込むための「3つの行動指針」と「7つの判断基準」を大切にしています。
              </p>
            </Reveal>


            {/* --- 指針 × 基準。縦に積むと2画面ぶんになるので、
                  横に並べて「かけ算」として見せる。
                  行動指針は本文を持っているので <details> で畳む。
                  JSは使わない。本文はHTMLに残るので検索・AI検索には従来どおり読まれる --- */}
            <div className="mt-20 grid gap-12 md:mt-28 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.05fr)] lg:gap-0">
              {/* 左：3つの行動指針 */}
              <Reveal delay={0.1}>
                <div className="lg:pr-14">
                  <p className="text-[11px] font-bold tracking-[0.24em] text-charcoal/60">
                    3つの行動指針 — どう動くか
                  </p>
                  <h3
                    className="mt-5 font-semibold leading-[1.4] tracking-[-0.02em] text-charcoal"
                    style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
                  >
                    日々の行動をつくる指針。
                  </h3>

                  <ol className="mt-9 border-t border-charcoal/15">
                    {coreValues.map((v, i) => (
                      <li key={v.en}>
                        {/* 最初の1つだけ開いておく。3つとも閉じていると
                            開けることに気づかれない */}
                        <details className="group border-b border-charcoal/15" open={i === 0}>
                          <summary className="flex cursor-pointer list-none items-start gap-4 py-5">
                            {/* 英語を上、日本語を下。右の判断基準と同じ組み方にして、
                                「×」をはさんだ左右が同じリズムで読めるようにする */}
                            <span className="min-w-0 flex-1">
                              <span className="block text-[12px] font-bold tracking-[0.22em] text-terracotta-ink">
                                {v.en}
                              </span>
                              <span
                                className="mt-2 block font-bold leading-[1.55] tracking-[-0.02em] text-charcoal"
                                style={{ fontSize: "clamp(16px, 1.7vw, 20px)" }}
                              >
                                {v.title}
                              </span>
                            </span>
                            {/* 開閉の向きを示す。装飾なので読み上げない */}
                            <span
                              aria-hidden
                              className="mt-px shrink-0 text-[13px] font-bold text-charcoal/45 transition-transform group-open:rotate-45"
                            >
                              ＋
                            </span>
                          </summary>
                          <p className="max-w-[28em] pb-6 text-[15px] leading-[2] text-charcoal/80">
                            {v.body}
                          </p>
                        </details>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              {/* 中央：2つをつなぐ「×」。狭い画面では横罫に倒れる */}
              <div
                aria-hidden
                className="flex items-center justify-center gap-5 lg:flex-col lg:gap-6 lg:px-0"
              >
                <span className="h-px flex-1 bg-charcoal/15 lg:h-auto lg:w-px lg:flex-initial lg:grow" />
                <span className="text-[24px] font-light leading-none text-charcoal/35 md:text-[30px]">
                  ×
                </span>
                <span className="h-px flex-1 bg-charcoal/15 lg:h-auto lg:w-px lg:flex-initial lg:grow" />
              </div>

              {/* 右：7つの判断基準。補足文を持っていないので開閉させない。
                  1列に7つ並べると縦に伸びるので、広い画面では2列に折る */}
              <Reveal delay={0.15}>
                <div className="lg:pl-14">
                  <p className="text-[11px] font-bold tracking-[0.24em] text-charcoal/60">
                    7つの判断基準 — どう選ぶか
                  </p>
                  <h3
                    className="mt-5 font-semibold leading-[1.4] tracking-[-0.02em] text-charcoal"
                    style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
                  >
                    日々の決断を支える基準。
                  </h3>

                  <ol className="mt-9 grid grid-cols-2 gap-x-6 gap-y-6 md:gap-x-8">
                    {stances.map((s) => (
                      <li key={s.en}>
                        <p className="text-[11px] font-bold tracking-[0.16em] text-sage-ink">
                          {s.en}
                        </p>
                        <p className="mt-1.5 text-[15px] leading-[1.7] text-charcoal md:text-[16px]">
                          {s.ja}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===== 04 WHAT WE DO — 思想を、地域で動く仕組みに変える ===== */}
        <section className="bg-white py-24 md:py-36">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Reveal>
              <p className="text-[12px] font-bold tracking-[0.28em] text-sage-ink">WHAT WE DO</p>
              <h2
                className="mt-7 max-w-[14em] font-bold leading-[1.35] tracking-[-0.02em] text-charcoal"
                style={{ fontSize: "clamp(26px, 3.8vw, 50px)" }}
              >
                思想を、地域の仕組みに。
              </h2>
              <div className="mt-8 max-w-[32em] space-y-5 text-[15px] leading-[2.1] text-charcoal/80 md:text-[16px]">
                <p>想いがあっても、時間がない。人がいない。きっかけがない。挑戦を阻むものは、地域の中にたくさんあります。</p>
                <p>だから私たちは、3つの役割を担います。</p>
              </div>
            </Reveal>

            {/* 3事業。サービス名より先に「担う役割」を出す */}
            <Reveal delay={0.12}>
              <ol className="mt-16 grid grid-cols-1 gap-y-12 border-t border-charcoal/15 md:mt-20 md:grid-cols-3 md:gap-x-10 md:gap-y-0">
                {businesses.map((b, i) => (
                  <li
                    key={b.en}
                    className={`pt-9 md:px-8 md:first:pl-0 md:last:pr-0 ${
                      i > 0 ? "border-t border-charcoal/15 md:border-l md:border-t-0" : ""
                    }`}
                  >
                    <p
                      className="font-bold leading-[1.4] tracking-[-0.02em] text-charcoal"
                      style={{ fontSize: "clamp(20px, 2.4vw, 28px)" }}
                    >
                      {b.role}
                    </p>
                    <p className="mt-5 text-[11px] font-bold tracking-[0.22em] text-terracotta-ink">
                      {b.en}
                    </p>
                    <p className="mt-2 text-[15px] font-bold text-charcoal md:text-[16px]">{b.name}</p>
                    <p className="mt-4 max-w-[22em] text-[14px] leading-[2] text-charcoal/80 md:text-[15px]">
                      {b.body}
                    </p>
                    <Link
                      href={b.href}
                      className="mt-6 inline-block border-b border-navy-ink/40 pb-0.5 text-[13px] font-bold text-navy-ink transition-colors hover:border-deep-green hover:text-deep-green"
                    >
                      詳しく →
                    </Link>
                  </li>
                ))}
              </ol>
            </Reveal>

            {/* 3事業の先に起きること。最後の行から最初へ戻る */}
            <Reveal delay={0.18}>
              <div className="mt-24 md:mt-32">
                <p className="text-[11px] font-bold tracking-[0.24em] text-charcoal/60">
                  そして、循環がはじまる
                </p>
                <ol className="relative mt-9 max-w-[30em] pl-10">
                  {/* 最後から最初へ戻る線。これが「循環」そのもの */}
                  <span
                    aria-hidden
                    className="absolute bottom-4 left-0 top-4 w-6 rounded-l-full border-b border-l border-t border-sage-ink/70"
                  />
                  {/* 戻り先（最初の行）を指す矢印 */}
                  <span
                    aria-hidden
                    className="absolute left-[22px] top-[8px] h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-sage-ink"
                  />
                  {cycle.map((c, i) => (
                    <li key={c} className="relative pb-7 last:pb-0">
                      {i < cycle.length - 1 && (
                        <span
                          aria-hidden
                          className="absolute -left-[19px] top-6 h-[calc(100%-1rem)] w-px bg-charcoal/15"
                        />
                      )}
                      <span
                        aria-hidden
                        className="absolute -left-[23px] top-[7px] block h-[9px] w-[9px] rounded-full bg-sage-ink"
                      />
                      <p className="text-[16px] font-semibold leading-[1.7] text-charcoal md:text-[18px]">
                        {c}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== 05 STORY — なぜこの思想にたどり着いたのか ===== */}
        <section className="bg-ivory py-24 md:py-36">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Reveal>
              <p className="text-[12px] font-bold tracking-[0.28em] text-sage-ink">STORY</p>
              <h2
                className="mt-7 max-w-[13em] font-bold leading-[1.35] tracking-[-0.02em] text-charcoal"
                style={{ fontSize: "clamp(26px, 3.8vw, 50px)" }}
              >
                なぜ、この思想に
                <br className="hidden sm:block" />
                たどり着いたのか。
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              {/* 結論（5段落目）は本文から抜いて、下で大きく出す */}
              <div className="mt-14 max-w-[36em] space-y-8 text-[15px] leading-[2.2] text-charcoal/85 md:mt-16 md:text-[17px]">
                {story.slice(0, 4).map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            {/* 実写。人が集まっている場面をここに置く */}
            <Reveal delay={0.15}>
              <figure className="mt-16 md:mt-20">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  {/* キャプションで筋肉祭りだと明示しているので、
                      看板が写っていて問題ない。むしろ説明になる */}
                  <Image
                    src="/photos/31_kinniku_stage.jpg"
                    alt="西尾筋肉祭りのステージ上に並ぶ出場者・スタッフの集合写真"
                    fill
                    sizes="(max-width: 768px) 100vw, 1400px"
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="mt-4 text-[12px] leading-[1.9] text-charcoal/60">
                  西尾筋肉祭り。誰か一人が始めなければ、この日は生まれていない。
                </figcaption>
              </figure>
            </Reveal>

            {/* 結論。このページで一番大きな一文にする */}
            <Reveal delay={0.1}>
              <p
                className="mt-20 max-w-[16em] font-bold leading-[1.4] tracking-[-0.03em] text-charcoal md:mt-28"
                style={{ fontSize: "clamp(28px, 5vw, 68px)" }}
              >
                人口が減っても、
                <br />
                挑戦まで減らす必要はない。
              </p>
              <p className="mt-9 max-w-[32em] text-[15px] leading-[2.1] text-charcoal/80 md:text-[16px]">
                人口減少を止めることはできない。でも、挑戦と共創が循環する地域なら、豊かになれる。その仕組みを、西尾から創る。
              </p>
            </Reveal>
          </div>
        </section>

        {/* ===== 06 4TH PLACE — 会社そのものが、どんな存在でありたいか。

             ここには写真を置かない。実写は4枚しかなく、
             どれもこの節の中身と合わなかった。
             集合写真は「西尾筋肉祭り」の看板が見出しと competing し、
             ハイタッチの写真はポーズを取る人が主役になってしまう。
             合わない写真を置くくらいなら、余白で持たせる。

             白地にしてあるのは、このあとのVISIONが深緑の面だから。
             明るい面から濃い面へ落として、最後を山にする ===== */}
        <section className="bg-white py-28 md:py-44">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Reveal>
              <p className="text-[12px] font-bold tracking-[0.28em] text-terracotta-ink">4TH PLACE</p>
              <h2
                className="mt-7 max-w-[13em] font-bold leading-[1.35] tracking-[-0.03em] text-charcoal"
                style={{ fontSize: "clamp(28px, 4.6vw, 62px)" }}
              >
                「やってみたい」を、
                <br />
                持ち込める場所でありたい。
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-12 max-w-[30em] text-[15px] leading-[2.2] text-charcoal/80 md:text-[17px]">
                一人では難しいことも、誰かと出会うことで、一歩を踏み出せることがある。
              </p>
            </Reveal>

            {/* 5つ。1行ずつ、間を空けて置く。ここがこの節の中心 */}
            <Reveal delay={0.16}>
              <ul className="mt-16 space-y-6 md:mt-24 md:space-y-9">
                {placeLines.map((line, i) => (
                  <li
                    key={line}
                    className={`font-bold leading-[1.45] tracking-[-0.02em] ${
                      i === placeLines.length - 1 ? "text-charcoal" : "text-charcoal/85"
                    }`}
                    style={{ fontSize: "clamp(21px, 3.2vw, 42px)" }}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* 定義。この言葉はここで説明しておかないと伝わらない */}
            <Reveal delay={0.22}>
              <div className="mt-20 max-w-[34em] border-l-2 border-terracotta pl-6 md:mt-28 md:pl-8">
                <p className="text-[15px] leading-[2.2] text-charcoal/80 md:text-[17px]">
                  家でも、職場でも、いつものコミュニティでもない。自分の「やりたい」と向き合い、誰かと一緒に実現していく場所。
                </p>
                <p className="mt-6 text-[15px] leading-[2.2] text-charcoal/80 md:text-[17px]">
                  Moments Shareは、会社であると同時に、一人ひとりの「やってみたい」を持ち込み、誰かと共にカタチにしていける場所でありたい。私たちは、そんな場所を
                  <strong className="font-bold text-charcoal">「4th Place — 自己実現の場」</strong>
                  と呼んでいます。
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== 07 VISION — 冒頭のPURPOSEへ戻る。ページの円環を閉じる ===== */}
        <section className="bg-green-deep py-28 md:py-44 text-white">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Reveal>
              <p className="text-[12px] font-bold tracking-[0.28em] text-white/70">VISION</p>
              <h2
                className="mt-7 max-w-[13em] font-bold leading-[1.3] tracking-[-0.03em]"
                style={{ fontSize: "clamp(32px, 5.4vw, 78px)" }}
              >
                「生きててよかった！」が
                <br className="hidden sm:block" />
                あふれる世界。
              </h2>
            </Reveal>

            {/* 挑戦から「生きててよかった」までの道のり。
                短い文を積むだけにして、説明しない */}
            <Reveal delay={0.12}>
              <ul className="mt-16 space-y-3 md:mt-20 md:space-y-4">
                {visionSteps.map((v) => (
                  <li
                    key={v}
                    className="leading-[1.6] tracking-[-0.01em] text-white/85"
                    style={{ fontSize: "clamp(17px, 2.2vw, 26px)" }}
                  >
                    {v}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-14 max-w-[32em] space-y-7 md:mt-20">
                <p className="text-[15px] leading-[2.2] text-white/80 md:text-[17px]">
                  そして振り返ったとき、
                </p>
                <p
                  className="font-bold leading-[1.5] tracking-[-0.02em] text-cream"
                  style={{ fontSize: "clamp(20px, 2.8vw, 34px)" }}
                >
                  「あの経験も、このためにあったのかもしれない。」
                </p>
                <p className="text-[15px] leading-[2.2] text-white/80 md:text-[17px]">
                  そう思える瞬間を、一人でも多くの人と。やってみたかったことに挑戦できた。仲間と一緒に、何かを生み出せた。自分の仕事が、誰かの役に立った。その積み重ねの先にある世界を、私たちは信じています。
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== 08 FOUNDER / COMPANY — 思想に共感したあとで、誰がどこでやっているか ===== */}
        <section className="bg-white py-24 md:py-36">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Reveal>
              <p className="text-[12px] font-bold tracking-[0.28em] text-sage-ink">FOUNDER</p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-4">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="/photos/33_founder_portrait.jpg"
                    alt="代表・中根 隆"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-8">
                <h2
                  className="font-bold leading-[1.3] tracking-[-0.02em] text-charcoal"
                  style={{ fontSize: "clamp(26px, 3.4vw, 44px)" }}
                >
                  中根 隆
                </h2>
                <p className="mt-3 text-[13px] font-bold tracking-[0.06em] text-charcoal/60">
                  代表社員 / Ryu Nakane — DX伴走パートナー
                </p>

                <div className="mt-10 max-w-[34em] space-y-6 text-[15px] leading-[2.1] text-charcoal/85 md:text-[16px]">
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

                <dl className="mt-10 grid max-w-[34em] grid-cols-3 gap-x-6 gap-y-4">
                  {[
                    { k: "出身", v: "愛知県西尾市" },
                    { k: "支援実績", v: "100社以上" },
                    { k: "設立", v: "2025年11月" },
                  ].map(({ k, v }) => (
                    <div key={k} className="border-t border-sage pt-4">
                      <dt className="text-[11px] font-bold tracking-[0.12em] text-charcoal/55">{k}</dt>
                      <dd className="mt-2 text-[14px] font-bold leading-[1.6] text-charcoal md:text-[15px]">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* 会社概要。営業色を出さず、事実だけの定義リスト */}
            <Reveal delay={0.1}>
              <div className="mt-24 md:mt-32">
                <p className="text-[12px] font-bold tracking-[0.28em] text-sage-ink">COMPANY</p>
                <dl className="mt-9 max-w-[52em] border-t border-charcoal/15">
                  {company.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-col gap-1 border-b border-charcoal/15 py-5 sm:flex-row sm:gap-10"
                    >
                      <dt className="min-w-[140px] pt-1 text-[12px] font-bold tracking-[0.14em] text-charcoal/60">
                        {row.label}
                      </dt>
                      <dd className="text-[15px] leading-[1.9] text-charcoal md:text-[16px]">
                        {row.email ? (
                          <a
                            href="mailto:branding@momentsshare.com"
                            className="border-b border-navy-ink/40 pb-0.5 font-bold text-navy-ink transition-colors hover:border-deep-green hover:text-deep-green"
                          >
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
            </Reveal>
          </div>
        </section>

        {/* ===== CTA — 思想を読み終えた人の行き先。営業の面にしない ===== */}
        <section id="contact" className="scroll-mt-20 bg-ivory py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-1 items-end gap-8 border-t border-charcoal/15 pt-14 lg:grid-cols-12">
              <h2
                className="font-bold leading-[1.3] tracking-[-0.02em] text-charcoal lg:col-span-7"
                style={{ fontSize: "clamp(24px, 3.2vw, 42px)" }}
              >
                ここまで読んでくださって、
                <br className="hidden sm:block" />
                ありがとうございます。
              </h2>
              <div className="lg:col-span-5 lg:pb-2">
                <p className="max-w-[26em] text-[15px] leading-[2] text-charcoal/80">
                  やってみたいこと、困っていること。まだカタチになっていなくても大丈夫です。
                </p>
                <Link href="/contact" className="btn btn-solid-green mt-7 px-9 py-4">
                  お問い合わせをしてみる →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
