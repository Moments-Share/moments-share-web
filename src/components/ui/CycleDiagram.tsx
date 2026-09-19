import Link from "next/link";

/* ============================================================
   「挑戦と共創が循環する地域へ」の6段階。

   出典は御社の構想図（VISION 2040）。図はHTMLで組み直している。
   画像のまま貼ると、文字が画像なので検索もAI検索も読めず、
   スマホでは潰れて判読できず、読み上げもできない。
   図の「構造」だけを持ってきて、見た目はサイトの配色に合わせる。

   variant:
     compact … TOPに置く短い版。段階の名前と一行だけ
     full    … 地域プロデュースに置く版。説明と担うプロジェクトまで
   ============================================================ */

type Step = {
  no: string;
  /** 円環に置くときの位置（%）。上から時計回りに6点 */
  x: number;
  y: number;
  title: string;
  body: string;
  /** その段階を担うプロジェクト */
  project: string;
  href?: string;
  note?: string;
};

/* TODO: ②の名称が資料間でずれている。
         構想図では「地域ベンチャー留学」、大学生募集ページでは
         「ローカルベンチャー留学（2027年春予定）」。正式名称を要確認。
   TODO: ③コワーキングスペースの開設時期は、構想図には記載があるが
         サイトでは未定としているため、ここでは時期を書いていない。 */
const steps: Step[] = [
  {
    no: "01",
    x: 50.0,
    y: 9.0,
    title: "地域を知る",
    body: "働く人・企業・生き方に出会う。",
    project: "西尾働き方図鑑",
    href: "/nishio-hatarakikata-zukan",
  },
  {
    no: "02",
    x: 86.4,
    y: 29.5,
    title: "挑戦してみる",
    body: "インターンや地域プロジェクトに参加する。",
    project: "地域ベンチャー留学",
  },
  {
    no: "03",
    x: 86.4,
    y: 70.5,
    title: "つながる",
    body: "若者・企業・学校・行政がつながる。",
    project: "コワーキングスペース",
    note: "準備中",
  },
  {
    no: "04",
    x: 50.0,
    y: 91.0,
    title: "人と企業が変わる",
    body: "採用・育成・DX・組織が変わる。",
    project: "地域の人事部",
  },
  {
    no: "05",
    x: 13.6,
    y: 70.5,
    title: "ともに生み出す",
    body: "新しい仕事・プロジェクト・事業をつくる。",
    project: "共創プロジェクト",
  },
  {
    no: "06",
    x: 13.6,
    y: 29.5,
    title: "次の挑戦へ",
    body: "成果が次の挑戦者を呼び込む。",
    project: "地域に循環",
  },
];

/* 円環の上に置く矢印。節点と節点の中間に置き、時計回りの接線へ向ける。
   三角形は「右向き」で描いてあるので、中心から見た角度 a に対して
   回転は a+90 になる（上端 a=-90 → 0度＝右向き、右端 a=0 → 90度＝下向き）。
   最初は「▲」の文字を回していたが、基準が上向きで分かりにくく、
   実際に90度ずれていた。図形を自分で描いて基準をはっきりさせる。 */
const arrows = [
  { x: 71.0, y: 14.49, r: 30 },
  { x: 92.0, y: 50.0, r: 90 },
  { x: 71.0, y: 85.51, r: 150 },
  { x: 29.0, y: 85.51, r: 210 },
  { x: 8.0, y: 50.0, r: 270 },
  { x: 29.0, y: 14.49, r: 330 },
];

