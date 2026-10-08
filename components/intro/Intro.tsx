import Image from "next/image";
import { cacheLife } from "next/cache";

import IntroAnimation from "@/components/intro/IntroAnimations";
import IntroButton from "@/components/intro/IntroButton";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

const gradientText =
  "text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-500 animate-gradient";

export default async function Intro() {
  "use cache";
  cacheLife("max");

  return (
    <section className="w-full h-[calc(100svh-5rem)] min-h-[560px] flex items-center overflow-hidden">
      <Reveal
        inView={false}
        distance={0}
        className="fixed h-screen top-0 left-0 right-0 z-0 pointer-events-none"
      >
        <Image
          priority
          alt=""
          fill
          src={"/images/bg.webp"}
          className="opacity-30 object-cover"
        />
      </Reveal>

      <div className="relative z-20 w-full flex flex-col items-center text-center">
        {/* Soft glow behind the headline. A gradient, not a filter, so it costs nothing to paint. */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[min(820px,100vw)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.18),transparent_65%)]"
        />

        <Reveal inView={false} delay={0.05} distance={8}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/40 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm">
            Code
            <span className={`text-base font-semibold ${gradientText}`}>&</span>
            Design
          </div>
        </Reveal>

        <Stagger
          as="h1"
          inView={false}
          delay={0.15}
          className="mt-8 w-full sm:w-9/12 text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-balance leading-[1.1]"
        >
          <StaggerItem
            as="span"
            className="inline-block"
            distance={12}
            blur={8}
          >
            Hi.
          </StaggerItem>{" "}
          <StaggerItem
            as="span"
            className="inline-block"
            distance={12}
            blur={8}
          >
            I’m
          </StaggerItem>{" "}
          <StaggerItem
            as="span"
            className="inline-block"
            distance={12}
            blur={8}
          >
            a
          </StaggerItem>{" "}
          <StaggerItem
            as="span"
            className={`inline-block font-semibold ${gradientText}`}
            distance={12}
            blur={8}
          >
            Frontend Engineer
          </StaggerItem>
        </Stagger>

        <Reveal
          as="p"
          inView={false}
          delay={0.45}
          distance={10}
          blur={4}
          className="mt-6 w-full sm:w-7/12 lg:w-5/12 text-lg sm:text-2xl text-muted-foreground text-balance"
        >
          I create simple, elegant designs and code to bring them to life.
        </Reveal>

        <Reveal inView={false} delay={0.6} distance={10}>
          <IntroButton />
        </Reveal>
      </div>
      <IntroAnimation />
    </section>
  );
}
