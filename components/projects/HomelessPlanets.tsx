import Image from "next/image";

import { Reveal } from "@/components/Motion";
import ProjectDescription from "@/components/projects/ProjectDescription";

export default function HomelessPlanets() {
  return (
    <div className="grid grid-cols-12 gap-6 sm:gap-8">
      <div className="col-span-12 sm:col-span-9 relative">
        <Reveal distance={24}>
          <Image
            className="project-image"
            alt="Homeless Planets Hero"
            width={3584}
            height={1858}
            src="/images/hp-desktop.png"
          />
        </Reveal>
        <ProjectDescription
          url="https://www.homelessplanets.com/"
          tools={["React", "Next.js", "Tailwind", "Framer Motion", "Shadcn-ui"]}
        >
          Homeless Planets: Crafted a Next.js 14 Frontend application for a
          musician platform.
        </ProjectDescription>
      </div>
      <div className="col-span-12 sm:col-span-3 relative">
        <Reveal distance={24} delay={0.08}>
          <Image
            className="project-image"
            alt="Brainyware Intro"
            width={760}
            height={1662}
            src="/images/hp-mobile.png"
          />
        </Reveal>
      </div>
    </div>
  );
}
