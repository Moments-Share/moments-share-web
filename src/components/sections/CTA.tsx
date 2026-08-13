import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import Image from "next/image";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy">

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-20 py-section">

        <div className="max-w-[800px] mb-24">
          <FadeIn>
            <p className="text-[10px] font-black tracking-[0.28em] uppercase text-green mb-10">CONTACT</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="font-black text-white leading-[1.1] tracking-[-0.04em] mb-10"
              style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}
            >
              まず、<br />
              <span className="text-green">30分だけ話しませんか。</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[16px] md:text-[17px] text-white/50 leading-[2.0] max-w-[52ch]">
              「何から始めればいいかわからない」。それが、最初の一歩です。<br />
              ヒアリングは無料です。まず、話してみてください。
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="mailto:branding@momentsshare.com"
              className="inline-flex items-center justify-center gap-3 bg-green text-white font-bold text-[14px] tracking-[0.04em] px-10 py-4 rounded-full hover:bg-[#0f8f9c] transition-colors"
            >
              メールで相談する →
            </Link>
          </div>
          <p className="text-[12px] text-white/50 tracking-[0.04em]">
            お問い合わせから24時間以内にご返信します
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-28 pt-12 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-start gap-10 text-[13px] text-white/45">
            <div>
              <Image src="/logo/logo-1.png" alt="Moments Share" width={180} height={44} className="h-8 w-auto mb-4 opacity-60" />
              <p className="text-white/50 font-semibold mb-1.5">Moments Share合同会社</p>
              <p>愛知県西尾市</p>
              <p>branding@momentsshare.com</p>
              <p className="mt-1">設立: 2025年11月14日</p>
            </div>
            <nav className="flex flex-col gap-2.5">
              <Link href="/service-dx"      className="hover:text-white/55 transition-colors">DX支援 — Core Shift</Link>
              <Link href="/service-bpo"     className="hover:text-white/55 transition-colors">BPO</Link>
              <Link href="/service-produce" className="hover:text-white/55 transition-colors">地域プロデュース</Link>
              <Link href="/about"            className="hover:text-white/55 transition-colors mt-2 pt-2 border-t border-white/[0.08]">About — ブランドブック</Link>
              <Link href="/mvv"             className="hover:text-white/55 transition-colors">Mission / Vision / Values</Link>
            </nav>
          </div>
          <p className="text-[11px] text-white/40 mt-8 tracking-[0.04em]">
            © 2025–2026 Moments Share合同会社. All rights reserved.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
