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
  founded: "2025年",
  business: "DX支援・BPO・地域プロデュース",
  email: "branding@momentsshare.com",

  /** 例: "0563-00-0000"。空のあいだは非表示 */
  tel: "",
  /** 電話の受付時間。tel が空なら使われない */
  telNote: "平日 9:00〜18:00",
};

/** 電話番号が入力されているか */
export const hasTel = company.tel.trim().length > 0;

/** tel: リンク用に数字と + だけを残す */
export const telHref = `tel:${company.tel.replace(/[^0-9+]/g, "")}`;
