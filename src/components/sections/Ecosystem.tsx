"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const DX = "#3f6aa0";
const BPO = "#315a49";
const REGION = "#cc7a45";
const NAVY = "#183048";

/* ============================================================
   RIVER LOOP — 一本の細い流れが地域の循環をつくる図
   円の循環図ではなく、ゆったり蛇行する川。開いた形で「この先も続く」を残す。
   PC＝有機的な開いたループ / モバイル＝縦に流れる川（専用path）
   ============================================================ */

type Side = "r" | "l" | "a" | "b";
type Stop = {
  kind: "biz" | "flow";
  num?: string;
  name: string;
  catch?: string;
  color?: string;
  x: number; // viewBox 座標（ノードの位置）
  y: number;
  side: Side; // ラベルの寄せ方向
  maxW: number;
  lx?: number; // ラベルの左位置(%)を固定したい場合（モバイルの縦組み用）。未指定ならノードのx。
};

/* ---- PC: viewBox 560 x 620 ---- */
const PC_VB = { w: 560, h: 620 };
const PC_PATH =
  "M 330 78 C 373 94, 417 133, 415 190 C 411 258, 392 338, 410 400 " +
  "C 392 460, 355 512, 300 535 C 245 558, 175 545, 140 505 " +
  "C 108 468, 92 400, 108 320 C 120 250, 112 200, 135 155 " +
  "C 152 118, 178 96, 215 82";
const PC_STOPS: Stop[] = [
  { kind: "biz", num: "01", name: "DX", catch: "忙しさを、余白へ。", color: DX, x: 330, y: 78, side: "r", maxW: 160 },
  { kind: "flow", name: "余白", x: 415, y: 190, side: "l", maxW: 88 },
  { kind: "biz", num: "02", name: "BPO", catch: "人手不足を、多様な働き方へ。", color: BPO, x: 410, y: 400, side: "l", maxW: 176 },
  { kind: "flow", name: "多様な働き方", x: 300, y: 535, side: "r", maxW: 120 },
  { kind: "biz", num: "03", name: "地域プロデュース", catch: "地域課題を、挑戦のきっかけに。", color: REGION, x: 140, y: 505, side: "b", maxW: 200 },
  { kind: "flow", name: "挑戦", x: 108, y: 320, side: "l", maxW: 80 },
  { kind: "flow", name: "新しい仕事・事業が生まれる", x: 135, y: 155, side: "l", maxW: 130 },
  { kind: "flow", name: "次の余白へ", x: 215, y: 82, side: "a", maxW: 110 },
];

/* ---- モバイル: viewBox 300 x 1150（川は左を縦に蛇行、ラベルは右） ---- */
const SP_VB = { w: 300, h: 1150 };
const SP_PATH =
  "M 95 30 C 70 90, 80 150, 75 200 C 70 250, 118 285, 110 330 " +
  "C 102 385, 62 410, 70 460 C 78 525, 118 545, 105 600 " +
  "C 95 660, 70 690, 75 730 C 80 795, 102 805, 100 850 " +
  "C 98 900, 76 915, 80 960 C 83 1015, 100 1045, 96 1110";
const SP_LX = 46; // モバイル：ラベルは川の最大右振れより右の固定カラムに揃える
const SP_STOPS: Stop[] = [
  { kind: "biz", num: "01", name: "DX", catch: "忙しさを、余白へ。", color: DX, x: 95, y: 80, side: "r", maxW: 190, lx: SP_LX },
  { kind: "flow", name: "余白", x: 75, y: 200, side: "r", maxW: 190, lx: SP_LX },
  { kind: "biz", num: "02", name: "BPO", catch: "人手不足を、多様な働き方へ。", color: BPO, x: 110, y: 330, side: "r", maxW: 190, lx: SP_LX },
  { kind: "flow", name: "多様な働き方", x: 70, y: 460, side: "r", maxW: 190, lx: SP_LX },
  { kind: "biz", num: "03", name: "地域プロデュース", catch: "地域課題を、挑戦のきっかけに。", color: REGION, x: 105, y: 600, side: "r", maxW: 190, lx: SP_LX },
  { kind: "flow", name: "挑戦", x: 75, y: 730, side: "r", maxW: 190, lx: SP_LX },
  { kind: "flow", name: "新しい仕事・事業が生まれる", x: 100, y: 850, side: "r", maxW: 190, lx: SP_LX },
  { kind: "flow", name: "次の余白へ", x: 80, y: 960, side: "r", maxW: 190, lx: SP_LX },
];

