import Image from "next/image";
import IntroAnimation from "@/components/IntroAnimations";

export default function Intro() {
  return (
    <div className="w-full h-[calc(100vh-3.5em-3em)] flex items-center content-center">
      <Image
        alt="Background"
        fill
        src={"/images/bg.webp"}
        className="opacity-60 pointer-events-none"
      />
      <div className="w-full flex flex-col items-center">
        <div className="text-6xl font-semibold mt-4 w-8/12 leading-[75px] text-center relative z-20">
          Hi. I’m <span className="text-primary font-extrabold">Marco</span>,
          nice to meet you. Please take a look around!
        </div>
        {/* <div className="w-2/12">
          <Button className="mt-6 w-full">Discover</Button>
        </div> */}
        <IntroAnimation />
      </div>
    </div>
  );
}
