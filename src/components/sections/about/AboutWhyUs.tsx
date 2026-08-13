"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const chapters = [
  {
    place: "群馬・シンガポール",
    copy: "地元を出て、初めて地元の価値がわかった。",
    photo: null,
    dark: false,
  },
  {
    place: "100社以上の支援",
    copy: "繰り返し見た光景がある。人が疲弊し、辞めていく現場を。",
    photo: "/photos/service-dx.png",
    dark: true,
  },
  {
    place: "DXとの出会い",
    copy: "DXは効率化の道具ではない。人が本来やるべき仕事に集中できる環境をつくるものだ。",
    photo: null,
    dark: false,
  },
  {
    place: "西尾へ",
    copy: "人口減少は止められない。でも、挑戦と共創が循環する地域は、豊かになれる。",
    photo: "/photos/service-produce.png",
    dark: true,
  },
];

function Chapter({ item, index }: { item: typeof chapters[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  if (item.photo) {
    return (
      <div ref={ref} className="relative overflow-hidden" style={{ minHeight: "65vh" }}>
        <motion.div className="absolute inset-0 scale-[1.08]" style={{ y: photoY }}>
          <Image src={item.photo} alt={item.place} fill className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to right, rgba(6,9,24,0.82) 0%, rgba(6,9,24,0.45) 60%, rgba(6,9,24,0.2) 100%)"
          }} />
        </motion.div>
        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-24" style={{ minHeight: "65vh" }}>
          <motion.p
            className="text-[10px] font-bold tracking-[0.28em] uppercase text-white/28 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9 }}
          >
            {item.place}
          </motion.p>
          <motion.p
            className="font-black text-white leading-[1.4] tracking-[-0.03em] max-w-[20ch]"
            style={{ fontSize: "clamp(22px, 3.2vw, 46px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {item.copy}
          </motion.p>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="px-8 md:px-24 py-32 md:py-48 bg-[#faf9f7]">
      <motion.p
        className="text-[10px] font-bold tracking-[0.28em] uppercase text-ink/25 mb-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9 }}
      >
        {item.place}
      </motion.p>
      <motion.p
        className="font-black text-navy leading-[1.45] tracking-[-0.03em] max-w-[28ch]"
        style={{ fontSize: "clamp(22px, 3.2vw, 46px)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
      >
        {item.copy}
      </motion.p>
    </div>
  );
}

export function AboutWhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section>
      <div ref={ref} className="px-8 md:px-24 py-24 md:py-36 bg-[#09090f]">
        <motion.p
          className="text-[10px] font-bold tracking-[0.32em] uppercase text-white/20 mb-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9 }}
        >
          Why Moments Share
        </motion.p>
        <motion.h2
          className="font-black text-white leading-[1.12] tracking-[-0.04em]"
          style={{ fontSize: "clamp(34px, 5.5vw, 72px)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          なぜ、ここに存在するのか。
        </motion.h2>
      </div>

      {chapters.map((ch, i) => (
        <Chapter key={i} item={ch} index={i} />
      ))}
    </section>
  );
}
