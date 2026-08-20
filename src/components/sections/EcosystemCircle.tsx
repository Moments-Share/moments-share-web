"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const DX = "#3f6aa0";
const DX_SOFT = "rgba(63,106,160,0.78)"; // 余白＝DX由来の青系淡色
const BPO = "#315a49";
const REGION = "#cc7a45";
const NAVY = "#183048";
const MUTE = "rgba(37,40,37,0.52)";

/* ============================================================
   OUR ECOSYSTEM — 大きく美しい横広の円環
   PC＝左40%コピー / 右60%に大きな円環（中央は空）
   細線・non-scaling-stroke・一部破線・色数最小・大きな余白。
   円周上に3事業＋循環語を配置（線と文字を重ねない）。
   モバイル＝縦積み（円を縮小しない）。
   RIVER版(Ecosystem.tsx)は残置し未使用。
   ============================================================ */

/* ---- 円環ジオメトリ（viewBox 720 x 720 の正方形）---- */
const VB = 720;
const CX = 360;
const CY = 360;
const R = 230;

function pt(angleDeg: number, r: number = R) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}
const pct = (v: number) => `${(v / VB) * 100}%`;

/* 時計位置 → SVG角度（3時=0°、時計回りに+30°/h。DX=左, BPO=右, 地域=下）
   循環順（時計回り＝角度増加）：DX(左)→余白(上)→BPO(右)→多様な働き方(右下)→地域(下)→挑戦→新しい仕事→次の挑戦へ→(DX) */
const A = {
  dx: 190, // 左（約9:20）
  yohaku: 268, // 上（余白）
  bpo: 345, // 右（約2:30）
  tayou: 45, // 右下（多様な働き方）
  region: 100, // 下（約6:20＝地域プロデュース）
  chosen: 128, // 左下（挑戦）
  umareru: 150, // 左（新しい仕事・事業が生まれる）
  tsugi: 172, // 左（次の挑戦へ／DXの直前）
};

/* 円周上の3事業ノード */
const NODES = [
  { ...pt(A.dx), c: DX, d: 1.0 },
  { ...pt(A.bpo), c: BPO, d: 1.55 },
  { ...pt(A.region), c: REGION, d: 2.1 },
];

/* ---- ラベル配置（アンカーは円周上、transformで外側へ逃がす）---- */
type Label = {
  key: string;
  angle: number;
  transform: string;
  align: "left" | "right" | "center";
  delay: number;
  kind: "biz" | "word";
  color: string;
  num?: string;
  name?: string;
  catch?: string[];
  word?: string;
  arrow?: boolean;
};

const OUT = 16;
const LABELS: Label[] = [
  {
    // DXは円の左側。左40%コピー列と重ならないよう、ノードの外側＝右上へ逃がす。
    key: "dx",
    angle: A.dx,
    transform: `translate(${OUT}px, calc(-100% - ${OUT}px))`,
    align: "left",
    delay: 1.15,
    kind: "biz",
    color: DX,
    num: "01",
    name: "DX",
    catch: ["忙しさを、余白へ。"],
  },
  {
    key: "yohaku",
    angle: A.yohaku,
    transform: `translate(-50%, calc(-100% - ${OUT}px))`,
    align: "center",
    delay: 1.35,
    kind: "word",
    color: DX_SOFT,
    word: "余白",
  },
  {
    key: "bpo",
    angle: A.bpo,
    transform: `translate(${OUT + 4}px, -50%)`,
    align: "left",
    delay: 1.7,
    kind: "biz",
    color: BPO,
    num: "02",
    name: "BPO",
    catch: ["人手不足を、", "多様な働き方へ。"],
  },
  {
    key: "tayou",
    angle: A.tayou,
    transform: `translate(${OUT}px, calc(-50% + 8px))`,
    align: "left",
    delay: 1.9,
    kind: "word",
    color: BPO,
    word: "多様な働き方",
  },
  {
    key: "region",
    angle: A.region,
    transform: `translate(-50%, ${OUT + 6}px)`,
    align: "center",
    delay: 2.25,
    kind: "biz",
    color: REGION,
    num: "03",
    name: "地域プロデュース",
    catch: ["地域課題を、", "挑戦のきっかけに。"],
  },
  {
    key: "chosen",
    angle: A.chosen,
    transform: `translate(calc(-100% - ${OUT}px), -50%)`,
    align: "right",
    delay: 2.5,
    kind: "word",
    color: REGION,
    word: "挑戦",
  },
  {
    key: "umareru",
    angle: A.umareru,
    transform: `translate(calc(-100% - ${OUT}px), -50%)`,
    align: "right",
    delay: 2.7,
    kind: "word",
    color: MUTE,
    word: "新しい仕事・事業が生まれる",
  },
  {
    key: "tsugi",
    angle: A.tsugi,
    transform: `translate(calc(-100% - ${OUT}px), -50%)`,
    align: "right",
    delay: 2.9,
    kind: "word",
    color: MUTE,
    word: "次の挑戦へ",
    arrow: true,
  },
];

