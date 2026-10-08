import Image from "next/image";

import { Reveal } from "@/components/Motion";
import ProjectDescription from "@/components/projects/ProjectDescription";

export default function OVER() {
  return (
    <div className="grid grid-cols-12 gap-6 sm:gap-8">
      <div className="col-span-12 sm:col-span-9 relative">
        <Reveal distance={24}>
          <Image
            className="project-image"
            alt="Over Hero"
            width={3584}
            height={1858}
            src="/images/over-desktop.png"
          />
        </Reveal>
        <ProjectDescription
          url="https://www.overthereality.ai/"
          tools={["React", "Next.js", "Tailwind", "Framer Motion"]}
        >
          OVER the Reality Website with Next.js 14, Tailwind CSS, and Framer
          Motion.
        </ProjectDescription>
      </div>
      <div className="col-span-12 sm:col-span-3 relative">
        <Reveal distance={24} delay={0.08}>
          <Image
            className="project-image"
            alt="Over Intro"
            width={760}
            height={1662}
            src="/images/over-mobile.png"
          />
        </Reveal>
      </div>
    </div>
  );
}
