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

/**
 * 日程を決めて相談したい人向けの予約ページ（Google カレンダーの予約枠）。
 *
 * フォームが「まだ課題が整理できていない人」の入口なのに対し、
 * こちらは「話す内容が決まっていて、早く話したい人」の入口。
 * 外部サイトなので、リンクは必ず別タブで開く（BookingLink を使う）。
 */
export const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3HBg13jAppAUeOb3TmN5lLrpTZRhG1bCGNtFdnp1WAtetpzbQhLMbL3fYg_ckge7W08_beek67";
