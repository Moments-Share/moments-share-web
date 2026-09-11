/**
 * サービス紹介資料（Canva）。
 *
 * 資料を差し替えたくなったら、このファイルのURLを書き換えるだけでよい。
 *
 * DECK_EMBED_URL について:
 *   Canva の「共有 → もっと見る → 埋め込む」で発行される埋め込み専用URLを入れる。
 *   空のあいだは iframe を出さず、Canva を別タブで開くボタンだけを表示する。
 *   「押しても何も出ない」状態を作らないための分岐。
 *
 * 編集用URL（/edit で終わるもの）は絶対に入れないこと。
 * ここに書いた値はビルド時にJSへ埋め込まれ、閲覧者から見える。
 * 編集用URLを入れると、資料を誰でも書き換えられる状態になる。
 */

/** 閲覧専用の共有リンク。別タブで開く用 */
export const DECK_VIEW_URL = "https://www.canva.com/d/3cxobn8NfMPsBqN";

/** 埋め込み専用URL。未取得のため空 */
export const DECK_EMBED_URL = "";

export const DECK_TITLE = "DXサービスご提案資料";
export const DECK_PAGES = 25;

/** 埋め込みURLが設定済みか。https のURLだけを有効とみなす */
export const isDeckEmbeddable = /^https:\/\/\S+$/.test(DECK_EMBED_URL);
