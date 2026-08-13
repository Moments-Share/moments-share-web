"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const paragraphs: { lines: string[]; highlight?: boolean; accent?: boolean }[] = [
  {
    lines: [
      "人口が減り、働く人が減っても、",
      "地域の未来まで決まるわけではない。",
    ],
  },
  {
    lines: [
      "時代や社会がどれだけ変わっても、",
      "自分たちが愛する地域には、",
      "これからも豊かで、持続的に続いてほしい。",
    ],
  },
  {
    lines: [
      "そこに挑戦する人がいて、",
      "その挑戦を応援する人がいて、",
      "共に未来をつくる仲間がいる。",
    ],
  },
  {
    lines: [
      "その一つひとつの想いと行動が、",
      "地域の豊かさをつくると、私たちは信じています。",
    ],
  },
  {
    lines: [
      "だからこそ、",
      "DXで、人がやらなくてもいい仕事を減らし、",
      "企業と人に、新しいことへ挑戦する余白を生み出す。",
      "BPOで、地域企業の仕事を支えながら、",
      "一人ひとりの暮らしに合った、多様な働き方を増やす。",
      "そして地域プロデュースで、",
      "人や企業の想いをつなぎ、",
      "新しい挑戦が生まれるきっかけをつくる。",
    ],
    accent: true,
  },
  {
    lines: [
      "地域を変える起点は、",
      "いつも、一人ひとりの想いと行動です。",
    ],
  },
  {
    lines: [
      "一人の挑戦に仲間が集まり、",
      "新しい仕事や価値が生まれ、",
      "次の誰かの挑戦へとつながっていく。",
    ],
  },
  {
    lines: [
      "私たちは、",
      "そんな挑戦と共創が循環する地域を創ります。",
    ],
    highlight: true,
  },
];

function AnimatedParagraph({
  lines,
  highlight,
  accent,
}: {
  lines: string[];
  highlight?: boolean;
  accent?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const className = highlight
    ? "font-black text-green leading-[1.8]"
    : accent
    ? "text-ink/80 leading-[2.15] font-medium"
    : "text-ink/65 leading-[2.15]";

  return (
    <motion.p
      ref={ref}
      className={className}
      style={{ fontSize: highlight ? "clamp(22px, 2.8vw, 36px)" : "clamp(18px, 2.1vw, 26px)" }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </motion.p>
  );
}

export function Crisis() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="hope" className="bg-white">
      <div className="max-w-[1100px] mx-auto px-8 md:px-20 py-section">

        <div ref={ref}>
          <motion.p
            className="text-[9px] font-black tracking-[0.36em] uppercase text-green mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            HOPE
          </motion.p>

          <motion.h2
            className="font-black text-navy leading-[1.06] tracking-[-0.05em] mb-20"
            style={{ fontSize: "clamp(48px, 9vw, 130px)" }}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            起点は、<br />
            いつも挑戦する個だ。
          </motion.h2>
        </div>

        <div className="max-w-[68ch] space-y-12">
          {paragraphs.map((p, i) => (
            <AnimatedParagraph key={i} lines={p.lines} highlight={p.highlight} accent={p.accent} />
          ))}
        </div>

      </div>
    </section>
  );
}
