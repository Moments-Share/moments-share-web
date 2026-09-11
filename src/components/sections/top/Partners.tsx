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
              <div className="mt-8 max-w-[34em] space-y-5 text-[15px] leading-[2.1] text-charcoal md:text-[16px]">
                <p>
                  Moments Shareでは、地域や企業の未来をともにつくる外部パートナーを募集しています。
                </p>
                <p>
                  DX・業務効率化、システム開発、業務支援、デザイン、広報、地域プロジェクトなど、さまざまな専門性や経験を掛け合わせながら、新しい挑戦を形にしていきます。
                </p>
                <p>働き方や関わり方は、プロジェクトに応じて相談できます。</p>
                <p>まずは、お互いのことを知るところから始めましょう。</p>
              </div>
            </Reveal>
          </div>

          {/* 右 — 募集分野。カードにせず、細い罫線で区切るだけにとどめる */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-[11px] font-bold tracking-[0.2em] text-charcoal/45">募集する分野</p>
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
              <p className="mt-5 text-[13px] leading-[1.9] text-charcoal/55">
                上記以外の専門性でも、お気軽にご相談ください。
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
