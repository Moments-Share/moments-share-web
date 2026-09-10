/**
 * サイトで使う写真の一元管理。
 *
 * 実写が用意できたら `src` にパスを入れるだけで、その写真を使っている箇所がすべて差し替わる。
 * `src` が null の間は、必要な写真の条件（`spec`）を表示するプレースホルダーが描画される。
 *
 * 撮影・選定のルール:
 *   - 実写を最優先。フリー素材は仮置き用途に限る
 *   - 明るい自然光。カメラ目線より、仕事中・会話中・活動中の様子
 *   - 握手のストックフォト、青いAI・回路・ロボット・ネオン画像は使わない
 *   - DXは「PCを触っている人」ではなく、実際のUI・業務フロー・成果数値を優先
 */

export type SiteImage = {
  /** public/ からのパス。null の間はプレースホルダーを表示する */
  src: string | null;
  /** 代替テキスト。差し替え時は実際に写っているものに合わせて更新する */
  alt: string;
  /** 差し替え時の撮影・選定条件。プレースホルダーに表示される */
  spec: string;
  /** 標準の表示比率 */
  ratio: string;
  /** 置かれる背景の明暗。プレースホルダーの配色に使う */
  tone: "light" | "dark";
};

export type SiteImageKey =
  | "heroImage"
  | "aboutImage"
  | "dxImage"
  | "bpoImage"
  | "regionImage"
  | "visionImage";

/**
 * プレースホルダーに撮影条件のテキストを出すかどうか。
 * 実写がすべて揃ったら false にすると、無地のブロックだけになる。
 */
export const SHOW_PHOTO_SPECS = true;

export const siteImages: Record<SiteImageKey, SiteImage> = {
  heroImage: {
    src: "/photos/hero-nishio.jpg",
    alt: "西尾市の川辺の風景",
    spec: "西尾の川辺。夕方の自然光。確定素材。",
    ratio: "16/9",
    tone: "dark",
  },

  aboutImage: {
    src: null,
    alt: "仕事に向き合う人の様子",
    spec: "考える・働く・挑戦する人のドキュメンタリー写真。縦位置。自然光。カメラ目線・決めポーズは避ける。",
    ratio: "4/5",
    tone: "light",
  },

  dxImage: {
    src: null,
    alt: "業務の流れを整理している様子",
    spec: "実際の業務画面・フロー図・成果数値が写ったもの。横位置。「PCを触っている人」だけの絵にしない。",
    ratio: "16/9",
    tone: "light",
  },

  bpoImage: {
    src: null,
    alt: "多様な働き方で仕事を進める様子",
    spec: "実際の作業風景。子育て中・副業・地域の人など多様な担い手が分かるもの。横位置。握手写真は不可。",
    ratio: "4/3",
    tone: "light",
  },

  regionImage: {
    src: null,
    alt: "地域プロジェクトの現場",
    spec: "地域イベント・プロジェクトの現場。人が動いている瞬間。横位置。",
    ratio: "4/3",
    tone: "light",
  },

  visionImage: {
    // 暫定でHEROと同じ確定素材を流用している。VISIONは全面表示なので別カットへの差し替えを推奨。
    src: "/photos/hero-nishio.jpg",
    alt: "西尾の広い風景",
    spec: "西尾の広い風景（川・田畑・街並みの引き）。横位置。全面表示のため高解像度が必要。",
    ratio: "21/9",
    tone: "dark",
  },
};

/** newsImages にまだ登録がない記事に使う。記事を足したら newsImages にも1件足す。 */
export const newsFallbackImage: SiteImage = {
  src: null,
  alt: "プロジェクトの様子",
  spec: "この記事に対応する現場写真。横位置。",
  ratio: "4/3",
  tone: "light",
};

/** NEWSの各記事に添える写真。news.ts の slug をキーにする */
export const newsImages: Record<string, SiteImage> = {
  founding: {
    src: null,
    alt: "設立時の様子",
    spec: "設立時のメンバー写真、または西尾の拠点。横位置。",
    ratio: "4/3",
    tone: "light",
  },
  "workstyle-zukan": {
    src: null,
    alt: "西尾働き方図鑑の取材風景",
    spec: "働き方図鑑の取材・撮影現場。話を聞いている場面。横位置。",
    ratio: "4/3",
    tone: "light",
  },
  "core-shift-launch": {
    src: null,
    alt: "DX支援の現場",
    spec: "DX研修または導入支援の現場。実際の画面や資料が写るとよい。横位置。",
    ratio: "4/3",
    tone: "light",
  },
};

export type Partner = {
  name: string;
  role: string;
  image: SiteImage;
};

/**
 * 共創パートナー。
 * 名前・役割はいずれも仮置き。実在の方の情報に差し替えて使う。
 */
export const partners: Partner[] = [
  {
    name: "お名前",
    role: "役割",
    image: {
      src: null,
      alt: "共創パートナーの人物写真",
      spec: "本人の実写。縦位置。仕事中か、自然な表情のポートレート。",
      ratio: "4/5",
      tone: "light",
    },
  },
  {
    name: "お名前",
    role: "役割",
    image: {
      src: null,
      alt: "共創パートナーの人物写真",
      spec: "本人の実写。縦位置。仕事中か、自然な表情のポートレート。",
      ratio: "4/5",
      tone: "light",
    },
  },
  {
    name: "お名前",
    role: "役割",
    image: {
      src: null,
      alt: "共創パートナーの人物写真",
      spec: "本人の実写。縦位置。仕事中か、自然な表情のポートレート。",
      ratio: "4/5",
      tone: "light",
    },
  },
  {
    name: "お名前",
    role: "役割",
    image: {
      src: null,
      alt: "共創パートナーの人物写真",
      spec: "本人の実写。縦位置。仕事中か、自然な表情のポートレート。",
      ratio: "4/5",
      tone: "light",
    },
  },
];