/* ラベル出現の遅延（川が流れる順に）*/
const STOP_DELAY = [0.35, 0.85, 1.25, 1.6, 1.95, 2.25, 2.6, 2.9];

function labelTransform(side: Side): { transform: string; align: "left" | "right" | "center" } {
  switch (side) {
    case "r":
      return { transform: "translate(15px, -50%)", align: "left" };
    case "l":
      return { transform: "translate(calc(-100% - 15px), -50%)", align: "right" };
    case "a":
      return { transform: "translate(-50%, calc(-100% - 16px))", align: "center" };
    case "b":
      return { transform: "translate(-50%, 16px)", align: "center" };
  }
}

function StopLabels({ stops, vb, inView, reduce }: { stops: Stop[]; vb: { w: number; h: number }; inView: boolean; reduce: boolean }) {
  return (
    <>
      {stops.map((s, i) => {
        const { transform, align } = labelTransform(s.side);
        const delay = STOP_DELAY[i] ?? 0;
        const justify = align === "right" ? "flex-end" : align === "center" ? "center" : "flex-start";
        return (
          <motion.div
            key={s.name}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 8 }}
            transition={reduce ? { duration: 0 } : { duration: 0.7, ease, delay }}
            className="absolute"
            style={{ left: s.lx != null ? `${s.lx}%` : `${(s.x / vb.w) * 100}%`, top: `${(s.y / vb.h) * 100}%`, transform, maxWidth: s.maxW, textAlign: align }}
          >
            {s.kind === "biz" ? (
              <>
                <div className="flex items-baseline gap-1.5 whitespace-nowrap" style={{ justifyContent: justify }}>
                  <span className="font-bold tracking-[0.14em] tabular-nums" style={{ color: s.color, fontSize: 12 }}>{s.num}</span>
                  <span className="font-bold tracking-[-0.01em]" style={{ color: NAVY, fontSize: 17 }}>{s.name}</span>
                </div>
                <div className="mt-1 leading-[1.55]" style={{ color: "rgba(37,40,37,0.62)", fontSize: 12.5 }}>{s.catch}</div>
              </>
            ) : (
              <div className="leading-[1.5]" style={{ color: "rgba(37,40,37,0.5)", fontSize: 12.5, letterSpacing: "0.02em" }}>{s.name}</div>
            )}
          </motion.div>
        );
      })}
    </>
  );
}

