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
  // SSR: render final value as fallback; client resets to 0 then counts up
  const [display, setDisplay] = useState(to);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDisplay(0);
  }, []);

  useEffect(() => {
    if (!isInView || !mounted) return;
    let raf: number;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
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
  }, [isInView, mounted, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("ja-JP")}
      {suffix}
    </span>
  );
}
