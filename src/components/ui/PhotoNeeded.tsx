/**
 * 実写真がまだ無い箇所の無地プレースホルダ。
 * 後から <Image> に差し替える前提。kind / note は差し替え時の目安で、画面には表示しない。
 * 例: <PhotoNeeded ratio="4/5" kind="PEOPLE" note="経営者に業務を説明している場面（縦）" />
 */
export function PhotoNeeded({
  ratio = "4/3",
  className = "",
}: {
  ratio?: string;
  kind?: "PEOPLE" | "MOMENTS" | "PLACE";
  note?: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio: ratio }}>
      <div className="absolute inset-0 bg-charcoal/[0.07]" />
    </div>
  );
}
