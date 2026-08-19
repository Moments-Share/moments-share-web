import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/sections/Hero";
import { PhotoNeeded } from "@/components/ui/PhotoNeeded";

export const metadata: Metadata = {
  title: "Moments Share合同会社 — 地域に、挑戦と共創の循環を。",
  description:
    "DX・BPO・地域プロデュースを通じて、企業・人・地域の可能性をつなぐ会社。忙しさを余白へ、人手不足を多様な働き方へ、地域課題を挑戦のきっかけへ。愛知県西尾市発。",
  openGraph: {
    title: "Moments Share合同会社 — 地域に、挑戦と共創の循環を。",
    description:
      "DX・BPO・地域プロデュースを通じて、企業・人・地域の可能性をつなぐ会社。愛知県西尾市発。",
    locale: "ja_JP",
    type: "website",
    url: "https://moments-share.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const businesses = [
  {
    label: "DX",
    title: "忙しさを、余白へ。",
    body: "業務を整理し、AI・RPA・自動化を使って、人がやらなくてもいい仕事を減らします。",
    href: "/service-dx",
    photo: "/photos/service-dx.png",
    alt: "現場でノートPCを一緒に見て話す様子",
  },
  {
    label: "BPO",
    title: "人手不足を、多様な働き方へ。",
    body: "企業に必要な仕事を整理し、外部のチームと一緒に支えます。",
    href: "/service-bpo",
    photo: "/photos/service-bpo.png",
    alt: "多様な人が集まって働くコワーキングの様子",
  },
  {
    label: "地域プロデュース",
    title: "地域課題を、挑戦のきっかけへ。",
    body: "人・企業・地域をつなぎ、新しい挑戦が生まれる場をつくります。",
    href: "/service-produce",
    photo: "/photos/service-produce.png",
    alt: "地域の夜市で語らう人々",
  },
];

const howWeWork = [
  { title: "整理する。", body: "まず「何が課題なのか」を一緒に考える。" },
  { title: "仕組みにする。", body: "誰か一人に頼らなくても回る形をつくる。" },
  { title: "一緒に動かす。", body: "提案して終わりではなく、実行し、改善し、定着するところまで伴走する。" },
];

const stats = [
  { n: "7", unit: "件", label: "DX・業務効率化の支援" },
  { n: "3", unit: "社", label: "BPO支援" },
  { n: "5", unit: "名", label: "外部パートナー" },
  { n: "4", unit: "件", label: "地域プロジェクト" },
];

/* ===== CYCLE セクション用データ（DX×BPO×地域プロデュースの循環図） ===== */
const iconBase = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const IconDX = (
  <svg {...iconBase} className="h-7 w-7">
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
    <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
  </svg>
);
const IconBPO = (
  <svg {...iconBase} className="h-7 w-7">
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
    <path d="M16 6.2a3 3 0 0 1 0 5.6" />
    <path d="M17 14.2A5.5 5.5 0 0 1 20.5 19" />
  </svg>
);
const IconProduce = (
  <svg {...iconBase} className="h-7 w-7">
    <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10z" />
    <circle cx="12" cy="11" r="2.2" />
  </svg>
);
const IconCycle = (
  <svg {...iconBase} className="h-6 w-6">
    <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8" />
    <path d="M20 4v4h-4" />
    <path d="M20 12a8 8 0 0 1-13.7 5.6L4 16" />
    <path d="M4 20v-4h4" />
  </svg>
);

type CyclePillar = {
  no: string;
  label: string;
  sub: string;
  icon: React.ReactElement;
  href: string;
  services: { name: string; desc?: string }[];
  note?: string;
};

const cyclePillars: CyclePillar[] = [
  {
    no: "①",
    label: "DX事業",
    sub: "企業に「余白」を生み出す",
    icon: IconDX,
    href: "/service-dx",
    services: [
      { name: "AI導入支援" },
      { name: "RPA・業務自動化" },
      { name: "システム開発・導入支援" },
      { name: "AI・DXコンサル・顧問" },
      { name: "AI研修・ワークショップ" },
    ],
    note: "テクノロジーで人の時間を生み出し、人が本来やるべき仕事に集中できる環境へ。",
  },
  {
    no: "②",
    label: "BPO（代行事業）",
    sub: "地域に雇用を生み出す",
    icon: IconBPO,
    href: "/service-bpo",
    services: [
      { name: "カスタマーサクセス代行" },
      { name: "営業サポート代行" },
      { name: "経理・事務代行" },
      { name: "Web・SNS運用代行" },
    ],
    note: "人手不足を解決し、地域に雇用を生み出す仕組みへ。",
  },
  {
    no: "③",
    label: "地域プロデュース",
    sub: "地域に挑戦のきっかけを生み出す",
    icon: IconProduce,
    href: "/service-produce",
    services: [
      { name: "西尾キャリアLab", desc: "若者のキャリア支援・挑戦の場づくり" },
      { name: "西尾筋肉祭り", desc: "挑戦と努力の素晴らしさを伝える地域イベント" },
      { name: "西尾働き方図鑑", desc: "学生と企業取材・体験を通じて、西尾で働く大人を増やす" },
    ],
  },
];

const cycleFlow = [
  "人がやらなくてもいい仕事が減る",
  "生まれた時間で価値ある仕事に集中",
  "業務を任せて企業が成長・安定",
  "多様な働き方が増え、地域に人が集まる",
  "挑戦が生まれ、共創が広がる豊かな地域へ",
];

/* 循環の向きを示す矢印（PCは右向き／モバイルは下向き） */
function CycleConnector() {
  return (
    <div className="flex shrink-0 items-center justify-center py-3 text-navy-ink/40 md:px-3 md:py-0">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-5 w-5 md:hidden">
        <path d="M12 5v14M6 13l6 6 6-6" />
      </svg>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="hidden h-5 w-5 md:block">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav heroTone="dark" />
      <Hero />

      {/* ===== BUSINESS — 3事業。写真＋短い言葉。番号や大きな装飾は置かない ===== */}
      <section id="business" className="scroll-mt-16 py-20 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-2xl">
            <h2 className="text-green font-semibold leading-[1.4] tracking-[-0.01em]" style={{ fontSize: "clamp(24px, 3vw, 40px)" }}>
              忙しさや人手不足を、<br className="hidden sm:block" />地域の力に変えていく。
            </h2>
          </div>

          <div className="mt-14 md:mt-20 flex flex-col gap-16 md:gap-24">
            {businesses.map((b, i) => (
              <div key={b.label} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative w-full aspect-[4/3]">
                    <Image src={b.photo} alt={b.alt} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
                  </div>
                </div>
                <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="text-[12px] font-bold tracking-[0.12em] text-charcoal/40">{b.label}</div>
                  <h3 className="mt-3 text-green font-semibold leading-[1.45] tracking-[-0.01em]" style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}>{b.title}</h3>
                  <p className="mt-4 max-w-md text-[15px] md:text-[16px] leading-[2] text-charcoal/80">{b.body}</p>
                  <Link href={b.href} className="mt-6 inline-block text-[14px] font-bold text-navy-ink border-b border-navy-ink/40 pb-0.5 hover:text-green hover:border-green transition-colors">
                    {b.label}を詳しく →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MESSAGE — 文章と余白が主役。装飾を置かず、言葉を静かに読ませる ===== */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-white">
        <div className="mx-auto max-w-[760px]">
          <h2 className="text-green font-bold leading-[1.3] tracking-[-0.01em]" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
            起点は、いつも<br />一人の挑戦者だ。
          </h2>
          <div className="mt-10 space-y-6 text-[16px] md:text-[18px] leading-[2.1] text-charcoal/85">
            <p>人口が減り、働く人が減っても、地域の未来まで決まるわけではない。</p>
            <p>会社を変えようとする人。新しい仕事をつくろうとする人。地域で何かを始めようとする人。誰かが挑戦すると、そこに人が集まり、新しい仕事や価値が生まれる。そして、その挑戦がまた次の誰かの挑戦につながっていく。</p>
            <p>DXで、人がやらなくてもいい仕事を減らす。BPOで、必要な仕事を支え、一人ひとりに合った働き方を増やす。地域プロデュースで、人や企業の想いをつなぎ、新しい挑戦が始まるきっかけをつくる。</p>
            <p className="text-green font-bold text-[19px] md:text-[24px] leading-[1.7] tracking-[-0.01em] pt-2">
              私たちは、地域に挑戦と共創の循環をつくります。
            </p>
          </div>
        </div>
      </section>

      {/* ===== CYCLE — DX×BPO×地域プロデュースの循環図。実テキスト＋インラインSVGで再現 ===== */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-[1200px]">
          {/* 見出し＋リード */}
          <div className="max-w-3xl">
            <div className="text-[12px] font-bold tracking-[0.12em] text-charcoal/40">DX × BPO × 地域プロデュース</div>
            <h2 className="mt-4 text-green font-bold leading-[1.4] tracking-[-0.01em]" style={{ fontSize: "clamp(24px, 3.4vw, 44px)" }}>
              DX × BPO × 地域プロデュースで、<br className="hidden md:block" />挑戦と共創が循環する豊かな地域を創る。
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] md:text-[17px] leading-[2] text-charcoal/80">
              DXで人がやらなくてもいい仕事を減らし、BPOで、人手不足に外注という選択肢を。
            </p>
          </div>

          {/* 中央コア — 循環の中心となるステートメント */}
          <div className="mt-12 md:mt-16 flex justify-center">
            <div className="flex items-center gap-3 md:gap-4 rounded-full border border-green/30 bg-white px-6 py-4 md:px-10 md:py-6 max-w-[560px]">
              <span className="shrink-0 text-green">{IconCycle}</span>
              <p className="text-green font-bold leading-[1.6] tracking-[-0.01em]" style={{ fontSize: "clamp(15px, 1.9vw, 21px)" }}>
                企業に「余白」と地域に「多様な働き方」を生み出す。
              </p>
            </div>
          </div>

          {/* 3本柱 — 矢印で循環を示す（PC:横並び＋右向き矢印／モバイル:縦積み＋下向き矢印） */}
          <div className="mt-10 md:mt-14">
            <div className="flex flex-col md:flex-row md:items-stretch">
              {cyclePillars.map((p, i) => (
                <Fragment key={p.label}>
                  <div className="flex flex-1 min-w-0 flex-col rounded-2xl border border-charcoal/10 bg-white p-6 md:p-7">
                    <div className="flex items-center gap-3">
                      <span className="text-green">{p.icon}</span>
                      <span className="text-[13px] font-bold text-green/70">{p.no}</span>
                    </div>
                    <h3 className="mt-4 text-green font-bold leading-[1.5] tracking-[-0.01em]" style={{ fontSize: "clamp(17px, 1.8vw, 20px)" }}>{p.label}</h3>
                    <p className="mt-1.5 text-[13px] font-semibold text-charcoal/70">{p.sub}</p>
                    <ul className="mt-5 space-y-2.5 border-t border-charcoal/10 pt-5">
                      {p.services.map((s) => (
                        <li key={s.name} className="flex gap-2 text-[14px] leading-[1.7] text-charcoal/85">
                          <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-green/60" />
                          <span className="min-w-0">
                            <span className="font-semibold">{s.name}</span>
                            {s.desc && <span className="mt-0.5 block text-[12.5px] leading-[1.6] text-charcoal/55">{s.desc}</span>}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {p.note && (
                      <p className="mt-5 rounded-lg bg-ivory px-4 py-3 text-[12.5px] leading-[1.8] text-charcoal/70">{p.note}</p>
                    )}
                    <div className="mt-auto pt-6">
                      <Link href={p.href} className="inline-block text-[13px] font-bold text-navy-ink border-b border-navy-ink/40 pb-0.5 hover:text-green hover:border-green transition-colors">
                        詳しく →
                      </Link>
                    </div>
                  </div>
                  {i < cyclePillars.length - 1 && <CycleConnector />}
                </Fragment>
              ))}
            </div>

            {/* PC:③→①へ戻る循環ループ（下部の曲線矢印） */}
            <div className="relative mt-2 hidden md:block">
              <svg viewBox="0 0 1000 60" className="w-full text-navy-ink/30" aria-hidden preserveAspectRatio="xMidYMid meet">
                <path d="M835 4 L835 40 Q835 50 825 50 L175 50 Q165 50 165 40 L165 12" fill="none" stroke="currentColor" strokeWidth={1.5} strokeDasharray="5 5" strokeLinecap="round" />
                <path d="M157 18 L165 6 L173 18" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ivory px-3 py-1 text-[12px] font-bold text-green">
                  {IconCycle}循環する
                </span>
              </div>
            </div>

            {/* モバイル:①へ戻る循環の明示 */}
            <div className="mt-4 flex justify-center md:hidden">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-green/30 bg-white px-4 py-1.5 text-[12px] font-bold text-green">
                {IconCycle}①へ循環する
              </span>
            </div>
          </div>

          {/* 中盤タグライン */}
          <p className="mt-12 md:mt-16 text-center text-green font-semibold leading-[1.8] tracking-[-0.01em]" style={{ fontSize: "clamp(15px, 1.8vw, 20px)" }}>
            地域の魅力や挑戦が広がり、多様な人材と企業が集まる地域へ。
          </p>

          {/* この循環が生む未来 — 5ステップのフロー */}
          <div className="mt-12 md:mt-16 rounded-2xl border border-charcoal/10 bg-white p-6 md:p-9">
            <h3 className="text-center text-green font-bold tracking-[-0.01em]" style={{ fontSize: "clamp(18px, 2.2vw, 26px)" }}>
              この循環が生む未来
            </h3>
            <div className="mt-8 flex flex-col md:flex-row md:items-stretch">
              {cycleFlow.map((f, i) => (
                <Fragment key={f}>
                  <div className="flex flex-1 min-w-0 items-center gap-4 md:flex-col md:items-center md:gap-3 md:text-center">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-green/40 text-[13px] font-bold text-green">{i + 1}</span>
                    <p className="text-[13.5px] leading-[1.7] text-charcoal/85 md:mt-1">{f}</p>
                  </div>
                  {i < cycleFlow.length - 1 && (
                    <div className="flex shrink-0 items-center justify-center py-2 text-navy-ink/40 md:px-1 md:py-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-4 w-4 md:hidden">
                        <path d="M12 5v14M6 13l6 6 6-6" />
                      </svg>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="hidden h-4 w-4 md:block">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK — 番号は小さな見出し記号として。提案で終わらせない姿勢 ===== */}
      <section className="py-16 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <h2 className="text-green font-semibold leading-[1.35] tracking-[-0.01em]" style={{ fontSize: "clamp(24px, 3vw, 40px)" }}>
                提案では、<br />終わらせない。
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="divide-y divide-charcoal/10 border-t border-charcoal/10">
                {howWeWork.map((h) => (
                  <div key={h.title} className="py-7 md:py-9">
                    <h3 className="text-green font-semibold tracking-[-0.01em]" style={{ fontSize: "clamp(19px, 2.2vw, 26px)" }}>{h.title}</h3>
                    <p className="mt-3 max-w-xl text-[15px] md:text-[16px] leading-[2] text-charcoal/80">{h.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WORKS — 4つの数字を同格に。写真は独立した現場写真として大きく ===== */}
      <section className="py-16 md:py-28 px-6 md:px-10 bg-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-green font-semibold leading-[1.3] tracking-[-0.01em]" style={{ fontSize: "clamp(24px, 3.2vw, 44px)" }}>
              西尾で、積み上げてきた。
            </h2>
            <Link href="/works" className="text-[14px] font-bold text-navy-ink border-b border-navy-ink/40 pb-0.5 hover:text-green hover:border-green transition-colors">実績をもっと見る →</Link>
          </div>

          {/* 4つの数字 — 同じ大きさ・同じ重みで 2×4／2×2 に */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 border-t border-charcoal/10 pt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-green font-semibold leading-none tracking-[-0.02em]" style={{ fontSize: "clamp(48px, 6vw, 76px)" }}>{s.n}</span>
                  <span className="text-[14px] font-bold text-charcoal/70">{s.unit}</span>
                </div>
                <div className="mt-2 text-[13px] leading-[1.7] text-charcoal/60">{s.label}</div>
              </div>
            ))}
          </div>

          {/* 現場写真 — 数字の装飾ではなく、独立した一枚として */}
          <div className="mt-14 md:mt-20">
            {/* TODO: 実写に差し替え。MOMENTS: 現場の仕事風景（DX支援・打合せなど／横長） */}
            <PhotoNeeded ratio="16/9" kind="MOMENTS" note="現場の仕事風景（DX支援・打合せなど／横長）" />
            <p className="mt-3 text-[13px] leading-[1.8] text-charcoal/55">西尾の企業・地域と、一つずつ形にしてきた仕事。</p>
          </div>
        </div>
      </section>

      {/* ===== PEOPLE — 人が主役。写真と短い言葉で ===== */}
      <section className="py-16 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <h2 className="text-green font-semibold leading-[1.35] tracking-[-0.01em]" style={{ fontSize: "clamp(26px, 3.4vw, 48px)" }}>
                一緒につくる<br />人たち。
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-[2] text-charcoal/80">
                社員だけで仕事をする会社ではありません。働き方も、住む場所も、得意なことも違う人たちが、それぞれの力を持ち寄って、一緒に仕事やプロジェクトをつくっています。
              </p>
              <Link href="/people" className="mt-7 inline-block text-[14px] font-bold text-navy-ink border-b border-navy-ink/40 pb-0.5 hover:text-green hover:border-green transition-colors">
                関わる人たちを見る →
              </Link>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative w-full aspect-[16/10]">
                <Image src="/photos/service-produce.png" alt="地域の場で人が交わる様子" fill sizes="(max-width:1024px) 100vw, 58vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT — Deep Green のバンドで締める ===== */}
      <section id="contact" className="scroll-mt-16 py-20 md:py-28 px-6 md:px-10 bg-green text-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h2 className="lg:col-span-8 font-bold leading-[1.2] tracking-[-0.01em]" style={{ fontSize: "clamp(32px, 5vw, 68px)" }}>
              まず、話して<br />みませんか。
            </h2>
            <div className="lg:col-span-4 lg:pb-3">
              <p className="text-[15px] leading-[2] text-white/75">
                AIを使いたい。人が足りない。地域で何か始めたい。まだ課題が整理できていなくても大丈夫です。
              </p>
              <Link href="/contact" className="mt-6 btn btn-ghost-on-green px-9 py-4">
                30分相談する →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
