import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/ui/Nav";
import { PhotoNeeded } from "@/components/ui/PhotoNeeded";

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
      <main id="main-content">
        {/* ===== HERO — 大きな見出し＋働く現場の写真を非対称に ===== */}
        <section className="pt-28 md:pt-32 pb-16 md:pb-24 px-6 md:px-10">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
              <div className="lg:col-span-6 lg:pb-6">
                <div className="flex items-center gap-3 text-terra text-[12px] font-bold tracking-[0.2em]">
                  <span className="w-8 h-px bg-terra" />
                  PEOPLE
                </div>
                <h1 className="mt-8 text-green font-black leading-[1.12] tracking-[-0.03em]"
                    style={{ fontSize: "clamp(44px, 7vw, 100px)" }}>
                  一緒につくる<br />人たち。
                </h1>
                <p className="mt-8 max-w-lg text-[16px] md:text-[17px] leading-[2] text-charcoal/80">
                  Moments Shareは、社員だけで仕事をする会社ではありません。
                  働き方も、住んでいる場所も、得意なことも違う人たちが、
                  それぞれの力を持ち寄って一緒に仕事やプロジェクトをつくっています。
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="relative aspect-[3/2] w-full">
                  <Image src="/photos/service-bpo.png" alt="多様な人が集まって働く現場" fill priority sizes="(max-width:1024px) 100vw, 48vw" className="object-cover" />
                </div>
                <p className="mt-3 text-[12px] text-muted">得意も働き方も違う人が、力を持ち寄る。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 関わり方 — 均等ボックスをやめ、番号つきの編集リストで ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
              <div className="lg:col-span-4">
                <div className="text-terra text-[12px] font-bold tracking-[0.2em] lg:sticky lg:top-24">HOW TO JOIN</div>
                <h2 className="mt-4 text-green font-black leading-[1.25] tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}>
                  関わり方は、<br />ひとつじゃない。
                </h2>
              </div>
              <div className="lg:col-span-8">
                <ol className="divide-y divide-charcoal/10 border-t border-charcoal/10">
                  {ways.map((w, i) => (
                    <li key={w.title} className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-7 md:py-9 items-baseline">
                      <span className="text-terra font-black leading-none tracking-[-0.03em]" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>0{i + 1}</span>
                      <div>
                        <h3 className="text-green font-bold leading-[1.4] tracking-[-0.01em]" style={{ fontSize: "clamp(18px, 2.2vw, 26px)" }}>{w.title}</h3>
                        <p className="mt-2 max-w-xl text-[15px] leading-[2] text-charcoal/80">{w.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MEMBERS — 代表を雑誌の特集のように大きな写真＋バイオで ===== */}
        <section className="py-16 md:py-28 px-6 md:px-10">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-terra text-[12px] font-bold tracking-[0.2em]">MEMBERS</div>
            <h2 className="mt-4 text-green font-black leading-[1.25] tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
              メンバー
            </h2>

            {/* 代表（実在の情報のみ）— 非対称の特集レイアウト */}
            <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              <div className="md:col-span-5">
                {/* TODO: 代表の顔写真に差し替え（public/photos/ に追加） */}
                <PhotoNeeded ratio="4/5" kind="PEOPLE" note="代表・中根 隆のポートレート（縦・自然光）" />
                <p className="mt-3 text-[12px] leading-[1.8] text-muted">西尾から、挑戦と共創の循環をつくる。</p>
              </div>
              <div className="md:col-span-7 md:pt-4">
                <div className="text-terra text-[13px] font-bold tracking-[0.16em]">代表社員 / Founder</div>
                <div className="mt-4 flex items-baseline gap-4 flex-wrap">
                  <span className="text-green font-black leading-[1.1] tracking-[-0.02em]" style={{ fontSize: "clamp(36px, 5vw, 68px)" }}>中根 隆</span>
                  <span className="text-[13px] font-bold text-muted tracking-[0.14em]">RYU NAKANE</span>
                </div>
                <dl className="mt-8 divide-y divide-charcoal/10 border-t border-charcoal/10">
                  <div className="py-5">
                    <dt className="text-[12px] font-bold tracking-[0.14em] text-terra">得意なこと</dt>
                    <dd className="mt-2 text-[15px] md:text-[16px] leading-[2] text-charcoal/85">業務整理・DX設計、AI／RPA／ノーコードによる自動化、地域コミュニティづくり。</dd>
                  </div>
                  <div className="py-5">
                    <dt className="text-[12px] font-bold tracking-[0.14em] text-terra">担当していること</dt>
                    <dd className="mt-2 text-[15px] md:text-[16px] leading-[2] text-charcoal/85">DX支援・BPO・地域プロデュースの3事業の推進。</dd>
                  </div>
                  <div className="py-5">
                    <dt className="text-[12px] font-bold tracking-[0.14em] text-terra">なぜMoments Shareに関わっているか</dt>
                    <dd className="mt-2 text-[15px] md:text-[16px] leading-[2] text-charcoal/85">「挑戦できる場所を、つくる側に回ろう」。西尾から、挑戦と共創が循環する地域の仕組みをつくるため。</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* これから加わるメンバー — 証明写真ではなく“活動中”の場面で。実在情報が揃うまで名前・肩書きは載せない。架空の人物は作成しない。 */}
            <div className="mt-24 md:mt-36 border-t border-charcoal/10 pt-14 md:pt-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
                <div className="lg:col-span-4">
                  <div className="text-terra text-[12px] font-bold tracking-[0.2em]">MEMBERS / 準備中</div>
                  <h3 className="mt-4 text-green font-black leading-[1.3] tracking-[-0.02em]" style={{ fontSize: "clamp(24px, 3vw, 42px)" }}>
                    これから、<br />顔ぶれが増えていく。
                  </h3>
                  <p className="mt-6 max-w-sm text-[15px] leading-[2] text-charcoal/70">
                    専門人材、副業、子育て中、学生——。それぞれの持ち場から関わる人たちを、順次紹介していきます。
                  </p>
                  {/* TODO: 実在するメンバーを、写真／名前／得意なこと／担当／関わる理由の5項目で追記する。架空の人物は作成しない。 */}
                  <p className="mt-8 text-[13px] tracking-[0.04em] text-muted">※ 他メンバー準備中。掲載は本人の実在情報のみ。</p>
                </div>

                {/* 混在サイズ・向きのプレースホルダ（活動中の一場面／証明写真にしない） */}
                <div className="lg:col-span-8">
                  <div className="grid grid-cols-6 gap-4 md:gap-5">
                    <div className="col-span-3 md:col-span-2">
                      <PhotoNeeded ratio="3/4" kind="PEOPLE" note="専門人材が現場で手を動かす場面（縦）" />
                    </div>
                    <div className="col-span-3 md:col-span-2 md:mt-12">
                      <PhotoNeeded ratio="1/1" kind="PEOPLE" note="副業メンバーの手元・作業中（正方）" />
                    </div>
                    <div className="col-span-6 md:col-span-2">
                      <PhotoNeeded ratio="4/5" kind="PEOPLE" note="子育てをしながら働く人の一場面（縦）" />
                    </div>
                    <div className="col-span-6 md:col-span-4 md:-mt-6">
                      <PhotoNeeded ratio="16/9" kind="PEOPLE" note="学生が地域で活動する場面（横・ドキュメンタリー）" />
                    </div>
                    <div className="col-span-6 md:col-span-2">
                      <PhotoNeeded ratio="3/4" kind="PEOPLE" note="メンバーが集まって話し合う場面（縦）" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA — Deep Green のバンド＋テラコッタのボタン ===== */}
        <section id="contact" className="scroll-mt-20 py-20 md:py-28 px-6 md:px-10 bg-green text-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-white/60 text-[12px] font-bold tracking-[0.2em]">CONTACT</div>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <h2 className="lg:col-span-8 font-black leading-[1.15] tracking-[-0.02em]" style={{ fontSize: "clamp(34px, 5.5vw, 76px)" }}>
                あなたの得意を、<br />地域の挑戦へ。
              </h2>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="text-[15px] leading-[2] text-white/75">
                  働き方も場所も問いません。まずは気軽に話すところから。
                </p>
                <Link href="/contact" className="mt-6 inline-block bg-terra text-white font-bold px-9 py-4 rounded-full hover:opacity-90 transition-opacity">
                  Moments Shareに関わる →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
