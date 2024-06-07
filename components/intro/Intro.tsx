import Image from "next/image";

import IntroAnimation from "@/components/intro/IntroAnimations";
import IntroButton from "@/components/intro/IntroButton";
import { Motion } from "@/components/Motion";
import TextAnimation from "@/components/TextAnimation";

export default function Intro() {
  return (
    <div className="w-full h-screen flex items-center content-center overflow-hidden">
      <Motion
        className="fixed h-screen top-0 left-0 right-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0, ease: "easeInOut" }}
      >
        <Image
          priority
          alt="Background"
          fill
          src={"/images/bg.webp"}
          className="opacity-30"
        />
      </Motion>
      <div className="w-full flex flex-col items-center">
        <Motion
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          className="w-full sm:w-9/12 leading-[75px] relative z-20"
        >
          <div className="text-2xl font-medium uppercase relative z-20 text-center flex justify-center items-center">
            Code
            <b className="text-3xl px-3 text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-500 animate-gradient font-semibold animate-gradient">
              &
            </b>
            Design
          </div>
        </Motion>
        <Motion
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
          className="w-full sm:w-9/12 mt-4 leading-[75px] relative z-20"
        >
          <div className="text-4xl sm:text-6xl font-medium text-center relative z-20 intro-text">
            Hi. I’m a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-500 animate-gradient font-semibold animate-gradient">
              Frontend Engineer
            </span>
          </div>
        </Motion>
        <TextAnimation
          className="text-2xl mt-4 text-balance text-center mx-auto w-full sm:w-6/12 relative z-20"
          text="I create simple, elegant designs and code to bring them to life."
        />
        <Motion
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5, ease: "easeInOut" }}
        >
          <IntroButton />
        </Motion>
      </div>
      <IntroAnimation />
    </div>
  );
}
