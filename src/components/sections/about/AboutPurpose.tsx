"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutPurpose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="bg-[#faf9f7]">
      <div
        ref={ref}
        className="max-w-[1000px] mx-auto px-8 md:px-24 flex items-center"
        style={{ minHeight: "70vh" }}
      >
        <motion.p
          className="font-black text-navy leading-[1.35] tracking-[-0.04em]"
          style={{ fontSize: "clamp(28px, 4.5vw, 62px)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          人が、<br />
          人にしかできない挑戦へ<br />
          <span className="text-green">時間を使える社会を。</span>
        </motion.p>
      </div>
    </section>
  );
}