/* 円弧：DX(左)起点で時計回りに“次の挑戦へ”(左・DX直前)まで実線・描画 */
const ARC_SOLID = `M ${pt(A.dx).x} ${pt(A.dx).y} A ${R} ${R} 0 1 1 ${pt(A.tsugi).x} ${pt(A.tsugi).y}`;
/* 残り（左上の“次の挑戦へ→DX”の戻り＝破線） */
const ARC_DASH = `M ${pt(A.tsugi).x} ${pt(A.tsugi).y} A ${R} ${R} 0 0 1 ${pt(A.dx).x} ${pt(A.dx).y}`;
const CIRC = 2 * Math.PI * R;

function BizLabel({ l }: { l: Label }) {
  const justify = l.align === "right" ? "flex-end" : l.align === "center" ? "center" : "flex-start";
  return (
    <div style={{ textAlign: l.align }}>
      <div className="flex items-baseline gap-2" style={{ justifyContent: justify }}>
        <span className="font-bold tracking-[0.14em] tabular-nums" style={{ color: l.color, fontSize: 12 }}>
          {l.num}
        </span>
        <span className="font-bold tracking-[-0.01em]" style={{ color: NAVY, fontSize: 17 }}>
          {l.name}
        </span>
      </div>
      <div className="mt-1.5 font-medium leading-[1.55]" style={{ color: "rgba(37,40,37,0.72)", fontSize: 13.5 }}>
        {l.catch?.map((c, i) => (
          <span key={i} className="block">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

function WordLabel({ l }: { l: Label }) {
  return (
    <div
      className="flex items-center gap-1.5 whitespace-nowrap font-medium tracking-[0.02em]"
      style={{ color: l.color, fontSize: 12, justifyContent: l.align === "right" ? "flex-end" : "flex-start" }}
    >
      {l.arrow ? (
        <span aria-hidden="true" style={{ fontSize: 11, lineHeight: 1, color: DX }}>
          ↑
        </span>
      ) : null}
      <span>{l.word}</span>
    </div>
  );
}

export function EcosystemCircle() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const rawInView = useInView(ref, { once: true, amount: 0.15 });
  const inView = reduce ? true : rawInView;

  const head = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: inView ? 1 : 0, y: inView ? 0 : 16 },
    transition: reduce ? { duration: 0 } : { duration: 0.9, ease, delay },
  });

  return (
    <section ref={ref} aria-labelledby="ecosystem-heading" className="py-24 md:py-36 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-5 md:items-center gap-12 md:gap-8">
          {/* ===== 左 40%：コピー ===== */}
          <div className="md:col-span-2">
            <motion.p {...head(0)} className="text-[11px] font-bold tracking-[0.32em] text-charcoal/40">
              OUR ECOSYSTEM
            </motion.p>
            <motion.h2
              id="ecosystem-heading"
              {...head(0.12)}
              className="mt-6 text-green font-semibold leading-[1.45] tracking-[-0.01em]"
              style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
            >
              3つの事業で、
              <br />
              地域に循環をつくる。
            </motion.h2>
            <motion.p {...head(0.24)} className="mt-8 text-[15px] md:text-[16px] leading-[2.15] text-charcoal/75">
              余白が生まれ、多様な働き方が広がり、
              <br />
              挑戦が動き出す。
              <br />
              新しい仕事や事業が生まれ、
              <br />
              また次の挑戦へとつながっていく。
            </motion.p>
          </div>

          {/* ===== 右 60%：大きな円環（PC） ===== */}
          <div className="md:col-span-3 hidden md:flex md:justify-center md:items-center">
            <div className="relative w-full max-w-[560px]" style={{ aspectRatio: "1 / 1" }}>
              <svg viewBox={`0 0 ${VB} ${VB}`} preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
                {/* 実線の主円弧（DX起点・時計回りに描画） */}
                <motion.path
                  d={ARC_SOLID}
                  fill="none"
                  stroke={NAVY}
                  strokeOpacity={0.5}
                  strokeWidth={1.25}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  initial={reduce ? false : { pathLength: 0 }}
                  animate={{ pathLength: inView ? 1 : 0 }}
                  transition={reduce ? { duration: 0 } : { duration: 2.4, ease, delay: 0.6 }}
                />
                {/* 破線の戻り円弧（次の挑戦へ→DX） */}
                <motion.path
                  d={ARC_DASH}
                  fill="none"
                  stroke={NAVY}
                  strokeOpacity={0.28}
                  strokeWidth={1.25}
                  strokeLinecap="round"
                  strokeDasharray="2 7"
                  vectorEffect="non-scaling-stroke"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={reduce ? { duration: 0 } : { duration: 1.2, ease, delay: 2.7 }}
                />
                {/* 完成後：円周を静かに巡る小さな点（発光なし） */}
                {!reduce && (
                  <motion.circle
                    cx={CX}
                    cy={CY}
                    r={R}
                    fill="none"
                    stroke={DX}
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    strokeDasharray={`2.5 ${CIRC - 2.5}`}
                    vectorEffect="non-scaling-stroke"
                    initial={{ opacity: 0, strokeDashoffset: 0 }}
                    animate={
                      inView
                        ? { opacity: 0.5, strokeDashoffset: [0, -CIRC] }
                        : { opacity: 0, strokeDashoffset: 0 }
                    }
                    transition={{
                      opacity: { duration: 1.2, ease, delay: 3.4 },
                      strokeDashoffset: { duration: 26, ease: "linear", repeat: Infinity, delay: 3.4 },
                    }}
                  />
                )}
                {/* 3事業ノード */}
                {NODES.map((n, i) => (
                  <motion.g
                    key={i}
                    style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                    initial={reduce ? false : { opacity: 0, scale: 0.3 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.3 }}
                    transition={reduce ? { duration: 0 } : { duration: 0.5, ease, delay: n.d }}
                  >
                    <circle cx={n.x} cy={n.y} r={10} fill="#f8f5ef" stroke={n.c} strokeOpacity={0.28} strokeWidth={1} vectorEffect="non-scaling-stroke" />
                    <circle cx={n.x} cy={n.y} r={5} fill={n.c} />
                  </motion.g>
                ))}
              </svg>

              {/* ラベル（円周上のアンカー→外側へ） */}
              {LABELS.map((l) => {
                const p = pt(l.angle);
                return (
                  <motion.div
                    key={l.key}
                    className="absolute"
                    style={{ left: pct(p.x), top: pct(p.y), transform: l.transform }}
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={reduce ? { duration: 0 } : { duration: 0.6, ease, delay: l.delay }}
                  >
                    {l.kind === "biz" ? <BizLabel l={l} /> : <WordLabel l={l} />}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ===== モバイル：縦積み（円を縮小しない） ===== */}
          <div className="md:hidden">
            <div className="relative pl-6">
              <span aria-hidden="true" className="absolute left-[3px] top-2 bottom-2 border-l border-charcoal/15" />
              <div className="flex flex-col gap-7">
                {/* DX */}
                <div className="relative">
                  <span aria-hidden="true" className="absolute -left-6 top-1.5 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: DX, boxShadow: "0 0 0 4px #f8f5ef" }} />
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold tracking-[0.14em] tabular-nums" style={{ color: DX, fontSize: 12 }}>01</span>
                    <span className="font-bold" style={{ color: NAVY, fontSize: 18 }}>DX</span>
                  </div>
                  <div className="mt-1 font-medium" style={{ color: "rgba(37,40,37,0.72)", fontSize: 14 }}>忙しさを、余白へ。</div>
                </div>

                {/* 余白（DX由来・青系淡色） */}
                <p className="text-[12px] font-medium tracking-[0.02em]" style={{ color: DX_SOFT }}>余白</p>

                {/* BPO */}
                <div className="relative">
                  <span aria-hidden="true" className="absolute -left-6 top-1.5 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: BPO, boxShadow: "0 0 0 4px #f8f5ef" }} />
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold tracking-[0.14em] tabular-nums" style={{ color: BPO, fontSize: 12 }}>02</span>
                    <span className="font-bold" style={{ color: NAVY, fontSize: 18 }}>BPO</span>
                  </div>
                  <div className="mt-1 font-medium" style={{ color: "rgba(37,40,37,0.72)", fontSize: 14 }}>人手不足を、多様な働き方へ。</div>
                </div>

                <p className="text-[12px] font-medium tracking-[0.02em]" style={{ color: BPO }}>多様な働き方</p>

                {/* 地域 */}
                <div className="relative">
                  <span aria-hidden="true" className="absolute -left-6 top-1.5 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: REGION, boxShadow: "0 0 0 4px #f8f5ef" }} />
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold tracking-[0.14em] tabular-nums" style={{ color: REGION, fontSize: 12 }}>03</span>
                    <span className="font-bold" style={{ color: NAVY, fontSize: 18 }}>地域プロデュース</span>
                  </div>
                  <div className="mt-1 font-medium" style={{ color: "rgba(37,40,37,0.72)", fontSize: 14 }}>地域課題を、挑戦のきっかけに。</div>
                </div>

                <p className="text-[12px] font-medium tracking-[0.02em]" style={{ color: REGION }}>挑戦</p>

                <p className="text-[12px] font-medium tracking-[0.02em]" style={{ color: MUTE }}>新しい仕事・事業が生まれる</p>
                <p className="flex items-center gap-1.5 text-[12px] font-medium tracking-[0.02em]" style={{ color: MUTE }}>
                  <span aria-hidden="true" style={{ color: DX }}>↑</span>次の挑戦へ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
