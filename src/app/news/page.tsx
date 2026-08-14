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
      <main id="main-content" className="pt-28 md:pt-36 pb-section bg-ivory min-h-screen">
        <div className="max-w-[1000px] mx-auto px-8 md:px-20">

          {/* ===== マストヘッド — ラベル＋大見出しを非対称に、件数は大きな数字で ===== */}
          <div className="flex items-end justify-between gap-8 border-b border-charcoal/10 pb-8 md:pb-10 mb-14 md:mb-20">
            <div>
              <p className="text-[12px] font-bold tracking-[0.2em] text-terra mb-6">NEWS</p>
              <h1
                className="font-black text-green leading-[1.05] tracking-[-0.04em]"
                style={{ fontSize: "clamp(40px, 6vw, 84px)" }}
              >
                ニュース
              </h1>
            </div>
            <div className="hidden sm:flex items-baseline gap-2 shrink-0 pb-1">
              <span
                className="text-terra font-black leading-none tracking-[-0.03em]"
                style={{ fontSize: "clamp(40px, 5vw, 68px)" }}
              >
                {newsItems.length}
              </span>
              <span className="text-[12px] font-bold tracking-[0.14em] text-charcoal/40">POSTS</span>
            </div>
          </div>

          <div>
            {newsItems.map((item) => (
              <div
                key={item.slug}
                className="border-t border-charcoal/10 last:border-b"
              >
                <div className="py-7 md:py-9 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-12">
                  <time className="text-[13px] font-bold tracking-[0.08em] text-terra shrink-0 pt-[3px]">
                    {item.date.replace(/-/g, ".")}
                  </time>
                  <div className="flex flex-col gap-2">
                    {item.category && (
                      <span className="text-[11px] font-bold tracking-[0.16em] text-charcoal/45 uppercase">
                        {item.category}
                      </span>
                    )}
                    <p className="text-[17px] md:text-[19px] text-charcoal/85 leading-[1.7] font-medium tracking-[-0.01em]">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              href="/"
              className="text-[12px] font-bold tracking-[0.08em] text-charcoal/40 hover:text-green transition-colors"
            >
              ← ホームへ戻る
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
