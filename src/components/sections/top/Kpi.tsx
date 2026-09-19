import { Reveal } from "@/components/ui/Reveal";
import { CountUpStat } from "@/components/ui/CountUpStat";

/* ============================================================
   OUR KPI — カードにせず、数字と細い罫線だけで静かに見せる。
   数字は本文色で最も強く、単位だけセージに落として色数を抑える。
   実績の誇示ではなく、Visionに向けて積み上げている途中経過として置く。
   ============================================================ */

/* value は数値で持つ。CountUpStat が 0 から数え上げる。

   色はサイトの既存3色（濃緑・テラコッタ・セージ）を巡回させる。
   参考にしたサイトは項目ごとに違うパステルを当てていたが、
   このサイトは色数を絞る前提で組んであるので、既存の色で回す。
   accent は文字、underline は下線。同じ色を指す。 */
const indicators = [
  { value: 7, unit: "件", label: "DX支援", accent: "text-deep-green", underline: "bg-deep-green" },
  { value: 3, unit: "社", label: "BPO支援", accent: "text-terracotta-ink", underline: "bg-terracotta-ink" },
  { value: 4, unit: "件", label: "地域プロジェクト", accent: "text-sage-ink", underline: "bg-sage-ink" },
  { value: 5, unit: "名", label: "共創パートナー", accent: "text-deep-green", underline: "bg-deep-green" },
  { value: 2, unit: "名", label: "新規挑戦者", accent: "text-terracotta-ink", underline: "bg-terracotta-ink" },
];

/* 1つずつ決まっていく見え方にするための間隔（ミリ秒） */
const STAGGER = 180;

export function Kpi() {
  return (
    <section className="bg-white px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[0.28em] text-charcoal/70">OUR KPI</p>
          <h2
            className="mt-6 font-bold leading-[1.35] tracking-[-0.02em] text-charcoal"
            style={{ fontSize: "clamp(26px, 3.4vw, 44px)" }}
          >
            大切にしている指標
          </h2>
          <p className="mt-5 max-w-[32em] text-[15px] leading-[2] text-charcoal/70 md:text-[16px]">
            Visionの実現に向けて、ひとつずつ、形にしてきた実績です。
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-1 border-t border-charcoal/15 sm:grid-cols-2 md:mt-16 md:grid-cols-5 md:border-b">
            {indicators.map((item, i) => (
              <div
                key={item.label}
                className="border-t border-charcoal/15 py-8 first:border-t-0 sm:even:border-l md:border-t-0 md:border-l md:px-7 md:py-10 md:first:border-l-0 md:first:pl-0"
              >
                <CountUpStat
                  to={item.value}
                  unit={item.unit}
                  label={item.label}
                  delay={i * STAGGER}
                  accentClass={item.accent}
                  underlineClass={item.underline}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
