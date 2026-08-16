"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/about", label: "About", en: "私たちについて" },
  { href: "/#business", label: "Business", en: "3つの事業" },
  { href: "/works", label: "Works", en: "実績" },
  { href: "/people", label: "People", en: "関わる人たち" },
  { href: "/news", label: "News", en: "お知らせ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#183048] border-b border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="relative block h-12 w-12 shrink-0 -my-2">
              <Image src="/logo/logo-3.png" alt="Moments Share ロゴ" fill sizes="48px" className="object-contain" priority />
            </span>
            <span className="text-[17px] font-black tracking-[0.03em] text-white">
              Moments Share
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-9 text-[13px] font-bold">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-white/70 hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="hidden md:inline-block text-[13px] font-bold text-white bg-terra px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            お問い合わせ
          </Link>

          {/* Mobile: MENU only */}
          <button
            className="md:hidden text-[13px] font-black tracking-[0.16em] text-white"
            onClick={() => setOpen(true)}
            aria-label="メニューを開く"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            MENU
          </button>
        </div>
      </header>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="ナビゲーションメニュー"
            className="fixed inset-0 z-[60] bg-ivory flex flex-col md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-16 px-6 flex items-center justify-between bg-[#183048] shrink-0">
              <span className="flex items-center gap-2">
                <span className="relative block h-9 w-9 shrink-0">
                  <Image src="/logo/logo-3.png" alt="Moments Share ロゴ" fill sizes="36px" className="object-contain" />
                </span>
                <span className="text-[17px] font-black tracking-[0.03em] text-white">
                  Moments Share
                </span>
              </span>
              <button
                className="text-[13px] font-black tracking-[0.16em] text-white"
                onClick={() => setOpen(false)}
                aria-label="メニューを閉じる"
              >
                CLOSE
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-center">
              {navLinks.map(({ href, label, en }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-baseline gap-4 py-4 border-b border-charcoal/10"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-green font-semibold tracking-[-0.02em]" style={{ fontSize: "clamp(26px, 7vw, 38px)" }}>{label}</span>
                  <span className="text-charcoal/40 text-[12px] font-bold ml-auto self-center">{en}</span>
                </Link>
              ))}
            </nav>

            <div className="px-6 pb-10 shrink-0">
              <Link
                href="/contact"
                className="block text-center text-[15px] font-bold text-white bg-green px-8 py-4 rounded-full"
                onClick={() => setOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
