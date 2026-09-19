"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/* ============================================================
   文字が少しずつ現れる。

   1文字ずつ span で包むが、span は inline のまま
   （inline-block にしない）。inline-block にすると
   1文字ずつが独立した箱になり、行頭に「。」や「、」が来る
   ——日本語の禁則処理が崩れる。
   動かすのは opacity だけなので inline で足りる。

   HTMLの時点では全部「見えている」状態で出力する。
   JSが動いた環境（html[data-js]）でだけ隠してから出す。
   読み込みに失敗しても本文が消えない。
   実際の見た目は globals.css の .rc / .rc-in が持つ。

   start は、この段落の1文字目が出る時刻（ミリ秒）。
   段落をまたいで積み上げた値は lib/reveal-timing.ts の
   charStarts が出す（server側から呼ぶので別ファイルにしてある）。
   ============================================================ */

export function RevealChars({
  text,
  /** 1文字目が出るまでの待ち時間（ミリ秒） */
  start = 0,
  /** 1文字ごとの間隔（ミリ秒） */
  step = 18,
  className = "",
}: {
  text: string;
  start?: number;
  step?: number;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("rc-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          el.classList.add("rc-in");
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className={`rc ${className}`}
      style={{ "--rc-start": `${start}ms`, "--rc-step": `${step}ms` } as CSSProperties}
    >
      {/* スプレッドで分けると、絵文字や結合文字も1つとして数えられる */}
      {[...text].map((ch, i) => (
        <span key={i} style={{ "--ci": i } as CSSProperties}>
          {ch}
        </span>
      ))}
    </p>
  );
}
