/**
 * public/photos と public/logo に実在する画像を数え上げ、一覧をTypeScriptとして書き出す。
 *
 * site-images.ts は「その画像が置かれる場所・必要な条件」を先に宣言しておき、
 * ファイルがまだ無いあいだは撮影条件を表示するプレースホルダーに切り替える。
 * その判定材料がこのファイル。画像をアップロードしてビルドし直せば、
 * 該当する枠が自動で写真に変わる。手で設定を書き換える必要はない。
 *
 * npm run build / npm run dev の前に自動で走る（package.json の prebuild / predev）。
 * 手動で流したいときは npm run photos。
 */

import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const IMAGE_DIRS = ["photos", "logo"];
const IMAGE_PATTERN = /\.(jpe?g|png|webp|avif|svg)$/i;
const OUTPUT = "src/lib/available-photos.generated.ts";

const found = [];
for (const dir of IMAGE_DIRS) {
  const abs = join("public", dir);
  if (!existsSync(abs)) continue;
  for (const file of readdirSync(abs)) {
    if (IMAGE_PATTERN.test(file)) found.push(`/${dir}/${file}`);
  }
}
found.sort();

const body = `// scripts/scan-photos.mjs が生成する。手で編集しない。
// public/photos と public/logo に実在する画像の一覧。
// site-images.ts が、ここに載っていないパスを自動でプレースホルダー表示へ切り替える。

export const availablePhotos: readonly string[] = ${JSON.stringify(found, null, 2)};
`;

mkdirSync("src/lib", { recursive: true });
writeFileSync(OUTPUT, body);
console.log(`scan-photos: 画像 ${found.length} 件を検出 → ${OUTPUT}`);
