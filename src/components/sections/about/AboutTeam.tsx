"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function AboutTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const photoRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="bg-[#09090f]">

      {/* フルブリード写真 */}
      <div ref={photoRef} className="relative overflow-hidden" style={{ height: "65vh" }}>
        <motion.div className="absolute inset-0 scale-[1.08]" style={{ y: photoY }}>
          <Image
            src="/photos/service-bpo.png"
            alt="Moments Shareのチーム"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{
            background: "rgba(6,9,24,0.35)"
          }} />
        </motion.div>
      </div>

      {/* テキスト */}
      <div ref={ref} className="max-w-[900px] mx-auto px-8 md:px-24 pt-20 md:pt-28 pb-32 md:pb-52">
        <motion.p
          className="text-[10px] font-bold tracking-[0.32em] uppercase text-white/20 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9 }}
        >
          Founder
        </motion.p>

        <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p className="font-black text-white text-[18px] tracking-[-0.01em] mb-1">中根 竜</p>
            <p className="text-[11px] text-white/25 tracking-[0.06em] mb-1">Ryu Nakane</p>
            <p className="text-[11px] text-green/55 font-bold tracking-[0.1em] uppercase">Founder &amp; CEO</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <p className="text-[16px] text-white/50 leading-[2.4]">
              群馬・シンガポールを経て西尾へ。
              100社以上の企業支援で見えた「人が疲弊する構造」と「DXが変える可能性」。
              眠れない夜を越えてたどり着いた答えが、挑戦と共創が循環する地域をつくるというこの一文だった。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
