import Image from "next/image";

import { MotionInView } from "@/components/Motion";
import ProjectDescription from "@/components/projects/ProjectDescription";

export default function OVERMarketplace() {
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
            alt="Brainyware Doc Chat"
            width={3584}
            height={1858}
            src="/images/marketplace-desktop.webp"
          />
        </MotionInView>
        <ProjectDescription
          url="https://marketplace.ovr.ai/"
          tools={["React", "Next.js", "Styled Components", "Web3", "Sketch"]}
        >
          OVER Marketplace: Crafted a Next.js 13 Frontend application for a
          seamless NFT marketplace experience, enabling users to buy, sell,
          rent, manage NFTs, and interact with smart contracts.
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
            width={760}
            height={1662}
            src="/images/marketplace-mobile.webp"
          />
        </MotionInView>
      </div>
    </div>
  );
}
