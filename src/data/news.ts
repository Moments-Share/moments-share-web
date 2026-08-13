export type NewsItem = {
  date: string;
  title: string;
  slug: string;
  category?: string;
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
    title: "DX支援サービス「Core Shift」を正式ローンチしました",
    slug: "core-shift-launch",
    category: "サービス",
  },
];