function RiverSvg({ path, stops, vb, gradId, gradFrom, gradTo, inView, reduce }: {
  path: string;
  stops: Stop[];
  vb: { w: number; h: number };
  gradId: string;
  gradFrom: { x: number; y: number };
  gradTo: { x: number; y: number };
  inView: boolean;
  reduce: boolean;
}) {
  return (
    <svg viewBox={`0 0 ${vb.w} ${vb.h}`} preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1={gradFrom.x} y1={gradFrom.y} x2={gradTo.x} y2={gradTo.y}>
          <stop offset="0" stopColor={DX} />
          <stop offset="0.52" stopColor={BPO} />
          <stop offset="1" stopColor={REGION} />
        </linearGradient>
      </defs>

      {/* 川床（ごく淡い静的な下地） */}
      <path d={path} fill="none" stroke="rgba(37,40,37,0.10)" strokeWidth={1.5} strokeLinecap="round" vectorEffect="non-scaling-stroke" />

      {/* 流れ（描画アニメ） */}
      <motion.path
        d={path}
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeOpacity={0.85}
        vectorEffect="non-scaling-stroke"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={reduce ? { duration: 0 } : { duration: 2.6, ease, delay: 0.2 }}
      />

      {/* 完成後：線上を静かに流れる光の点 */}
      <motion.path
        d={path}
        fill="none"
        stroke={DX}
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeDasharray="2.5 180"
        vectorEffect="non-scaling-stroke"
        className="eco-river-flow"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: inView ? 0.5 : 0 }}
        transition={reduce ? { duration: 0 } : { duration: 1.2, ease, delay: 3.0 }}
      />

      {/* ノード */}
      {stops.map((s, i) => {
        const delay = (STOP_DELAY[i] ?? 0) - 0.05;
        const t = reduce ? { duration: 0 } : { duration: 0.5, ease, delay };
        return s.kind === "biz" ? (
          <motion.g key={s.name} style={{ transformOrigin: `${s.x}px ${s.y}px` }} initial={reduce ? false : { opacity: 0, scale: 0.4 }} animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.4 }} transition={t}>
            <circle cx={s.x} cy={s.y} r={9} fill="none" stroke={s.color} strokeOpacity={0.28} strokeWidth={1} vectorEffect="non-scaling-stroke" />
            <circle cx={s.x} cy={s.y} r={4.5} fill={s.color} />
          </motion.g>
        ) : (
          <motion.circle key={s.name} cx={s.x} cy={s.y} r={2.6} fill="rgba(37,40,37,0.32)" style={{ transformOrigin: `${s.x}px ${s.y}px` }} initial={reduce ? false : { opacity: 0, scale: 0.4 }} animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.4 }} transition={t} />
        );
      })}
    </svg>
  );
}

export function Ecosystem() {
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
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* 左：コピー */}
          <div className="lg:col-span-5 lg:pr-6">
            <motion.p {...head(0)} className="text-[11px] font-bold tracking-[0.32em] text-charcoal/40">
              OUR ECOSYSTEM
            </motion.p>
            <motion.h2
              id="ecosystem-heading"
              {...head(0.12)}
              className="mt-6 text-green font-semibold leading-[1.45] tracking-[-0.01em]"
              style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
            >
              3つの事業で、<br className="hidden sm:block" />地域に循環をつくる。
            </motion.h2>
            <motion.p {...head(0.24)} className="mt-8 max-w-md text-[15px] md:text-[16px] leading-[2.1] text-charcoal/75">
              余白が生まれ、多様な働き方が広がり、挑戦が動き出す。新しい仕事や事業が生まれ、また次の余白へとつながっていく。
            </motion.p>
          </div>

          {/* 右：RIVER LOOP */}
          <div className="lg:col-span-7">
            {/* PC */}
            <div className="relative mx-auto hidden md:block" style={{ maxWidth: 620, aspectRatio: `${PC_VB.w} / ${PC_VB.h}` }}>
              <RiverSvg path={PC_PATH} stops={PC_STOPS} vb={PC_VB} gradId="eco-river-pc" gradFrom={{ x: 330, y: 78 }} gradTo={{ x: 180, y: 540 }} inView={inView} reduce={reduce} />
              <StopLabels stops={PC_STOPS} vb={PC_VB} inView={inView} reduce={reduce} />
            </div>
            {/* モバイル */}
            <div className="relative mx-auto md:hidden" style={{ maxWidth: 380, aspectRatio: `${SP_VB.w} / ${SP_VB.h}` }}>
              <RiverSvg path={SP_PATH} stops={SP_STOPS} vb={SP_VB} gradId="eco-river-sp" gradFrom={{ x: 95, y: 30 }} gradTo={{ x: 90, y: 1000 }} inView={inView} reduce={reduce} />
              <StopLabels stops={SP_STOPS} vb={SP_VB} inView={inView} reduce={reduce} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
