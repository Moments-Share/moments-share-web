/* ============================================================
   Fellow（Moments Shareに関わっている人）の紹介。

   本人の実在情報だけを載せる。架空の人物・経歴は作成しない。
   未確認の項目は undefined のままにする。undefined の項目は
   カードに出ない（空欄も「準備中」も表示しない）ので、
   分かったぶんから足していけばよい。

   並び順＝表示順。代表を先頭に置いている。
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
    name: "中根 隆",
    nameEn: "RYU NAKANE",
    role: "代表社員 / Founder",
    /* TODO: 代表の顔写真に差し替え（public/photos/ に追加） */
    photoAlt: "代表・中根 隆のポートレート（縦・自然光）",
    caption: "西尾から、挑戦と共創の循環をつくる。",
    strengths: "業務整理・DX設計、AI／RPA／ノーコードによる自動化、地域コミュニティづくり。",
    duty: "DX支援・BPO・地域プロデュースの3事業の推進。",
    why: "「挑戦できる場所を、つくる側に回ろう」。西尾から、挑戦と共創が循環する地域の仕組みをつくるため。",
  },
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
