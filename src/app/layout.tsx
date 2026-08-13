import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://momentsshare.com"),
  title: "Moments Share合同会社 — 地域愛を地域発展の力に。",
  description:
    "愛知県西尾市発。DX×BPO×地域プロデュースで、やらなくていい仕事をなくし、地域に挑戦と共創の循環を生み出す会社です。",
  openGraph: {
    title: "Moments Share合同会社 — 地域愛を地域発展の力に。",
    description:
      "愛知県西尾市発。DX・BPO・地域プロデュースで、地域に挑戦と共創の循環を生み出す会社です。",
    locale: "ja_JP",
    type: "website",
    url: "https://momentsshare.com",
    siteName: "Moments Share合同会社",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moments Share合同会社 — 地域愛を地域発展の力に。",
    description: "愛知県西尾市発。DX・BPO・地域プロデュースで、地域に挑戦と共創の循環を。",
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://momentsshare.com/#organization",
      "name": "Moments Share合同会社",
      "alternateName": "Moments Share",
      "url": "https://momentsshare.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://momentsshare.com/og-image.png",
      },
      "description": "愛知県西尾市発。DX支援・地域プロデュース・BPOの3事業で、地域の持続性を支えます。挑戦と共創が循環する仕組みをつくる会社。",
      "foundingDate": "2025",
      "email": "contact@momentsshare.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "西尾市",
        "addressRegion": "愛知県",
        "addressCountry": "JP",
      },
      "sameAs": [
        "https://x.com/momentsshare_",
        "https://instagram.com/momentsshare",
        "https://note.com/momentsshare",
      ],
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "愛知県西尾市",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://momentsshare.com/#website",
      "url": "https://momentsshare.com/",
      "name": "Moments Share — 地域愛を地域発展の力に。",
      "publisher": {
        "@id": "https://momentsshare.com/#organization",
      },
      "inLanguage": "ja-JP",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${notoSansJP.className} min-h-full antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#0a088e] focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-bold focus:shadow-lg"
        >
          メインコンテンツへスキップ
        </a>
        {children}
      </body>
    </html>
  );
}
