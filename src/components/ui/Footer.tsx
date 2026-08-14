import Link from "next/link";

const businessLinks = [
  { href: "/service-dx", label: "DX支援" },
  { href: "/service-bpo", label: "BPO" },
  { href: "/service-produce", label: "地域プロデュース" },
  { href: "/works", label: "Works（実績）" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/people", label: "People" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "お問い合わせ" },
];

const snsLinks = [
  { href: "https://x.com/momentsshare_", label: "X" },
  { href: "https://instagram.com/momentsshare", label: "Instagram" },
  { href: "https://note.com/momentsshare", label: "note" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-8 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="text-[20px] font-black tracking-[0.04em]">
              Moments <span className="text-teal">Share</span>
            </div>
            <p className="mt-5 text-[15px] font-bold leading-heading text-white/90">
              地域に、挑戦と共創の循環を。
            </p>
            <dl className="mt-6 space-y-1.5 text-[13px] text-white/60 leading-relaxed">
              <div className="flex gap-3"><dt className="w-16 shrink-0 text-white/40">正式名称</dt><dd>Moments Share合同会社</dd></div>
              <div className="flex gap-3"><dt className="w-16 shrink-0 text-white/40">所在地</dt><dd>愛知県西尾市</dd></div>
              <div className="flex gap-3"><dt className="w-16 shrink-0 text-white/40">設立</dt><dd>2025年</dd></div>
              <div className="flex gap-3"><dt className="w-16 shrink-0 text-white/40">事業</dt><dd>DX支援・BPO・地域プロデュース</dd></div>
              <div className="flex gap-3"><dt className="w-16 shrink-0 text-white/40">Email</dt><dd><a className="hover:text-teal transition-colors" href="mailto:branding@momentsshare.com">branding@momentsshare.com</a></dd></div>
            </dl>
          </div>

          {/* Business */}
          <nav aria-label="Business">
            <div className="text-[11px] font-bold tracking-widest-label text-teal">BUSINESS</div>
            <ul className="mt-5 space-y-3 text-[14px] text-white/70">
              {businessLinks.map(({ href, label }) => (
                <li key={href}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <div className="text-[11px] font-bold tracking-widest-label text-teal">COMPANY</div>
            <ul className="mt-5 space-y-3 text-[14px] text-white/70">
              {companyLinks.map(({ href, label }) => (
                <li key={href}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[12px] text-white/50">© 2025 Moments Share合同会社. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[13px] text-white/60">
            {snsLinks.map(({ href, label }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors">{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
