"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * スクロールで一度だけ静かに立ち上がる。
 *
 * 中身はHTMLの時点で「見えている」状態で出力し、JSが動いた環境でだけ
 * （html[data-js]）隠してから動かす。JSの読み込みが失敗・遅延しても
 * 本文が消えないようにするため、初期状態を opacity:0 にはしない。
 * 実際の見た目は globals.css の .rv / .rv-in が持つ。
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 監視できない環境では、すぐ最終状態にする
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
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`rv ${className}`}
      style={{ "--rv-delay": `${delay}s`, "--rv-y": `${y}px` } as CSSProperties}
    >
      {children}
    </div>
  );
}
