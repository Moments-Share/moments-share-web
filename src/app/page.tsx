import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/sections/Hero";
import { AboutIntro } from "@/components/sections/top/AboutIntro";
import { BusinessFlow } from "@/components/sections/top/BusinessFlow";
import { Kpi } from "@/components/sections/top/Kpi";
import { Partners } from "@/components/sections/top/Partners";
import { VisionNishio } from "@/components/sections/VisionNishio";
import { NewsPreview } from "@/components/sections/top/NewsPreview";

export const metadata: Metadata = {
  title: "Moments Share合同会社 — 地域に、挑戦と共創の循環を。",
  description:
    "DX・BPO・地域プロデュースを通じて、企業・人・地域の可能性をつなぐ会社。忙しさを余白へ、人手不足を多様な働き方へ、地域課題を挑戦のきっかけへ。愛知県西尾市発。",
  openGraph: {
    title: "Moments Share合同会社 — 地域に、挑戦と共創の循環を。",
    description:
      "DX・BPO・地域プロデュースを通じて、企業・人・地域の可能性をつなぐ会社。愛知県西尾市発。",
    locale: "ja_JP",
    type: "website",
    url: "https://moments-share.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

/* ============================================================
   TOP
   地域のスケール感（HERO / VISION の風景）と、人の温度（ABOUT / PARTNERS の人物）を
   交互に置き、そのあいだに企業向けの事業（BUSINESS / KPI）を挟む。
   DXは主力のため、BUSINESS内で最も大きく扱い、専用のCTAをDX事業ページへ向ける。
   ============================================================ */

export default function Home() {
  return (
    <>
      <Nav heroTone="dark" />

      <main id="main-content">
        {/* 地域に、挑戦と共創の循環を。 — 確定コピー・確定素材。変更しない */}
        <Hero />

        {/* 起点は、いつも一人の挑戦者だ。 */}
        <AboutIntro />

        {/* 3つの事業で、地域に循環をつくる。 — DXを主役に、循環は細い線で示す */}
        <BusinessFlow />

        {/* ひとつずつ、形に。 */}
        <Kpi />

        {/* 共創パートナー */}
        <Partners />

        {/* 西尾から、240の事業を。 */}
        <VisionNishio />

        {/* お知らせ — 直近3件 */}
        <NewsPreview />

        {/* ===== CONTACT — Deep Green のバンドで締める ===== */}
        <section id="contact" className="scroll-mt-16 bg-green-deep px-6 py-20 text-white md:px-10 md:py-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
              <h2
                className="font-bold leading-[1.2] tracking-[-0.01em] lg:col-span-8"
                style={{ fontSize: "clamp(32px, 5vw, 68px)" }}
              >
                ご相談はこちらから
              </h2>
              <div className="lg:col-span-4 lg:pb-3">
                <p className="text-[15px] leading-[2] text-white/75">
                  AIを使いたい。人が足りない。地域で何か始めたい。まだ課題が整理できていなくても大丈夫です。
                </p>
                <Link href="/contact" className="btn btn-ghost-on-green mt-6 px-9 py-4">
                  30分相談する →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
