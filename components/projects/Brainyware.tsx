import Image from "next/image";
import { MotionInView } from "@/components/Motion";
import ProjectDescription from "@/components/projects/ProjectDescription";
import Video from "@/components/Video";

export default function Brainyware() {
  return (
    <div className="grid grid-cols-12 mt-12 gap-8">
      <div className="col-span-12 sm:col-span-9 relative">
        <MotionInView
          initial="hidden"
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Image
            className="project-image"
            alt="Brainyware Hero"
            width={3584}
            height={1858}
            src="/images/brainyware-filesystem.webp"
          />
        </MotionInView>
        <ProjectDescription
          url="https://www.brwr.ai/"
          tools={["React", "Next.js", "Tailwind CSS"]}
        >
          Brainyware: A Next.js-powered web app for organizing and conversing
          with AI using PDF and TXT documents.
        </ProjectDescription>
      </div>
      <div className="col-span-12 sm:col-span-3 relative">
        <MotionInView
          initial="hidden"
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Image
            className="project-image"
            alt="Brainyware Intro"
            width={756}
            height={1656}
            src="/images/brainyware-mobile.webp"
          />
        </MotionInView>
      </div>
    </div>
  );
}
