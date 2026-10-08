import Image from "next/image";
import { Reveal } from "@/components/Motion";
import ProjectDescription from "@/components/projects/ProjectDescription";
import Video from "@/components/Video";

export default function Brainyware() {
  return (
    <div className="grid grid-cols-12 gap-6 sm:gap-8">
      <div className="col-span-12 sm:col-span-9 relative">
        <Reveal distance={24}>
          <Image
            className="project-image"
            alt="Brainyware Hero"
            width={3584}
            height={1858}
            src="/images/brainyware-filesystem.webp"
          />
        </Reveal>
        <ProjectDescription
          url="https://www.brwr.ai/"
          tools={["React", "Next.js", "Tailwind CSS"]}
        >
          Brainyware: A Next.js-powered web app for organizing and conversing
          with AI using PDF and TXT documents.
        </ProjectDescription>
      </div>
      <div className="col-span-12 sm:col-span-3 relative">
        <Reveal distance={24} delay={0.08}>
          <Image
            className="project-image"
            alt="Brainyware Intro"
            width={756}
            height={1656}
            src="/images/brainyware-mobile.webp"
          />
        </Reveal>
      </div>
    </div>
  );
}
