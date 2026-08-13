"use client";
import { motion, useScroll, useTransform, useMotionTemplate, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/group", label: "会社概要" },
  { href: "/mvv", label: "MVV" },
  { href: "/#services", label: "事業" },
  { href: "/projects", label: "240 Projects" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0)", "rgba(255,255,255,0.97)"]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.08]);
  const logoOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const heroTextOpacity = useTransform(scrollY, [0, 80], [1, 0]);
  const scrolledTextOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const hamburgerColor = useTransform(scrollY, [0, 80], ["#ffffff", "#0d1020"]);
  const borderBottom = useMotionTemplate`1px solid rgba(0,0,0,${borderOpacity})`;

  const [mobileOpen, setMobileOpen] = useState(false);

  // スクロールロック
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-4 flex items-center justify-between backdrop-blur-sm"
        style={{ backgroundColor: bg, borderBottom }}
      >
        <Link href="/" className="relative flex items-center h-9 w-[180px]">
          <motion.div style={{ opacity: logoOpacity }} className="absolute left-0">
            <Image src="/logo/logo-1.png" alt="Moments Share" width={180} height={44} className="h-9 w-auto" />
          </motion.div>
          <motion.span
            style={{ opacity: heroTextOpacity }}
            className="absolute left-0 text-[15px] font-black tracking-[0.05em] text-white whitespace-nowrap"
          >
            Moments <span className="text-green">Share</span>
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="relative group">
              <motion.span aria-hidden="true" style={{ opacity: heroTextOpacity }} className="absolute inset-0 flex items-center text-white/70 hover:text-white transition-colors">{label}</motion.span>
              <motion.span style={{ opacity: scrolledTextOpacity }} className="text-ink/60 hover:text-navy transition-colors">{label}</motion.span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="text-[13px] font-bold text-white bg-green px-6 py-2.5 rounded-full hover:bg-[#00a868] transition-colors"
          >
            お問い合わせ
          </Link>
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <motion.span
              className="w-5 h-0.5 block rounded-full"
              style={{ backgroundColor: mobileOpen ? "#0d1020" : hamburgerColor }}
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-5 h-0.5 block rounded-full"
              style={{ backgroundColor: mobileOpen ? "#0d1020" : hamburgerColor }}
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-5 h-0.5 block rounded-full"
              style={{ backgroundColor: mobileOpen ? "#0d1020" : hamburgerColor }}
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="ナビゲーションメニュー"
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-8 pb-12 md:hidden overflow-y-auto"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[24px] font-black text-ink/80 hover:text-navy py-4 border-b border-black/[0.06] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <Link
              href="/#contact"
              className="mt-10 text-center text-[15px] font-bold text-white bg-green px-8 py-4 rounded-full hover:bg-[#00a868] transition-colors"
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
