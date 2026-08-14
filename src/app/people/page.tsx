import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";

export const metadata: Metadata = {
  title: "People（一緒につくる人たち）| Moments Share合同会社",
  description:
    "Moments Shareは社員だけで仕事をする会社ではありません。働き方も場所も得意も違う人たちが、それぞれの力を持ち寄って一緒に仕事やプロジェクトをつくっています。",
  openGraph: {
    title: "People（一緒につくる人たち）| Moments Share合同会社",
    description:
      "働き方も場所も得意も違う人たちが、力を持ち寄って一緒に仕事やプロジェクトをつくる。Moments Shareに関わる人たち。",
    type: "website",
    url: "https://moments-share.com/people",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const ways = [
  { title: "専門性を活かして企業を支える", desc: "得意分野のスキルで、企業の業務やプロジェクトに関わる。" },
  { title: "副業でプロジェクトに参加する", desc: "本業を持ちながら、関心のあるプロジェクトに参加する。" },
  { title: "子育てをしながら働く", desc: "生活に合わせた時間で、無理なく仕事に関わる。" },
  { title: "学生として地域に関わる", desc: "学びながら、地域のプロジェクトに実践者として加わる。" },
  { title: "自分でプロジェクトを始める", desc: "「やってみたい」を持ち込み、挑戦者として動き出す。" },
];

export default function PeoplePage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="pt-40 pb-20 px-8 md:px-12 bg-warm">
        <div className="mx-auto max-w-5xl">
          <div className="text-[11px] font-bold tracking-widest-label text-teal">PEOPLE</div>
          <h1 className="mt-5 text-h2 font-black tracking-heading leading-heading text-navy">
            一緒につくる人たち。
          </h1>
          <p className="mt-6 text-[16px] md:text-[18px] leading-body text-muted max-w-2xl">
            Moments Shareは、社員だけで仕事をする会社ではありません。
            働き方も、住んでいる場所も、得意なことも違う人たちが、
            それぞれの力を持ち寄って一緒に仕事やプロジェクトをつくっています。
          </p>
        </div>
      </section>

      {/* 関わり方 */}
      <section className="py-16 px-8 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-[11px] font-bold tracking-widest-label text-teal">HOW TO JOIN</div>
          <h2 className="mt-4 text-h3 font-black tracking-heading text-navy">関わり方は、ひとつじゃない。</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {ways.map((w, i) => (
              <div key={w.title} className="flex gap-5 bg-warm rounded-2xl p-7">
                <div className="text-[22px] font-black text-teal/50 leading-none">0{i + 1}</div>
                <div>
                  <div className="text-[16px] font-bold text-navy">{w.title}</div>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERS */}
      <section className="py-16 px-8 md:px-12 bg-warm">
        <div className="mx-auto max-w-5xl">
          <div className="text-[11px] font-bold tracking-widest-label text-teal">MEMBERS</div>
          <h2 className="mt-4 text-h3 font-black tracking-heading text-navy">メンバー</h2>

          {/* 代表（実在の情報のみ） */}
          <div className="mt-10 bg-white rounded-2xl p-8 md:p-10 border border-border grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
            <div className="aspect-square rounded-xl bg-warm flex items-center justify-center text-muted text-[13px]">
              {/* TODO: 代表の顔写真に差し替え（public/photos/ に追加） */}
              写真 準備中
            </div>
            <div>
              <div className="text-[20px] font-black text-navy">中根 隆<span className="ml-3 text-[12px] font-bold text-muted align-middle">RYU NAKANE</span></div>
              <div className="mt-1 text-[13px] font-bold text-teal">代表社員 / Founder</div>
              <dl className="mt-5 space-y-3 text-[14px] leading-relaxed">
                <div><dt className="text-[12px] font-bold text-muted">得意なこと</dt><dd className="mt-0.5 text-navy">業務整理・DX設計、AI／RPA／ノーコードによる自動化、地域コミュニティづくり。</dd></div>
                <div><dt className="text-[12px] font-bold text-muted">担当していること</dt><dd className="mt-0.5 text-navy">DX支援・BPO・地域プロデュースの3事業の推進。</dd></div>
                <div><dt className="text-[12px] font-bold text-muted">なぜMoments Shareに関わっているか</dt><dd className="mt-0.5 text-navy">「挑戦できる場所を、つくる側に回ろう」。西尾から、挑戦と共創が循環する地域の仕組みをつくるため。</dd></div>
              </dl>
            </div>
          </div>

          {/* TODO: 実在するメンバー（専門人材・副業・子育て中・学生など）を、写真／名前／得意なこと／担当／関わる理由の5項目で追記する。架空の人物は作成しない。 */}
          <p className="mt-8 text-[14px] text-muted">
            そのほかのメンバー紹介は準備中です。順次公開します。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-8 md:px-12 bg-navy text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-h3 font-black tracking-heading">あなたの得意を、地域の挑戦へ。</h2>
          <p className="mt-5 text-[15px] leading-body text-white/70">
            働き方も場所も問いません。まずは気軽に話すところから。
          </p>
          <a
            href="/contact"
            className="mt-10 inline-block bg-teal text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Moments Shareに関わる →
          </a>
        </div>
      </section>
    </>
  );
}
