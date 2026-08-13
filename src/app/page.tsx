import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/sections/Hero";
import { Crisis } from "@/components/sections/Crisis";
import { BusinessSection } from "@/components/sections/BusinessSection";
import { SocialImpact } from "@/components/sections/SocialImpact";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { SwitchSection } from "@/components/sections/SwitchSection";
import { AudienceCTA } from "@/components/sections/AudienceCTA";
import { AboutBridge } from "@/components/sections/AboutBridge";
import { NewsSection } from "@/components/sections/NewsSection";
import { Founder } from "@/components/sections/Founder";
import { CTA } from "@/components/sections/CTA";
import { Results } from "@/components/sections/Results";
import { Issue } from "@/components/sections/Issue";
import { Solution } from "@/components/sections/Solution";
import { Stance } from "@/components/sections/Stance";
import { WhyNishio } from "@/components/sections/WhyNishio";
import { Philosophy } from "@/components/sections/Philosophy";

export const metadata: Metadata = {
  title: "Moments Share合同会社 — 人が減っても、地域はもっと豊かになれる。",
  description: "西尾の企業の面倒な仕事をITでなくし、浮いた仕事を地域で働きたい人につなぐ会社です。DX・BPO・地域プロデュースの3事業。愛知県西尾市発。",
  openGraph: {
    title: "Moments Share合同会社 — 人が減っても、地域はもっと豊かになれる。",
    description: "企業の繰り返し作業をITでなくし、空いた仕事を地域の人へ。愛知県西尾市から、地域の未来をつくります。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <SwitchSection />
        <Issue />
        <Solution />
        <Crisis />
        <BusinessSection />
        <SocialImpact />
        <ImpactStats />
        <AboutBridge />
        <Philosophy />
        <Founder />
        <WhyNishio />
        <Results />
        <Stance />
        <AudienceCTA />
        <NewsSection />
        <CTA />
      </main>
    </>
  );
}
