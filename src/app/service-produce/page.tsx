import { Nav } from "@/components/ui/Nav";
import { ServiceHero } from "@/components/ui/ServiceHero";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

const projects = [
  {
    name: "西尾働き方図鑑",
    cat: "メディア",
    desc: "地域で働く人・企業を取材し発信。「こんな仕事があるんだ」という気づきが、地元就職の選択肢を広げる。",
    status: "active",
  },
  {
    name: "西尾人事の会",
    cat: "コミュニティ",
    sub: "地域の人事部",
    desc: "地域の人事担当者が集まり、採用・育成の課題を共に解決するコミュニティ。一社では解決できない課題を、地域全体で乗り越える。",
    status: "active",
  },
  {
    name: "西尾キャリアLab",
    cat: "キャリア支援",
    desc: "学生と地域企業をつなぐキャリアコミュニティ。地元で挑戦する選択肢を届け、Uターン・地元定着を促進。",
    status: "active",
  },
  {
    name: "西尾AI活用研究会",
    cat: "学習コミュニティ",
    desc: "地域の企業・個人がAIを学び活用するコミュニティ。現場で使えるAIの知識を共有し、地域全体のDXリテラシーを高める。",
    status: "active",
  },
  {
    name: "西尾筋肉祭り",
    cat: "イベント",
    desc: "地域を盛り上げる体験型イベント。参加者が地域の企業・人と出会うきっかけをつくり、地域への愛着を育てる。",
    status: "active",
  },
  {
    name: "コワーキングスペース 西尾",
    cat: "Coming Soon",
    sub: "2027年11月 開業予定",
    desc: "挑戦する人が集まり、出会い、共創する場所。西尾市初のコワーキングスペース。地域の挑戦の拠点になる。",
    status: "upcoming",
  },
];

const reasons = [
  {
    num: "01",
    title: "地域愛だけでは、地域は動かない",
    body: "「地元が好き」「西尾のために何かしたい」。その想いを持つ人は多い。でも想いだけでは、地域は変わらない。エネルギーを「形」に変える仕組みが必要です。",
  },
  {
    num: "02",
    title: "挑戦が、次の挑戦を呼ぶ",
    body: "一人が挑戦すると、それを見た誰かが「自分にもできるかも」と動き出す。その連鎖を意図的に起こすことが、地域プロデュースの本質です。",
  },
  {
    num: "03",
    title: "コミュニティが地域インフラになる",
    body: "イベントは1日で終わる。メディアは読まれなくなる。でもコミュニティは、地域に残り続ける。人と人のつながりが、いちばん長く残る財産です。",
  },
];

export const metadata = {
  title: "地域プロデュース | Moments Share合同会社",
  description: "地域愛を、地域発展の力に。西尾で挑戦したい人を増やすために。働き方図鑑・筋肉祭り・AI研究会など、地域で挑戦の連鎖を起こすプロジェクト群。",
  openGraph: {
    title: "地域プロデュース | Moments Share合同会社",
    description: "地域愛を、地域発展の力に。西尾で挑戦したい人を増やすプロジェクト群。",
    locale: "ja_JP",
    type: "website",
    url: "https://momentsshare.com/service-produce",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "地域プロデュース | Moments Share合同会社",
    description: "地域愛を、地域発展の力に。西尾で挑戦の連鎖を起こすプロジェクト群。",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "地域プロデュース",
  "description": "コミュニティ・メディア・イベントを通じて、地域への愛をエネルギーに変え、挑戦の連鎖を起こします。",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Moments Share合同会社",
    "url": "https://momentsshare.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "西尾市",
      "addressRegion": "愛知県",
      "addressCountry": "JP",
    },
  },
  "serviceType": "地域プロデュース・コミュニティ運営・イベント企画",
  "areaServed": { "@type": "Place", "name": "愛知県 西尾市" },
  "url": "https://momentsshare.com/service-produce",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://momentsshare.com/" },
      { "@type": "ListItem", "position": 2, "name": "地域プロデュース", "item": "https://momentsshare.com/service-produce" },
    ],
  },
};

