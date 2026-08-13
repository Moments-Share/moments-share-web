import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { ProjectsPage } from "@/components/pages/ProjectsPage";

export const metadata: Metadata = {
  title: "240プロジェクトへの挑戦 | Moments Share合同会社",
  description: "Moments Shareが取り組む240の地域課題解決プロジェクト。現在の進捗と、これから挑む課題の一覧。",
  openGraph: {
    title: "240プロジェクトへの挑戦 | Moments Share合同会社",
    description: "西尾の地域課題を、240の事業で解決していく。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <ProjectsPage />
      </main>
    </>
  );
}
