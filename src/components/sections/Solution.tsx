"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({
  children,
  delay = 0,
  className = "",
  from = "bottom",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  from?: "bottom" | "left" | "right" | "scale";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const initial =
    from === "left"
      ? { opacity: 0, x: -40, y: 0 }
      : from === "right"
      ? { opacity: 0, x: 40, y: 0 }
      : from === "scale"
      ? { opacity: 0, scale: 0.94, y: 0 }
      : { opacity: 0, x: 0, y: 32 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : initial}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

const steps = [
  {
    num: "01",
    tag: "DX支援 / Core Shift",
    title: (
      <>
        やらされ仕事を、<br />消す。
      </>
    ),
    narrative: (
      <>
        AI・RPA・Make・GASで、繰り返し発生する作業を徹底的に自動化。<br />
        「この作業、本当に人じゃないといけないの？」という問いから始め、<br />
        <strong className="text-[#1a1a2e] font-bold">ヒアリング→業務整理→要件定義→導入→伴走</strong>まで一気通貫で伴走します。
      </>
    ),
    output: "業務時間 最大90%削減",
    result: "「人がやるべき仕事」だけが残る",
    active: false,
  },
  {
    num: "02",
    tag: "BPO",
    title: (
      <>
        残った仕事を、<br />地域の人へ。
      </>
    ),
    narrative: (
      <>
        自動化しきれない業務・繁忙期のサポート・専門スキルが必要な業務は、<br />
        地域の人材が担います。<br />
        主婦・学生・シニア・副業人材が<strong className="text-[#1a1a2e] font-bold">自分のペースで、スキルを活かして</strong>働ける場をつくる。
      </>
    ),
    output: "地域雇用の創出・柔軟な働き方の実現",
    result: "「地元で挑戦できる」感覚",
    active: true,
  },
  {
    num: "03",
    tag: "地域プロデュース",
    title: (
      <>
        挑戦の循環を、<br />西尾から。
      </>
    ),
    narrative: (
      <>
        地域メディア・就活コミュニティ・企業×学生イベントを通じて、<br />
        「地元で挑戦したい」若者と「一緒につくりたい」企業をつなぐ。<br />
        <strong className="text-[#1a1a2e] font-bold">仕事が生まれ、人が残り、まちが動く</strong>——その循環を育てます。
      </>
    ),
    output: "地域に「挑戦と共創」の文化が根づく",
    result: "西尾から全国へ広がる循環モデル",
    active: false,
  },
];

export function Solution() {
  return (
    <section id="solution" className="bg-[#f7f6f4] py-[120px] px-5 md:px-20 overflow-hidden">
      <div className="max-w-[900px] mx-auto">

        {/* Header */}
        <FadeIn>
          <p className="text-[10px] font-black tracking-[0.32em] uppercase text-[#00c47a] mb-5">
            Solution
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2
            className="font-black text-[#050466] leading-[1.15] tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
          >
            3事業は、ひとつのストーリー。
          </h2>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="text-[15px] text-[#050466]/55 leading-[2.2] max-w-[58ch]">
            DX支援・BPO・地域プロデュースは、バラバラのサービスではありません。<br />
            前のステップのアウトプットが、次のステップのインプットになる——<br />
            一本のストーリーとして設計されています。
          </p>
        </FadeIn>

        {/* Story Thread */}
        <div className="relative mt-16">
          {/* Vertical connector line */}
          <div
            className="absolute left-7 top-14 bottom-14 w-[2px] pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, #00c47a 0%, rgba(0,196,122,0.4) 50%, rgba(0,196,122,0.1) 100%)",
            }}
          />

          {steps.map((step, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.12}>
              <div className="grid gap-10 mb-0" style={{ gridTemplateColumns: "60px 1fr" }}>
                {/* Badge */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-[13px] font-black tracking-[0.05em] text-white shrink-0 relative z-10 ${
                    step.active ? "bg-[#00c47a]" : "bg-[#050466]"
                  }`}
                  style={{ boxShadow: "0 0 0 6px #f7f6f4" }}
                >
                  {step.num}
                </div>

                {/* Body */}
                <div className={i < steps.length - 1 ? "pb-16" : "pb-0"}>
                  <span className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase text-[#050466] bg-[#050466]/[0.07] px-3.5 py-1.5 rounded-full mb-3.5">
                    {step.tag}
                  </span>
                  <h3
                    className="font-black text-[#050466] leading-[1.25] tracking-[-0.03em] mb-4"
                    style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-[#050466]/55 leading-[2.2] max-w-[60ch] mb-6">
                    {step.narrative}
                  </p>

                  {/* Chain Output */}
                  <div className="flex items-center gap-3 bg-white border border-[#e0ddd8] rounded-xl px-5 py-4 max-w-[520px]">
                    <div className="flex-1">
                      <p className="text-[9px] font-black tracking-[0.25em] uppercase text-[#050466]/40 mb-1">
                        Output
                      </p>
                      <p className="text-[14px] font-black text-[#050466]">
                        {step.output}
                      </p>
                    </div>
                    <span className="text-[20px] text-[#00c47a] opacity-60">→</span>
                    <div className="flex-1">
                      <p className="text-[9px] font-black tracking-[0.25em] uppercase text-[#050466]/40 mb-1">
                        生まれるもの
                      </p>
                      <p className="text-[14px] font-black text-[#00c47a]">
                        {step.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Final Outcome: The Cycle */}
        <FadeIn delay={0.2} from="scale">
          <div
            className="mt-16 rounded-3xl px-12 md:px-[72px] py-16 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #06091a 0%, #050466 100%)",
            }}
          >
            {/* Radial glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "-150px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "500px",
                height: "500px",
                background:
                  "radial-gradient(circle, rgba(0,196,122,0.12) 0%, transparent 65%)",
              }}
            />

            {/* Cycle label */}
            <div className="inline-flex items-center gap-3 mb-7 relative z-10">
              <span className="w-2 h-2 rounded-full bg-[#00c47a]" />
              <p className="text-[11px] font-black tracking-[0.28em] uppercase text-[#00c47a]">
                The Cycle
              </p>
              <span className="w-2 h-2 rounded-full bg-[#00c47a]" />
            </div>

            {/* Headline */}
            <h3
              className="font-black text-white leading-[1.4] tracking-[-0.03em] mb-5 relative z-10"
              style={{ fontSize: "clamp(22px, 3.2vw, 42px)" }}
            >
              「やらされ仕事」がなくなり、
              <em className="not-italic text-[#00c47a]">人が本来の仕事</em>へ。
              <br />
              地域に
              <em className="not-italic text-[#00c47a]">挑戦と共創の循環</em>
              が生まれる。
            </h3>

            {/* Sub */}
            <p className="text-[15px] text-white/55 leading-[2.0] relative z-10">
              3つの事業がひとつの循環として機能するとき、<br />
              企業も、地域の人も、まちも、一緒に動き出します。
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
