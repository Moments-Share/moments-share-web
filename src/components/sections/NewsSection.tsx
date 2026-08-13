"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { newsItems } from "@/data/news";

export function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const displayed = newsItems.slice(0, 3);

  return (
    <section className="bg-[#f7f5ef] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-8 md:px-20 py-20 md:py-28">

        <div ref={ref} className="flex items-end justify-between mb-12 md:mb-16">
          <motion.p
            className="text-[10px] font-bold tracking-[0.32em] uppercase text-ink/22"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9 }}
          >
            News
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/news"
              className="text-[12px] font-bold tracking-[0.08em] text-ink/35 hover:text-navy transition-colors"
            >
              すべて見る →
            </Link>
          </motion.div>
        </div>

        <div>
          {displayed.map((item, i) => (
            <motion.div
              key={item.slug}
              className="border-t border-black/[0.06] last:border-b"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.09 }}
            >
              <div className="py-5 md:py-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
                <time className="text-[11px] font-bold tracking-[0.08em] text-ink/28 shrink-0">
                  {item.date.replace(/-/g, ".")}
                </time>
                {item.category && (
                  <span className="text-[10px] font-bold tracking-[0.12em] text-green/70 uppercase shrink-0">
                    {item.category}
                  </span>
                )}
                <p className="text-[15px] text-ink/70 leading-[1.6] font-medium">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
