import { FadeIn } from "@/components/ui/FadeIn";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { num: 10, suffix: "社+", label: "DX支援・BPO\n支援実績" },
  { num: 90, suffix: "%超", label: "業務時間削減\n最大事例" },
  { num: 6, suffix: "プロジェクト", label: "地域プロジェクト\n同時進行" },
  { num: 100, suffix: "社+", label: "企業支援経験\n（代表・累計）" },
];

const cases = [
  {
    cat: "SNS自動化",
    title: "SNS投稿の自動化",
    result: "作業時間 80%削減",
    detail: "30分 → 6分。AIが企画・執筆 → 自動投稿。",
  },
  {
    cat: "請求書 / GAS",
    title: "請求書発行の完全自動化",
    result: "月15時間 → 0時間",
    detail: "Googleフォーム入力から送信まで完全自動化。",
  },
  {
    cat: "在庫管理システム",
    title: "在庫管理DX",
    result: "転記作業ゼロ",
    detail: "スマホから入力 → クラウド管理。紙×Excelの二重管理を解消。",
  },
  {
    cat: "社内ポータル",
    title: "Notion社内情報一元化",
    result: "情報コスト 大幅削減",
    detail: "タスク管理・DB設計・GAS連携を一気通貫構築。",
  },
];

export function Results() {
  return (
    <section id="results" className="py-section bg-[#f7f5ef]">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16">

        <FadeIn>
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">
            Track Record
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="font-black text-ink leading-[1.2] tracking-[-0.03em] mb-20"
            style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}
          >
            西尾で積み上げた、<br />小さくない実績。
          </h2>
        </FadeIn>

        {/* KPI数字 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-black/[0.06] pt-16 mb-24">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div>
                <p
                  className="font-black text-navy leading-none tracking-[-0.04em] mb-3"
                  style={{ fontSize: "clamp(44px, 5vw, 72px)" }}
                >
                  <CountUp to={s.num} suffix={s.suffix} duration={2} />
                </p>
                <p className="text-[13px] text-muted leading-[1.7] whitespace-pre-line">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 事例 */}
        <div className="grid md:grid-cols-2 gap-px bg-black/[0.06]">
          {cases.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.08}>
              <div className="bg-white p-10 md:p-12 space-y-4">
                <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-green">{c.cat}</p>
                <p className="text-[17px] font-bold text-ink">{c.title}</p>
                <p
                  className="font-black text-accent tracking-[-0.02em] leading-none"
                  style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
                >
                  {c.result}
                </p>
                <p className="text-[14px] text-muted leading-[1.9]">{c.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
