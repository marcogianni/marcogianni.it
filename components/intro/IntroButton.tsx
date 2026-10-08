"use client";

import { ArrowDownIcon } from "@radix-ui/react-icons";
import { useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/lib/hooks/useScrollTo";
import { spring } from "@/lib/motion";

export default function IntroButton() {
  const reduce = useReducedMotion();
  const scrollToId = useScrollTo(reduce ? { duration: 0 } : spring.scroll);

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
      <Button
        size="lg"
        className="group h-12 gap-2 rounded-xl px-7"
        onClick={() => scrollToId("#skills")}
      >
        Discover
        <ArrowDownIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-y-0.5" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="h-12 rounded-xl px-7 bg-background/40 backdrop-blur-sm"
        onClick={() => scrollToId("#projects")}
      >
        View projects
      </Button>
    </div>
  );
}
