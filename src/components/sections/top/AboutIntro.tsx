import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SitePhoto } from "@/components/ui/SitePhoto";
import { RevealChars } from "@/components/ui/RevealChars";
import { charStarts, charsTotalSec } from "@/lib/reveal-timing";

/* ============================================================
   ABOUT US — 「起点は、いつも1人の挑戦者（チャレンジャー）だ。」
   TOPでは本文を途中まで見せ、続きはAboutページへ送る。
   右は人のドキュメンタリー写真を1枚だけ大きく。コラージュにはしない。
   ============================================================ */

/* 本文。1・2行目でひとつの主張、3行目でそれを引き受け、
   4行目で読む人に投げかける。

   tight は「前の行と同じ塊」の印。1行目と2行目は続きの文なので
   間を詰め、塊と塊のあいだだけ広くあける。
   space-y ではなく行ごとに余白を持たせているのはこのため。 */
const bodyLines: { text: string; tight?: boolean }[] = [
  { text: "個人が、信念を持ち、諦めずにカタチにするまで行動し続ける。" },
  { text: "そうすれば、どんなことでも必ずカタチにできる。", tight: true },
  { text: "私たちは、そう信じています。" },
  { text: "上手くいかないこと、外部環境の変化、辞めてしまいたくなる時にこそ問いを立てよう。" },
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
              className="mt-6 font-bold leading-[1.35] tracking-[-0.02em] text-charcoal"
              style={{ fontSize: "clamp(25px, 3.4vw, 44px)" }}
            >
              起点は、いつも
              <br />
              1人の挑戦者
              {/* 「挑戦者」の言い換え。見出しの流れを止めないよう
                  半分の大きさで添える */}
              <span className="text-[0.5em] tracking-normal">（チャレンジャー）</span>
              だ。
            </h2>
          </Reveal>

          {/* 本文は1文字ずつ現れる。start は文字数から出しているので、
              段落が増えても1つの流れとしてつながる。

              ここは Reveal で包まない。Reveal は塊ごと opacity を
              上げるので、文字側の opacity と掛け算になって
              出はじめが濁る。RevealChars が自分で画面を見ている */}
          <div className="mt-9 max-w-[34em] text-[15px] leading-[2.1] text-charcoal/80 md:text-[17px]">
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
