export type NewsItem = {
  date: string;
  title: string;
  slug: string;
  category?: string;
  /** 外部記事へのリンク。掲載メディアの記事などに使う。無ければ内部の項目のまま */
  href?: string;
  /** リンク先の媒体名。href があるときだけ表示する */
  source?: string;
};

export const newsItems: NewsItem[] = [
  {
    date: "2025-11-14",
    title: "Moments Share合同会社を設立しました",
    slug: "founding",
    category: "お知らせ",
  },
  {
    date: "2026-01-01",
    title: "西尾市の働き方図鑑プロジェクトを開始しました",
    slug: "workstyle-zukan",
    category: "プロジェクト",
  },
  {
    date: "2026-03-01",
    title: "DX支援サービスを正式ローンチしました",
    slug: "core-shift-launch",
    category: "サービス",
  },
  {
    date: "2026-05-17",
    title: "「第1回 西尾筋肉祭り」を開催しました",
    slug: "kinniku-matsuri-1st",
    category: "プロジェクト",
  },
  {
    /* 紙面の日付は 2026年5月19日。Yahoo!ニュースの配信日は未確認のため、
       この項目に紐づけている。配信日が分かれば独立した項目に分けてよい。
       TODO: 掲載紙の正式名称を確認する（紙面の柱には「三河」とある）。
       TODO: Yahoo!ニュースの記事URLは掲載期間が過ぎると消える。
             リンク切れになっていないか定期的に確認する。 */
    date: "2026-05-19",
    title: "「第1回 西尾筋肉祭り」が新聞とYahoo!ニュースに掲載されました",
    slug: "kinniku-matsuri-press",
    category: "メディア掲載",
    href: "https://news.yahoo.co.jp/articles/0f3260768eae83479f87f1ad01f8b7542512c9cf",
    source: "Yahoo!ニュース",
  },
];
