import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { Reveal } from "@/components/Motion";
import Tool from "@/components/Tool";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  url: string;
  tools?: string[];
  className?: string;
}

export default function ProjectDescription(props: Props) {
  return (
    <Reveal
      delay={0.1}
      distance={12}
      className={cn("mt-6 flex flex-col gap-4", props.className)}
    >
      {props.tools && (
        <ul className="flex flex-wrap gap-2">
          {props.tools.map((title) => (
            <Tool title={title} key={title} />
          ))}
        </ul>
      )}
      <p className="max-w-3xl text-base sm:text-lg text-muted-foreground text-pretty">
        {props.children}
      </p>
      <a
        className="group inline-flex w-fit items-center gap-1.5 rounded-md font-medium text-foreground transition-colors duration-150 ease-out hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit website
        <ArrowTopRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </Reveal>
  );
}
