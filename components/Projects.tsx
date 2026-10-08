import { cacheLife } from "next/cache";
import PC from "@/components/projects/PC";
import Brainyware from "@/components/projects/Brainyware";
import OVERMarketplace from "@/components/projects/OVERMarketplace";
import SofiaArt from "@/components/projects/SofiaArt";
import HomelessPlanets from "@/components/projects/HomelessPlanets";
import OVER from "@/components/projects/OVER";
import SectionHeading from "@/components/SectionHeading";

export default async function Project() {
  "use cache";
  cacheLife("max");

  return (
    <section id="projects" className="pt-24 sm:pt-40">
      <SectionHeading eyebrow="Selected work" title="Latest Projects" />
      <div className="flex flex-col gap-20 sm:gap-32">
        <OVER />
        <HomelessPlanets />
        <OVERMarketplace />
        <PC />
        <Brainyware />
        <SofiaArt />
      </div>
    </section>
  );
}
