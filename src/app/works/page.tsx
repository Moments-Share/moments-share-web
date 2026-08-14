import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/ui/Nav";
import { PhotoNeeded } from "@/components/ui/PhotoNeeded";

export const metadata: Metadata = {
  title: "Works（実績）| Moments Share合同会社",
  description:
    "Moments Shareがカタチにしてきた仕事。企業のDX・業務改善から地域プロジェクトまで、お客様や仲間と一緒につくってきた実績をご紹介します。",
  openGraph: {
    title: "Works（実績）| Moments Share合同会社",
    description:
      "企業のDX・業務改善から地域プロジェクトまで。Moments Shareがつくってきた仕事の実績。",
    type: "website",
    url: "https://moments-share.com/works",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const smallStats = [
  { n: "3", unit: "社", label: "BPO支援" },
  { n: "5", unit: "名", label: "外部パートナー" },
  { n: "4", unit: "件", label: "地域プロジェクト" },
];

const dxCases = [
  {
    tag: "DX",
    title: "SNS投稿の自動化",
    result: "30分 → 約6分",
    note: "作業時間 約80％削減",
    big: "80",
    bigUnit: "％削減",
    desc: "AIが企画し、X・Threadsへ自動投稿するフローを構築。毎日の投稿作業を大幅に削減。",
    photo: "/photos/service-dx.png",
    alt: "ホワイトボードでの業務整理",
  },
  {
    tag: "DX",
    title: "請求書発行の自動化",
    result: "手作業 → 自動化",
    note: "転記・送付をゼロに",
    desc: "フォーム入力から請求書の自動発行・メール送信までを一気通貫で自動化。",
    photo: "/photos/service-dx.png",
    alt: "自動化した請求書の記録",
  },
  {
    tag: "DX",
    title: "在庫管理の一元化",
    result: "紙＋Excel → 一元管理",
    note: "転記作業を削減",
    desc: "スマホ入力・クラウド管理・検索・アラートを実装し、Excel転記作業をなくした。",
    photo: "/photos/service-bpo.png",
    alt: "一元管理した在庫データの記録",
  },
];

const projects = [
  {
    title: "西尾働き方図鑑",
    desc: "地元で働く人・企業の姿を伝え、就活する学生と地域企業をつなぐプロジェクト。",
    photo: "/photos/service-produce.png",
    alt: "西尾働き方図鑑の企画資料",
  },
  {
    title: "西尾筋肉祭り",
    desc: "地域の人が主役になって楽しむイベント。関わる人の輪を広げる場づくり。",
    photo: "/photos/service-produce.png",
    alt: "地域イベントの様子",
  },
  {
    title: "AI活用研究会",
    desc: "地域の企業・個人がAI活用を学び合うコミュニティ。挑戦のきっかけをつくる。",
    photo: "/photos/service-bpo.png",
    alt: "AI活用研究会の企画資料",
  },
];

export default function WorksPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* ===== HERO — 見出しをグラフィックとして。数字ページの序章 ===== */}
        <section className="pt-28 md:pt-32 pb-14 md:pb-20 px-6 md:px-10">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex items-center gap-3 text-terra text-[12px] font-bold tracking-[0.2em]">
              <span className="w-8 h-px bg-terra" />
              WORKS — 西尾で積み上げてきた仕事
            </div>
            <h1 className="mt-8 text-green font-black leading-[1.12] tracking-[-0.03em]"
                style={{ fontSize: "clamp(44px, 7vw, 100px)" }}>
              カタチにして<br />きたこと。
            </h1>
            <p className="mt-8 max-w-xl text-[16px] md:text-[17px] leading-[2] text-charcoal/80">
              企業の業務改善から、地域のプロジェクトまで。
              お客様や仲間と一緒につくってきた仕事をご紹介します。
            </p>
          </div>
        </section>

        {/* ===== 数字が主役 — 巨大な7＋現場写真、他は非対称に小さく ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-terra text-[12px] font-bold tracking-[0.2em]">BY THE NUMBERS</div>
            <h2 className="mt-4 text-green font-black leading-[1.25] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3.4vw, 44px)" }}>
              数字で見る Moments Share
            </h2>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
              {/* 主役の数字 7 ＋ 現場写真 */}
              <div className="md:col-span-7">
                <div className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
                  <div>
                    <div className="text-green font-black leading-[0.85] tracking-[-0.04em]" style={{ fontSize: "clamp(120px, 20vw, 260px)" }}>7</div>
                    <div className="text-[14px] font-bold text-charcoal mt-1">件</div>
                    <div className="text-[13px] text-muted">DX・業務効率化の支援</div>
                  </div>
                  <PhotoNeeded ratio="4/3" kind="MOMENTS" note="DX支援の現場・手元（横）" />
                </div>
              </div>
              {/* 3・5・4 は控えめに、大きさを変えた非対称の縦積みで */}
              <div className="md:col-span-5 md:border-l md:border-charcoal/10 md:pl-8">
                <div className="flex flex-col divide-y divide-charcoal/10">
                  {smallStats.map((s, i) => (
                    <div key={s.label} className="flex items-baseline gap-4 py-5 first:pt-0">
                      <div className="flex items-baseline gap-1 shrink-0">
                        <span
                          className="text-terra font-black leading-none tracking-[-0.03em]"
                          style={{ fontSize: i === 1 ? "clamp(56px, 7.5vw, 96px)" : i === 0 ? "clamp(44px, 5.5vw, 72px)" : "clamp(36px, 4.5vw, 58px)" }}
                        >
                          {s.n}
                        </span>
                        <span className="text-[13px] font-bold text-charcoal pb-1">{s.unit}</span>
                      </div>
                      <div className="self-center text-[13px] text-muted leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== DX CASE — 3事例を均等カードにせず、大小と写真で強弱をつける ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10">
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-3xl">
              <div className="text-terra text-[12px] font-bold tracking-[0.2em]">DX CASE</div>
              <h2 className="mt-4 text-green font-black leading-[1.25] tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
                業務を、余白に変えた事例。
              </h2>
            </div>

            {/* 主役事例 — 約80％削減を巨大なテラコッタ数字で、現場写真を大きく */}
            <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="md:col-span-6">
                <PhotoNeeded ratio="4/3" kind="MOMENTS" note="SNS自動化の運用・作業画面と手元（横）" />
              </div>
              <div className="md:col-span-6">
                <div className="text-charcoal/40 text-[13px] font-bold tracking-[0.16em]">{dxCases[0].tag}</div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-terra font-black leading-none tracking-[-0.04em]" style={{ fontSize: "clamp(72px, 11vw, 150px)" }}>約{dxCases[0].big}</span>
                  <span className="text-terra font-black text-[24px] md:text-[32px] pb-3">{dxCases[0].bigUnit}</span>
                </div>
                <h3 className="mt-4 text-green font-black leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3.2vw, 40px)" }}>{dxCases[0].title}</h3>
                <div className="mt-3 text-[15px] font-bold text-charcoal">{dxCases[0].result}</div>
                <p className="mt-4 max-w-md text-[15px] md:text-[16px] leading-[2] text-charcoal/80">{dxCases[0].desc}</p>
              </div>
            </div>

            {/* 残り2事例 — 主役より控えめに、細い罫線で区切ったテキスト誌面ロウ（同型カードにしない） */}
            <div className="mt-16 md:mt-24 flex flex-col divide-y divide-charcoal/10 border-t border-charcoal/10">
              {dxCases.slice(1).map((c) => (
                <div key={c.title} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-baseline py-8 md:py-10">
                  <div className="md:col-span-3 text-charcoal/40 text-[13px] font-bold tracking-[0.16em]">{c.tag}</div>
                  <div className="md:col-span-4">
                    <h3 className="text-green font-black leading-[1.35] tracking-[-0.02em]" style={{ fontSize: "clamp(20px, 2.4vw, 28px)" }}>{c.title}</h3>
                    <div className="mt-3 text-terra font-black tracking-[-0.02em]" style={{ fontSize: "clamp(20px, 2.6vw, 30px)" }}>{c.result}</div>
                    <div className="mt-1 text-[13px] font-bold text-charcoal">{c.note}</div>
                  </div>
                  <p className="md:col-span-5 text-[15px] leading-[2] text-charcoal/80">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BPO CASE — 実データ準備中（TODO） ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="text-terra text-[12px] font-bold tracking-[0.2em]">BPO CASE</div>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-green font-black leading-[1.25] tracking-[-0.02em]" style={{ fontSize: "clamp(26px, 3.6vw, 46px)" }}>
                  人が必要な仕事を、<br className="hidden sm:block" />一緒に支えた事例。
                </h2>
                {/* TODO: 実在するBPO支援の具体事例（企業名は伏せて内容・成果）を追記する。架空の事例は掲載しない。 */}
                <p className="mt-8 max-w-2xl text-[15px] md:text-[16px] leading-[2] text-charcoal/80">
                  現在、掲載できる事例を整理中です。CS代行・SNS運用・事務代行などの支援実績を順次公開します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== REGIONAL PROJECTS — 雑誌の特集ページのように写真を大きく ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10">
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-3xl">
              <div className="text-terra text-[12px] font-bold tracking-[0.2em]">REGIONAL PROJECTS</div>
              <h2 className="mt-4 text-green font-black leading-[1.25] tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
                地域に、挑戦の<br className="hidden sm:block" />きっかけをつくった。
              </h2>
            </div>

            <div className="mt-14 md:mt-20 flex flex-col gap-20 md:gap-32">
              {/* 01 西尾働き方図鑑 — FEATURE。実写真を大きく主役に */}
              <article>
                <div className="relative aspect-[16/9] w-full">
                  <Image src={projects[0].photo} alt={projects[0].alt} fill sizes="(max-width:768px) 100vw, 90vw" className="object-cover" />
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-baseline">
                  <div className="md:col-span-3 text-terra font-black leading-none tracking-[-0.03em]" style={{ fontSize: "clamp(40px, 5.5vw, 84px)" }}>01</div>
                  <div className="md:col-span-9 md:border-l md:border-charcoal/10 md:pl-12">
                    <h3 className="text-green font-black leading-[1.25] tracking-[-0.02em]" style={{ fontSize: "clamp(26px, 3.4vw, 44px)" }}>{projects[0].title}</h3>
                    <p className="mt-4 max-w-2xl text-[15px] md:text-[16px] leading-[2] text-charcoal/80">{projects[0].desc}</p>
                  </div>
                </div>
              </article>

              {/* 02 西尾筋肉祭り — 中サイズ、テキスト左・写真右 */}
              <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center border-t border-charcoal/10 pt-14 md:pt-16">
                <div className="md:col-span-7 md:order-1">
                  <div className="text-terra font-black leading-none tracking-[-0.03em]" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>02</div>
                  <h3 className="mt-4 text-green font-black leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3vw, 38px)" }}>{projects[1].title}</h3>
                  <p className="mt-4 max-w-md text-[15px] md:text-[16px] leading-[2] text-charcoal/80">{projects[1].desc}</p>
                </div>
                <div className="md:col-span-5 md:order-2">
                  <PhotoNeeded ratio="4/3" kind="MOMENTS" note="イベント当日・参加者が体を動かす様子（横）" />
                </div>
              </article>

              {/* 03 AI活用研究会 — さらに控えめに、写真左・テキスト右 */}
              <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center border-t border-charcoal/10 pt-14 md:pt-16">
                <div className="md:col-span-5">
                  <PhotoNeeded ratio="3/2" kind="PEOPLE" note="研究会で学び合う参加者（横）" />
                </div>
                <div className="md:col-span-7">
                  <div className="text-terra font-black leading-none tracking-[-0.03em]" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>03</div>
                  <h3 className="mt-4 text-green font-black leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3vw, 38px)" }}>{projects[2].title}</h3>
                  <p className="mt-4 max-w-md text-[15px] md:text-[16px] leading-[2] text-charcoal/80">{projects[2].desc}</p>
                </div>
              </article>
            </div>

            <p className="mt-14 text-[15px] leading-[2] text-charcoal/80">
              ほかにも地域のプロジェクトに取り組んでいます。
              <Link href="/service-produce" className="ml-1 text-green border-b-2 border-green pb-1 font-bold hover:text-terra hover:border-terra transition-colors">地域プロデュースを見る →</Link>
            </p>
          </div>
        </section>

        {/* ===== VOICE — 実データ準備中（TODO） ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="text-terra text-[12px] font-bold tracking-[0.2em]">VOICE</div>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-green font-black leading-[1.25] tracking-[-0.02em]" style={{ fontSize: "clamp(26px, 3.6vw, 46px)" }}>
                  お客様の声。
                </h2>
                {/* TODO: 実在するお客様の声（許諾済みのコメント・お名前/イニシャル）を掲載する。架空のコメントは作成しない。 */}
                <p className="mt-8 max-w-2xl text-[15px] md:text-[16px] leading-[2] text-charcoal/80">
                  掲載許諾をいただいたお客様の声を、準備でき次第ご紹介します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA — Deep Green のバンド＋テラコッタのボタン ===== */}
        <section id="contact" className="scroll-mt-20 py-20 md:py-28 px-6 md:px-10 bg-green text-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-white/60 text-[12px] font-bold tracking-[0.2em]">CONTACT</div>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <h2 className="lg:col-span-8 font-black leading-[1.15] tracking-[-0.02em]" style={{ fontSize: "clamp(34px, 5.5vw, 76px)" }}>
                まず、話して<br />みませんか。
              </h2>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="text-[15px] leading-[2] text-white/75">
                  「うちに合うかわからない」でも大丈夫です。まだ課題が整理できていなくても構いません。
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
