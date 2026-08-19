"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const DX = "#3f6aa0";
const BPO = "#315a49";
const REGION = "#cc7a45";
const NAVY = "#183048";
const MUTE = "rgba(37,40,37,0.58)";
const MUTE2 = "rgba(37,40,37,0.48)";

/* ============================================================
   OUR ECOSYSTEM — CIRCLE / FLYWHEEL 版
   細いリング＋中心コピーの周囲に3事業を配置し、循環を感じさせる。
   トーンはRIVER版に準拠：細線・囲みなし・色数最小・大きな余白・編集的。
   PC＝円のフライホイール（絶対配置）/ モバイル＝縦積み（円を縮小しない）
   ============================================================ */

type Biz = {
  num: string;
  name: string;
  catch: string;
  color: string;
  services: string[];
  note: string;
  href: string;
};

const BIZ: Biz[] = [
  {
    num: "01",
    name: "DX事業",
    catch: "企業に「余白」を生み出す。",
    color: DX,
    services: [
      "AI導入支援",
      "RPA・業務自動化",
      "システム開発・導入支援",
      "AI・DXコンサル・顧問",
      "AI研修・ワークショップ",
    ],
    note: "テクノロジーで人の時間を生み出し、人が本来やるべき仕事に集中できる環境へ。",
    href: "/service-dx",
  },
  {
    num: "02",
    name: "BPO（代行事業）",
    catch: "地域に雇用を生み出す。",
    color: BPO,
    services: [
      "カスタマーサクセス代行",
      "営業サポート代行",
      "経理・事務代行",
      "Web・SNS運用代行",
    ],
    note: "人手不足を解決し、地域に雇用を生み出す仕組みへ。",
    href: "/service-bpo",
  },
  {
    num: "03",
    name: "地域プロデュース",
    catch: "地域に挑戦のきっかけを生み出す。",
    color: REGION,
    services: [
      "西尾キャリアLab（若者のキャリア支援・挑戦の場づくり）",
      "西尾筋肉祭り（挑戦と努力の素晴らしさを伝える地域イベント）",
      "西尾働き方図鑑（学生と企業取材・体験を通じて、西尾で働く大人を増やす）",
    ],
    note: "",
    href: "/service-produce",
  },
];

const FUTURE = [
  "人がやらなくてもいい仕事が減る",
  "生まれた時間で価値ある仕事に集中",
  "業務を任せて企業が成長・安定",
  "多様な働き方が増え、地域に人が集まる",
  "挑戦が生まれ、共創が広がる豊かな地域へ",
];

/* ---- PC フライホイール座標（viewBox 1080 x 840）---- */
const VB = { w: 1080, h: 840 };
const CX = 540;
const CY = 400;
const R = 190;
/* リング上のノード：DX=左上(225°) / BPO=右上(315°) / 地域=下(90°) */
const NODE = {
  DX: { x: 406, y: 266 },
  BPO: { x: 674, y: 266 },
  REGION: { x: 540, y: 590 },
};
/* DX→BPO→地域 の順に描かれる向き（角度が増える＝時計回り） */
const RING_PATH =
  "M 406 266 A 190 190 0 0 1 674 534 A 190 190 0 0 1 406 266";

const px = (x: number) => `${(x / VB.w) * 100}%`;
const py = (y: number) => `${(y / VB.h) * 100}%`;

/* 各事業ブロックの配置（中心に近い角をアンカーにして外側へ展開） */
type Place = {
  ax: number;
  ay: number;
  transform: string;
  align: "left" | "right" | "center";
  width: number;
  delay: number;
};
const PLACE: Place[] = [
  { ax: 356, ay: 236, transform: "translate(-100%, -100%)", align: "right", width: 300, delay: 1.15 }, // DX 左上
  { ax: 724, ay: 236, transform: "translate(0, -100%)", align: "left", width: 300, delay: 1.5 }, // BPO 右上
  { ax: 540, ay: 626, transform: "translate(-50%, 0)", align: "center", width: 392, delay: 1.85 }, // 地域 下
];

