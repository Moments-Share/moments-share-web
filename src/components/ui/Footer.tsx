import Link from "next/link";
import Image from "next/image";

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
  // フッターは全ページ共通で明るいクローム(ivory地)。ロゴ(白背景前提)の舞台に合わせ、文字はネイビー/charcoal。
  return (
    <footer className="bg-ivory text-charcoal border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative block h-11 w-11 shrink-0">
                <Image src="/logo/logo-3.png" alt="Moments Share ロゴ" fill sizes="44px" className="object-contain" />
              </span>
              <span className="text-[20px] font-black tracking-[0.03em] text-navy-ink">
                Moments Share
              </span>
            </div>
            <p className="mt-5 text-[15px] font-bold leading-heading text-navy-ink">
              地域に、挑戦と共創の循環を。
            </p>
            <dl className="mt-6 space-y-1.5 text-[13px] text-charcoal/70 leading-relaxed">
              <div className="flex gap-3"><dt className="w-16 shrink-0 text-charcoal/50">正式名称</dt><dd>Moments Share合同会社</dd></div>
              <div className="flex gap-3"><dt className="w-16 shrink-0 text-charcoal/50">所在地</dt><dd>愛知県西尾市</dd></div>
              <div className="flex gap-3"><dt className="w-16 shrink-0 text-charcoal/50">設立</dt><dd>2025年</dd></div>
              <div className="flex gap-3"><dt className="w-16 shrink-0 text-charcoal/50">事業</dt><dd>DX支援・BPO・地域プロデュース</dd></div>
              <div className="flex gap-3"><dt className="w-16 shrink-0 text-charcoal/50">Email</dt><dd><a className="text-navy-ink font-bold underline underline-offset-2 hover:text-green transition-colors" href="mailto:branding@momentsshare.com">branding@momentsshare.com</a></dd></div>
            </dl>
          </div>

          {/* Business */}
          <nav aria-label="Business">
            <div className="text-[11px] font-bold tracking-widest-label text-navy-ink">BUSINESS</div>
            <ul className="mt-5 space-y-3 text-[14px] text-charcoal/80">
              {businessLinks.map(({ href, label }) => (
                <li key={href}><Link href={href} className="hover:text-green transition-colors">{label}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <div className="text-[11px] font-bold tracking-widest-label text-navy-ink">COMPANY</div>
            <ul className="mt-5 space-y-3 text-[14px] text-charcoal/80">
              {companyLinks.map(({ href, label }) => (
                <li key={href}><Link href={href} className="hover:text-green transition-colors">{label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[12px] text-charcoal/70">© 2025 Moments Share合同会社. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[13px] text-charcoal/80">
            {snsLinks.map(({ href, label }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors">{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
