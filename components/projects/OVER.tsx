import Image from "next/image";

import { MotionInView } from "@/components/Motion";
import ProjectDescription from "@/components/projects/ProjectDescription";

export default function OVER() {
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
            alt="Over Hero"
            width={3584}
            height={1858}
            src="/images/over-desktop.png"
          />
        </MotionInView>
        <ProjectDescription
          url="https://www.overthereality.ai/"
          tools={["React", "Next.js", "Tailwind", "Framer Motion"]}
        >
          OVER the Reality Website with Next.js 14, Tailwind CSS, and Framer
          Motion. Global,
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
            alt="Over Intro"
            width={760}
            height={1662}
            src="/images/over-mobile.png"
          />
        </MotionInView>
      </div>
    </div>
  );
}
