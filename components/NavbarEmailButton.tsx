"use client";

import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/lib/hooks/useScrollTo";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function NavbarEmailButton() {
  const pathname = usePathname();
  const scrollToId = useScrollTo({
    mass: 0.1,
    type: "spring",
    velocity: 1,
  });

  const handleClick = () => {
    if (pathname === "/") {
      scrollToId("#contact-form", 0);
    } else {
      // Open dialog
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger className="flex" asChild>
          <Button variant="outline" size="icon" onClick={handleClick}>
            <EnvelopeClosedIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
          </Button>
        </TooltipTrigger>
        <TooltipContent align="center">Send me a message</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
