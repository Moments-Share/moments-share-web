import { FadeIn } from "@/components/ui/FadeIn";

const projects = [
  { name: "西尾働き方図鑑", desc: "地域で働く人・企業を取材し発信。「こんな仕事があるんだ」という気づきを届ける。" },
  { name: "西尾人事の会", sub: "地域の人事部", desc: "地域の人事担当者が集まり、採用・育成の課題を共に解決するコミュニティ。" },
  { name: "西尾キャリアLab", desc: "学生と地域企業をつなぐキャリアコミュニティ。地元で挑戦する選択肢を届ける。" },
  { name: "西尾AI活用研究会", desc: "地域の企業・個人がAIを学び活用するコミュニティ。現場で使えるAIの知識を共有。" },
  { name: "西尾筋肉祭り", desc: "地域を盛り上げる体験型イベント。参加者が地域の企業・人と出会うきっかけをつくる。" },
  { name: "コワーキングスペース 西尾", sub: "2027年11月 開業予定", desc: "挑戦する人が集まり、出会い、共創する場所。西尾市初のコワーキングスペース。", upcoming: true },
];

export function Projects() {
  return (
    <section id="projects" className="py-section bg-white">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16">

        <FadeIn>
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-green mb-6">
            Local Projects
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="font-black text-ink leading-[1.2] tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}
          >
            西尾に、挑戦の<br />入り口をつくる。
          </h2>
        </FadeIn>
        <FadeIn delay={0.18}>
          <p className="text-[16px] text-muted leading-[2.0] mb-20 max-w-xl">
            一つひとつのプロジェクトが、次の挑戦者を呼ぶ。<br />
            地域の人と、企業と、可能性をつなぎ続ける。
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-px bg-black/[0.06]">
          {projects.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.07}>
              <div className={`bg-white p-10 h-full space-y-4 ${p.upcoming ? "border-t-2 border-green" : ""}`}>
                {p.upcoming && (
                  <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-green bg-green/10 px-3 py-1">
                    Coming Soon
                  </span>
                )}
                <div>
                  <p className="text-[17px] font-black text-ink leading-[1.3]">{p.name}</p>
                  {p.sub && <p className="text-[13px] text-muted mt-1">{p.sub}</p>}
                </div>
                <p className="text-[14px] text-muted leading-[1.9]">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
