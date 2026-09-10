import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SitePhoto } from "@/components/ui/SitePhoto";
import type { SiteImageKey } from "@/lib/site-images";

/* ============================================================
   OUR BUSINESS — 3つの事業
   同じカードを3つ並べる形にはしない。番号・写真・見出しの大きさで差をつけ、
   DX（売上上の主力）に最も視線が集まるようにする。
   循環は円形図では描かず、事業のあいだに細い線と一言だけを置いて示す。
   ============================================================ */

/** 事業と事業のあいだ。細い線と、そこで生まれるものを一言だけ。 */
function FlowLink({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-4 py-10 md:py-14">
      <span aria-hidden className="block h-12 w-px bg-charcoal/20 md:h-16" />
      <span className="text-[11px] font-bold tracking-[0.18em] text-charcoal/45">{label}</span>
      <span aria-hidden className="block h-12 w-px bg-charcoal/20 md:h-16" />
    </div>
  );
}

type SubBusiness = {
  no: string;
  label: string;
  title: string;
  body: string;
  href: string;
  image: SiteImageKey;
};

const subBusinesses: SubBusiness[] = [
  {
    no: "02",
    label: "BPO",
    title: "人手不足に、社外の力を。",
    body: "営業・事務・CS等を受託し、社外パートナーとチームを組んで企業を支えます。",
    href: "/service-bpo",
    image: "bpoImage",
  },
  {
    no: "03",
    label: "地域プロデュース",
    title: "想いを、挑戦へ。",
    body: "個の「やりたい」と地域の「課題」をつなぎ、地域内外の人や企業とともに新しい仕事や事業をつくります。",
    href: "/service-produce",
    image: "regionImage",
  },
];

export function BusinessFlow() {
  return (
    <section id="business" className="scroll-mt-16 px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[0.28em] text-charcoal/40">OUR BUSINESS</p>
          <h2
            className="mt-6 font-bold leading-[1.35] tracking-[-0.02em] text-green"
            style={{ fontSize: "clamp(26px, 3.6vw, 46px)" }}
          >
            3つの事業で、
            <br className="hidden sm:block" />
            地域に循環をつくる。
          </h2>
        </Reveal>

        {/* ---- 01 DX — 主力。番号・見出し・写真すべてを他の2事業より大きく取る ---- */}
        <div className="mt-16 md:mt-24">
          <Reveal>
            <div className="flex items-baseline gap-5">
              <span
                className="font-black leading-none tracking-[-0.04em] tabular-nums text-green/20"
                style={{ fontSize: "clamp(56px, 8vw, 116px)" }}
              >
                01
              </span>
              <span className="text-[13px] font-bold tracking-[0.2em] text-dx md:text-[15px]">DX支援</span>
            </div>

            <h3
              className="mt-4 font-bold leading-[1.25] tracking-[-0.03em] text-green"
              style={{ fontSize: "clamp(34px, 5.4vw, 76px)" }}
            >
              忙しさを、余白へ。
            </h3>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 md:mt-14">
            <SitePhoto name="dxImage" sizes="(max-width: 768px) 100vw, 1400px" />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
              <p className="max-w-[30em] text-[16px] leading-[2.1] text-charcoal/80 md:col-span-7 md:text-[18px]">
                AI導入・システム開発・研修を通じて企業の業務改善に伴走し、新しいことに取り組める時間をつくります。
              </p>
              <div className="md:col-span-5 md:flex md:justify-end">
                <Link href="/service-dx" className="btn btn-ghost-navy px-8 py-4 text-[15px]">
                  DX支援について詳しく見る →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <FlowLink label="余白が生まれる" />

        {/* ---- 02 / 03 — 支える2事業。DXより一段小さく、左右に振って流れをつくる ---- */}
        {subBusinesses.map((b, i) => (
          <div key={b.label}>
            <Reveal>
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
                <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <SitePhoto name={b.image} sizes="(max-width: 768px) 100vw, 40vw" />
                </div>

                <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="flex items-baseline gap-4">
                    <span
                      className="font-black leading-none tracking-[-0.04em] tabular-nums text-green/20"
                      style={{ fontSize: "clamp(30px, 3.4vw, 52px)" }}
                    >
                      {b.no}
                    </span>
                    <span className="text-[12px] font-bold tracking-[0.18em] text-charcoal/50">
                      {b.label}
                    </span>
                  </div>

                  <h3
                    className="mt-3 font-bold leading-[1.35] tracking-[-0.02em] text-green"
                    style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
                  >
                    {b.title}
                  </h3>

                  <p className="mt-5 max-w-[28em] text-[15px] leading-[2] text-charcoal/80 md:text-[16px]">
                    {b.body}
                  </p>

                  <Link
                    href={b.href}
                    className="mt-6 inline-block border-b border-navy-ink/40 pb-0.5 text-[14px] font-bold text-navy-ink transition-colors hover:border-green hover:text-green"
                  >
                    {b.label}を詳しく →
                  </Link>
                </div>
              </div>
            </Reveal>

            <FlowLink label={i === 0 ? "多様な働き方が生まれる" : "挑戦が生まれる"} />
          </div>
        ))}

        {/* ---- 循環の閉じ。ここだけ中央に置いて、一周したことを短く伝える ---- */}
        <Reveal>
          <p className="mx-auto max-w-[26em] text-center text-[14px] leading-[2.1] text-charcoal/60 md:text-[16px]">
            新しい仕事・事業が生まれ、それがまた次の挑戦につながっていく。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
