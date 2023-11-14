import Image from "next/image";

import { MotionInView } from "@/components/Motion";
import ProjectDescription from "@/components/projects/ProjectDescription";

export default function PC() {
  return (
    <div className="grid grid-cols-12 mt-12 gap-8">
      <div className="col-span-4 relative">
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
            alt="Piercarlo Carcereri"
            width={2000}
            height={2000}
            src="/images/PiercarloCarcereri.webp"
          />
        </MotionInView>

        <ProjectDescription url="https://piercarlocarcereri.it/">
          Piercarlo Carcereri: Brand identity for an oil and wine producer. In
          this screenshot the logo and bottle labels for wine and oil.
        </ProjectDescription>
      </div>
      <div className="col-span-4 relative">
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
            alt="Wine Label"
            width={1652}
            height={2362}
            src="/images/WineLabel.webp"
          />
        </MotionInView>
      </div>
      <div className="col-span-4 relative">
        <MotionInView
          initial="hidden"
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Image
            className="project-image"
            alt="Oil Label"
            width={1652}
            height={2988}
            src="/images/OilLabel.webp"
          />
        </MotionInView>
      </div>
    </div>
  );
}
