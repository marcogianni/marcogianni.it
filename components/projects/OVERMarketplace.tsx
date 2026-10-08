import ProjectShowcase from "@/components/projects/ProjectShowcase";

export default function OVERMarketplace() {
  return (
    <ProjectShowcase
      url="https://marketplace.ovr.ai/"
      tools={["React", "Next.js", "Styled Components", "Web3", "Sketch"]}
      desktop={{
        src: "/images/marketplace-desktop.webp",
        alt: "Marketplace Hero",
        width: 3584,
        height: 1858,
      }}
      mobile={{
        src: "/images/marketplace-mobile.webp",
        alt: "Marketplace Intro",
        width: 760,
        height: 1662,
      }}
    >
      OVER Marketplace: Crafted a Next.js 13 Frontend application for a seamless
      NFT marketplace experience, enabling users to buy, sell, rent, manage
      NFTs, and interact with smart contracts.
    </ProjectShowcase>
  );
}
