import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SitePhoto } from "@/components/ui/SitePhoto";

/* ============================================================
   ABOUT US — 「起点は、いつも一人の挑戦者だ。」
   TOPでは本文を途中まで見せ、続きはAboutページへ送る。
   右は人のドキュメンタリー写真を1枚だけ大きく。コラージュにはしない。
   ============================================================ */

export function AboutIntro() {
  return (
    <section className="bg-white px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="text-[11px] font-bold tracking-[0.28em] text-charcoal/70">ABOUT US</p>
            <h2
              className="mt-6 font-bold leading-[1.3] tracking-[-0.02em] text-charcoal"
              style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
            >
              起点は、いつも
              <br />
              一人の挑戦者だ。
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-9 max-w-[34em] space-y-5 text-[15px] leading-[2.1] text-charcoal/80 md:text-[17px]">
              <p>人口が減り、働く人が減っても、地域の未来まで決まるわけではない。</p>
              {/* 呼びかける相手は3つ。すべて「〜人。」で揃える。
                  「いま挑戦している人」も入れていたが、すでに動いている相手に
                  呼びかける必要は無く、1つだけ「そして、」で受ける形になって
                  長さの原因にもなっていた。その層への言葉はPARTNERSの節にある */}
              <p>
                地域の経営者。会社をよくしたい人。何か始めたい人。
              </p>
              {/* 挑戦 → 変化 → 人 → 仕事 の順に広がっていく形。
                  「変化が生まれ…価値が生まれる」だと同じ動詞が2回出て
                  後ろの「生まれる」が効かなくなるので、前を「起き」にした */}
              <p>誰かが挑戦すると、そこに変化が起き、人が集まり、新しい仕事や価値が生まれる。</p>
            </div>

            <Link
              href="/about"
              className="mt-9 inline-block border-b border-navy-ink/40 pb-0.5 text-[14px] font-bold text-navy-ink transition-colors hover:border-deep-green hover:text-deep-green"
            >
              私たちについて →
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.15}>
            <SitePhoto name="aboutImage" sizes="(max-width: 1024px) 100vw, 50vw" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
