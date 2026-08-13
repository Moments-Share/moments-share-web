import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { GroupPage } from "@/components/pages/GroupPage";

export const metadata: Metadata = {
  title: "会社概要 | Moments Share合同会社",
  description: "Moments Share合同会社の会社概要。DX・BPO・地域プロデュース・AI研修の4事業で、愛知県西尾市から地域の未来をつくります。",
  openGraph: {
    title: "会社概要 | Moments Share合同会社",
    description: "4事業で、西尾から地域の循環をつくる会社。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <GroupPage />
      </main>
    </>
  );
}
