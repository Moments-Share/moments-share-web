"use client";

import { useEffect, useRef } from "react";

/* ============================================================
   数字を 0 から本来の値まで動かす。

   前提を2つ守る。
   1. サーバーでは最終値をそのまま出す。
      JSが動かない環境でも、検索・AI検索にも本当の数字が渡る。
      0 から描き始めると、クローラには「0」に見えてしまう。
   2. 画面に入るまで動かさない。
      上の方で勝手に終わっていると、見た人には何も起きない。

   描画は state ではなく textContent を直接書き換える。
   1フレームごとに再レンダリングする必要はないし、
   アニメーションは React の外側の仕組みとして扱うほうが素直。

   OS側で「視差効果を減らす」を選んでいる人には動かさない。
   動く数字は、酔いや注意の分散の原因になる。

   読み上げには aria-live を付けない。付けると更新のたびに
   読み上げられて邪魔になる。最初に一度読まれれば十分。
   ============================================================ */

export function CountUp({
  to,
  duration = 1400,
  className = "",
  style,
}: {
  to: number;
  /** ミリ秒 */
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;

    let raf = 0;
    let started = false;
    el.textContent = "0";

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        // 終わりに向けて減速させる。等速だと機械的に見える
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(to * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          io.disconnect();
          run();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      // 途中で止まったまま残さない
      el.textContent = String(to);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {to}
    </span>
  );
}
