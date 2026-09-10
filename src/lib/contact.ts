/**
 * お問い合わせフォームの送信先。
 *
 * このサイトは静的書き出し（next.config.ts の output: "export"）のため、
 * サーバー側で受け取る仕組みを持てない。フォームの送信には外部サービスが要る。
 *
 * 設定するもの:
 *   環境変数 NEXT_PUBLIC_CONTACT_ENDPOINT に、発行されたPOST先URLを入れる。
 *   例) https://formspree.io/f/xxxxxxxx
 *
 *   Vercel の場合  … Settings → Environment Variables に追加して再デプロイ
 *   ローカルビルド … リポジトリ直下の .env.local に1行書く
 *                    NEXT_PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/xxxxxxxx
 *
 * 未設定のあいだはフォームを送信できない状態にし、代わりにメールでの連絡先を案内する。
 * 「押せるのに届かない」状態を作らないための処理。
 *
 * 注意: NEXT_PUBLIC_ を付けた環境変数はビルド時にJSへ埋め込まれ、閲覧者から見える。
 * ここに入れてよいのは公開前提のエンドポイントURLだけで、APIキーや秘密情報は置かない。
 */

export const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";

/** フォームが使えないときの代替連絡先 */
export const CONTACT_EMAIL = "branding@momentsshare.com";

/** 送信先が設定済みか。https のURLだけを有効とみなす */
export const isContactEndpointConfigured = /^https:\/\/\S+$/.test(CONTACT_ENDPOINT);
