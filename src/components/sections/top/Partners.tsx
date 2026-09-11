import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SitePhoto } from "@/components/ui/SitePhoto";
import { partners } from "@/lib/site-images";

/* ============================================================
   CO-CREATION PARTNERS — ともに挑戦している人たち。
   名前・役割・写真はいずれも site-images.ts の partners で管理。実在の方の情報に差し替える。
   ============================================================ */

export function Partners() {
  return (
    <section className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-bold tracking-[0.28em] text-charcoal/40">
                CO-CREATION PARTNERS
              </p>
              <h2
                className="mt-6 font-bold leading-[1.35] tracking-[-0.02em] text-charcoal"
                style={{ fontSize: "clamp(26px, 3.4vw, 44px)" }}
              >
                共創パートナー
              </h2>
            </div>

            <Link
              href="/people"
              className="border-b border-navy-ink/40 pb-0.5 text-[14px] font-bold text-navy-ink transition-colors hover:border-terra-ink hover:text-terra-ink"
            >
              関わる人たちを見る →
            </Link>
          </div>

          <p className="mt-6 max-w-[32em] text-[15px] leading-[2.1] text-charcoal/75 md:text-[16px]">
            いつもありがとうございます。
            <br />
            Moments Shareでは、ともに挑戦する仲間を募集しています。
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-16 md:grid-cols-4 md:gap-x-8">
            {partners.map((partner, i) => (
              <div key={`${partner.name}-${i}`}>
                <SitePhoto
                  image={partner.image}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="mt-4 text-[15px] font-bold tracking-[0.01em] text-charcoal/85 md:text-[16px]">
                  {partner.name}
                </div>
                <div className="mt-1 text-[12px] leading-[1.8] text-charcoal/55">{partner.role}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
