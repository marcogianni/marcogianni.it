/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import { Reveal } from "@/components/Motion";
import ProjectDescription from "@/components/projects/ProjectDescription";

export default function SofiaArt() {
  return (
    <div className="grid grid-cols-12 gap-6 sm:gap-8">
      <div className="col-span-12 sm:col-span-9 relative">
        <Reveal distance={24}>
          <Image
            className="project-image"
            alt="Sofia Art"
            width={3578}
            height={1894}
            src="/images/sofia-art-desktop.webp"
          />
        </Reveal>
        <ProjectDescription
          url="https://sofiart.info/"
          tools={["WordPress", "GSAP", "Sketch"]}
        >
          Sofia Kherkeladze portfolio: Presentation of Sofia's latest paintings, made with WordPress
        </ProjectDescription>
      </div>
      <div className="col-span-12 sm:col-span-3 relative">
        <Reveal distance={24} delay={0.08}>
          <Image
            className="project-image"
            alt="Marketplace Intro"
            width={760}
            height={1662}
            src="/images/sofia-art-mobile.webp"
          />
        </Reveal>
      </div>
    </div>
  );
}
