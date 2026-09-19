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
    title: "地域を知る",
    body: "働く人・企業・生き方に出会う。",
    project: "西尾働き方図鑑",
    href: "/nishio-hatarakikata-zukan",
  },
  {
    no: "02",
    title: "挑戦してみる",
    body: "インターンや地域プロジェクトに参加する。",
    project: "地域ベンチャー留学",
  },
  {
    no: "03",
    title: "つながる",
    body: "若者・企業・学校・行政がつながる。",
    project: "コワーキングスペース",
    note: "準備中",
  },
  {
    no: "04",
    title: "人と企業が変わる",
    body: "採用・育成・DX・組織が変わる。",
    project: "地域の人事部",
  },
  {
    no: "05",
    title: "ともに生み出す",
    body: "新しい仕事・プロジェクト・事業をつくる。",
    project: "共創プロジェクト",
  },
  {
    no: "06",
    title: "次の挑戦へ",
    body: "成果が次の挑戦者を呼び込む。",
    project: "地域に循環",
  },
];

export function CycleDiagram({ variant = "full" }: { variant?: "full" | "compact" }) {
  const compact = variant === "compact";

  return (
    <div>
      {/* 中心にある言葉。図では真ん中に置かれているもの */}
      <div className="max-w-[34em]">
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

      {compact ? (
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
