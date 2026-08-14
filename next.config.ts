import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // 静的エクスポート時、各ページを `about/index.html` 形式で出力する。
  // これがないと `about.html` になり、素朴な静的ホストで `/about` が
  // ディレクトリ扱いになって404/ディレクトリ一覧が表示される（トップ以外がエラー）。
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
