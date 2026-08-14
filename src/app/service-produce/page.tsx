import { Nav } from "@/components/ui/Nav";
import { ServiceHero } from "@/components/ui/ServiceHero";
import { FadeIn } from "@/components/ui/FadeIn";

// 実在するプロジェクトのみ掲載する。架空の名称・事例は作成しない。
const projects = [
  {
    name: "西尾働き方図鑑",
    cat: "メディア",
    desc: "地域で働く人・企業を取材して発信するメディア。「こんな仕事があるんだ」という出会いが、地元で働く選択肢を広げる。",
    ongoing: false,
  },
  {
    name: "西尾筋肉祭り",
    cat: "イベント",
    desc: "体を動かして地域を盛り上げる体験型イベント。世代を越えた出会いをつくり、地域への愛着を育てる。",
    ongoing: false,
  },
  {
    name: "AI活用研究会",
    cat: "コミュニティ",
    desc: "地域の企業・個人がAIを学び合うコミュニティ。現場で使える知識を共有し、挑戦のきっかけをつくる。",
    ongoing: false,
  },
  {
    name: "その他のプロジェクト",
    cat: "PROJECTS",
    desc: "地域の「やってみたい」から、新しいプロジェクトが今も生まれ続けています。",
    ongoing: true,
  },
];

// 地域推し活サイクル（知るへループする循環）
const cycle = ["知る", "好きになる", "応援する", "関わる", "挑戦する", "共創する", "次の挑戦へ"];
// 円周上の座標（%）。中心(50,50)、半径42%、上(知る)から時計回り。
const cyclePos = [
  { left: 50, top: 8 },
  { left: 82.8, top: 23.8 },
  { left: 90.9, top: 59.3 },
  { left: 68.2, top: 87.8 },
  { left: 31.8, top: 87.8 },
  { left: 9.1, top: 59.3 },
  { left: 17.2, top: 23.8 },
];

const howWeWork = [
  { step: "01", title: "人をつなぐ。", body: "課題を持つ人と、「やってみたい」を持つ人を引き合わせる。" },
  { step: "02", title: "場をつくる。", body: "出会いが生まれ、挑戦が動き出すきっかけと場をつくる。" },
  { step: "03", title: "カタチにする。", body: "アイデアで終わらせず、プロジェクトや事業として動かす。" },
  { step: "04", title: "次につなぐ。", body: "一つの挑戦を、次の誰かの挑戦へとつなげていく。" },
];

