import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Project from "@/components/Projects";
import { ContactForm } from "@/components/email/ContactForm";

export default function Home() {
  return (
    <>
      <main className="lg:container lg:mx-auto pl-6 pr-6 pt-6 z-10">
        <Intro />
        <Skills />
        <Project />
      </main>
      <ContactForm />
    </>
  );
}
