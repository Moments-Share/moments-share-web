import { FadeIn } from "@/components/ui/FadeIn";

const reasons = [
  {
    num: "01 — 産業",
    title: "三河の製造業DNAが眠っている",
    body: "愛知県西三河エリアは、トヨタ関連産業を中心に日本有数の製造業集積地です。西尾市内にも加工・部品・食品・サービス業など多様な中小企業が密集しており、「ITで業務改善したいが、どこから手をつければいいかわからない」という需要がリアルに存在します。\n\n日本で最も変化を必要としている産業の現場が、すぐそこにある。",
    bold: "多様な中小企業が密集",
  },
  {
    num: "02 — 規模感",
    title: "変化を「ともに感じられる」サイズ感",
    body: "人口約9万人。大都市でも過疎地でもない——変化の手応えが実感できる規模です。1社の変化が地域に聞こえ、成功事例が口コミで広がり、「あそこが変わった」という空気が確かに動く。\n\n大きすぎると埋もれる。小さすぎると実証にならない。西尾は、ちょうどいいモデルケースの場所です。",
    bold: "変化の手応えが実感できる規模",
  },
  {
    num: "03 — コミュニティ",
    title: "顔の見える信頼が、早く築ける",
    body: "地元出身で、地元の学校・地元の人間関係を持って戻ってきた。この「顔が見える」という起点が、どれだけ大切かをUターン後に改めて実感しました。\n\n「中根くんなら」という一言で始まる仕事がある。信頼の蓄積が早い地域で動くことが、最初の成功確率を上げます。",
    bold: "「中根くんなら」という一言で始まる仕事がある。",
  },
  {
    num: "04 — 課題の典型性",
    title: "「西尾の課題」は、日本の縮図",
    body: "人手不足、若者流出、デジタル化の遅れ、後継者不足——これらは西尾だけの問題ではなく、日本全国の地方都市が抱える構造課題です。\n\n西尾でモデルをつくり、再現できるかを検証する。「西尾でできれば、どこでもできる」——これが、ここを出発点にした一番の理由です。",
    bold: "日本全国の地方都市が抱える構造課題",
  },
];

const stats = [
  { num: "9", unit: "万人", label: "人口規模\n（西尾市）" },
  { num: "60", unit: "分", label: "名古屋まで\n電車で約" },
  { num: "No.1", unit: "", label: "愛知の抹茶生産量\n（全国有数）" },
  { num: "1", unit: "社目", label: "地域DX支援\nスタートアップ" },
];

export function WhyNishio() {
  return (
    <section id="why-nishio" className="py-section bg-light relative overflow-hidden">
      {/* Grid decoration */}
      <div
        className="absolute top-0 right-0 w-[320px] h-[320px] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-navy) 1px, transparent 1px), linear-gradient(90deg, var(--color-navy) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-8 md:px-16 relative z-10">

        <FadeIn>
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">
            Why Nishio?
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="font-black text-ink leading-[1.2] tracking-[-0.03em] mb-6"
            style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}
          >
            西尾を、起点に選んだ。
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-[15px] text-muted leading-[1.8] mb-16 max-w-[600px]">
            「なぜ西尾なのか」と聞かれるたびに、少し考えてしまいます。<br />
            なぜなら、答えが一言では終わらないから。<br />
            地理でも、産業でも、人でもある——それを、正直に話します。
          </p>
        </FadeIn>

        {/* 4つの理由カード */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {reasons.map((r, i) => (
            <FadeIn key={r.num} delay={i * 0.08}>
              <div className="bg-white p-8 md:p-10 space-y-4 border-l-4 border-navy/20 hover:border-green transition-colors duration-300 h-full">
                <p className="text-[11px] font-bold tracking-[0.24em] text-green uppercase">{r.num}</p>
                <h3
                  className="font-black text-ink leading-[1.35] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}
                >
                  {r.title}
                </h3>
                <p className="text-[14px] text-muted leading-[1.9] whitespace-pre-line">
                  {r.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 数字で見る西尾 */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-navy/10 mb-16">
            {stats.map((s) => (
              <div key={s.label} className="bg-white px-8 py-6 text-center">
                <p className="font-black text-navy leading-none mb-2" style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}>
                  {s.num}
                  {s.unit && (
                    <span className="text-[14px] font-bold ml-1">{s.unit}</span>
                  )}
                </p>
                <p className="text-[12px] text-muted leading-[1.7] whitespace-pre-line">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 締めくくりコピー */}
        <FadeIn delay={0.1}>
          <div className="bg-navy text-white p-10 md:p-14 flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            <div className="flex-1 space-y-5">
              <p className="text-[11px] font-bold tracking-[0.24em] text-green">Our Conviction</p>
              <h3
                className="font-black leading-[1.3] tracking-[-0.02em]"
                style={{ fontSize: "clamp(22px, 2.5vw, 34px)" }}
              >
                「西尾でできれば、<em className="text-green not-italic">どこでもできる。</em>」<br />
                だから、ここから始める。
              </h3>
              <p className="text-[14px] text-white/70 leading-[1.9] max-w-[540px]">
                東京でも大阪でもなく、西尾を選んだのは逃げではありません。
                課題の密度、人との距離感、変化を一緒に体感できる環境——
                地域のリアルで磨いた解決策は、日本中で再現できるはずです。
              </p>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-28 h-28 border border-white/20 rounded-full">
              <p className="text-[13px] font-black text-green leading-tight text-center">西尾発<br />全国へ</p>
              <p className="text-[10px] font-bold tracking-[0.14em] text-white/40 mt-2">NISHIO → JAPAN</p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
