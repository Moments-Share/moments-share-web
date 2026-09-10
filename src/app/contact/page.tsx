import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/ui/Nav";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ | Moments Share合同会社",
  description:
    "AIを使いたい。人が足りない。地域で何か始めたい。まだ課題が整理できていなくても大丈夫です。Moments Shareへのご相談・お問い合わせはこちらから。",
  openGraph: {
    title: "お問い合わせ | Moments Share合同会社",
    description: "DX・BPO・地域プロデュースのご相談。まずは30分、話してみませんか。",
    type: "website",
    url: "https://moments-share.com/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <>
      <Nav heroTone="dark" />
      <main id="main-content">
        {/* ===== HERO — 写真背景ヒーロー（TOPと同じトーン） ===== */}
        <section className="relative min-h-[58vh] md:min-h-[66vh] overflow-hidden bg-[#16281f]">
          <div className="absolute inset-0">
            <Image
              src="/photos/hero-nishio.jpg"
              alt="西尾市の川辺の風景"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, rgba(16,32,42,0.82) 0%, rgba(16,32,42,0.58) 40%, rgba(16,32,42,0.18) 72%, rgba(16,32,42,0) 100%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, rgba(16,32,42,0) 30%, rgba(16,32,42,0.35) 65%, rgba(16,32,42,0.75) 100%)" }}
            />
          </div>
          <div className="relative z-10 min-h-[58vh] md:min-h-[66vh] flex flex-col justify-end max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-14 md:pb-20 pt-32">
            <div className="text-[13px] font-bold tracking-[0.14em] text-white/70">お問い合わせ</div>
            <h1 className="mt-5 text-white font-semibold leading-[1.16] tracking-[-0.02em]"
                style={{ fontSize: "clamp(34px, 4.8vw, 64px)" }}>
              ご相談はこちらから
            </h1>
            <p className="mt-8 max-w-md text-[16px] md:text-[17px] leading-[2] text-white/80">
              AIを使いたい。人が足りない。地域で何か始めたい。<br />
              まだ課題が整理できていなくても大丈夫です。
            </p>
          </div>
        </section>

        {/* ===== フォーム — 本文セクション（レイアウト・コピー維持） ===== */}
        <section className="pt-16 md:pt-20 pb-20 md:pb-28 px-6 md:px-10">
          <div className="mx-auto max-w-[1400px]">
            <div className="lg:grid lg:grid-cols-12">
              {/* フォーム — 重いカードをやめ、下線インプットの編集スタイル */}
              <div className="lg:col-span-7 lg:col-start-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