export const metadata = {
  title: "地域プロデュース | Moments Share合同会社",
  description:
    "地域課題を、挑戦のきっかけへ。地域の課題と、人や企業の「やってみたい」をつなぎ、新しいプロジェクトや事業が生まれる場をつくります。西尾働き方図鑑・西尾筋肉祭り・AI活用研究会など。愛知県西尾市発。",
  openGraph: {
    title: "地域プロデュース | Moments Share合同会社",
    description: "地域課題を、挑戦のきっかけへ。人・企業・地域をつなぎ、挑戦と共創の循環をつくります。",
    locale: "ja_JP",
    type: "website",
    url: "https://moments-share.com/service-produce",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "地域プロデュース | Moments Share合同会社",
    description: "地域課題を、挑戦のきっかけへ。挑戦と共創の循環を、西尾から。",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "地域プロデュース",
  "description":
    "地域の課題と、人や企業の「やってみたい」をつなぎ、新しいプロジェクトや事業が生まれるきっかけと場をつくります。",
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
  "serviceType": "地域プロデュース・コミュニティ運営・イベント企画",
  "areaServed": { "@type": "Place", "name": "愛知県 西尾市" },
  "url": "https://moments-share.com/service-produce",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://moments-share.com/" },
      { "@type": "ListItem", "position": 2, "name": "地域プロデュース", "item": "https://moments-share.com/service-produce" },
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
          headline={"地域課題を、\n挑戦のきっかけへ。"}
          sub="地域の課題と、人や企業の「やってみたい」をつなぐ。人をつなぎ、仲間を集め、新しいプロジェクトや事業が生まれるきっかけと場をつくります。"
          accent="#ef5d6c"
        />

        {/* Hero CTA */}
        <section className="py-16 px-8 md:px-12 bg-white">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <a
                href="/contact"
                className="inline-block bg-teal text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                一緒にプロジェクトをつくる →
              </a>
            </FadeIn>
          </div>
        </section>

        {/* OUR PHILOSOPHY */}
        <section className="py-section px-8 md:px-12 bg-warm">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-coral">OUR PHILOSOPHY</div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-5 text-h2 font-black tracking-heading leading-heading text-navy">
                地域愛を、<br className="hidden sm:block" />地域発展の力に。
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-10 space-y-6 text-[16px] md:text-[18px] leading-body text-ink/80">
                <p>
                  地域を良くするために、最初から大きなことをする必要はないと思っています。
                  好きなお店に行く。面白い人を誰かに紹介する。地域のイベントに参加する。「こんなことをやってみたい」と声にする。
                </p>
                <p>
                  そんな一人ひとりの小さな行動が、人をつなぎ、新しい挑戦を生み、やがて地域を動かす力になっていく。
                </p>
                <p className="text-navy font-bold text-[19px] md:text-[22px] leading-heading">
                  私たちは、地域への「好き」を、行動へ変えていきます。
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="py-section px-8 md:px-12 bg-white">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-coral">PROJECTS</div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">
                挑戦の、入り口をつくる。
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-[16px] md:text-[18px] leading-body text-muted max-w-2xl">
                人・企業・地域をつなぎながら、西尾で取り組んでいるプロジェクト。
                一つひとつが、次の挑戦者を呼ぶ入り口になる。
              </p>
            </FadeIn>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p, i) => (
                <FadeIn key={p.name} delay={i * 0.07}>
                  <div className="bg-white rounded-2xl p-8 border border-border h-full">
                    <div className="flex items-center gap-3">
                      <div className="text-[11px] font-bold tracking-widest-label text-coral">{p.cat}</div>
                      {p.ongoing && (
                        <span className="text-[11px] font-bold text-coral bg-coral/10 rounded-full px-3 py-0.5">
                          進行中
                        </span>
                      )}
                    </div>
                    <div className="mt-3 text-[20px] font-black tracking-heading text-navy leading-heading">
                      {p.name}
                    </div>
                    <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-muted">{p.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 地域推し活（循環サイクル） */}
        <section className="py-section px-8 md:px-12 bg-warm">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-coral">地域推し活</div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">
                好きになることから、<br className="hidden sm:block" />地域は動きはじめる。
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-[16px] md:text-[18px] leading-body text-muted max-w-2xl">
                「好き」から始まる関わりが、応援を生み、行動になり、やがて挑戦と共創へ。
                その循環が、また次の「好き」を連れてくる。
              </p>
            </FadeIn>

            {/* 循環サイクル図 */}
            <FadeIn delay={0.15}>
              <div className="mt-14">
                {/* デスクトップ：リング */}
                <div className="hidden md:block">
                  <div className="relative mx-auto aspect-square w-full max-w-[560px]">
                    {/* リングの土台 */}
                    <div className="absolute inset-[9%] rounded-full border-2 border-dashed border-coral/30" />
                    {/* 中心 */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[46%]">
                      <div className="text-[13px] font-black tracking-heading text-navy">地域推し活</div>
                      <div className="mt-2 text-[12px] font-bold text-coral leading-relaxed">
                        好き → 応援 → 行動<br />→ 挑戦 → 共創
                      </div>
                    </div>
                    {/* ノード */}
                    {cycle.map((label, i) => (
                      <div
                        key={label}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${cyclePos[i].left}%`, top: `${cyclePos[i].top}%` }}
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-coral text-white text-[12px] font-black flex items-center justify-center">
                            {i + 1}
                          </div>
                          <div className="mt-2 whitespace-nowrap rounded-full bg-white border border-border px-4 py-1.5 text-[13px] font-bold text-navy">
                            {label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-center text-[13px] font-bold text-muted">
                    ↻ 「次の挑戦へ」は、また「知る」へ戻り、循環しつづける。
                  </p>
                </div>

                {/* モバイル：縦フロー */}
                <div className="md:hidden mt-4">
                  <div className="rounded-2xl border border-border bg-white p-6">
                    <div className="text-center text-[13px] font-black tracking-heading text-navy">地域推し活</div>
                    <div className="mt-1 text-center text-[12px] font-bold text-coral">
                      好き → 応援 → 行動 → 挑戦 → 共創
                    </div>
                    <ol className="mt-6 space-y-0">
                      {cycle.map((label, i) => (
                        <li key={label}>
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 shrink-0 rounded-full bg-coral text-white text-[12px] font-black flex items-center justify-center">
                              {i + 1}
                            </div>
                            <div className="text-[15px] font-bold text-navy">{label}</div>
                          </div>
                          {i < cycle.length - 1 && (
                            <div className="ml-3 h-5 border-l-2 border-coral/30" aria-hidden="true" />
                          )}
                        </li>
                      ))}
                    </ol>
                    <div className="mt-4 text-[12px] font-bold text-muted">↻ 「知る」へ戻り、循環しつづける。</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* OUR GOAL */}
        <section className="py-section px-8 md:px-12 bg-white">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-coral">OUR GOAL</div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">
                挑戦する人を、<br className="hidden sm:block" />一人ずつ増やす。
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-8 space-y-6 text-[16px] md:text-[18px] leading-body text-ink/80">
                <p>
                  イベントを開催すること自体がゴールではありません。地域の中に「自分もやってみよう」と思う人が増えること。
                </p>
                <p>
                  一人の挑戦に仲間が集まり、新しい仕事や価値が生まれ、その姿が次の誰かを動かす。
                  そんな挑戦と共創の循環をつくります。
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* MID-TERM GOAL */}
        <section className="py-section px-8 md:px-12 bg-warm">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-coral">MID-TERM GOAL</div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">
                まずは、西尾から。
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-10 rounded-2xl bg-white border border-border p-10 md:p-14">
                <div className="text-[15px] md:text-[17px] font-bold text-muted">2040年までに、</div>
                <div className="mt-2 flex flex-wrap items-end gap-x-4 gap-y-2">
                  <div className="text-navy leading-none font-black tracking-tight">
                    <span className="text-[80px] md:text-[120px] text-coral">240</span>
                    <span className="text-[28px] md:text-[40px] ml-1">事業</span>
                  </div>
                  <div className="text-[18px] md:text-[24px] font-black text-navy pb-2">を、西尾に。</div>
                </div>
                <p className="mt-6 text-[13px] text-muted">
                  ※ 240事業はVisionではなく、私たちが掲げる中期目標です。
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="py-section px-8 md:px-12 bg-white">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-coral">HOW WE WORK</div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-4 text-h2 font-black tracking-heading leading-heading text-navy">
                私たちの進め方。
              </h2>
            </FadeIn>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {howWeWork.map((h, i) => (
                <FadeIn key={h.step} delay={i * 0.07}>
                  <div>
                    <div className="text-[40px] font-black text-coral/25 leading-none">{h.step}</div>
                    <h3 className="mt-4 text-[22px] font-black tracking-heading text-navy">{h.title}</h3>
                    <p className="mt-3 text-[15px] leading-body text-muted">{h.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-section px-8 md:px-12 bg-navy text-white text-center">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="text-[11px] font-bold tracking-widest-label text-coral">CONTACT</div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-5 text-[34px] md:text-[52px] font-black tracking-heading leading-heading">
                地域に、<br className="hidden sm:block" />一緒に仕掛けませんか。
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-[16px] leading-body text-white/70">
                「こんなことをやってみたい」から話しましょう。<br />
                まだアイデアがふわっとしていても大丈夫です。
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <a
                href="/contact"
                className="mt-10 inline-block bg-teal text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                一緒にプロジェクトをつくる →
              </a>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  );
}
