import Image from "next/image";
import IntroAnimation from "@/components/IntroAnimations";
import { Motion } from "@/components/Motion";

export default function Intro() {
  return (
    <div className="w-full h-[calc(100vh-3.5em-3em)] flex items-center content-center relative overflow-hidden">
      <div className="fixed h-screen w-screen top-0 left-0 right-0 bottom-0 z-10 pointer-events-none">
        <Image
          alt="Background"
          fill
          src={"/images/bg.webp"}
          className="opacity-60"
        />
      </div>
      <div className="w-full flex flex-col items-center">
        <Motion
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
          className="w-full sm:w-8/12 leading-[75px] relative z-20"
        >
          <div className="text-4xl sm:text-6xl font-medium mt-4 leading-12 sm:leading-[75px] text-center relative z-20">
            Hi. I’m <span className="text-primary font-extrabold">Marco</span>,
            nice to meet you. Please take a look around!
          </div>
        </Motion>

        {/* <div className="w-2/12">
          <Button className="mt-6 w-full">Discover</Button>
        </div> */}
        <IntroAnimation />
      </div>
    </div>
  );
}
