import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/ui/Nav";
import { PhotoNeeded } from "@/components/ui/PhotoNeeded";

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
  title: "DX支援 | Moments Share合同会社",
  description:
    "忙しさを、余白へ。請求書・データ転記・日報集計など、毎月繰り返す業務をAI・自動化で減らす伴走型DX支援。まず業務を整理し、本当に効果のあるところから改善します。愛知県西尾市発。",
  openGraph: {
    title: "DX支援 | Moments Share合同会社",
    description:
      "忙しさを、余白へ。毎月繰り返す業務をAI・自動化で減らす伴走型DX支援。まず業務を整理し、効果のあるところから改善します。愛知県西尾市発。",
    locale: "ja_JP",
    type: "website",
    url: "https://moments-share.com/service-dx",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DX支援 | Moments Share合同会社",
    description: "忙しさを、余白へ。毎月繰り返す業務をAI・自動化で減らす伴走型DX支援。愛知県西尾市発。",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "DX支援",
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
      <Nav heroTone="dark" />
      <main id="main-content">
        {/* ===== HERO — 写真背景ヒーロー（TOPと同じトーン） ===== */}
        <section className="relative min-h-[58vh] md:min-h-[66vh] overflow-hidden bg-[#16281f]">
          <div className="absolute inset-0">
            <Image
              src="/photos/service-dx.png"
              alt="現場でPC画面を一緒に見ながら業務を見直す様子"
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
          <div className="relative z-10 min-h-[58vh] md:min-h-[66vh] flex flex-col justify-end max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-14 md:pb-20 pt-32">
            <div className="text-[13px] font-bold tracking-[0.14em] text-white/70">DX支援</div>
            <h1 className="mt-5 text-white font-semibold leading-[1.16] tracking-[-0.02em]"
                style={{ fontSize: "clamp(36px, 5.2vw, 76px)" }}>
              忙しさを、<br />余白へ。
            </h1>
            <p className="mt-8 max-w-xl text-[16px] md:text-[17px] leading-[2] text-white/80">
              毎月繰り返している、その仕事。AIや自動化で減らせるかもしれません。請求書。データ転記。日報集計。情報整理。まず業務を整理し、本当に効果のあるところから改善します。
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block text-[14px] font-bold text-white/85 border-b border-white/40 pb-0.5 hover:text-white hover:border-white transition-colors"
              >
                自動化できる業務を相談する →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== こんな課題 — 7項目を2カラムのテキストリストに ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-green font-semibold leading-[1.25] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3.2vw, 42px)" }}>
                  こんな課題は<br className="hidden sm:block" />ありませんか？
                </h2>
                <p className="mt-6 max-w-md text-[15px] md:text-[16px] leading-[2] text-charcoal/80">
                  一つでも当てはまるなら、減らせる仕事があるかもしれません。まずは業務の整理から始めます。
                </p>
              </div>
              <div className="lg:col-span-8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t border-charcoal/10">
                  {problems.map((p) => (
                    <li key={p} className="flex items-start gap-4 border-b border-charcoal/10 py-5">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal/25" />
                      <p className="text-[15px] md:text-[16px] leading-[1.8] text-charcoal">{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 何が変わる？ — 3つの成果を言明で ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-ivory">
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-3xl">
              <h2 className="text-green font-semibold leading-[1.2] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3.2vw, 42px)" }}>
                何が変わる？
              </h2>
              <p className="mt-6 max-w-xl text-[15px] md:text-[16px] leading-[2] text-charcoal/80">
                大切なのは、どのツールを使うかではありません。仕事がどう変わるか、です。
              </p>
            </div>

            <div className="mt-14 md:mt-20 flex flex-col divide-y divide-charcoal/10 border-t border-charcoal/10">
              {outcomes.map((o) => (
                <div key={o.title} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-baseline py-9 md:py-11">
                  <h3 className="md:col-span-6 text-green font-semibold leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(20px, 2.4vw, 32px)" }}>
                    {o.title}
                  </h3>
                  <p className="md:col-span-6 max-w-md text-[15px] md:text-[16px] leading-[2] text-charcoal/80">{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CASE — 実績。80％削減を主役に ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-3xl">
              <h2 className="text-green font-semibold leading-[1.2] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3.2vw, 42px)" }}>
                業務を、余白に変えた事例。
              </h2>
            </div>

            {/* 主役：SNS自動化 約80％削減。数字は信頼を伝える情報として扱う */}
            <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end">
              <div className="md:col-span-5">
                <div className="text-[13px] font-semibold tracking-[0.08em] text-charcoal/45 mb-4">SNS自動化</div>
                <div className="flex items-end gap-3">
                  <span className="text-green font-semibold leading-[0.9] tracking-[-0.03em]" style={{ fontSize: "clamp(48px, 6vw, 72px)" }}>
                    約80
                  </span>
                  <span className="text-green font-semibold pb-2" style={{ fontSize: "clamp(18px, 2.2vw, 26px)" }}>％削減</span>
                </div>
              </div>
              <div className="md:col-span-7 md:pb-4">
                <h3 className="text-green font-semibold leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(22px, 2.6vw, 34px)" }}>
                  投稿作業を、30分 → 約6分へ。
                </h3>
                <p className="mt-5 max-w-md text-[15px] md:text-[16px] leading-[2] text-charcoal/80">
                  投稿の企画から公開までの流れを自動化し、毎日の作業を大幅に削減。
                </p>
              </div>
            </div>

            {/* 主役事例の現場写真。左揃え・横位置 */}
            <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-8">
                <PhotoNeeded ratio="16/9" kind="MOMENTS" note="DX作業の手元・自動化を動かす現場（横）" />
                <p className="mt-3 text-[12px] text-muted">毎日の投稿作業が、6分に。</p>
              </div>
            </div>

            {/* 請求書自動化。テキスト事例 */}
            <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-baseline border-t border-charcoal/10 pt-10 md:pt-12">
              <div className="md:col-span-4 text-[13px] font-semibold tracking-[0.08em] text-charcoal/45">請求書</div>
              <div className="md:col-span-8">
                <h3 className="text-green font-semibold leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(22px, 2.8vw, 36px)" }}>
                  請求書発行の自動化
                </h3>
                <div className="mt-3 text-green font-semibold tracking-[-0.02em]" style={{ fontSize: "clamp(19px, 2.2vw, 27px)" }}>
                  手作業 → 自動化<span className="text-charcoal/60 text-[15px] font-medium ml-3 align-middle">発行・送付を仕組み化</span>
                </div>
                <p className="mt-5 max-w-md text-[15px] md:text-[16px] leading-[2] text-charcoal/80">
                  手作業だった請求書の作成・送付を自動化し、転記の手間をなくした。
                </p>
              </div>
            </div>

            {/* 在庫管理 — 左揃えで統一 */}
            <div className="mt-16 md:mt-24 border-t border-charcoal/10 pt-10 md:pt-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end">
                <div className="md:col-span-7">
                  <div className="text-[13px] font-semibold tracking-[0.08em] text-charcoal/45">在庫管理</div>
                  <h3 className="mt-5 text-green font-semibold leading-[1.15] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3.4vw, 48px)" }}>
                    紙＋Excel →<br />一元管理
                  </h3>
                </div>
                <div className="md:col-span-5 md:pb-2">
                  <div className="text-green font-semibold tracking-[-0.02em]" style={{ fontSize: "clamp(18px, 2vw, 24px)" }}>
                    在庫管理の一元化
                  </div>
                  <div className="mt-2 text-[13px] font-medium text-charcoal/50">二重管理を解消</div>
                  <p className="mt-4 max-w-md text-[15px] md:text-[16px] leading-[2] text-charcoal/80">
                    紙とExcelに分かれていた在庫情報を一元管理し、探す・照合する手間を削減。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICE — できること。6項目を番号付きリストに ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-ivory">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-green font-semibold leading-[1.2] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3.2vw, 42px)" }}>
                  できること。
                </h2>
              </div>
              <div className="lg:col-span-8">
                <ul className="border-t border-charcoal/10">
                  {menu.map((m, i) => (
                    <li key={m} className="flex items-baseline gap-6 border-b border-charcoal/10 py-6">
                      <span className="text-charcoal/30 font-medium tabular-nums leading-none w-10 shrink-0" style={{ fontSize: "clamp(18px, 2vw, 28px)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-green font-semibold leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(18px, 2vw, 26px)" }}>
                        {m}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROCESS — 進め方。01–05のステップ行 ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-3xl">
              <h2 className="text-green font-semibold leading-[1.2] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3.2vw, 42px)" }}>
                進め方。
              </h2>
            </div>

            <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
              {steps.map((s) => (
                <div key={s.num} className="border-t border-charcoal/10 pt-5">
                  <div className="text-charcoal/30 font-medium tabular-nums leading-none" style={{ fontSize: "clamp(18px, 2vw, 28px)" }}>
                    {s.num}
                  </div>
                  <h3 className="mt-4 text-green font-semibold tracking-[-0.02em]" style={{ fontSize: "clamp(18px, 2vw, 24px)" }}>
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14px] md:text-[15px] leading-[1.9] text-charcoal/80">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== GOAL — 言明 ===== */}
        <section className="py-20 md:py-36 px-6 md:px-10 bg-ivory">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="max-w-5xl text-green font-semibold leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(26px, 3.6vw, 48px)" }}>
              AIを使える会社ではなく、<br className="hidden sm:block" />仕事を改善し続けられる会社へ。
            </h2>
          </div>
        </section>

        {/* ===== CTA — 緑のバンド＋テラコッタボタン ===== */}
        <section id="contact" className="scroll-mt-20 py-20 md:py-28 px-6 md:px-10 bg-green text-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <h2 className="lg:col-span-8 font-semibold leading-[1.15] tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 3.6vw, 52px)" }}>
                ご相談はこちらから
              </h2>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="text-[15px] leading-[2] text-white/75">
                  「何をAI化すればいいかわからない」という段階でも大丈夫です。
                </p>
                <Link href="/contact" className="mt-6 btn btn-ghost-on-green px-9 py-4">
                  自動化できる業務を相談する →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
