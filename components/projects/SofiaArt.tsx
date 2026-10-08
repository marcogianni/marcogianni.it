import ProjectShowcase from "@/components/projects/ProjectShowcase";

export default function SofiaArt() {
  return (
    <ProjectShowcase
      url="https://sofiart.info/"
      tools={["WordPress", "GSAP", "Sketch"]}
      desktop={{
        src: "/images/sofia-art-desktop.webp",
        alt: "Sofia Art",
        width: 3578,
        height: 1894,
      }}
      mobile={{
        src: "/images/sofia-art-mobile.webp",
        alt: "Marketplace Intro",
        width: 760,
        height: 1662,
      }}
    >
      Sofia Kherkeladze portfolio: Presentation of Sofia’s latest paintings,
      made with WordPress
    </ProjectShowcase>
  );
}
