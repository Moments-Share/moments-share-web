import type { Metadata } from "next";
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

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* HERO */}
        <section className="pt-40 pb-14 px-8 md:px-12 bg-warm">
          <div className="mx-auto max-w-3xl">
            <div className="text-[11px] font-bold tracking-widest-label text-teal">CONTACT</div>
            <h1 className="mt-5 text-[34px] md:text-[52px] font-black tracking-heading leading-heading text-navy">
              まず、話してみませんか。
            </h1>
            <p className="mt-6 text-[16px] md:text-[18px] leading-body text-muted">
              AIを使いたい。人が足りない。地域で何か始めたい。<br />
              まだ課題が整理できていなくても大丈夫です。
            </p>
          </div>
        </section>

        {/* FORM */}
        <section className="py-16 px-8 md:px-12">
          <div className="mx-auto max-w-3xl">
            {/*
              TODO: フォーム送信先を設定してください。
              静的サイト（output: export）のため、送信にはFormspree等の外部エンドポイントが必要です。
              下の action="" に発行したエンドポイント（例: https://formspree.io/f/xxxxxxx）を設定します。
              未設定の間は送信されません。
            */}
            <form
              action=""
              method="POST"
              className="bg-white rounded-2xl border border-border p-8 md:p-10 grid grid-cols-1 gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[13px] font-bold text-navy mb-2">
                    お名前<span className="text-coral ml-1">*</span>
                  </label>
                  <input
                    id="name" name="name" type="text" required placeholder="山田 太郎"
                    className="w-full rounded-lg border border-border px-4 py-3 text-[15px] text-ink outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-[13px] font-bold text-navy mb-2">
                    会社名・屋号
                  </label>
                  <input
                    id="company" name="company" type="text" placeholder="株式会社◯◯"
                    className="w-full rounded-lg border border-border px-4 py-3 text-[15px] text-ink outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-[13px] font-bold text-navy mb-2">
                    メールアドレス<span className="text-coral ml-1">*</span>
                  </label>
                  <input
                    id="email" name="email" type="email" required placeholder="example@company.com"
                    className="w-full rounded-lg border border-border px-4 py-3 text-[15px] text-ink outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-[13px] font-bold text-navy mb-2">
                    ご相談の種類<span className="text-coral ml-1">*</span>
                  </label>
                  <select
                    id="category" name="category" required defaultValue=""
                    className="w-full rounded-lg border border-border px-4 py-3 text-[15px] text-ink bg-white outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                  >
                    <option value="" disabled>選択してください</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[13px] font-bold text-navy mb-2">
                  ご相談内容<span className="text-coral ml-1">*</span>
                </label>
                <textarea
                  id="message" name="message" required rows={6} placeholder="お困りごとや、やってみたいことを、わかる範囲でお書きください。"
                  className="w-full rounded-lg border border-border px-4 py-3 text-[15px] text-ink outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors resize-y"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="bg-teal text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
                >
                  この内容で送信する →
                </button>
                <p className="text-[13px] text-muted">
                  お急ぎの方はメールでも受け付けています：
                  <a href="mailto:branding@momentsshare.com" className="text-teal font-bold hover:underline ml-1">branding@momentsshare.com</a>
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
