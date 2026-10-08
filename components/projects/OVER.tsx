import ProjectShowcase from "@/components/projects/ProjectShowcase";

export default function OVER() {
  return (
    <ProjectShowcase
      url="https://www.overthereality.ai/"
      tools={["React", "Next.js", "Tailwind", "Framer Motion"]}
      desktop={{
        src: "/images/over-desktop.png",
        alt: "Over Hero",
        width: 3584,
        height: 1858,
      }}
      mobile={{
        src: "/images/over-mobile.png",
        alt: "Over Intro",
        width: 760,
        height: 1662,
      }}
    >
      OVER the Reality Website with Next.js 14, Tailwind CSS, and Framer Motion.
    </ProjectShowcase>
  );
}
