/* ============================================================
   Fellow（代表以外で関わっている人）の紹介。

   本人の実在情報だけを載せる。架空の人物・経歴は作成しない。
   未確認の項目は undefined のままにする。undefined の項目は
   ページに出ない（空欄や「準備中」も表示しない）ので、
   分かったぶんから足していけばよい。
   ============================================================ */

export type Fellow = {
  name: string;
  /** ローマ字表記。読みが確認できるまで入れない */
  nameEn?: string;
  /** 肩書き・役割 */
  role?: string;
  /** public/ からのパス。無ければプレースホルダーが出る */
  photo?: string;
  photoAlt: string;
  /** 写真に添える一行 */
  caption?: string;
  strengths?: string;
  duty?: string;
  why?: string;
};

export const fellows: Fellow[] = [
  {
    /* TODO: 以下は本人に確認してから入れる。
       - nameEn（ローマ字。読みを取り違えたくないので推測しない）
       - role（肩書き）
       - strengths / duty / why
       いまは名前と写真だけを出している。 */
    name: "谷本 章太朗",
    photo: "/photos/32_fellow_tanimoto.jpg",
    photoAlt: "谷本章太朗のポートレート",
  },
];
