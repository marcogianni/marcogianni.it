import Intro from "@/components/intro/Intro";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/work-experience/WorkExperience";

export default function Home() {
  return (
    <main className="lg:container lg:mx-auto px-6 pt-6 z-10 pb-24 sm:pb-32">
      <Intro />
      <Skills />
      <Projects />
      <WorkExperience />
    </main>
  );
}
