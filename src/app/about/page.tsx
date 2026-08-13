import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutPurpose } from "@/components/sections/about/AboutPurpose";
import { AboutWhyUs } from "@/components/sections/about/AboutWhyUs";
import { AboutMissionVision } from "@/components/sections/about/AboutMissionVision";
import { AboutHowWeThink } from "@/components/sections/about/AboutHowWeThink";
import { AboutHowWeAct } from "@/components/sections/about/AboutHowWeAct";
import { AboutTeam } from "@/components/sections/about/AboutTeam";
import { AboutCTA } from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "About | Moments Share合同会社",
  description: "なぜ、Moments Shareは存在するのか。地域が自ら課題を解決し続けられる仕組みをデザインする会社の思想書。愛知県西尾市発。",
  openGraph: {
    title: "About | Moments Share合同会社",
    description: "地域課題を解決する会社ではない。地域が、自ら課題を解決し続けられる仕組みをデザインする会社。愛知県西尾市発。",
    locale: "ja_JP",
    type: "website",
    url: "https://momentsshare.com/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Moments Share合同会社",
    description: "地域が自ら課題を解決し続けられる仕組みをデザインする会社。愛知県西尾市発。",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About | Moments Share合同会社",
  "description": "なぜ、Moments Shareは存在するのか。地域が自ら課題を解決し続けられる仕組みをデザインする会社の思想書。",
  "url": "https://momentsshare.com/about",
  "publisher": {
    "@type": "Organization",
    "@id": "https://momentsshare.com/#organization",
    "name": "Moments Share合同会社",
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://momentsshare.com/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://momentsshare.com/about" },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content">
        <AboutHero />
        <AboutPurpose />
        <AboutWhyUs />
        <AboutMissionVision />
        <AboutHowWeThink />
        <AboutHowWeAct />
        <AboutTeam />
        <AboutCTA />
      </main>
    </>
  );
}
