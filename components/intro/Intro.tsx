import Image from "next/image";

import IntroAnimation from "@/components/intro/IntroAnimations";
import IntroButton from "@/components/intro/IntroButton";
import { Motion } from "@/components/Motion";

export default function Intro() {
  return (
    <div className="w-full h-screen flex items-center content-center overflow-hidden">
      <div className="fixed h-screen w-screen top-0 left-20 right-20 bottom-20 z-0 pointer-events-none">
        <Image
          priority
          alt="Background"
          fill
          src={"/images/bg.webp"}
          className="opacity-40"
        />
      </div>
      <div className="w-full flex flex-col items-center">
        <Motion
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5, ease: "easeInOut" }}
          className="w-full sm:w-9/12 leading-[75px] relative z-20"
        >
          <div className="text-2xl font-medium uppercase relative z-20 text-center flex justify-center items-center">
            Frontend
            <b className="text-3xl px-3 text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-500 animate-gradient font-semibold animate-gradient">
              &
            </b>
            Design
          </div>
        </Motion>
        <Motion
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
          className="w-full sm:w-9/12 mt-4 leading-[75px] relative z-20"
        >
          <div className="text-4xl sm:text-6xl font-medium text-center relative z-20">
            Hi. I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-500 animate-gradient font-semibold animate-gradient">
              Marco
            </span>
            , nice to meet you. Feel free to explore!
          </div>
        </Motion>
        <Motion
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.5, ease: "easeInOut" }}
        >
          <IntroButton />
        </Motion>
      </div>
      <IntroAnimation />
    </div>
  );
}
