import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { MVVHero } from "@/components/sections/mvv/MVVHero";
import { MVVMission } from "@/components/sections/mvv/MVVMission";
import { MVVVision } from "@/components/sections/mvv/MVVVision";
import { MVVValues } from "@/components/sections/mvv/MVVValues";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Mission / Vision / Values | Moments Share合同会社",
  description: "Moments Shareの使命・ビジョン・バリュー。地域の挑戦と共創が循環する仕組みをつくるために、私たちが大切にしていること。",
};

export default function MVVPage() {
  return (
    <>
      <Nav />
      <main>
        <MVVHero />
        <MVVMission />
        <MVVVision />
        <MVVValues />
        <CTA />
      </main>
    </>
  );
}
