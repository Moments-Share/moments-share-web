import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/ui/Nav";

export const metadata: Metadata = {
  title: "Works（実績）| Moments Share合同会社",
  description:
    "Moments Shareがカタチにしてきた仕事。企業のDX・業務改善から地域プロジェクトまで、お客様や仲間と一緒につくってきた実績をご紹介します。",
  openGraph: {
    title: "Works（実績）| Moments Share合同会社",
    description:
      "企業のDX・業務改善から地域プロジェクトまで。Moments Shareがつくってきた仕事の実績。",
    type: "website",
    url: "https://momentsshare.com/works",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const stats = [
  { n: "7", unit: "件", label: "DX・業務効率化支援" },
  { n: "3", unit: "社", label: "BPO支援" },
  { n: "5", unit: "名", label: "外部パートナー" },
  { n: "4", unit: "件", label: "地域プロジェクト" },
];

const dxCases = [
  {
    tag: "DX",
    title: "SNS投稿の自動化",
    result: "30分 → 約6分",
    note: "作業時間 約80％削減",
    desc: "AIが企画し、X・Threadsへ自動投稿するフローを構築。毎日の投稿作業を大幅に削減。",
  },
  {
    tag: "DX",
    title: "請求書発行の自動化",
    result: "手作業 → 自動化",
    note: "転記・送付をゼロに",
    desc: "フォーム入力から請求書の自動発行・メール送信までを一気通貫で自動化。",
  },
  {
    tag: "DX",
    title: "在庫管理の一元化",
    result: "紙＋Excel → 一元管理",
    note: "転記作業を削減",
    desc: "スマホ入力・クラウド管理・検索・アラートを実装し、Excel転記作業をなくした。",
  },
];

const projects = [
  { title: "西尾働き方図鑑", desc: "地元で働く人・企業の姿を伝え、就活する学生と地域企業をつなぐプロジェクト。" },
  { title: "西尾筋肉祭り", desc: "地域の人が主役になって楽しむイベント。関わる人の輪を広げる場づくり。" },
  { title: "AI活用研究会", desc: "地域の企業・個人がAI活用を学び合うコミュニティ。挑戦のきっかけをつくる。" },
];

export default function WorksPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="pt-40 pb-20 px-8 md:px-12 bg-warm">
        <div className="mx-auto max-w-5xl">
          <div className="text-[11px] font-bold tracking-widest-label text-teal">WORKS</div>
          <h1 className="mt-5 text-h2 font-black tracking-heading leading-heading text-navy">
            カタチにしてきたこと。
          </h1>
          <p className="mt-6 text-[16px] md:text-[18px] leading-body text-muted max-w-2xl">
            企業の業務改善から、地域のプロジェクトまで。
            お客様や仲間と一緒につくってきた仕事をご紹介します。
          </p>
        </div>
      </section>

      {/* 数字で見る Moments Share */}
      <section className="py-16 px-8 md:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-[13px] font-bold tracking-widest-label text-muted">数字で見る Moments Share</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-[44px] md:text-[56px] font-black tracking-tight text-navy leading-none">
                  {s.n}
                  <span className="text-[20px] md:text-[24px] align-baseline ml-0.5">{s.unit}</span>
                </div>
                <div className="mt-2 text-[13px] text-muted leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DX CASE */}
      <section className="py-16 px-8 md:px-12 bg-warm">
        <div className="mx-auto max-w-5xl">
          <div className="text-[11px] font-bold tracking-widest-label text-teal">DX CASE</div>
          <h2 className="mt-4 text-h3 font-black tracking-heading text-navy">業務を、余白に変えた事例。</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {dxCases.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-8 border border-border">
                <div className="text-[11px] font-bold tracking-wide text-teal">{c.tag}</div>
                <div className="mt-3 text-[17px] font-bold text-navy">{c.title}</div>
                <div className="mt-4 text-[26px] font-black tracking-tight text-navy">{c.result}</div>
                <div className="mt-1 text-[13px] font-bold text-teal">{c.note}</div>
                <p className="mt-4 text-[14px] leading-relaxed text-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BPO CASE (data pending) */}
      <section className="py-16 px-8 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-[11px] font-bold tracking-widest-label text-teal">BPO CASE</div>
          <h2 className="mt-4 text-h3 font-black tracking-heading text-navy">人が必要な仕事を、一緒に支えた事例。</h2>
          {/* TODO: 実在するBPO支援の具体事例（企業名は伏せて内容・成果）を追記する。架空の事例は掲載しない。 */}
          <p className="mt-6 text-[15px] leading-body text-muted max-w-2xl">
            現在、掲載できる事例を整理中です。CS代行・SNS運用・事務代行などの支援実績を順次公開します。
          </p>
        </div>
      </section>

      {/* REGIONAL PROJECTS */}
      <section className="py-16 px-8 md:px-12 bg-warm">
        <div className="mx-auto max-w-5xl">
          <div className="text-[11px] font-bold tracking-widest-label text-coral">REGIONAL PROJECTS</div>
          <h2 className="mt-4 text-h3 font-black tracking-heading text-navy">地域に、挑戦のきっかけをつくった。</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-8 border border-border">
                <div className="text-[18px] font-bold text-navy">{p.title}</div>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[14px] text-muted">
            ほかにも地域のプロジェクトに取り組んでいます。
            <Link href="/service-produce" className="text-coral font-bold hover:underline ml-1">地域プロデュースを見る →</Link>
          </p>
        </div>
      </section>

      {/* お客様の声 (data pending) */}
      <section className="py-16 px-8 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-[11px] font-bold tracking-widest-label text-teal">VOICE</div>
          <h2 className="mt-4 text-h3 font-black tracking-heading text-navy">お客様の声</h2>
          {/* TODO: 実在するお客様の声（許諾済みのコメント・お名前/イニシャル）を掲載する。架空のコメントは作成しない。 */}
          <p className="mt-6 text-[15px] leading-body text-muted max-w-2xl">
            掲載許諾をいただいたお客様の声を、準備でき次第ご紹介します。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-8 md:px-12 bg-navy text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-h3 font-black tracking-heading">まず、話してみませんか。</h2>
          <p className="mt-5 text-[15px] leading-body text-white/70">
            「うちに合うかわからない」でも大丈夫です。まだ課題が整理できていなくても構いません。
          </p>
          <a
            href="mailto:branding@momentsshare.com"
            className="mt-10 inline-block bg-teal text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            30分相談する →
          </a>
        </div>
      </section>
    </>
  );
}
