import ProjectShowcase from "@/components/projects/ProjectShowcase";

export default function Brainyware() {
  return (
    <ProjectShowcase
      url="https://www.brwr.ai/"
      tools={["React", "Next.js", "Tailwind CSS"]}
      desktop={{
        src: "/images/brainyware-filesystem.webp",
        alt: "Brainyware Hero",
        width: 3584,
        height: 1858,
      }}
      mobile={{
        src: "/images/brainyware-mobile.webp",
        alt: "Brainyware Intro",
        width: 756,
        height: 1656,
      }}
    >
      Brainyware: A Next.js-powered web app for organizing and conversing with
      AI using PDF and TXT documents.
    </ProjectShowcase>
  );
}
