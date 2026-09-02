import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/ui/Nav";

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

const categories = [
  "DX支援・業務自動化",
  "BPO・業務代行",
  "地域プロデュース",
  "採用・複業・パートナー参加",
  "その他",
];

const inputClass =
  "w-full bg-transparent border-b border-charcoal/20 px-1 py-3 text-[16px] text-charcoal outline-none focus:border-green transition-colors";

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
                {/*
                  TODO: フォーム送信先を設定してください。
                  静的サイト（output: export）のため、送信にはFormspree等の外部エンドポイントが必要です。
                  下の action="" に発行したエンドポイント（例: https://formspree.io/f/xxxxxxx）を設定します。
                  未設定の間は送信されません。
                */}
                <form action="" method="POST" className="grid grid-cols-1 gap-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <label htmlFor="name" className="block text-[12px] font-bold tracking-[0.14em] text-charcoal/55 mb-3">
                        お名前<span className="ml-1">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text" required placeholder="山田 太郎"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-[12px] font-bold tracking-[0.14em] text-charcoal/55 mb-3">
                        会社名・屋号
                      </label>
                      <input
                        id="company" name="company" type="text" placeholder="株式会社◯◯"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <label htmlFor="email" className="block text-[12px] font-bold tracking-[0.14em] text-charcoal/55 mb-3">
                        メールアドレス<span className="ml-1">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" required placeholder="example@company.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-[12px] font-bold tracking-[0.14em] text-charcoal/55 mb-3">
                        ご相談の種類<span className="ml-1">*</span>
                      </label>
                      <select
                        id="category" name="category" required defaultValue=""
                        className={`${inputClass} bg-transparent`}
                      >
                        <option value="" disabled>選択してください</option>
                        {categories.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[12px] font-bold tracking-[0.14em] text-charcoal/55 mb-3">
                      ご相談内容<span className="ml-1">*</span>
                    </label>
                    <textarea
                      id="message" name="message" required rows={6} placeholder="お困りごとや、やってみたいことを、わかる範囲でお書きください。"
                      className={`${inputClass} resize-y leading-[2]`}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
                    <button
                      type="submit"
                      className="btn btn-ghost-navy px-10 py-4"
                    >
                      この内容で送信する →
                    </button>
                    <p className="text-[13px] leading-[1.9] text-muted">
                      お急ぎの方はメールでも受け付けています：<br className="hidden sm:block" />
                      <a href="mailto:branding@momentsshare.com" className="text-navy-ink border-b border-navy-ink/40 pb-0.5 font-bold hover:text-green hover:border-green transition-colors">branding@momentsshare.com</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
