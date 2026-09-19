import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/ui/Nav";
import { SitePhoto } from "@/components/ui/SitePhoto";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { zukan } from "@/lib/community";

/* ============================================================
   西尾働き方図鑑のハブページ。

   このページの役目は「検索順位」ではなく「掲載社を増やす受け皿」。
   掲載がまだ少ないうちは検索の入口にならないため、
   Instagram / note のプロフィール欄から飛ばす先として使う。

   記事の中身はここに複製しない（外部媒体と連携する方針）。
   掲載社が増えて、1社ごとに紹介文を置けるようになった段階で、
   このページを一覧に育てる。
   ============================================================ */

export const metadata: Metadata = {
  title: "西尾働き方図鑑｜西尾市で働く人と企業のメディア",
  description:
    "西尾市で働く人と企業を取材して発信するメディア「西尾働き方図鑑」。地元にどんな仕事があるのかを、働いている人の言葉で伝えます。最新の記事はInstagramとnoteで公開中。掲載・取材のご相談も受け付けています。",
  alternates: { canonical: "https://moments-share.com/zukan/" },
  openGraph: {
    title: "西尾働き方図鑑｜西尾市で働く人と企業のメディア",
    description:
      "西尾市で働く人と企業を取材して発信するメディア。地元にどんな仕事があるのかを、働いている人の言葉で伝えます。",
    locale: "ja_JP",
    type: "website",
    url: "https://moments-share.com/zukan/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "西尾働き方図鑑｜西尾市で働く人と企業のメディア",
    description: "西尾に、こんな仕事があった。働く人の言葉で伝えるメディアです。",
    images: ["/og-image.jpg"],
  },
};

/* 図鑑が何をするものかの説明。既存の地域プロデュースページの記述と揃える */
const points = [
  {
    label: "誰を",
    title: "西尾で働いている人と、その会社。",
    body: "業種や規模では選びません。そこで働いている人が、どんな一日を送っているのか。決め手はそこにあります。",
  },
  {
    label: "なぜ",
    title: "「知らない」だけで、選択肢から外れている。",
    body: "西尾にある仕事の多くは、名前を知られていないだけで選ばれていません。知る機会をつくることが、地元で働く選択肢を増やすことにつながります。",
  },
  {
    label: "どこで",
    title: "読む場所は、Instagramとnote。",
    body: "記事はInstagramとnoteで公開しています。このページは、その入口と、掲載のご相談窓口です。",
  },
];

/* 取材の流れ。所要期間・費用は未確定のため書かない。
   TODO: 取材にかかる期間と、費用の有無が決まったらここに追記する。 */
const steps = [
  { step: "01", title: "ご連絡をいただく", body: "お問い合わせフォームから「地域プロデュース」を選んでご連絡ください。" },
  { step: "02", title: "何を伝えたいかを決める", body: "会社のことではなく、働いている人のことを伺います。事前の準備は要りません。" },
  { step: "03", title: "取材して、公開する", body: "撮影と取材をしたうえで、Instagramとnoteに掲載します。内容は公開前に必ずご確認いただきます。" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "西尾働き方図鑑",
  "alternateName": "西尾働き方図鑑（にしおはたらきかたずかん）",
  "description":
    "愛知県西尾市で働く人と企業を取材して発信するメディア。地元にどんな仕事があるのかを、働いている人の言葉で伝える。",
  "url": "https://moments-share.com/zukan/",
  "inLanguage": "ja",
  "about": { "@type": "Thing", "name": "愛知県西尾市の仕事・働き方" },
  "spatialCoverage": { "@type": "Place", "name": "愛知県 西尾市" },
  "publisher": {
    "@type": "Organization",
    "name": "Moments Share合同会社",
    "url": "https://moments-share.com",
  },
  /* 記事の本体は外部媒体にある。どこで読めるかを構造化データでも示す */
  "sameAs": zukan.media.map((m) => m.url),
  "isPartOf": {
    "@type": "WebPage",
    "name": "地域プロデュース",
    "url": "https://moments-share.com/service-produce/",
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://moments-share.com/" },
      { "@type": "ListItem", "position": 2, "name": "地域プロデュース", "item": "https://moments-share.com/service-produce/" },
      { "@type": "ListItem", "position": 3, "name": "西尾働き方図鑑", "item": "https://moments-share.com/zukan/" },
    ],
  },
};

