"use client";

import { useScrollTo } from "framer-motion-scroll-to-hook";
import { Button } from "@/components/ui/button";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

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
    <Button variant="outline" size="icon" onClick={handleClick}>
      <EnvelopeClosedIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
    </Button>
  );
}
