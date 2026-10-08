import Image from "next/image";

import { Reveal } from "@/components/Motion";
import ProjectDescription from "@/components/projects/ProjectDescription";

export default function OVERMarketplace() {
  return (
    <div className="grid grid-cols-12 gap-6 sm:gap-8">
      <div className="col-span-12 sm:col-span-9 relative">
        <Reveal distance={24}>
          <Image
            className="project-image"
            alt="Marketplace Hero"
            width={3584}
            height={1858}
            src="/images/marketplace-desktop.webp"
          />
        </Reveal>
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
        <Reveal distance={24} delay={0.08}>
          <Image
            className="project-image"
            alt="Marketplace Intro"
            width={760}
            height={1662}
            src="/images/marketplace-mobile.webp"
          />
        </Reveal>
      </div>
    </div>
  );
}