function BizBlock({ b, align, delayFactor, reduce, inView, compact }: {
  b: Biz;
  align: "left" | "right" | "center";
  delayFactor: number;
  reduce: boolean;
  inView: boolean;
  compact: boolean; // PC=true（控えめサイズ）
}) {
  const justify = align === "right" ? "flex-end" : align === "center" ? "center" : "flex-start";
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
      transition={reduce ? { duration: 0 } : { duration: 0.7, ease, delay: delayFactor }}
      style={{ textAlign: align }}
    >
      <div className="flex items-baseline gap-2" style={{ justifyContent: justify }}>
        <span className="font-bold tracking-[0.14em] tabular-nums" style={{ color: b.color, fontSize: 12 }}>{b.num}</span>
        <span className="font-bold tracking-[-0.01em]" style={{ color: NAVY, fontSize: compact ? 17 : 19 }}>{b.name}</span>
      </div>
      <div className="mt-1.5 font-medium leading-[1.5]" style={{ color: "rgba(37,40,37,0.72)", fontSize: compact ? 13 : 14 }}>{b.catch}</div>
      <ul className="mt-3 leading-[1.85]" style={{ color: MUTE, fontSize: compact ? 12 : 13 }}>
        {b.services.map((s) => (
          <li key={s} style={{ listStyle: "none" }}>{s}</li>
        ))}
      </ul>
      {b.note ? (
        <p className="mt-3 leading-[1.7]" style={{ color: MUTE2, fontSize: compact ? 11.5 : 12.5, maxWidth: align === "center" ? 340 : undefined, marginLeft: align === "center" ? "auto" : undefined, marginRight: align === "center" ? "auto" : undefined }}>{b.note}</p>
      ) : null}
      <Link
        href={b.href}
        className="mt-3 inline-block font-bold border-b transition-colors"
        style={{ color: NAVY, borderColor: "rgba(24,48,72,0.35)", fontSize: 12 }}
      >
        詳しく →
      </Link>
    </motion.div>
  );
}

