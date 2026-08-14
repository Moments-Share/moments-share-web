import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/sections/Hero";

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
    url: "https://momentsshare.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const changes = [
  {
    tag: "DX",
    tagColor: "text-teal",
    title: "忙しさを、DXで余白へ。",
    body: "AIやRPAを活用し、人がやらなくてもいい仕事を減らします。人が本当にやるべきことや、新しいことに時間を使える会社へ。",
  },
  {
    tag: "BPO",
    tagColor: "text-teal",
    title: "人手不足を、BPOで多様な働き方へ。",
    body: "必要な仕事を、必要な分だけ。専門人材、副業人材、子育て中の人など、さまざまな得意を持つ人と一緒に企業を支えます。",
  },
  {
    tag: "地域プロデュース",
    tagColor: "text-coral",
    title: "地域課題を、挑戦のきっかけへ。",
    body: "地域の課題と、人や企業の「やってみたい」をつなぐ。新しいプロジェクトや事業が生まれるきっかけをつくります。",
  },
];

const business = [
  { tag: "DX", tagColor: "text-teal", title: "忙しさを、余白へ。", body: "業務を整理し、AI・RPA・自動化を使って、人がやらなくてもいい仕事を減らします。", href: "/service-dx" },
  { tag: "BPO", tagColor: "text-teal", title: "人手不足を、多様な働き方へ。", body: "企業に必要な仕事を整理し、外部のチームと一緒に支えます。", href: "/service-bpo" },
  { tag: "地域プロデュース", tagColor: "text-coral", title: "地域課題を、挑戦のきっかけへ。", body: "人・企業・地域をつなぎ、新しい挑戦が生まれる場をつくります。", href: "/service-produce" },
];

const howWeWork = [
  { step: "01", title: "整理する。", body: "まず「何が課題なのか」を一緒に考える。" },
  { step: "02", title: "仕組みにする。", body: "誰か一人に頼らなくても回る形をつくる。" },
  { step: "03", title: "一緒に動かす。", body: "提案して終わりではなく、実行し、改善し、定着するところまで伴走する。" },
];

