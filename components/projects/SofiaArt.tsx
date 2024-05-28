/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import { MotionInView } from "@/components/Motion";
import ProjectDescription from "@/components/projects/ProjectDescription";

export default function SofiaArt() {
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
            alt="Sofia Art"
            width={3578}
            height={1894}
            src="/images/sofia-art-desktop.webp"
          />
        </MotionInView>
        <ProjectDescription
          url="https://sofiart.info/"
          tools={["WordPress", "GSAP", "Sketch"]}
        >
          Sofia Kherkeladze portfolio: Presentation of Sofia's latest paintings, made with WordPress
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
            alt="Marketplace Intro"
            width={760}
            height={1662}
            src="/images/sofia-art-mobile.webp"
          />
        </MotionInView>
      </div>
    </div>
  );
}
