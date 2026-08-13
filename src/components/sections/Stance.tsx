import { FadeIn } from "@/components/ui/FadeIn";

const stances = [
  {
    num: "01",
    title: "「この仕事、本当に\n人がやる必要ある？」",
    body: "ソリューションを先に売りません。「なぜこの作業が発生しているか」という問いから始め、根本から変える道を一緒に考えます。",
    keyword: "問いから始める",
  },
  {
    num: "02",
    title: "3事業を、\nバラバラに売らない。",
    body: "DX・BPO・地域プロデュースは単体のサービスではありません。3つが循環してはじめて意味を持つ——その設計ごと提供します。",
    keyword: "循環で設計する",
  },
  {
    num: "03",
    title: "地域のリアルで\n磨いた解決策を持つ。",
    body: "東京の成功事例を地方に輸入するのではなく、西尾というリアルな現場で検証し続けたモデルを持って動きます。",
    keyword: "現場で磨く",
  },
  {
    num: "04",
    title: "自動化は、\nゴールじゃない。",
    body: "ツールを入れることが目的ではありません。人が「人にしかできない仕事」に集中できること——それがゴールです。テクノロジーは、そこへの手段です。",
    keyword: "人本位のDX",
  },
  {
    num: "05",
    title: "変化の手触りを、\n一緒に体感する。",
    body: "「数字が改善しました」で終わりにしません。「あの会社が変わった」という現場の空気の変化を、お客様と一緒に感じることを大切にしています。",
    keyword: "伴走する",
  },
  {
    num: "06",
    title: "小さく始めて、\n確実に広げる。",
    body: "大きな変革より、現場に根ざした小さな変化の積み重ねを信じます。「まず1業務から」というスタンスが、結果的に大きな変化につながります。",
    keyword: "小さく確実に",
  },
];

export function Stance() {
  return (
    <section id="stance" className="py-section bg-light">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16">

        <FadeIn>
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">
            Our Stance
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="font-black text-ink leading-[1.2] tracking-[-0.03em] mb-6"
            style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}
          >
            Moments Shareが、<br />
            変えないと決めていること。
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-[15px] text-muted leading-[1.8] mb-16 max-w-[600px]">
            どんなに依頼が増えても、どんなに事業が広がっても、<br className="hidden md:inline" />
            これだけは曲げない——7つのスタンスです。
          </p>
        </FadeIn>

        {/* 6枚グリッド */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.06] mb-px">
          {stances.map((s, i) => (
            <FadeIn key={s.num} delay={i * 0.08}>
              <div className="group bg-white p-10 md:p-12 space-y-4 border-b-2 border-transparent hover:border-navy transition-colors duration-300 h-full">
                <p className="text-[11px] font-bold tracking-[0.24em] text-green">{s.num}</p>
                <h3
                  className="font-black text-ink leading-[1.35] tracking-[-0.02em] whitespace-pre-line"
                  style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}
                >
                  {s.title}
                </h3>
                <p className="text-[14px] text-muted leading-[1.9]">{s.body}</p>
                <span className="inline-block text-[11px] font-bold tracking-[0.14em] text-navy border border-navy/30 rounded-full px-3 py-1">
                  {s.keyword}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Stance 07：フィーチャーカード */}
        <FadeIn delay={0.1}>
          <div className="bg-navy text-white p-10 md:p-14 flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            <div className="flex-1 space-y-5">
              <p className="text-[11px] font-bold tracking-[0.24em] text-green">07</p>
              <h3
                className="font-black leading-[1.3] tracking-[-0.02em]"
                style={{ fontSize: "clamp(22px, 2.5vw, 34px)" }}
              >
                西尾でできれば、<em className="text-green not-italic">どこでもできる。</em><br />
                地域から、<em className="text-green not-italic">日本を変える。</em>
              </h3>
              <p className="text-[14px] text-white/70 leading-[1.9] max-w-[540px]">
                地域限定のモデルをつくりたいわけではありません。
                西尾という具体的な場所でモデルを磨き、同じ課題を持つ全国の地方都市に広げることを見据えています。
                ここを起点にした理由は、逃げではなく——再現性への確信です。
              </p>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-24 h-24 border border-white/20 rounded-full">
              <p className="text-[28px] font-black text-green leading-none">07</p>
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 mt-1">STANCE</p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
