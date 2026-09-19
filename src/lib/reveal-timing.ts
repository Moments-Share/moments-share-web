/* 文字が少しずつ現れる演出の、時刻の計算。

   RevealChars（"use client"）とは別のファイルに置いてある。
   client のファイルから関数を export して server 側で呼ぶと
   「クライアントの関数をサーバーから呼べない」で失敗するため。 */

/**
 * 段落をまたいで文字数を積み上げ、それぞれの1文字目が出る時刻（ミリ秒）を返す。
 * これを渡すと、複数の段落が1つの流れとしてつながって見える。
 *
 * @param step 1文字ごとの間隔（ミリ秒）
 * @param gap  段落と段落のあいだの間（ミリ秒）
 */
export function charStarts(texts: string[], step = 18, gap = 260) {
  let acc = 0;
  return texts.map((t) => {
    const start = acc;
    acc += [...t].length * step + gap;
    return start;
  });
}

/** 全部出きるまでの秒数。あとに続く要素を遅らせるのに使う */
export function charsTotalSec(texts: string[], step = 18, gap = 260) {
  const starts = charStarts(texts, step, gap);
  const last = texts[texts.length - 1] ?? "";
  return (starts[starts.length - 1] + [...last].length * step) / 1000;
}
