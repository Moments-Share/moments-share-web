import type { MetadataRoute } from "next";

/**
 * output: "export" では、このルートハンドラを静的として扱うことを
 * 明示しないとビルドが失敗する（Next.js 16）。
 */
export const dynamic = "force-static";

/**
 * クローラーへの指示。全ページを公開し、サイトマップの場所を伝える。
 * 非公開にしたいページができたら disallow に足す。
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://moments-share.com/sitemap.xml",
    host: "https://moments-share.com",
  };
}
