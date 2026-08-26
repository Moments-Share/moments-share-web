import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/sections/Hero";
import { EcosystemCircle } from "@/components/sections/EcosystemCircle";
import { VisionNishio } from "@/components/sections/VisionNishio";

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
    body: "AI導入・システム開発・研修を通じて企業の業務改善に伴走し、新しいことに取り組める時間をつくります。",
    href: "/service-dx",
    photo: "/photos/service-dx.png",
    alt: "現場でノートPCを一緒に見て話す様子",
  },
  {
    label: "BPO",
    title: "人手不足に、社外の力を。",
    body: "営業・事務・CS等を受託し、社外パートナーとチームを組んで企業を支えます。",
    href: "/service-bpo",
    photo: "/photos/service-bpo.png",
    alt: "多様な人が集まって働くコワーキングの様子",
  },
  {
    label: "地域プロデュース",
    title: "想いを、挑戦へ。",
    body: "個の「やりたい」と地域の「課題」をつなぎ、地域内外の人や企業とともに新しい仕事や事業をつくります。",
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

export default function Home() {
  return (
    <>
      <Nav heroTone="dark" />
      <Hero />

      {/* ===== OUR ECOSYSTEM — CIRCLE（フライホイール）：円＋中心＋循環で3事業を描く（RIVER版=Ecosystem.tsxは残置し切替可能） ===== */}
      <EcosystemCircle />

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

      {/* ===== OUR VISION FOR NISHIO — 2040 / 240。西尾の風景写真＋数字が主役 ===== */}
      <VisionNishio />

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

      {/* ===== HOW WE WORK — 番号は小さな見出し記号として。提案で終わらせない姿勢 ===== */}
      <section className="py-16 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <h2 className="text-green font-semibold leading-[1.35] tracking-[-0.01em]" style={{ fontSize: "clamp(24px, 3vw, 40px)" }}>
                在り方。
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
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <Image src="/photos/hero.png" alt="愛知県西尾の街並み" fill sizes="(max-width:768px) 100vw, 1400px" className="object-cover" />
            </div>
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
                関わってくれる<br />人たち。
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
              ご相談はこちらから
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