export function CycleDiagram({
  variant = "full",
}: {
  variant?: "full" | "compact" | "ring";
}) {
  const compact = variant === "compact";
  const ring = variant === "ring";

  return (
    <div>
      {/* 中心にある言葉。図では真ん中に置かれているもの。
          ring のときは円の中心に置くので、ここでは出さない */}
      <div className={`max-w-[34em] ${ring ? "hidden" : ""}`}>
        <h3
          className="text-charcoal font-semibold leading-[1.3] tracking-[-0.02em]"
          style={{ fontSize: compact ? "clamp(20px, 2.4vw, 30px)" : "clamp(24px, 3vw, 38px)" }}
        >
          挑戦と共創が、循環する地域へ。
        </h3>
        <p className="mt-4 text-[15px] leading-[2] text-charcoal/80 md:text-[16px]">
          挑戦したい若者と、変わりたい企業。出会いから挑戦、企業の変容、共創までを地域で伴走します。
        </p>
      </div>

      {ring ? (
        /* 円環。広い画面でだけ円に組む。
           文字は画像にしない。SVGは輪と矢印（飾り）だけで、
           節点の中身はHTMLのまま。拡大しても崩れず、検索・AI検索・
           読み上げは普通のテキストとして読める。
           狭い画面では同じ要素がそのまま縦に積まれる（重複させない） */
        <div className="mt-10 md:mt-14">
          <div className="relative mx-auto w-full max-w-[940px] lg:aspect-[3/2]">
            {/* 輪と矢印。飾りなので読み上げない */}
            <svg
              aria-hidden
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            >
              <ellipse
                cx="50"
                cy="50"
                rx="42"
                ry="41"
                fill="none"
                stroke="var(--color-sage)"
                strokeWidth="0.25"
                strokeDasharray="1.2 1.2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            {/* 矢印は歪ませたくないので、SVGとは別にHTMLで置く */}
            {arrows.map((a, i) => (
              <svg
                key={i}
                aria-hidden
                viewBox="0 0 10 10"
                width="13"
                height="13"
                className="absolute hidden lg:block"
                style={{
                  left: `${a.x}%`,
                  top: `${a.y}%`,
                  transform: `translate(-50%, -50%) rotate(${a.r}deg)`,
                }}
              >
                {/* 右向きの三角形 */}
                <polygon points="1,1 9,5 1,9" fill="var(--color-sage-ink)" />
              </svg>
            ))}

            {/* 中心の言葉 */}
            <div className="mb-10 text-center lg:absolute lg:left-1/2 lg:top-1/2 lg:mb-0 lg:w-[19em] lg:-translate-x-1/2 lg:-translate-y-1/2">
              <h3
                className="text-charcoal font-semibold leading-[1.3] tracking-[-0.02em]"
                style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
              >
                挑戦と共創が、
                <br className="hidden lg:block" />
                循環する地域へ。
              </h3>
              <p className="mt-4 text-[14px] leading-[1.9] text-charcoal/80">
                挑戦したい若者 × 変わりたい企業
              </p>
              <p className="mt-2 text-[12px] leading-[1.8] text-charcoal/75">
                西尾版・地域の人事部
              </p>
            </div>

            {/* 6段階。同じ要素が、広い画面では円周上へ、狭い画面では縦に並ぶ */}
            <ol className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:block">
              {steps.map((s) => (
                <li
                  key={s.no}
                  className="lg:absolute lg:w-[15.5em] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-center"
                  style={{ left: `${s.x}%`, top: `${s.y}%` }}
                >
                  <div className="text-charcoal/65 font-medium tabular-nums leading-none text-[13px]">
                    {s.no}
                  </div>
                  <h4 className="mt-2 text-charcoal font-semibold leading-[1.4] text-[17px] md:text-[18px]">
                    {s.title}
                  </h4>
                  <p className="mt-1.5 text-[13px] leading-[1.8] text-charcoal/80">{s.body}</p>
                  <div className="mt-3">
                    {s.href ? (
                      <Link
                        href={s.href}
                        className="inline-block border-b border-navy-ink/40 pb-0.5 text-[12px] font-bold text-navy-ink transition-colors hover:border-deep-green hover:text-deep-green"
                      >
                        {s.project} →
                      </Link>
                    ) : (
                      <span className="inline-block border border-charcoal/20 px-2 py-0.5 text-[11px] font-bold text-charcoal/75">
                        {s.project}
                        {s.note && <span className="ml-1 text-charcoal/60">／{s.note}</span>}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-10 text-center text-[14px] leading-[1.9] text-charcoal/75 lg:mt-14">
            ↻ 「次の挑戦へ」は、また「地域を知る」へ戻っていきます。この循環をつくることが、地域プロデュース事業です。
          </p>
        </div>
      ) : compact ? (
        /* TOP版。段階の名前だけを矢印でつなぐ */
        <div className="mt-8">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-3">
            {steps.map((s, i) => (
              <span key={s.no} className="flex items-center gap-x-3">
                <span className="text-charcoal font-medium tracking-[-0.01em] text-[15px] md:text-[17px]">
                  {s.title}
                </span>
                {i < steps.length - 1 && (
                  <span aria-hidden className="text-sage-ink text-[14px]">
                    →
                  </span>
                )}
              </span>
            ))}
          </p>
          <p className="mt-5 text-[14px] leading-[1.9] text-charcoal/75">
            ↻ 「次の挑戦へ」は、また「地域を知る」へ戻っていきます。
          </p>
        </div>
      ) : (
        /* 地域プロデュース版。説明と、その段階を担うプロジェクトまで */
        <>
          <ol className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 border-t border-charcoal/15 pt-9 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
            {steps.map((s) => (
              <li key={s.no}>
                <div className="text-charcoal/65 font-medium tabular-nums leading-none text-[15px]">
                  {s.no}
                </div>
                <h4 className="mt-3 text-charcoal font-semibold leading-[1.4] text-[18px] md:text-[20px]">
                  {s.title}
                </h4>
                <p className="mt-2 text-[15px] leading-[1.9] text-charcoal/80">{s.body}</p>
                <div className="mt-4">
                  {s.href ? (
                    <Link
                      href={s.href}
                      className="inline-block border-b border-navy-ink/40 pb-0.5 text-[13px] font-bold text-navy-ink transition-colors hover:border-deep-green hover:text-deep-green"
                    >
                      {s.project} →
                    </Link>
                  ) : (
                    <span className="inline-block border border-charcoal/20 px-2.5 py-1 text-[12px] font-bold text-charcoal/75">
                      {s.project}
                      {s.note && <span className="ml-1.5 text-charcoal/60">／{s.note}</span>}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-9 text-[14px] leading-[1.9] text-charcoal/75">
            ↻ 「次の挑戦へ」は、また「地域を知る」へ戻っていきます。この循環をつくることが、地域プロデュース事業です。
          </p>
        </>
      )}
    </div>
  );
}
