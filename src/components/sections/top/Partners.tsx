import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

/* ============================================================
   PARTNERS — 外部パートナーの募集
   個人名・肩書き・人物写真は載せない。すでに多数在籍しているように
   見せないため、人物カードを並べる構成は取らない。
   雇用の募集ではなく、プロジェクト単位の共創相手を探す案内として置く。
   ============================================================ */

const fields = [
  "DX・業務効率化",
  "システム開発",
  "BPO・業務支援",
  "デザイン・広報",
  "地域プロジェクト",
  "プロジェクトマネジメント",
];

export function Partners() {
  return (
    <section className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* 左 — ラベル・見出し・本文 */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[11px] font-bold tracking-[0.28em] text-sage-ink">PARTNERS</p>
              <h2
                className="mt-6 font-bold leading-[1.35] tracking-[-0.02em] text-charcoal"
                style={{ fontSize: "clamp(26px, 3.4vw, 44px)" }}
              >
                一緒に、挑戦しませんか。
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              {/* 短い言い切りで積む。分野の列挙は右のリストと重複するので本文からは外した */}
              <div className="mt-8 max-w-[30em] space-y-5 text-[16px] leading-[2] text-charcoal md:text-[18px]">
                <p>プロジェクトごとに、外部のパートナーと組んでいます。</p>
                <p>専門を持ち寄って、一社では届かない挑戦を形にする。</p>
                <p className="text-[15px] text-charcoal/80 md:text-[16px]">
                  働き方も、関わる深さも、そのつど相談で決めます。まずは、お互いを知るところから。
                </p>
              </div>
            </Reveal>
          </div>

          {/* 右 — 募集分野。カードにせず、細い罫線で区切るだけにとどめる */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-[11px] font-bold tracking-[0.2em] text-charcoal/70">募集する分野</p>
              {/* 上端だけセージの細線。色は差さずに視線の起点をつくる */}
              <ul className="mt-6 border-t-2 border-sage">
                {fields.map((field) => (
                  <li
                    key={field}
                    className="border-b border-charcoal/15 py-4 text-[15px] font-bold tracking-[0.01em] text-deep-green md:text-[16px]"
                  >
                    {field}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[13px] leading-[1.9] text-charcoal/75">
                ここに無い専門性でも、まずはご相談ください。
              </p>
            </Reveal>
          </div>
        </div>

        {/* 下部 — CTA */}
        <Reveal delay={0.2}>
          <div className="mt-14 md:mt-16">
            <Link href="/contact" className="btn btn-solid-green px-9 py-4 text-[15px]">
              共創パートナーについて相談する <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
