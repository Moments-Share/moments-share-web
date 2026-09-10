"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * スクロールで一度だけ静かに立ち上がる。派手な動きは置かず、読み始めのきっかけだけをつくる。
 * OSで視差効果を減らす設定のときは、最初から最終状態で描画する。
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
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const rawInView = useInView(ref, { once: true, amount: 0.2 });
  const inView = reduce ? true : rawInView;

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : y }}
      transition={reduce ? { duration: 0 } : { duration: 0.8, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
