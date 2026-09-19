/**
 * 会社情報の一元管理。フッターとお問い合わせページが参照する。
 *
 * tel は空のあいだ、電話番号の行そのものが表示されない。
 * 番号が決まったらここに入れるだけで、全ページのフッターに出る。
 */

export const company = {
  name: "Moments Share合同会社",
  representative: "中根 隆",
  address: "愛知県西尾市",
  founded: "2025年11月",
  business: "DX・AX支援／BPO／地域プロデュース",
  email: "branding@momentsshare.com",

  /**
   * 電話番号。空のあいだは、フッターもお問い合わせページも行ごと非表示になる。
   * 現在は掲載しない方針のため空にしている（番号自体は 070-9090-2824）。
   * 掲載する判断になったらここに入れるだけで全ページに出る。
   */
  tel: "",
  /** 受付時間。未確認のため空。決まったら入れると番号の横に出る */
  telNote: "",
};

/** 電話番号が入力されているか */
export const hasTel = company.tel.trim().length > 0;

/** tel: リンク用に数字と + だけを残す */
export const telHref = `tel:${company.tel.replace(/[^0-9+]/g, "")}`;
