/**
 * PHOTO NEEDED — 実写真がまだ無い箇所のプレースホルダ。
 * 後から <Image> に差し替える前提。kind(PEOPLE/MOMENTS/PLACE)・向き・シーンを明示する。
 * 例: <PhotoNeeded ratio="4/5" kind="PEOPLE" note="経営者に業務を説明している場面（縦）" />
 */
export function PhotoNeeded({
  ratio = "4/3",
  kind = "MOMENTS",
  note,
  className = "",
}: {
  ratio?: string;
  kind?: "PEOPLE" | "MOMENTS" | "PLACE";
  note?: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio: ratio }}>
      <div className="absolute inset-0 bg-sage/10 flex flex-col items-center justify-center text-center px-5">
        <span className="text-[10px] font-bold tracking-[0.28em] text-charcoal/35">PHOTO&nbsp;NEEDED</span>
        <span className="mt-2 text-[11px] font-bold tracking-[0.18em] text-terra">{kind}</span>
        {note && <span className="mt-2 text-[11px] leading-[1.7] text-charcoal/45 max-w-[240px]">{note}</span>}
      </div>
    </div>
  );
}
