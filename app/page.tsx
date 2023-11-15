import Intro from "@/components/intro/Intro";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { ContactForm } from "@/components/email/ContactForm";
import WorkExperience from "@/components/work-experience/WorkExperience";

export default function Home() {
  return (
    <>
      <main className="lg:container lg:mx-auto pl-6 pr-6 pt-6 z-10">
        <Intro />
        <Skills />
        <Projects />
        <WorkExperience />
      </main>
      <ContactForm />
      {/* <div className="h-[2000px]" /> */}
    </>
  );
}
