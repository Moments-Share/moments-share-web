"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/#business", label: "Business" },
  { href: "/works", label: "Works" },
  { href: "/people", label: "People" },
  { href: "/news", label: "News" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/85 backdrop-blur-md border-b border-charcoal/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="text-[17px] font-black tracking-[0.02em] text-charcoal">
            Moments <span className="text-green">Share</span>
          </Link>

          <nav className="hidden md:flex items-center gap-9 text-[13px] font-bold">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-charcoal/70 hover:text-green transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-block text-[13px] font-bold text-white bg-green px-5 py-2.5 rounded-full hover:bg-[#2c4a3c] transition-colors"
            >
              お問い合わせ
            </Link>
            <button
              className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <span className="w-6 h-[2px] bg-charcoal block" />
              <span className="w-6 h-[2px] bg-charcoal block" />
              <span className="w-6 h-[2px] bg-charcoal block" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="ナビゲーションメニュー"
            className="fixed inset-0 z-40 bg-ivory flex flex-col pt-24 px-8 pb-12 md:hidden overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[28px] font-black text-charcoal py-4 border-b border-charcoal/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="mt-10 text-center text-[15px] font-bold text-white bg-green px-8 py-4 rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              お問い合わせ
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
