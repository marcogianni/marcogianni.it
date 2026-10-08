import ProjectShowcase from "@/components/projects/ProjectShowcase";

export default function HomelessPlanets() {
  return (
    <ProjectShowcase
      url="https://www.homelessplanets.com/"
      tools={["React", "Next.js", "Tailwind", "Framer Motion", "Shadcn-ui"]}
      desktop={{
        src: "/images/hp-desktop.png",
        alt: "Homeless Planets Hero",
        width: 3584,
        height: 1858,
      }}
      mobile={{
        src: "/images/hp-mobile.png",
        alt: "Brainyware Intro",
        width: 760,
        height: 1662,
      }}
    >
      Homeless Planets: Crafted a Next.js 14 Frontend application for a musician
      platform.
    </ProjectShowcase>
  );
}
