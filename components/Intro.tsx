import Image from "next/image";

import IntroAnimation from "@/components/IntroAnimations";
import { Motion } from "@/components/Motion";
import { Button } from "@/components/ui/button";

export default function Intro() {
  return (
    <div className="w-full h-screen flex items-center content-center overflow-hidden">
      <div className="fixed h-screen w-screen top-0 left-0 right-0 bottom-0 z-0 pointer-events-none">
        <Image
          priority
          alt="Background"
          fill
          src={"/images/bg.webp"}
          className="opacity-50"
        />
      </div>
      <div className="w-full flex flex-col items-center">
        <Motion
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
          className="w-full sm:w-8/12 leading-[75px] relative z-20"
        >
          <div className="text-2xl font-medium relative z-20 text-center">
            Frontend Enginner & UI/UX Designer
          </div>
        </Motion>
        <Motion
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
          className="w-full sm:w-8/12 leading-[75px] relative z-20"
        >
          <div className="text-4xl sm:text-6xl font-medium leading-12 sm:leading-[75px] text-center relative z-20">
            Hi. I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-primary from-purple-500 font-extrabold">
              Marco
            </span>
            , nice to meet you. Please take a look around!
          </div>
        </Motion>

        <Motion
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.5, ease: "easeInOut" }}
        >
          <Button className="mt-6 px-12">Discover</Button>
        </Motion>
      </div>
      <IntroAnimation />
    </div>
  );
}
