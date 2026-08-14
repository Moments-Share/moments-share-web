"use client";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CountUpProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({ to, suffix = "", prefix = "", duration = 2, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  // Initial value = final value → matches SSR (no hydration mismatch, works without JS).
  // When scrolled into view, the rAF loop counts up from ~0 to `to`.
  const [display, setDisplay] = useState(to);

  useEffect(() => {
    if (!isInView) return;
    let raf = 0;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (startTime === null) startTime = ts;
      const progress = Math.min((ts - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * to));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setDisplay(to);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("ja-JP")}
      {suffix}
    </span>
  );
}