export default function Zukan() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content">
        {/* ===== HERO — 写真は添えるだけ。言葉を主役にする ===== */}
        <section className="pt-28 md:pt-36 pb-14 md:pb-20 px-6 md:px-10 bg-ivory">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-charcoal/70 text-[12px] font-bold tracking-[0.16em]">
              PROJECT｜地域プロデュース
            </div>
            <h1
              className="mt-5 max-w-[16em] text-charcoal font-semibold leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
            >
              西尾に、<br />こんな仕事があった。
            </h1>
            <p className="mt-8 max-w-[34em] text-[16px] md:text-[18px] leading-[2] text-charcoal/80">
              西尾働き方図鑑は、西尾市で働く人と企業を取材して発信するメディアです。
              求人票には出てこない一日のことを、働いている本人の言葉で伝えます。
            </p>
          </div>
        </section>

        {/* ===== 図鑑とは ===== */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
              <div className="md:col-span-5">
                <SitePhoto name="regionEducation" ratio="4/3" sizes="(max-width: 768px) 100vw, 40vw" />
              </div>
              <div className="md:col-span-7">
                <ul className="border-t border-charcoal/15">
                  {points.map((p) => (
                    <li key={p.label} className="border-b border-charcoal/15 py-7 md:py-9">
                      <div className="text-sage-ink text-[12px] font-bold tracking-[0.16em]">{p.label}</div>
                      <h2
                        className="mt-3 text-charcoal font-semibold leading-[1.35] tracking-[-0.02em]"
                        style={{ fontSize: "clamp(19px, 2.2vw, 26px)" }}
                      >
                        {p.title}
                      </h2>
                      <p className="mt-3 max-w-[36em] text-[15px] md:text-[16px] leading-[2] text-charcoal/75">
                        {p.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 外部媒体への導線 — このページの主目的のひとつ ===== */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-green-deep text-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-white/75 text-[12px] font-bold tracking-[0.16em]">READ</div>
            <h2
              className="mt-4 max-w-[18em] font-semibold leading-[1.25] tracking-[-0.02em]"
              style={{ fontSize: "clamp(26px, 3.4vw, 44px)" }}
            >
              記事は、Instagramとnoteで。
            </h2>
            <p className="mt-6 max-w-[34em] text-[16px] md:text-[17px] leading-[2] text-white/80">
              図鑑の本体は外部の媒体にあります。更新はそちらで行っているので、
              最新の記事はこちらからご覧ください。
            </p>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-8">
              {zukan.media.map((m) => (
                <ExternalLink key={m.url} href={m.url} variant="onGreen">
                  {m.label}
                </ExternalLink>
              ))}
            </div>
            {zukan.entriesCount > 0 && (
              <p className="mt-10 text-[13px] leading-[1.9] text-white/75">
                現在の掲載は{zukan.entriesCount}社です。これから少しずつ増やしていきます。
              </p>
            )}
          </div>
        </section>

        {/* ===== 掲載を希望する方へ — 受け皿。ここが本来の目的 ===== */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-ivory">
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-3xl">
              <div className="text-charcoal/70 text-[12px] font-bold tracking-[0.16em]">JOIN</div>
              <h2
                className="mt-4 text-charcoal font-semibold leading-[1.25] tracking-[-0.02em]"
                style={{ fontSize: "clamp(26px, 3.4vw, 42px)" }}
              >
                載りたい会社を、探しています。
              </h2>
              <p className="mt-6 text-[16px] md:text-[18px] leading-[2] text-charcoal/80">
                西尾で働いている人がいれば、業種も規模も問いません。
                「うちには語ることがない」と思っている会社ほど、読まれる記事になります。
              </p>
            </div>

            <ol className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-charcoal/15 pt-10">
              {steps.map((s) => (
                <li key={s.step}>
                  <div className="text-charcoal/65 font-medium tabular-nums leading-none text-[20px]">{s.step}</div>
                  <h3 className="mt-4 text-charcoal font-semibold leading-[1.4] text-[17px] md:text-[19px]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[2] text-charcoal/75">{s.body}</p>
                </li>
              ))}
            </ol>

            <Link href="/contact" className="btn btn-ghost-navy px-9 py-4 mt-12 inline-block">
              掲載・取材について相談する →
            </Link>
          </div>
        </section>

        {/* ===== 地域プロデュースへ戻す ===== */}
        <section className="py-14 md:py-20 px-6 md:px-10 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <p className="text-[15px] leading-[2] text-charcoal/70 max-w-[34em]">
              西尾働き方図鑑は、Moments Shareの地域プロデュース事業のプロジェクトのひとつです。
              西尾筋肉祭り、AI活用研究会など、ほかの取り組みもあわせてご覧ください。
            </p>
            <Link
              href="/service-produce"
              className="mt-6 inline-block border-b border-navy-ink/40 pb-0.5 text-[14px] font-bold text-navy-ink transition-colors hover:border-deep-green hover:text-deep-green"
            >
              地域プロデュースの取り組みを見る →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
