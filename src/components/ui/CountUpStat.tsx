"use client";

import { useEffect, useRef } from "react";

/* ============================================================
   数字を 0 から数え上げ、終わった瞬間に色が入る。

   参考にしたボーダレス・ジャパンの動きを読み取ると、
   数え上げの最中は数字が薄いグレーで、止まった瞬間に
   その項目の色（数字・下線・ラベル）が入る、という順番だった。
   数字が「決まった」感じが出るので、この順番のまま再現する。

   守っている前提。
   1. サーバーでは最終値と最終色をそのまま描く。
      JSが動かない環境でも、検索・AI検索にも本当の数字が渡る。
      0 から描き始めると、クローラには「0」に見えてしまう。
   2. 画面に入るまで動かさない。上で終わっていると誰も見ない。
   3. OS側で「視差効果を減らす」を選んでいる人には動かさない。

   色の切り替えは state ではなく data-counting 属性で行う。
   1フレームごとに React を再レンダリングさせない。
   読み上げには aria-live を付けない。更新のたびに読まれると邪魔になる。
   ============================================================ */

export function CountUpStat({
  to,
  unit,
  label,
  /** 順番に走らせるための遅延（ミリ秒）。1つずつ決まっていく見え方にする */
  delay = 0,
  duration = 1300,
  /** 完了後の数字・単位の色（Tailwindのクラス） */
  accentClass,
  /** 完了後の下線の色（Tailwindのクラス） */
  underlineClass,
}: {
  to: number;
  unit: string;
  label: string;
  delay?: number;
  duration?: number;
  accentClass: string;
  underlineClass: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const num = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const r = root.current;
    const n = num.current;
    if (!r || !n) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;

    let raf = 0;
    let timer = 0;
    let started = false;

    r.dataset.counting = "true";
    n.textContent = "0";

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        // 終わりに向けて減速させる。等速だと機械的に見える
        const eased = 1 - Math.pow(1 - p, 3);
        n.textContent = String(Math.round(to * eased));
        if (p < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          // ここで色が入る
          delete r.dataset.counting;
        }
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          io.disconnect();
          timer = window.setTimeout(run, delay);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(r);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      // 途中で止まったまま残さない
      delete r.dataset.counting;
      n.textContent = String(to);
    };
  }, [to, delay, duration]);

  return (
    <div ref={root} className="group">
      <div className="flex items-baseline gap-1.5">
        {/* tabular-nums で桁幅を固定する。数え上げ中に単位や下線が横に揺れない */}
        <span
          ref={num}
          className={`font-bold leading-none tracking-[-0.03em] tabular-nums transition-colors duration-500 ${accentClass} group-data-[counting=true]:text-charcoal/20`}
          style={{ fontSize: "clamp(48px, 5.4vw, 76px)" }}
        >
          {to}
        </span>
        <span
          className={`text-[15px] font-bold transition-colors duration-500 ${accentClass} group-data-[counting=true]:text-charcoal/20`}
        >
          {unit}
        </span>
      </div>

      {/* 下線。数え終わりに左から引かれる */}
      <div
        aria-hidden
        className={`mt-5 h-[2px] w-full origin-left transition-transform duration-700 ${underlineClass} group-data-[counting=true]:scale-x-0`}
      />

      <div className="mt-3 text-[13px] leading-[1.8] tracking-[0.02em] text-charcoal/70 transition-opacity duration-500 group-data-[counting=true]:opacity-40">
        {label}
      </div>
    </div>
  );
}
