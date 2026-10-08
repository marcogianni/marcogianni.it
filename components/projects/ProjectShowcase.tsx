import Image from "next/image";

import { Reveal } from "@/components/Motion";
import ProjectDescription from "@/components/projects/ProjectDescription";

interface Screenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface Props {
  desktop: Screenshot;
  mobile: Screenshot;
  url: string;
  tools?: string[];
  children: React.ReactNode;
}

/**
 * Mobile: the phone screenshot overlaps the desktop one (both share grid
 * cell 1/1) so the pair reads as a single composition, description below.
 * Desktop (sm+): classic 9/3 columns. The phone spans an extra `1fr` row so
 * its height never stretches the gap between screenshot and description.
 */
export default function ProjectShowcase(props: Props) {
  const { desktop, mobile, url, tools, children } = props;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 sm:grid-rows-[auto_auto_1fr] sm:gap-x-8">
      <Reveal
        distance={24}
        className="col-start-1 row-start-1 w-[84%] self-center sm:col-span-9 sm:col-start-1 sm:w-auto sm:self-start"
      >
        <Image
          className="project-image w-full"
          alt={desktop.alt}
          width={desktop.width}
          height={desktop.height}
          sizes="(min-width: 1400px) 1000px, (min-width: 640px) 75vw, 84vw"
          src={desktop.src}
        />
      </Reveal>

      <Reveal
        distance={24}
        delay={0.08}
        className="relative z-10 col-start-1 row-start-1 w-[32%] self-center justify-self-end sm:col-span-3 sm:col-start-10 sm:row-span-3 sm:w-auto sm:self-start sm:justify-self-stretch"
      >
        <Image
          className="project-image w-full max-sm:rounded-xl max-sm:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.7)] max-sm:ring-4 max-sm:ring-background"
          alt={mobile.alt}
          width={mobile.width}
          height={mobile.height}
          sizes="(min-width: 1400px) 330px, (min-width: 640px) 25vw, 32vw"
          src={mobile.src}
        />
      </Reveal>

      <ProjectDescription
        url={url}
        tools={tools}
        className="col-start-1 row-start-2 sm:col-span-9 sm:col-start-1"
      >
        {children}
      </ProjectDescription>
    </div>
  );
}
