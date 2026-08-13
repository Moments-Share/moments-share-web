"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
  title: string;
  titleSize?: string;
  children: React.ReactNode;
  light?: boolean;
  initialOpen?: boolean;
}

export function AboutAccordionItem({
  title,
  titleSize = "clamp(22px, 2.8vw, 38px)",
  children,
  light = false,
  initialOpen = false,
}: Props) {
  const [open, setOpen] = useState(initialOpen);

  const textColor = light ? "text-navy" : "text-white";
  const borderColor = light ? "border-black/[0.07]" : "border-white/[0.07]";
  const btnColor = light ? "text-ink/30 hover:text-ink/60" : "text-white/25 hover:text-white/55";

  return (
    <div className={`border-t ${borderColor}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between py-10 md:py-12 text-left group"
        aria-expanded={open}
      >
        <span
          className={`font-black ${textColor} leading-[1.2] tracking-[-0.03em] pr-10`}
          style={{ fontSize: titleSize }}
        >
          {title}
        </span>
        <motion.span
          className={`text-[22px] shrink-0 mt-1 transition-colors ${btnColor}`}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-12 md:pb-14">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
