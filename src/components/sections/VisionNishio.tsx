"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { SitePhotoFill } from "@/components/ui/SitePhoto";

/* ============================================================
   OUR VISION FOR NISHIO — 2040 / 240
   全幅の西尾の風景写真＋暗色オーバーレイ。数字「240」が主役。
   派手なCG・未来都市・イラストは禁止。粒子は入れない（静かに）。

   表示アニメーションはCSS（.rv）に任せる。HTMLの時点では見えている状態で
   出力されるため、JSが動かない環境でも文字が消えない。
   ============================================================ */

const rise = (delay: number, y = 20): CSSProperties =>
  ({ "--rv-delay": `${delay}s`, "--rv-y": `${y}px` }) as CSSProperties;

export function VisionNishio() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("rv-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          el.classList.add("rv-in");
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="vision-nishio-heading"
      className="relative overflow-hidden bg-[#16281f]"
    >
      {/* 背景：西尾の風景写真 */}
      <div className="absolute inset-0">
        <SitePhotoFill name="visionImage" sizes="100vw" />
        {/* 暗色オーバーレイ（左〜下を暗く／ネイビー系・可読性確保） */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(16,32,42,0.90) 0%, rgba(16,32,42,0.70) 42%, rgba(16,32,42,0.34) 74%, rgba(16,32,42,0.18) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(16,32,42,0.30) 0%, rgba(16,32,42,0) 38%, rgba(16,32,42,0.40) 78%, rgba(16,32,42,0.75) 100%)",
          }}
        />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 py-28 md:py-44">
        <p className="rv text-[11px] font-bold tracking-[0.34em] text-white/70" style={rise(0)}>
          OUR VISION
        </p>

        <p
          className="rv mt-6 font-bold tracking-[0.06em] text-white/80"
          style={{ ...rise(0.12), fontSize: "clamp(20px, 2.4vw, 30px)" }}
        >
          2040 GOAL
        </p>

        <h2 id="vision-nishio-heading" className="mt-4 font-bold text-white leading-[1.02] tracking-[-0.02em]">
          <span className="rv block" style={{ ...rise(0.24), fontSize: "clamp(30px, 5vw, 66px)" }}>
            西尾から、
          </span>
          <span className="rv mt-2 flex items-baseline gap-3 flex-wrap" style={rise(0.36)}>
            <span className="relative inline-block">
              <span
                className="text-cream font-black leading-[0.9] tracking-[-0.04em] tabular-nums"
                style={{ fontSize: "clamp(120px, 26vw, 340px)" }}
              >
                240
              </span>
              {/* 数字の足元に明るいセージの短い線。色数を増やさずに視線を止める */}
              <span
                aria-hidden
                className="absolute bottom-[0.14em] left-0 block h-[6px] w-[38%] bg-leaf-green md:h-[10px]"
              />
            </span>
            <span className="font-bold text-white" style={{ fontSize: "clamp(30px, 5vw, 66px)" }}>
              の事業を。
            </span>
          </span>
        </h2>

        <div className="rv mt-10 md:mt-14 max-w-[46em] space-y-5" style={rise(0.55)}>
          {/* 語尾を「創る。」にした。次の行が「〜を。」で終わるので、
              ここも「を。」だと2行続けて同じ止め方になる。
              /about/ のPurposeも「あふれる世界を創る。」なので表記も揃う */}
          <p className="font-bold text-cream leading-[1.6] tracking-[-0.01em]" style={{ fontSize: "clamp(19px, 2.2vw, 28px)" }}>
            生きててよかった！があふれる世界を創る。
          </p>
          {/* 4th Place は残すが、そのままだと読む人が立ち止まる言葉なので、
              「自己実現の場」という言い換えを括弧で添える。
              「エコシステム」は外した。4th Place と意味が重なるうえ、
              2語続くと読む側が2回つまずく。29.5字 → 17字 */}
          <p className="max-w-[32em] text-white/75 leading-[2.0]" style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}>
            地域に、4th Place（自己実現の場）を。
          </p>
        </div>
      </div>
    </section>
  );
}
