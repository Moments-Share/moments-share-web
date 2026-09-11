/**
 * お問い合わせフォームの送信先。
 *
 * このサイトは静的書き出し（next.config.ts の output: "export"）のため、
 * サーバー側で受け取る仕組みを持てない。送信は外部サービス（Formspree）が受ける。
 *
 * 既定値をコードに持たせているのは、Vercel の環境変数を設定しなくても
 * デプロイした時点でフォームが動くようにするため。
 * 送信先を差し替えたくなったら、環境変数 NEXT_PUBLIC_CONTACT_ENDPOINT を
 * 設定すればそちらが優先される（Vercel → Settings → Environment Variables）。
 *
 * このURLはビルド時にJSへ埋め込まれ、閲覧者からも見える。Formspree は
 * それを前提にした設計なので問題はないが、APIキーや秘密情報は置かない。
 */

const DEFAULT_CONTACT_ENDPOINT = "https://formspree.io/f/meaqnpkj";

export const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim() || DEFAULT_CONTACT_ENDPOINT;

/** フォームが使えないときの代替連絡先 */
export const CONTACT_EMAIL = "branding@momentsshare.com";

/** 送信先が設定済みか。https のURLだけを有効とみなす */
export const isContactEndpointConfigured = /^https:\/\/\S+$/.test(CONTACT_ENDPOINT);
