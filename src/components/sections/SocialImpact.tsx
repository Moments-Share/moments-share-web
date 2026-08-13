"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SocialImpact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="bg-[#1b2140] overflow-hidden">
      <div ref={ref} className="max-w-[1100px] mx-auto px-8 md:px-20 pt-section pb-16">

        <motion.p
          className="text-[9px] font-black tracking-[0.38em] uppercase text-green mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Nishio
        </motion.p>

        <div className="flex flex-col gap-0">
          <motion.p
            className="font-black text-white leading-[0.92] tracking-[-0.06em]"
            style={{ fontSize: "clamp(72px, 13vw, 190px)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          >
            Action
          </motion.p>
          <motion.p
            className="font-black text-green leading-[0.92] tracking-[-0.06em]"
            style={{ fontSize: "clamp(72px, 13vw, 190px)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
          >
            to Hope
          </motion.p>
        </div>

        <motion.p
          className="text-white/50 leading-[1.9] font-medium mt-12 md:mt-16"
          style={{ fontSize: "clamp(15px, 1.7vw, 21px)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
        >
          地域課題の解決のために。<br />
          挑戦する人を、一人ずつ増やしていく。
        </motion.p>

      </div>
    </section>
  );
}
