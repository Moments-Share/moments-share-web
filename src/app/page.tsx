import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/ui/Nav";

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

const business = [
  {
    no: "01",
    label: "DX",
    title: "忙しさを、余白へ。",
    body: "AIやRPA、自動化を使って、人がやらなくてもいい仕事を減らす。生まれた時間を、本当にやるべきことや新しい挑戦へ。",
    href: "/service-dx",
    photo: "/photos/service-dx.png",
  },
  {
    no: "02",
    label: "BPO",
    title: "人手不足を、多様な働き方へ。",
    body: "採用の前に、まず仕事を整理する。専門・副業・子育て中の人など、さまざまな得意を持つ人と一緒に企業を支える。",
    href: "/service-bpo",
    photo: "/photos/service-bpo.png",
  },
  {
    no: "03",
    label: "地域プロデュース",
    title: "地域課題を、挑戦のきっかけへ。",
    body: "地域の課題と、人や企業の「やってみたい」をつなぐ。新しいプロジェクトや事業が生まれる、きっかけと場をつくる。",
    href: "/service-produce",
    photo: "/photos/service-produce.png",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* ===== HERO — 雑誌の表紙。写真は舞台、人が主役、コピーはグラフィック ===== */}
        <section className="pt-28 md:pt-32 pb-16 md:pb-24 px-6 md:px-10">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
              <div className="lg:col-span-7 lg:pb-6">
                <div className="flex items-center gap-3 text-terra text-[12px] font-bold tracking-[0.2em]">
                  <span className="w-8 h-px bg-terra" />
                  MOMENTS SHARE — NISHIO, AICHI / 2026
                </div>
                <h1 className="mt-8 text-green font-black leading-[1.12] tracking-[-0.03em]"
                    style={{ fontSize: "clamp(44px, 7vw, 104px)" }}>
                  地域に、<br />挑戦と共創の<br />循環を。
                </h1>
                <p className="mt-8 max-w-xl text-[16px] md:text-[17px] leading-[2] text-charcoal/80">
                  企業の仕事を変える。人の働き方を広げる。地域に、新しい挑戦を生み出す。
                  DX・BPO・地域プロデュースを通じて、企業・人・地域の可能性をつなぐ会社です。
                </p>
                <div className="mt-8 flex items-center gap-8 text-[14px] font-bold">
                  <Link href="#business" className="text-green border-b-2 border-green pb-1 hover:text-terra hover:border-terra transition-colors">事業を見る</Link>
                  <Link href="/contact" className="text-charcoal/60 hover:text-green transition-colors">30分相談する →</Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] w-full">
                  <Image src="/photos/service-produce.png" alt="西尾の地域イベントで語らう人々" fill priority sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
                </div>
                <p className="mt-3 text-[12px] text-muted">西尾の夜市にて。挑戦は、いつも人と人の間から始まる。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== BUSINESS — 3事業。均等カードではなく、大きな数字＋写真＋左右交互の編集レイアウト ===== */}
        <section id="business" className="scroll-mt-20 py-16 md:py-28 px-6 md:px-10 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-3xl">
              <div className="text-terra text-[12px] font-bold tracking-[0.2em]">BUSINESS</div>
              <h2 className="mt-4 text-green font-black leading-[1.25] tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
                忙しさや人手不足を、<br className="hidden sm:block" />地域の力に変えていく。
              </h2>
            </div>

            <div className="mt-16 md:mt-24 flex flex-col gap-20 md:gap-32">
              {business.map((b, i) => (
                <div key={b.no} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                  {/* 写真とテキストを交互に。写真の大きさも段ごとに変える */}
                  <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""} ${i === 1 ? "md:col-span-7" : "md:col-span-6"}`}>
                    <div className={`relative w-full ${i === 0 ? "aspect-[4/3]" : i === 1 ? "aspect-[3/2]" : "aspect-[5/4]"}`}>
                      <Image src={b.photo} alt={b.label} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
                    </div>
                  </div>
                  <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-1" : ""} ${i === 1 ? "md:col-span-5" : "md:col-span-6"}`}>
                    <div className="flex items-baseline gap-4">
                      <span className="text-terra font-black leading-none" style={{ fontSize: "clamp(56px, 8vw, 104px)" }}>{b.no}</span>
                      <span className="text-charcoal/40 text-[13px] font-bold tracking-[0.16em] pb-2">{b.label}</span>
                    </div>
                    <h3 className="mt-4 text-green font-black leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(26px, 3.4vw, 44px)" }}>{b.title}</h3>
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

        {/* ===== MESSAGE — 文章と余白が主役。手元のドキュメント写真を余白に添える ===== */}
        <section className="py-20 md:py-32 px-6 md:px-10">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 text-terra text-[12px] font-bold tracking-[0.2em] lg:sticky lg:top-24">
                  <span className="w-8 h-px bg-terra" />MESSAGE
                </div>
              </div>
              <div className="lg:col-span-9 lg:pl-8">
                <h2 className="text-green font-black leading-[1.18] tracking-[-0.02em]" style={{ fontSize: "clamp(30px, 4.4vw, 60px)" }}>
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

        {/* ===== WORKS — 数字が主役。均等4カラムをやめ、大小の強弱と現場写真で見せる ===== */}
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

            <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
              {/* 主役の数字 7 ＋ 現場写真（ホワイトボードでの業務整理） */}
              <div className="md:col-span-7">
                <div className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
                  <div>
                    <div className="text-green font-black leading-[0.85] tracking-[-0.04em]" style={{ fontSize: "clamp(120px, 20vw, 260px)" }}>7</div>
                    <div className="text-[14px] font-bold text-charcoal mt-1">件</div>
                    <div className="text-[13px] text-muted">DX・業務効率化の支援</div>
                  </div>
                  <div className="relative aspect-[4/3] w-full">
                    <Image src="/photos/service-dx.png" alt="DX支援の現場" fill sizes="40vw" className="object-cover" />
                  </div>
                </div>
              </div>
              {/* 3・5・4 は控えめに、非対称に */}
              <div className="md:col-span-5 grid grid-cols-3 gap-6 md:border-l md:border-charcoal/10 md:pl-8">
                {[
                  { n: "3", u: "社", l: "BPO支援" },
                  { n: "5", u: "名", l: "外部パートナー" },
                  { n: "4", u: "件", l: "地域プロジェクト" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-terra font-black leading-none tracking-[-0.03em]" style={{ fontSize: "clamp(44px, 6vw, 72px)" }}>{s.n}</div>
                    <div className="text-[12px] font-bold text-charcoal mt-1">{s.u}</div>
                    <div className="text-[12px] text-muted leading-snug mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== PEOPLE — 人が主役。活動している姿を大きく ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="text-terra text-[12px] font-bold tracking-[0.2em]">PEOPLE</div>
                <h2 className="mt-4 text-green font-black leading-[1.25] tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
                  一緒につくる人たち。
                </h2>
                <p className="mt-6 max-w-lg text-[16px] leading-[2] text-charcoal/80">
                  社員だけで仕事をする会社ではありません。働き方も、住む場所も、得意なことも違う人たちが、それぞれの力を持ち寄って、一緒に仕事やプロジェクトをつくっています。
                </p>
                <Link href="/people" className="mt-7 inline-block text-[14px] font-bold text-green border-b-2 border-green pb-1 hover:text-terra hover:border-terra transition-colors">
                  関わる人たちを見る →
                </Link>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative aspect-[3/2] w-full">
                  <Image src="/photos/service-bpo.png" alt="多様な人が集まって働く現場" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONTACT — Deep Green のバンドで締める（CTAは一部Deep Green の用途） ===== */}
        <section id="contact" className="scroll-mt-20 py-20 md:py-28 px-6 md:px-10 bg-green text-white">
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
      </main>
    </>
  );
}
