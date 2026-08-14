import type { Metadata } from "next";
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
    no: "01",
    label: "DX",
    title: "忙しさを、余白へ。",
    body: "AIやRPA、自動化で、人がやらなくてもいい仕事を減らす。生まれた時間を、本当にやるべきことや新しい挑戦へ。",
    href: "/service-dx",
    photo: "/photos/service-dx.png",
    alt: "現場でノートPCを一緒に見て話す様子",
  },
  {
    no: "02",
    label: "BPO",
    title: "人手不足を、多様な働き方へ。",
    body: "採用の前に、まず仕事を整理する。専門・副業・子育て中の人など、さまざまな得意を持つ人と一緒に企業を支える。",
    href: "/service-bpo",
    photo: "/photos/service-bpo.png",
    alt: "多様な人が集まって働くコワーキングの様子",
  },
  {
    no: "03",
    label: "地域プロデュース",
    title: "地域課題を、挑戦のきっかけへ。",
    body: "地域の課題と、人や企業の「やってみたい」をつなぐ。新しいプロジェクトや事業が生まれる、きっかけと場をつくる。",
    href: "/service-produce",
    photo: "/photos/service-produce.png",
    alt: "地域の夜市で語らう人々",
  },
];

const howWeWork = [
  { no: "01", title: "整理する。", body: "まず「何が課題なのか」を一緒に考える。" },
  { no: "02", title: "仕組みにする。", body: "誰か一人に頼らなくても回る形をつくる。" },
  { no: "03", title: "一緒に動かす。", body: "提案して終わりではなく、実行し、改善し、定着するところまで伴走する。" },
];

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      {/* ===== BUSINESS — 3事業。カードをやめ、大きな数字＋実写真＋左右交互の誌面に ===== */}
      <section id="business" className="scroll-mt-16 py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <div className="text-terra text-[12px] font-bold tracking-[0.2em]">BUSINESS</div>
            <h2 className="mt-4 text-green font-black leading-[1.25] tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 4.4vw, 56px)" }}>
              忙しさや人手不足を、<br className="hidden sm:block" />地域の力に変えていく。
            </h2>
          </div>

          <div className="mt-16 md:mt-28 flex flex-col gap-24 md:gap-36">
            {businesses.map((b, i) => (
              <div key={b.no} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
                <div className={`${i % 2 === 1 ? "md:order-2 md:col-span-7" : "md:col-span-6"}`}>
                  <div className="relative w-full" style={{ aspectRatio: i === 1 ? "3/2" : i === 2 ? "5/4" : "4/3" }}>
                    <Image src={b.photo} alt={b.alt} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? "md:order-1 md:col-span-5" : "md:col-span-6"}`}>
                  <div className="flex items-baseline gap-4">
                    <span className="text-terra font-black leading-none tracking-[-0.04em]" style={{ fontSize: "clamp(56px, 9vw, 120px)" }}>{b.no}</span>
                    <span className="text-charcoal/40 text-[13px] font-bold tracking-[0.16em] pb-2">{b.label}</span>
                  </div>
                  <h3 className="mt-4 text-green font-black leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(26px, 3.6vw, 46px)" }}>{b.title}</h3>
                  <p className="mt-5 max-w-md text-[15px] md:text-[16px] leading-[2] text-charcoal/80">{b.body}</p>
                  <Link href={b.href} className="mt-6 inline-block text-[14px] font-bold text-green border-b-2 border-green pb-1 hover:text-terra hover:border-terra transition-colors">
                    {b.label}を詳しく →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MESSAGE — 文章と余白が主役 ===== */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 text-terra text-[12px] font-bold tracking-[0.2em] lg:sticky lg:top-24">
                <span className="w-8 h-px bg-terra" />MESSAGE
              </div>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-green font-black leading-[1.18] tracking-[-0.02em]" style={{ fontSize: "clamp(30px, 4.6vw, 64px)" }}>
                起点は、いつも<br />一人の挑戦者だ。
              </h2>
              <div className="mt-10 max-w-2xl space-y-6 text-[16px] md:text-[18px] leading-[2.1] text-charcoal/85">
                <p>人口が減り、働く人が減っても、地域の未来まで決まるわけではない。</p>
                <p>会社を変えようとする人。新しい仕事をつくろうとする人。地域で何かを始めようとする人。誰かが挑戦すると、そこに人が集まり、新しい仕事や価値が生まれる。そして、その挑戦がまた次の誰かの挑戦につながっていく。</p>
                <p>DXで、人がやらなくてもいい仕事を減らす。BPOで、必要な仕事を支え、一人ひとりに合った働き方を増やす。地域プロデュースで、人や企業の想いをつなぎ、新しい挑戦が始まるきっかけをつくる。</p>
                <p className="text-green font-bold text-[20px] md:text-[26px] leading-[1.6] tracking-[-0.01em] pt-2">
                  私たちは、地域に挑戦と共創の循環をつくります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK — 3ステップを均等カラムにせず、番号＋細い罫の縦リストで ===== */}
      <section className="py-16 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="text-terra text-[12px] font-bold tracking-[0.2em]">HOW WE WORK</div>
              <h2 className="mt-4 text-green font-black leading-[1.25] tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}>
                提案では、<br />終わらせない。
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="divide-y divide-charcoal/10 border-t border-charcoal/10">
                {howWeWork.map((h) => (
                  <div key={h.no} className="grid grid-cols-[auto_1fr] gap-6 md:gap-12 py-8 md:py-10 items-baseline">
                    <span className="text-terra/40 font-black leading-none tracking-[-0.03em]" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>{h.no}</span>
                    <div>
                      <h3 className="text-green font-black tracking-[-0.02em]" style={{ fontSize: "clamp(22px, 2.6vw, 34px)" }}>{h.title}</h3>
                      <p className="mt-3 max-w-xl text-[15px] md:text-[16px] leading-[2] text-charcoal/80">{h.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WORKS — 数字をグラフィックとして。巨大な7＋現場写真、他は非対称に ===== */}
      <section className="py-16 md:py-28 px-6 md:px-10 bg-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-terra text-[12px] font-bold tracking-[0.2em]">WORKS</div>
              <h2 className="mt-4 text-green font-black leading-[1.2] tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
                西尾で、積み上げてきた。
              </h2>
            </div>
            <Link href="/works" className="text-[14px] font-bold text-green border-b-2 border-green pb-1 hover:text-terra hover:border-terra transition-colors">実績をもっと見る →</Link>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-10 items-center">
            <div className="md:col-span-7">
              <div className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
                <div>
                  <div className="text-green font-black leading-[0.82] tracking-[-0.04em]" style={{ fontSize: "clamp(120px, 20vw, 260px)" }}>7</div>
                  <div className="text-[14px] font-bold text-charcoal mt-1">件</div>
                  <div className="text-[13px] text-muted">DX・業務効率化の支援</div>
                </div>
                {/* TODO: 実写に差し替え。MOMENTS: DX支援の現場（手元・PC・議論）／横長 */}
                <PhotoNeeded ratio="4/3" kind="MOMENTS" note="DX支援の現場（手元・PC・議論／横長）" />
              </div>
            </div>
            <div className="md:col-span-5 grid grid-cols-3 gap-6 md:border-l md:border-charcoal/10 md:pl-10">
              {[
                { n: "3", u: "社", l: "BPO支援" },
                { n: "5", u: "名", l: "外部パートナー" },
                { n: "4", u: "件", l: "地域プロジェクト" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-terra font-black leading-none tracking-[-0.03em]" style={{ fontSize: "clamp(44px, 6vw, 76px)" }}>{s.n}</div>
                  <div className="text-[12px] font-bold text-charcoal mt-1">{s.u}</div>
                  <div className="text-[12px] text-muted leading-snug mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PEOPLE — 人が主役。活動写真を大きく非対称に ===== */}
      <section className="py-16 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="text-terra text-[12px] font-bold tracking-[0.2em]">PEOPLE</div>
              <h2 className="mt-4 text-green font-black leading-[1.2] tracking-[-0.02em]" style={{ fontSize: "clamp(30px, 4.4vw, 60px)" }}>
                一緒につくる<br />人たち。
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-[2] text-charcoal/80">
                社員だけで仕事をする会社ではありません。働き方も、住む場所も、得意なことも違う人たちが、それぞれの力を持ち寄って、一緒に仕事やプロジェクトをつくっています。
              </p>
              <Link href="/people" className="mt-7 inline-block text-[14px] font-bold text-green border-b-2 border-green pb-1 hover:text-terra hover:border-terra transition-colors">
                関わる人たちを見る →
              </Link>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
                <Image src="/photos/service-produce.png" alt="地域の場で人が交わる様子" fill sizes="(max-width:1024px) 100vw, 58vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT — Deep Green のバンドで締める ===== */}
      <section id="contact" className="scroll-mt-16 py-20 md:py-28 px-6 md:px-10 bg-green text-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-white/60 text-[12px] font-bold tracking-[0.2em]">CONTACT</div>
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h2 className="lg:col-span-8 font-black leading-[1.15] tracking-[-0.02em]" style={{ fontSize: "clamp(34px, 5.5vw, 76px)" }}>
              まず、話して<br />みませんか。
            </h2>
            <div className="lg:col-span-4 lg:pb-4">
              <p className="text-[15px] leading-[2] text-white/75">
                AIを使いたい。人が足りない。地域で何か始めたい。まだ課題が整理できていなくても大丈夫です。
              </p>
              <Link href="/contact" className="mt-6 inline-block bg-terra text-white font-bold px-9 py-4 rounded-full hover:opacity-90 transition-opacity">
                30分相談する →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