function FutureFlow({ inView, reduce, baseDelay }: { inView: boolean; reduce: boolean; baseDelay: number }) {
  return (
    <div>
      <motion.p
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 12 }}
        transition={reduce ? { duration: 0 } : { duration: 0.7, ease, delay: baseDelay }}
        className="text-[11px] font-bold tracking-[0.28em] text-charcoal/40"
      >
        この循環が生む未来
      </motion.p>
      <div className="mt-6 flex flex-col md:flex-row md:flex-wrap md:items-center gap-x-3 gap-y-3">
        {FUTURE.map((f, i) => (
          <div key={f} className="flex md:items-center gap-3">
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 8 }}
              transition={reduce ? { duration: 0 } : { duration: 0.55, ease, delay: baseDelay + 0.2 + i * 0.18 }}
              className="leading-[1.7] text-charcoal/80"
              style={{ fontSize: 14 }}
            >
              {f}
            </motion.span>
            {i < FUTURE.length - 1 ? (
              <motion.span
                aria-hidden="true"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={reduce ? { duration: 0 } : { duration: 0.4, ease, delay: baseDelay + 0.28 + i * 0.18 }}
                className="text-region/70 select-none"
                style={{ fontSize: 12 }}
              >
                <span className="hidden md:inline">→</span>
                <span className="md:hidden ml-[3px] block h-4 border-l border-region/40" />
              </motion.span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function EcosystemCircle() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const rawInView = useInView(ref, { once: true, amount: 0.12 });
  const inView = reduce ? true : rawInView;

  const head = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: inView ? 1 : 0, y: inView ? 0 : 16 },
    transition: reduce ? { duration: 0 } : { duration: 0.9, ease, delay },
  });

  const nodes = [
    { p: NODE.DX, c: DX, d: 1.05 },
    { p: NODE.BPO, c: BPO, d: 1.4 },
    { p: NODE.REGION, c: REGION, d: 1.75 },
  ];

  return (
    <section ref={ref} aria-labelledby="ecosystem-heading" className="py-24 md:py-36 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1200px]">
        {/* 見出し */}
        <div className="max-w-3xl">
          <motion.p {...head(0)} className="text-[11px] font-bold tracking-[0.32em] text-charcoal/40">
            OUR ECOSYSTEM
          </motion.p>
          <motion.h2
            id="ecosystem-heading"
            {...head(0.12)}
            className="mt-6 text-green font-semibold leading-[1.45] tracking-[-0.01em]"
            style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
          >
            DX × BPO × 地域プロデュースで、<br className="hidden sm:block" />挑戦と共創が循環する豊かな地域を創る。
          </motion.h2>
          <motion.p {...head(0.24)} className="mt-7 max-w-xl text-[15px] md:text-[16px] leading-[2.1] text-charcoal/75">
            DXで人がやらなくてもいい仕事を減らし、BPOで、人手不足に外注という選択肢を。
          </motion.p>
        </div>

        {/* ===== PC：円のフライホイール ===== */}
        <div className="mt-16 hidden md:block">
          <div className="relative mx-auto" style={{ maxWidth: 1000, aspectRatio: `${VB.w} / ${VB.h}` }}>
            <svg viewBox={`0 0 ${VB.w} ${VB.h}`} preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <linearGradient id="eco-circle-grad" gradientUnits="userSpaceOnUse" x1={NODE.DX.x} y1={NODE.DX.y} x2={NODE.REGION.x} y2={NODE.REGION.y}>
                  <stop offset="0" stopColor={DX} />
                  <stop offset="0.5" stopColor={BPO} />
                  <stop offset="1" stopColor={REGION} />
                </linearGradient>
              </defs>

              {/* リング下地（ごく淡い） */}
              <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(37,40,37,0.10)" strokeWidth={1.25} vectorEffect="non-scaling-stroke" />

              {/* リング本体（DX→BPO→地域の向きに描画） */}
              <motion.path
                d={RING_PATH}
                fill="none"
                stroke="url(#eco-circle-grad)"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeOpacity={0.85}
                vectorEffect="non-scaling-stroke"
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: inView ? 1 : 0 }}
                transition={reduce ? { duration: 0 } : { duration: 2.2, ease, delay: 0.7 }}
              />

              {/* 完成後：リング上を巡る小さな光点 */}
              <motion.circle
                cx={CX}
                cy={CY}
                r={R}
                fill="none"
                stroke={DX}
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeDasharray="3 1191"
                vectorEffect="non-scaling-stroke"
                className="eco-circle-flow"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: inView ? 0.55 : 0 }}
                transition={reduce ? { duration: 0 } : { duration: 1.2, ease, delay: 3.0 }}
              />

              {/* ノード */}
              {nodes.map((n, i) => (
                <motion.g
                  key={i}
                  style={{ transformOrigin: `${n.p.x}px ${n.p.y}px` }}
                  initial={reduce ? false : { opacity: 0, scale: 0.4 }}
                  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.4 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.5, ease, delay: n.d }}
                >
                  <circle cx={n.p.x} cy={n.p.y} r={9} fill="#f8f5ef" stroke={n.c} strokeOpacity={0.3} strokeWidth={1} vectorEffect="non-scaling-stroke" />
                  <circle cx={n.p.x} cy={n.p.y} r={4.5} fill={n.c} />
                </motion.g>
              ))}
            </svg>

            {/* 中心コピー */}
            <motion.div
              className="absolute"
              style={{ left: px(CX), top: py(CY), transform: "translate(-50%, -50%)", width: 250, textAlign: "center" }}
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.96 }}
              transition={reduce ? { duration: 0 } : { duration: 0.8, ease, delay: 0.5 }}
            >
              <p className="text-green font-semibold leading-[1.7] tracking-[-0.01em]" style={{ fontSize: 17 }}>
                企業に「余白」と<br />地域に「多様な働き方」を<br />生み出す。
              </p>
            </motion.div>

            {/* 3事業ブロック */}
            {BIZ.map((b, i) => {
              const p = PLACE[i];
              return (
                <div
                  key={b.num}
                  className="absolute"
                  style={{ left: px(p.ax), top: py(p.ay), transform: p.transform, width: p.width }}
                >
                  <BizBlock b={b} align={p.align} delayFactor={p.delay} reduce={reduce} inView={inView} compact />
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== モバイル：縦積み（円を縮小しない） ===== */}
        <div className="mt-12 md:hidden">
          {/* 中心コピー */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 12 }}
            transition={reduce ? { duration: 0 } : { duration: 0.7, ease, delay: 0.4 }}
            className="relative pl-6"
          >
            <p className="text-green font-semibold leading-[1.8] tracking-[-0.01em]" style={{ fontSize: 18 }}>
              企業に「余白」と地域に「多様な働き方」を生み出す。
            </p>
          </motion.div>

          {/* 縦の細線＋ノードで循環を示す */}
          <div className="relative mt-8 pl-6">
            <span aria-hidden="true" className="absolute left-[3px] top-1 bottom-1 border-l border-charcoal/15" />
            <div className="flex flex-col gap-9">
              {BIZ.map((b, i) => (
                <div key={b.num} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-6 top-1.5 h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: b.color, boxShadow: "0 0 0 4px #f8f5ef" }}
                  />
                  <BizBlock b={b} align="left" delayFactor={0.5 + i * 0.25} reduce={reduce} inView={inView} compact={false} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 中盤タグライン */}
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 12 }}
          transition={reduce ? { duration: 0 } : { duration: 0.8, ease, delay: 2.3 }}
          className="mt-16 md:mt-20 mx-auto max-w-2xl text-center text-green font-medium leading-[1.9] tracking-[-0.01em]"
          style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
        >
          地域の魅力や挑戦が広がり、多様な人材と企業が集まる地域へ。
        </motion.p>

        {/* この循環が生む未来 */}
        <div className="mt-16 md:mt-20 border-t border-charcoal/10 pt-10">
          <FutureFlow inView={inView} reduce={reduce} baseDelay={2.5} />
        </div>
      </div>
    </section>
  );
}
