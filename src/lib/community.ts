/* ============================================================
   地域プロデュースの各プロジェクトが、外部媒体（Instagram / note）で
   発信している場所をまとめる。

   方針：記事の中身はサイトに複製しない。外部媒体に「連携」する。
   ・投稿はInstagram / note側が本体。サイトは入口と受け皿に徹する。
   ・URLの変更・追加は必ずこのファイルだけを直す。
     ページ側に直書きすると、リンク切れに気づけなくなる。

   URLは御社から提供されたものだけを載せる。推測で足さない。
   ============================================================ */

export type ExternalMedia = {
  /** 表示名。ハンドルも併記して、どのアカウントか一目で分かるようにする */
  label: string;
  url: string;
};

/* ------------------------------------------------------------
   西尾働き方図鑑

   TODO: note に図鑑専用のマガジンがある場合は、下の noteUrl を
         会社アカウント（note.com/momentsshare）から差し替える。
   TODO: 掲載企業が増えたら entriesCount を更新する。
         社名の掲載は先方の許諾が要るため、ここには書かない。
------------------------------------------------------------ */
export const zukan = {
  name: "西尾働き方図鑑",
  /** いま掲載している社数。事実のみ。0 のときは件数を表示しない */
  entriesCount: 1,
  media: [
    { label: "Instagram（@nishiodehataraku）", url: "https://www.instagram.com/nishiodehataraku/" },
    { label: "note（@momentsshare）", url: "https://note.com/momentsshare" },
  ] satisfies ExternalMedia[],
};

/* ------------------------------------------------------------
   西尾筋肉祭り
------------------------------------------------------------ */
export const kinnikuMatsuri = {
  name: "西尾筋肉祭り",
  media: [
    { label: "Instagram（@nishiokinnikumaturi）", url: "https://www.instagram.com/nishiokinnikumaturi/" },
  ] satisfies ExternalMedia[],
};

/* ------------------------------------------------------------
   西尾キャリアLab

   西尾働き方図鑑とは別のプロジェクト。混同しないこと。
   図鑑は「知る」ための入口で、対象は小中高大生まで広い。
   キャリアLabは大学生向けのコミュニティで、交流・実践・
   キャリア形成が中心。連携はするが、同じ事業ではない。

   TODO: Mission / Vision / Value・正式なキャッチコピー・ロゴ・
         ブランドカラーは運営メンバーで検討中。決まったら反映する。
   TODO: note や X のアカウントがあれば media に足す。
------------------------------------------------------------ */
export const careerLab = {
  name: "西尾キャリアLab",
  /** 合言葉。ブランドの核なので、言い換えずにこのまま使う */
  motto: "興味は知識に比例する。好きは行動から生まれる。",
  media: [
    { label: "Instagram（@nishio_career_lab）", url: "https://www.instagram.com/nishio_career_lab/" },
  ] satisfies ExternalMedia[],
};
