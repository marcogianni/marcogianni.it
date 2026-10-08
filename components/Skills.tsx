import { CodeIcon, LayersIcon } from "@radix-ui/react-icons";
import { cacheLife } from "next/cache";

import { Stagger, StaggerItem } from "@/components/Motion";
import SectionHeading from "@/components/SectionHeading";
import Tool from "@/components/Tool";

const skills = [
  {
    icon: CodeIcon,
    title: "Frontend Engineer",
    description:
      "I thrive on crafting ideas from scratch into interactive realities in the browser.",
    toolsLabel: "Dev tools",
    tools: [
      "React",
      "Next.js (App Router)",
      "Tailwind CSS",
      "Styled Components",
      "Redux",
      "Zustand",
      "Framer Motion",
      "Vercel",
    ],
  },
  {
    icon: LayersIcon,
    title: "UI/UX Designer",
    description:
      "I prioritize clarity and thoughtful user interactions in my designs.",
    toolsLabel: "Design tools",
    tools: ["Sketch", "Figma", "Illustrator", "Photoshop", "Pen & Paper"],
  },
];

export default async function Skills() {
  "use cache";
  cacheLife("max");

  return (
    <section id="skills" className="pt-24 sm:pt-32">
      <SectionHeading eyebrow="Skills" title="What I do" />
      <Stagger
        stagger={0.08}
        className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6"
      >
        {skills.map(({ icon: Icon, title, description, toolsLabel, tools }) => (
          <StaggerItem
            key={title}
            distance={24}
            className="relative flex flex-col overflow-hidden rounded-[32px] border bg-card/50 p-8 backdrop-blur-sm transition-colors duration-200 ease-out hover:border-primary/40 sm:p-10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-purple-500 shadow-lg shadow-primary/25">
              <Icon className="h-7 w-7 text-white" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
            <p className="mt-3 text-lg text-muted-foreground text-pretty">
              {description}
            </p>
            <div className="mt-auto pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                {toolsLabel}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Tool key={tool} title={tool} />
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
