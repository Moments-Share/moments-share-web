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

const businessLinks = [
  { href: "/service-dx", label: "DX" },
  { href: "/service-bpo", label: "BPO" },
  { href: "/service-produce", label: "地域プロデュース" },
];

export function Nav({ heroTone = "light" }: { heroTone?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  // 最上部では透過してヒーローに溶け込み、スクロールで明るいクローム(ivory地)が実体化する。
  // ページごとのヒーロー明暗(heroTone)で透過時の文字色を出し分ける。

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); // 初期状態(リロード時スクロール済み等)を反映
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 透過かつ暗いヒーロー上のときだけ文字を白にする。それ以外は常にネイビー。
  const whiteText = !scrolled && heroTone === "dark";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-200 ${
          scrolled
            ? "bg-ivory/90 backdrop-blur border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* 暗いヒーロー透過時の可読性スクリム(上方向の極薄い黒grad)。実体化・明ヒーローでは非表示 */}
        {whiteText && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/25 to-transparent"
          />
        )}
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="relative block h-12 w-12 shrink-0 -my-2">
              <Image src="/logo/logo-3.png" alt="Moments Share ロゴ" fill sizes="48px" className="object-contain" priority />
            </span>
            <span className={`text-[17px] font-black tracking-[0.03em] transition-colors duration-200 ${whiteText ? "text-white" : "text-navy-ink"}`}>
              Moments Share
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-9 text-[13px] font-bold">
            {navLinks.map(({ href, label }) =>
              href === "/#business" ? (
                <div
                  key={href}
                  className="relative"
                  onMouseEnter={() => setBusinessOpen(true)}
                  onMouseLeave={() => setBusinessOpen(false)}
                  onFocus={() => setBusinessOpen(true)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setBusinessOpen(false);
                    }
                  }}
                >
                  <Link
                    href={href}
                    className={`transition-colors ${whiteText ? "text-white/85 hover:text-white" : "text-navy-ink/80 hover:text-terra-ink"}`}
                    aria-haspopup="true"
                    aria-expanded={businessOpen}
                  >
                    {label}
                  </Link>
                  <AnimatePresence>
                    {businessOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                      >
                        <div className="min-w-[176px] rounded-xl border border-border bg-ivory py-2 shadow-lg">
                          {businessLinks.map((b) => (
                            <Link
                              key={b.href}
                              href={b.href}
                              className="block px-4 py-2.5 text-[13px] font-bold text-navy-ink/80 transition-colors hover:text-terra-ink"
                            >
                              {b.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className={`transition-colors ${whiteText ? "text-white/85 hover:text-white" : "text-navy-ink/80 hover:text-terra-ink"}`}
                >
                  {label}
                </Link>
              )
            )}
          </nav>
          <Link
            href="/contact"
            className={`hidden md:inline-flex btn text-[13px] px-5 py-2.5 ${whiteText ? "btn-ghost-on-dark" : "btn-ghost-navy"}`}
          >
            お問い合わせ
          </Link>

          {/* Mobile: MENU only */}
          <button
            className={`md:hidden text-[13px] font-black tracking-[0.16em] transition-colors duration-200 ${whiteText ? "text-white" : "text-navy-ink"}`}
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
            <div className="h-16 px-6 flex items-center justify-between bg-ivory border-b border-border shrink-0">
              <span className="flex items-center gap-2">
                <span className="relative block h-9 w-9 shrink-0">
                  <Image src="/logo/logo-3.png" alt="Moments Share ロゴ" fill sizes="36px" className="object-contain" />
                </span>
                <span className="text-[17px] font-black tracking-[0.03em] text-navy-ink">
                  Moments Share
                </span>
              </span>
              <button
                className="text-[13px] font-black tracking-[0.16em] text-navy-ink"
                onClick={() => setOpen(false)}
                aria-label="メニューを閉じる"
              >
                CLOSE
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-center">
              {navLinks.map(({ href, label, en }) =>
                href === "/#business" ? (
                  <div key={href} className="border-b border-charcoal/10">
                    <Link
                      href={href}
                      className="group flex items-baseline gap-4 py-4"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-charcoal font-semibold tracking-[-0.02em]" style={{ fontSize: "clamp(26px, 7vw, 38px)" }}>{label}</span>
                      <span className="text-charcoal/40 text-[12px] font-bold ml-auto self-center">{en}</span>
                    </Link>
                    <div className="flex flex-col pb-4 pl-2">
                      {businessLinks.map((b) => (
                        <Link
                          key={b.href}
                          href={b.href}
                          className="py-2 pl-4 text-[15px] font-bold text-navy-ink/70 transition-colors hover:text-terra-ink"
                          onClick={() => setOpen(false)}
                        >
                          {b.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={href}
                    href={href}
                    className="group flex items-baseline gap-4 py-4 border-b border-charcoal/10"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-charcoal font-semibold tracking-[-0.02em]" style={{ fontSize: "clamp(26px, 7vw, 38px)" }}>{label}</span>
                    <span className="text-charcoal/40 text-[12px] font-bold ml-auto self-center">{en}</span>
                  </Link>
                )
              )}
            </nav>

            <div className="px-6 pb-10 shrink-0">
              <Link
                href="/contact"
                className="btn w-full btn-ghost-navy text-[15px] px-8 py-4"
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