export default function ServiceProduce() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <ServiceHero
          label="地域プロデュース"
          headline={"地域愛を、\n地域発展の力に。"}
          sub="コミュニティ、メディア、イベント。地域への愛を、挑戦のエネルギーに変える。そして、その挑戦が次の挑戦を呼ぶ連鎖をつくる。"
          accent="#12a0ae"
        />

        {/* なぜ地域プロデュースか */}
        <section className="py-section bg-white">
          <div className="max-w-[1200px] mx-auto px-8 md:px-16">
            <FadeIn>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">Our Philosophy</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-ink leading-[1.2] tracking-[-0.03em] mb-20"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
              >
                「好き」を、<br />力に変える。
              </h2>
            </FadeIn>
            <div className="space-y-0 divide-y divide-black/[0.06]">
              {reasons.map((r, i) => (
                <FadeIn key={r.num} delay={i * 0.1}>
                  <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-16 py-12">
                    <p className="text-[11px] font-bold tracking-[0.22em] text-muted uppercase">{r.num}</p>
                    <div>
                      <p className="text-[20px] md:text-[22px] font-black text-ink mb-4 leading-[1.4]">{r.title}</p>
                      <p className="text-[16px] text-muted leading-[2.0]">{r.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 3つの手法 */}
        <section className="py-section bg-navy">
          <div className="max-w-[1200px] mx-auto px-8 md:px-16">
            <FadeIn>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">How We Do It</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-white leading-[1.2] tracking-[-0.03em] mb-20"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
              >
                3つの手法で、<br />地域を動かす。
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
              {[
                {
                  icon: "◎",
                  label: "コミュニティ",
                  title: "人をつなぎ、循環させる",
                  body: "一度つながった人と人は、別の文脈でまた出会う。地域に根差したコミュニティが、挑戦の連鎖のインフラになる。",
                },
                {
                  icon: "◉",
                  label: "メディア",
                  title: "見えない魅力を、可視化する",
                  body: "地域の魅力は、外から見えないだけで確かにある。取材・発信で「知らなかった」を「選びたい」に変える。",
                },
                {
                  icon: "◈",
                  label: "イベント",
                  title: "接点を、関係に変える",
                  body: "一度の出会いを深い関係に変えるのがイベントの力。参加者が「もっと関わりたい」と思える体験をつくる。",
                },
              ].map((item, i) => (
                <FadeIn key={item.label} delay={i * 0.1}>
                  <div className="bg-navy p-10 md:p-12 h-full space-y-4">
                    <p className="text-[32px] text-green/40 font-black">{item.icon}</p>
                    <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-green">{item.label}</p>
                    <p className="text-[18px] font-black text-white leading-[1.4]">{item.title}</p>
                    <p className="text-[14px] text-white/50 leading-[1.9]">{item.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 6プロジェクト */}
        <section className="py-section bg-white">
          <div className="max-w-[1200px] mx-auto px-8 md:px-16">
            <FadeIn>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">Projects</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-ink leading-[1.2] tracking-[-0.03em] mb-5"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
              >
                西尾に、挑戦の<br />入り口をつくる。
              </h2>
            </FadeIn>
            <FadeIn delay={0.18}>
              <p className="text-[16px] text-muted leading-[2.0] mb-20 max-w-xl">
                現在進行中の6つのプロジェクト。<br />
                一つひとつが、次の挑戦者を呼ぶ入り口になる。
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-px bg-black/[0.06]">
              {projects.map((p, i) => (
                <FadeIn key={p.name} delay={i * 0.07}>
                  <div className={`bg-white p-10 h-full space-y-4 ${p.status === "upcoming" ? "border-t-2 border-green" : ""}`}>
                    {p.status === "upcoming" && (
                      <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-green bg-green/10 px-3 py-1">
                        Coming Soon
                      </span>
                    )}
                    <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-green">{p.cat}</p>
                    <div>
                      <p className="text-[17px] font-black text-ink leading-[1.3]">{p.name}</p>
                      {p.sub && <p className="text-[13px] text-muted mt-1">{p.sub}</p>}
                    </div>
                    <p className="text-[14px] text-muted leading-[1.9]">{p.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Vision: コワーキング予告 */}
        <section className="py-section bg-[#f7f5ef]">
          <div className="max-w-[1200px] mx-auto px-8 md:px-16">
            <FadeIn>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">Vision 2027</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-ink leading-[1.15] tracking-[-0.03em] mb-10"
                style={{ fontSize: "clamp(32px, 5vw, 68px)" }}
              >
                2027年、西尾に<br />挑戦の拠点をつくる。
              </h2>
            </FadeIn>
            <FadeIn delay={0.18}>
              <p className="text-[17px] text-muted leading-[2.0] max-w-2xl mb-8">
                西尾市初のコワーキングスペース開業予定。
                フリーランス、起業家、副業者、地域企業が自然に出会い、プロジェクトが生まれる場所。
                デジタルとリアルを行き来しながら、地域に挑戦の文化を根付かせます。
              </p>
            </FadeIn>
            <FadeIn delay={0.26}>
              <div className="inline-flex items-center gap-3 border border-black/10 px-6 py-3 text-[13px] font-bold text-ink">
                2027年11月 開業予定
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-section bg-navy">
          <div className="max-w-[1200px] mx-auto px-8 md:px-16">
            <FadeIn>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">Contact</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-white leading-[1.2] tracking-[-0.03em] mb-8"
                style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
              >
                地域に、<br />一緒に仕掛けませんか。
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[17px] text-white/50 leading-[2.0] mb-14 max-w-xl">
                コミュニティ運営、イベント企画、地域メディア。<br />
                「こんなことがしたい」から話しましょう。
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="mailto:branding@momentsshare.com"
                  className="inline-flex items-center justify-center gap-3 bg-green text-white font-bold text-[15px] px-10 py-5 hover:bg-[#0f8f9c] transition-colors"
                >
                  メールで相談する →
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-semibold text-[15px] px-10 py-5 hover:border-white/50 transition-colors"
                >
                  ← トップページへ
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  );
}
