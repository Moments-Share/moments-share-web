import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { newsItems } from "@/data/news";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ニュース | Moments Share合同会社",
  description: "Moments Share合同会社のお知らせ・プロジェクト情報・サービスリリース情報。",
  openGraph: {
    title: "ニュース | Moments Share合同会社",
    description: "Moments Share合同会社のお知らせ・プロジェクト・サービス情報。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function NewsPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-28 md:pt-36 pb-section bg-warm min-h-screen">
        <div className="max-w-[900px] mx-auto px-8 md:px-20">

          <p className="text-[12px] font-bold tracking-[0.2em] text-terra mb-8">NEWS</p>
          <h1
            className="font-black text-navy leading-[1.1] tracking-[-0.04em] mb-16 md:mb-24"
            style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
          >
            ニュース
          </h1>

          <div>
            {newsItems.map((item) => (
              <div
                key={item.slug}
                className="border-t border-black/[0.06] last:border-b"
              >
                <div className="py-6 md:py-8 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-10">
                  <time className="text-[12px] font-bold tracking-[0.08em] text-ink/28 shrink-0 pt-[2px]">
                    {item.date.replace(/-/g, ".")}
                  </time>
                  <div className="flex flex-col gap-1">
                    {item.category && (
                      <span className="text-[10px] font-bold tracking-[0.14em] text-green/70 uppercase">
                        {item.category}
                      </span>
                    )}
                    <p className="text-[16px] text-ink/75 leading-[1.65] font-medium">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              href="/"
              className="text-[12px] font-bold tracking-[0.08em] text-ink/35 hover:text-navy transition-colors"
            >
              ← ホームへ戻る
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
