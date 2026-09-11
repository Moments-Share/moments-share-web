import { Reveal } from "@/components/ui/Reveal";

/* ============================================================
   OUR KPI — カードにせず、数字と細い罫線だけで静かに見せる。
   数字は本文色で最も強く、単位だけセージに落として色数を抑える。
   実績の誇示ではなく、Visionに向けて積み上げている途中経過として置く。
   ============================================================ */

const indicators = [
  { value: "7", unit: "件", label: "DX支援" },
  { value: "3", unit: "社", label: "BPO支援" },
  { value: "4", unit: "件", label: "地域プロジェクト" },
  { value: "5", unit: "名", label: "共創パートナー" },
  // 実数が決まり次第 value を差し替える
  { value: "◎", unit: "名", label: "挑戦者数" },
];

export function Kpi() {
  return (
    <section className="bg-white px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[0.28em] text-charcoal/40">OUR KPI</p>
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
            {indicators.map((item) => (
              <div
                key={item.label}
                className="border-t border-charcoal/15 py-8 first:border-t-0 sm:even:border-l md:border-t-0 md:border-l md:px-7 md:py-10 md:first:border-l-0 md:first:pl-0"
              >
                <div className="flex items-baseline gap-1.5">
                  <span
                    className="font-bold leading-none tracking-[-0.03em] tabular-nums text-charcoal"
                    style={{ fontSize: "clamp(48px, 5.4vw, 76px)" }}
                  >
                    {item.value}
                  </span>
                  <span className="text-[15px] font-bold text-sage-ink">{item.unit}</span>
                </div>
                <div className="mt-3 text-[13px] leading-[1.8] tracking-[0.02em] text-charcoal/60">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
