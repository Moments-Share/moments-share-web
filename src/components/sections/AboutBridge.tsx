"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function AboutBridge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="bg-[#f7f5ef] overflow-hidden">
      <div ref={ref} className="max-w-[1100px] mx-auto px-8 md:px-20 py-24 md:py-36">

        <div className="md:grid md:grid-cols-[1fr_auto] md:items-end gap-16">
          <div>
            <motion.p
              className="text-[10px] font-bold tracking-[0.32em] uppercase text-ink/20 mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.9 }}
            >
              About Moments Share
            </motion.p>
            <motion.h2
              className="font-black text-navy leading-[1.12] tracking-[-0.04em]"
              style={{ fontSize: "clamp(26px, 3.8vw, 52px)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              なぜ私たちは、地域に<br />
              挑戦と共創が循環する<br />
              <span className="text-green">仕組みを創るのか。</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
            className="mt-10 md:mt-0"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-4 font-black text-[14px] tracking-[0.1em] uppercase text-navy hover:text-green transition-colors"
            >
              <span>Our Story</span>
              <motion.span
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Link>
            <p className="mt-3 text-[12px] text-ink/30 tracking-[0.04em]">創業の原点・MVV・地域観</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
