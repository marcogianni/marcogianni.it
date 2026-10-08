"use client";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { spring } from "@/lib/motion";

interface Props {
  id: string;
  title: string;
  selected: string;
  handleSelect: (id: string) => void;
}

export default function Selector(props: Props) {
  const { id, title, selected = "", handleSelect } = props;
  const isSelected = selected === id;

  return (
    <button
      type="button"
      aria-pressed={isSelected}
      aria-controls="experience-panel"
      onClick={() => handleSelect(id)}
      className={cn(
        "group relative isolate flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-base sm:px-6 sm:py-4 sm:text-xl",
        "transition-[color,border-color,transform] duration-150 ease-out active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        isSelected
          ? "border-primary/40 text-foreground"
          : "text-muted-foreground hover:border-primary/30 hover:text-foreground",
      )}
    >
      {isSelected && (
        <motion.span
          layoutId="experience-selector"
          transition={spring.ui}
          className="absolute inset-0 -z-10 rounded-[inherit] bg-secondary"
        />
      )}
      <span>{title}</span>
      <ChevronRightIcon
        className={cn(
          "h-5 w-5 transition-[transform,opacity,color] duration-200 ease-out",
          isSelected
            ? "translate-x-0 text-primary opacity-100"
            : "-translate-x-1 opacity-40 group-hover:translate-x-0 group-hover:opacity-70",
        )}
      />
    </button>
  );
}
