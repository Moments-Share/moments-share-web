"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import type React from "react";

const CX = 350, CY = 340, R = 195;
const CIRC = 2 * Math.PI * R;

const nodes = [
  { angle: -90,  label: "DX支援",          sub: "業務自動化・AI",   color: "#12a0ae", strong: true  },
  { angle: -30,  label: "余白が生まれる",   sub: "人の時間を解放",   color: "#232a4d", strong: false },
  { angle:  30,  label: "BPO",              sub: "地域人材へ委託",   color: "#232a4d", strong: true  },
  { angle:  90,  label: "地域雇用創出",     sub: "自分らしい働き方", color: "#12a0ae", strong: false },
  { angle: 150,  label: "地域プロデュース", sub: "挑戦の連鎖",       color: "#12a0ae", strong: true  },
  { angle: 210,  label: "企業が成長する",   sub: "次のDXへ循環",    color: "#12a0ae", strong: false },
];

function pos(angle: number, r = R) {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

function anchor(x: number) {
  if (x > CX + 30) return "start";
  if (x < CX - 30) return "end";
  return "middle";
}

export function Flow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section id="flow" className="py-section bg-[#f7f5ef] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8 md:px-20">

        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">

          {/* 左: テキスト */}
          <div>
            <FadeIn>
              <p className="text-[10px] font-black tracking-[0.32em] uppercase text-green mb-6">HOW IT WORKS</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-black text-navy leading-[1.12] tracking-[-0.04em] mb-10"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                私たちの仕組みは、<br />シンプルです。
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4 text-[15px] text-ink/55 leading-[2.0]">
                <p>ITで繰り返し作業をなくし、企業に時間をつくります。</p>
                <p>空いた仕事を地域の人が担い、地元に雇用をつくります。</p>
                <p className="text-navy font-bold">地域が育つと、また新しい仕事が生まれます。</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="mt-14">
                {[
                  { verb: "時間をつくり",      service: "DX支援"       },
                  { verb: "人をつなぎ",         service: "BPO"          },
                  { verb: "挑戦を広げる",       service: "地域プロデュース" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 py-5 border-t border-black/[0.07]">
                    <span className="text-[10px] font-black tracking-[0.1em] uppercase text-green shrink-0 w-28">
                      {item.service}
                    </span>
                    <span
                      className="font-black text-navy tracking-[-0.02em]"
                      style={{ fontSize: "clamp(16px, 1.8vw, 22px)" }}
                    >
                      {item.verb}
                    </span>
                  </div>
                ))}
                <div className="border-t border-black/[0.07]" />
              </div>
            </FadeIn>
          </div>

          {/* 右: SVG循環図 */}
          <div ref={ref} className="flex items-center justify-center">
            <div className="w-full max-w-[480px] aspect-square">
              <svg viewBox="0 0 700 680" className="w-full h-full" aria-hidden>

                <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(5,4,102,0.08)" strokeWidth="1" />

                <motion.circle
                  cx={CX} cy={CY} r={R}
                  fill="none"
                  stroke="rgba(0,196,122,0.55)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray={`${CIRC}`}
                  initial={{ strokeDashoffset: CIRC }}
                  animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: CIRC }}
                  transition={{ duration: 2.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
                  style={{ transformOrigin: `${CX}px ${CY}px`, rotate: "-90deg" } as React.CSSProperties}
                />

                {nodes.map((node, i) => {
                  const p    = pos(node.angle);
                  const lp   = pos(node.angle, R + 58);
                  const ta   = anchor(p.x);

                  return (
                    <g key={i}>
                      <motion.line
                        x1={pos(node.angle, R + 9).x}  y1={pos(node.angle, R + 9).y}
                        x2={pos(node.angle, R + 22).x} y2={pos(node.angle, R + 22).y}
                        stroke="rgba(5,4,102,0.15)" strokeWidth="1"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.14 }}
                      />
                      <motion.circle
                        cx={p.x} cy={p.y} r={5}
                        fill={node.color}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.35, delay: 0.4 + i * 0.14 }}
                        style={{ transformOrigin: `${p.x}px ${p.y}px` } as React.CSSProperties}
                      />
                      <motion.text
                        x={lp.x} y={lp.y - 7} textAnchor={ta}
                        fill={node.strong ? "rgba(5,4,102,0.80)" : "rgba(5,4,102,0.42)"}
                        fontSize="10.5"
                        fontWeight={node.strong ? "700" : "400"}
                        letterSpacing="0.04em"
                        fontFamily="sans-serif"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.14 }}
                      >
                        {node.label}
                      </motion.text>
                      <motion.text
                        x={lp.x} y={lp.y + 10} textAnchor={ta}
                        fill="rgba(5,4,102,0.22)"
                        fontSize="8.5" letterSpacing="0.03em"
                        fontFamily="sans-serif"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.58 + i * 0.14 }}
                      >
                        {node.sub}
                      </motion.text>
                    </g>
                  );
                })}

                <motion.text
                  x={CX} y={CY - 9} textAnchor="middle"
                  fill="rgba(5,4,102,0.40)"
                  fontSize="11" fontWeight="700" letterSpacing="0.14em"
                  fontFamily="sans-serif"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                >
                  西尾から
                </motion.text>
                <motion.text
                  x={CX} y={CY + 10} textAnchor="middle"
                  fill="rgba(5,4,102,0.18)"
                  fontSize="9" letterSpacing="0.12em"
                  fontFamily="sans-serif"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 2.1 }}
                >
                  NISHIO
                </motion.text>

              </svg>
            </div>
          </div>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-24 pt-16 border-t border-black/[0.07]">
            <p
              className="font-black text-navy/65 leading-[1.45] tracking-[-0.025em]"
              style={{ fontSize: "clamp(20px, 2.8vw, 38px)" }}
            >
              時間をつくり、人をつなぎ、<br />
              <span className="text-navy">挑戦が生まれる地域をつくります。</span>
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
