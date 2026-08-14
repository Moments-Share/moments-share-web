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
      <Nav />
      <main id="main-content">
        {/* ===== HERO — 大きな見出し。左に問いかけ＋写真、右にフォーム（非対称） ===== */}
        <section className="pt-28 md:pt-32 pb-20 md:pb-28 px-6 md:px-10">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* 左：問いかけ＋現場写真 */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <div className="flex items-center gap-3 text-terra text-[12px] font-bold tracking-[0.2em]">
                  <span className="w-8 h-px bg-terra" />
                  CONTACT
                </div>
                <h1 className="mt-8 text-green font-black leading-[1.12] tracking-[-0.03em]"
                    style={{ fontSize: "clamp(40px, 5.5vw, 76px)" }}>
                  まず、話して<br />みませんか。
                </h1>
                <p className="mt-8 max-w-md text-[16px] md:text-[17px] leading-[2] text-charcoal/80">
                  AIを使いたい。人が足りない。地域で何か始めたい。<br />
                  まだ課題が整理できていなくても大丈夫です。
                </p>
                <div className="relative aspect-[4/3] w-full mt-10 hidden lg:block">
                  <Image src="/photos/hero.png" alt="西尾のまちの風景" fill sizes="40vw" className="object-cover" />
                </div>
              </div>

              {/* 右：フォーム — 重いカードをやめ、下線インプットの編集スタイル */}
              <div className="lg:col-span-7">
                {/*
                  TODO: フォーム送信先を設定してください。
                  静的サイト（output: export）のため、送信にはFormspree等の外部エンドポイントが必要です。
                  下の action="" に発行したエンドポイント（例: https://formspree.io/f/xxxxxxx）を設定します。
                  未設定の間は送信されません。
                */}
                <form action="" method="POST" className="grid grid-cols-1 gap-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <label htmlFor="name" className="block text-[12px] font-bold tracking-[0.14em] text-terra mb-3">
                        お名前<span className="ml-1">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text" required placeholder="山田 太郎"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-[12px] font-bold tracking-[0.14em] text-terra mb-3">
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
                      <label htmlFor="email" className="block text-[12px] font-bold tracking-[0.14em] text-terra mb-3">
                        メールアドレス<span className="ml-1">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" required placeholder="example@company.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-[12px] font-bold tracking-[0.14em] text-terra mb-3">
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
                    <label htmlFor="message" className="block text-[12px] font-bold tracking-[0.14em] text-terra mb-3">
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
                      className="bg-green text-white font-bold px-10 py-4 rounded-full hover:opacity-90 transition-opacity"
                    >
                      この内容で送信する →
                    </button>
                    <p className="text-[13px] leading-[1.9] text-muted">
                      お急ぎの方はメールでも受け付けています：<br className="hidden sm:block" />
                      <a href="mailto:branding@momentsshare.com" className="text-green border-b-2 border-green pb-0.5 font-bold hover:text-terra hover:border-terra transition-colors">branding@momentsshare.com</a>
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
