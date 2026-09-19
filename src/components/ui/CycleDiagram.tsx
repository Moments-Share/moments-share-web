import Link from "next/link";
import type { CSSProperties } from "react";

/* ============================================================
   「挑戦と共創が循環する地域へ」の6段階。

   出典は御社の構想図（VISION 2040）。図はHTMLで組み直している。
   画像のまま貼ると、文字が画像なので検索もAI検索も読めず、
   スマホでは潰れて判読できず、読み上げもできない。
   図の「構造」だけを持ってきて、見た目はサイトの配色に合わせる。

   広い画面では輪に組み、輪の上を光の帯が一周する。
   「循環します」と文章で書く代わりに、回っているところを見せる。
   帯と点の灯りはCSSだけで動かしている（JSなし・状態なし）ので、
   サーバー側で描いたHTMLがそのまま最終形になる。

   狭い画面は輪に組めないので、縦一本の道に切り替える。
   同じ要素の並べ方を変えているだけで、内容は重複させていない。

   variant:
     compact … TOPに置く短い版。段階の名前だけ
     full    … 地域プロデュースに置く版。説明と担うプロジェクトまで
   ============================================================ */

type Step = {
  no: string;
  /** 輪に置くときの位置（%）。上から時計回りに6点 */
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

/* 輪の上に置く矢印。節点と節点の中間に置き、時計回りの接線へ向ける。
   三角形は「右向き」で描いてあるので、中心から見た角度 a に対して
   回転は a+90 になる（上端 a=-90 → 0度＝右向き、右端 a=0 → 90度＝下向き）。

   光の帯があっても矢印は残す。動きを減らす設定の人には帯が出ないので、
   そのときに向きを示すものがなくなってしまう。 */
const arrows = [
  { x: 71.0, y: 14.49, r: 20.59 },
  { x: 92.0, y: 50.0, r: 90 },
  { x: 71.0, y: 85.51, r: 159.41 },
  { x: 29.0, y: 85.51, r: 200.59 },
  { x: 8.0, y: 50.0, r: 270 },
  { x: 29.0, y: 14.49, r: 339.41 },
];

/* 節点が灯る時刻（秒／一周12秒）。

   帯は輪の上を一定の速さで進むが、節点は60度ずつ等間隔に置いてある。
   輪は真円ではなく横長の楕円（63×41）なので、
   「角度で等間隔」と「長さで等間隔」が一致しない。
   単純に2秒刻みにすると、帯が来ていないのに灯る節点が出る。

   そこで各節点の角度を弧の長さに直し、帯の先頭が届く時刻を出した。
   帯は長さ13、先頭は位置88から出発し、12秒で100進む。
     遅延 = ((節点の弧長位置 − 0.88) mod 1) × 12秒
   楕円の形（rx・ry）を変えたら、この6つの数も計算し直すこと。 */
const litAt = [10.44, 0.62, 2.26, 4.44, 6.62, 8.26];

/** 段階を担うプロジェクト。リンクがあれば辿れるようにする */
function ProjectTag({ step }: { step: Step }) {
  if (step.href) {
    return (
      <Link
        href={step.href}
        className="inline-block border-b border-navy-ink/40 pb-0.5 text-[12px] font-bold text-navy-ink transition-colors hover:border-deep-green hover:text-deep-green"
      >
        {step.project} →
      </Link>
    );
  }
  return (
    <span className="inline-block border border-charcoal/20 px-2 py-0.5 text-[11px] font-bold text-charcoal/75">
      {step.project}
      {step.note && <span className="ml-1 text-charcoal/60">／{step.note}</span>}
    </span>
  );
}

/** 灯る点。輪でも縦の道でも同じものを使う */
function Dot({ index }: { index: number }) {
  const delay = { "--cycle-delay": `${litAt[index]}s` } as CSSProperties;
  return (
    <span aria-hidden className="relative block h-[15px] w-[15px] shrink-0 lg:mx-auto">
      <span className="absolute inset-0 rounded-full border-2 border-sage-ink bg-background" />
      <span className="cycle-fill absolute inset-[3px] rounded-full bg-deep-green" style={delay} />
      <span
        className="cycle-pulse absolute -inset-[7px] rounded-full border border-deep-green/60"
        style={delay}
      />
    </span>
  );
}

export function CycleDiagram({ variant = "full" }: { variant?: "full" | "compact" | "ring" }) {
  const compact = variant === "compact";
  /* 説明と担うプロジェクトまで出すか。TOPは名前だけにして短くする。
     "ring" は以前の呼び名。地域プロデュース側の呼び出しを壊さないために残す */
  const detail = !compact;

  return (
    <div className={compact ? "mt-8" : "mt-10 md:mt-14"}>
      <div
        className={`relative mx-auto w-full lg:aspect-[3/2] ${
          compact ? "max-w-[780px]" : "max-w-[940px]"
        }`}
      >
        {/* 輪。飾りなので読み上げない。
            preserveAspectRatio="none" で、節点の位置とちょうど重なるまで横に伸ばす */}
        <svg
          aria-hidden
          viewBox="0 0 150 100"
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
        >
          <ellipse
            cx="75"
            cy="50"
            rx="63"
            ry="41"
            fill="none"
            stroke="var(--color-sage)"
            strokeWidth="0.16"
            strokeDasharray="0.9 0.9"
          />
          {/* 一周する光の帯。pathLength で長さを100に正規化しているので、
              画面幅が変わっても dasharray を書き直さなくてよい */}
          <ellipse
            className="cycle-sweep"
            cx="75"
            cy="50"
            rx="63"
            ry="41"
            pathLength={100}
            fill="none"
            stroke="var(--color-deep-green)"
            strokeWidth="0.45"
            strokeLinecap="round"
            strokeDasharray="13 87"
            strokeDashoffset={-75}
          />
        </svg>

        {/* 矢印は歪ませたくないので、輪のSVGとは別に置く */}
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
            <polygon points="1,1 9,5 1,9" fill="var(--color-sage-ink)" />
          </svg>
        ))}

        {/* 中心の言葉 */}
        <div className="mb-10 text-center lg:absolute lg:left-1/2 lg:top-1/2 lg:mb-0 lg:w-[19em] lg:-translate-x-1/2 lg:-translate-y-1/2">
          <h3
            className="text-charcoal font-semibold leading-[1.3] tracking-[-0.02em]"
            style={{ fontSize: compact ? "clamp(20px, 2.1vw, 26px)" : "clamp(20px, 2.2vw, 28px)" }}
          >
            挑戦と共創が、
            <br className="hidden lg:block" />
            循環する地域へ。
          </h3>
          <p className="mt-4 text-[14px] leading-[1.9] text-charcoal/80">
            挑戦したい若者 × 変わりたい企業
          </p>
        </div>

        {/* 6段階。広い画面では輪の上へ、狭い画面では縦一本の道になる。
            同じ要素の並べ方を変えているだけで、内容は重複させていない */}
        {/* lg では位置の基準を外側（3:2の枠）に戻す。ここに relative があると
            節点がこの ol の左上を基準にしてしまい、全部が上に重なる */}
        <ol
          className={`relative grid grid-cols-1 lg:static lg:block ${
            detail ? "gap-7 sm:grid-cols-2 lg:gap-0" : "gap-5 lg:gap-0"
          }`}
        >
          {steps.map((s, i) => (
            <li
              key={s.no}
              /* 位置は変数で渡し、lg でだけ使う。
                 left/top を直に書くと、輪にならない画面でも
                 relative の項目がその分だけずれて階段状になる */
              className={`relative lg:absolute lg:left-[var(--cx)] lg:top-[var(--cy)] lg:block lg:w-[15.5em] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-center ${
                detail ? "" : "flex items-center gap-3"
              }`}
              style={{ "--cx": `${s.x}%`, "--cy": `${s.y}%` } as CSSProperties}
            >
              <Dot index={i} />

              {/* 狭い画面の道。点の下端から次の点の上端まで。
                  行の高さが揃っているので 100% + 行間 - 点 で届く。
                  輪になる画面と、段が高くなる詳細版では出さない */}
              {i < steps.length - 1 && !detail && (
                <span
                  aria-hidden
                  className="absolute left-[7px] top-[calc(50%+7px)] h-[calc(100%+6px)] w-px bg-charcoal/20 lg:hidden"
                />
              )}

              <div className={detail ? "mt-2" : "flex items-baseline gap-2 lg:mt-2 lg:block"}>
                <span className="block text-[12px] font-medium leading-none tabular-nums text-charcoal/65">
                  {s.no}
                </span>
                <h4
                  className={`text-charcoal font-semibold leading-[1.4] lg:mt-1.5 ${
                    detail ? "mt-1.5 text-[17px] md:text-[18px]" : "text-[14px] md:text-[15px]"
                  }`}
                >
                  {s.title}
                </h4>
                {detail && (
                  <>
                    <p className="mt-1.5 text-[13px] leading-[1.8] text-charcoal/80">{s.body}</p>
                    <div className="mt-3">
                      <ProjectTag step={s} />
                    </div>
                  </>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* 狭い画面の戻り。縦の道にはカーブを描く余白がないので、
          点の列に合わせた小さな印で「01へ戻る」ことを示す。
          輪になる画面では、輪そのものが戻りを表している */}
      {!detail && (
        <p className="mt-4 flex items-center gap-3 text-[12px] text-charcoal/70 lg:hidden">
          <span
            aria-hidden
            className="block w-[15px] shrink-0 text-center text-[13px] leading-none text-sage-ink"
          >
            &#8635;
          </span>
          01「地域を知る」へ戻る
        </p>
      )}

      {detail && (
        <p className="mt-10 text-center text-[14px] leading-[1.9] text-charcoal/75 lg:mt-14">
          この循環をつくることが、地域プロデュース事業です。
        </p>
      )}
    </div>
  );
}
