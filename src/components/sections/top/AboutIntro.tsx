import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SitePhoto } from "@/components/ui/SitePhoto";
import { RevealChars } from "@/components/ui/RevealChars";
import { charStarts, charsTotalSec } from "@/lib/reveal-timing";

/* ============================================================
   ABOUT US — 「起点は、いつも1人の挑戦者だ。」
   TOPでは本文を途中まで見せ、続きはAboutページへ送る。
   右は人のドキュメンタリー写真を1枚だけ大きく。コラージュにはしない。
   ============================================================ */

/* 本文。1行目＝前提、2行目＝呼びかける相手、3行目＝起きること、
   4行目＝だから自分たちが何をするか。

   tight は「前の行と同じ塊」の印。いまは4行とも独立した段落なので
   使っていないが、続きの文を足すときに間を詰められるよう残してある。 */
const bodyLines: { text: string; tight?: boolean }[] = [
  { text: "人口が減って、働く人が減っても、地域の未来まで決まるわけではない。" },
  { text: "地域の経営者、会社を良くしたい、地域で何かを始めたいと行動する人たち。" },
  { text: "誰かが挑戦すると、変化が生まれ、新しい価値が生まれる。" },
  { text: "だからこそ、私たちは挑戦のきっかけを地域に創り続けます。" },
];

/* 段落をまたいで文字数を積み上げた、それぞれの出だしの時刻 */
const starts = charStarts(bodyLines.map((l) => l.text));

/* 本文が出きるまでの秒数。リンクはそのあとに出す */
const linkDelay = charsTotalSec(bodyLines.map((l) => l.text));

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
              1人の挑戦者だ。
            </h2>
          </Reveal>

          {/* 本文は1文字ずつ現れる。start は文字数から出しているので、
              段落が増えても1つの流れとしてつながる。

              ここは Reveal で包まない。Reveal は塊ごと opacity を
              上げるので、文字側の opacity と掛け算になって
              出はじめが濁る。RevealChars が自分で画面を見ている */}
          <div className="mt-9 max-w-[36em] text-[15px] leading-[2.1] text-charcoal/80 md:text-[17px]">
            {bodyLines.map((line, i) => (
              <RevealChars
                key={line.text}
                text={line.text}
                start={starts[i]}
                className={i === 0 ? "" : line.tight ? "mt-0" : "mt-7"}
              />
            ))}
          </div>

          {/* リンクは本文を読み終えたころに出す。
              本文が出きるまでの時間ぶん遅らせる */}
          <Reveal delay={linkDelay}>
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
