import Intro from "@/components/Intro";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="lg:container lg:mx-auto pl-6 pr-6 pt-6 z-10">
      <Intro />
      <Skills />
      <div className="h-[2000px]"></div>
    </main>
  );
}