const stats = [
  { n: "7", unit: "件", label: "DX・業務効率化支援" },
  { n: "3", unit: "社", label: "BPO支援" },
  { n: "5", unit: "名", label: "外部パートナー" },
  { n: "4", unit: "件", label: "地域プロジェクト" },
];

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      {/* 私たちが変えたいこと */}
      <section className="py-section px-8 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-[11px] font-bold tracking-widest-label text-teal">WHAT WE CHANGE</div>
          <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">私たちが変えたいこと。</h2>
          <div className="mt-14 divide-y divide-border border-t border-border">
            {changes.map((c) => (
              <div key={c.tag} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-10 py-10">
                <div className={`text-[13px] font-bold tracking-wide ${c.tagColor}`}>{c.tag}</div>
                <div>
                  <h3 className="text-h3 font-black tracking-heading text-navy leading-heading">{c.title}</h3>
                  <p className="mt-4 text-[15px] md:text-[17px] leading-body text-muted max-w-2xl">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MESSAGE */}
      <section className="py-section px-8 md:px-12 bg-warm">
        <div className="mx-auto max-w-3xl">
          <div className="text-[11px] font-bold tracking-widest-label text-teal">MESSAGE</div>
          <h2 className="mt-5 text-h2 font-black tracking-heading leading-heading text-navy">
            起点は、いつも<br className="hidden sm:block" />一人の挑戦者だ。
          </h2>
          <div className="mt-10 space-y-6 text-[16px] md:text-[18px] leading-body text-ink/80">
            <p>人口が減り、働く人が減っても、地域の未来まで決まるわけではない。</p>
            <p>
              会社を変えようとする人。新しい仕事をつくろうとする人。地域で何かを始めようとする人。
              誰かが挑戦すると、そこに人が集まり、新しい仕事や価値が生まれる。
              そして、その挑戦がまた次の誰かの挑戦につながっていく。
            </p>
            <p>私たちは、その挑戦が生まれやすい地域をつくりたい。</p>
            <p>
              DXで、人がやらなくてもいい仕事を減らし、企業と人に、新しいことへ使える余白をつくる。
              BPOで、必要な仕事を支え、一人ひとりに合った働き方を増やす。
              地域プロデュースで、人や企業の想いをつなぎ、新しい挑戦が始まるきっかけをつくる。
            </p>
            <p>一人の挑戦に、仲間が集まる。新しい仕事や事業が生まれる。そして、また次の挑戦が始まる。</p>
            <p className="text-navy font-bold text-[19px] md:text-[22px] leading-heading">
              私たちは、地域に挑戦と共創の循環をつくります。
            </p>
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section id="business" className="py-section px-8 md:px-12 scroll-mt-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-[11px] font-bold tracking-widest-label text-teal">BUSINESS</div>
          <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">3つの事業。</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {business.map((b) => (
              <Link
                key={b.tag}
                href={b.href}
                className="group bg-white rounded-2xl p-8 border border-border hover:border-teal/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all"
              >
                <div className={`text-[12px] font-bold tracking-wide ${b.tagColor}`}>{b.tag}</div>
                <h3 className="mt-3 text-[22px] font-black tracking-heading text-navy leading-heading">{b.title}</h3>
                <p className="mt-4 text-[14px] leading-relaxed text-muted">{b.body}</p>
                <span className="mt-6 inline-block text-[13px] font-bold text-teal group-hover:underline">詳しく見る →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-section px-8 md:px-12 bg-warm">
        <div className="mx-auto max-w-5xl">
          <div className="text-[11px] font-bold tracking-widest-label text-teal">HOW WE WORK</div>
          <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">私たちの進め方。</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {howWeWork.map((h) => (
              <div key={h.step}>
                <div className="text-[40px] font-black text-teal/25 leading-none">{h.step}</div>
                <h3 className="mt-4 text-[22px] font-black tracking-heading text-navy">{h.title}</h3>
                <p className="mt-3 text-[15px] leading-body text-muted">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section className="py-section px-8 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold tracking-widest-label text-teal">WORKS</div>
              <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">数字で見る Moments Share。</h2>
            </div>
            <Link href="/works" className="text-[14px] font-bold text-teal hover:underline">実績を見る →</Link>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-[48px] md:text-[64px] font-black tracking-tight text-navy leading-none">
                  {s.n}<span className="text-[22px] md:text-[26px] ml-0.5">{s.unit}</span>
                </div>
                <div className="mt-2 text-[13px] text-muted leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PEOPLE */}
      <section className="py-section px-8 md:px-12 bg-warm">
        <div className="mx-auto max-w-5xl">
          <div className="text-[11px] font-bold tracking-widest-label text-teal">PEOPLE</div>
          <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">一緒につくる人たち。</h2>
          <p className="mt-6 text-[16px] md:text-[18px] leading-body text-muted max-w-2xl">
            Moments Shareには、さまざまな形で関わる人がいます。
            それぞれの得意を持ち寄り、一緒に仕事やプロジェクトをつくっています。
          </p>
          <Link href="/people" className="mt-8 inline-block text-[14px] font-bold text-teal hover:underline">関わる人たちを見る →</Link>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-section px-8 md:px-12 bg-navy text-white text-center scroll-mt-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-[11px] font-bold tracking-widest-label text-teal">CONTACT</div>
          <h2 className="mt-5 text-[34px] md:text-[52px] font-black tracking-heading leading-heading">まず、話してみませんか。</h2>
          <p className="mt-6 text-[16px] leading-body text-white/70">
            AIを使いたい。人が足りない。地域で何か始めたい。<br />
            まだ課題が整理できていなくても大丈夫です。
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block bg-teal text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            30分相談する →
          </Link>
        </div>
      </section>
    </>
  );
}
