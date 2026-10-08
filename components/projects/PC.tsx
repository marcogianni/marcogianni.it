import Image from "next/image";

import { Reveal } from "@/components/Motion";
import ProjectDescription from "@/components/projects/ProjectDescription";

export default function PC() {
  return (
    <div className="grid grid-cols-12 gap-6 sm:gap-8">
      <div className="col-span-12 sm:col-span-4 relative">
        <Reveal distance={24}>
          <Image
            className="project-image"
            alt="Piercarlo Carcereri"
            width={2000}
            height={2000}
            src="/images/PiercarloCarcereri.webp"
          />
        </Reveal>

        <ProjectDescription
          url="https://piercarlocarcereri.it/"
          tools={["Sketch"]}
        >
          Piercarlo Carcereri: Brand identity for an oil and wine producer. In
          this screenshot the logo and bottle labels for wine and oil.
        </ProjectDescription>
      </div>
      <div className="col-span-12 sm:col-span-4 relative">
        <Reveal distance={24} delay={0.08}>
          <Image
            className="project-image"
            alt="Wine Label"
            width={1652}
            height={2362}
            src="/images/WineLabel.webp"
          />
        </Reveal>
      </div>
      <div className="col-span-12 sm:col-span-4 relative">
        <Reveal distance={24} delay={0.16}>
          <Image
            className="project-image"
            alt="Oil Label"
            width={1652}
            height={2988}
            src="/images/OilLabel.webp"
          />
        </Reveal>
      </div>
    </div>
  );
}
