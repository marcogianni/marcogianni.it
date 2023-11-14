"use client";

import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/lib/hooks/useScrollTo";

export default function IntroButton() {
  const scrollToId = useScrollTo({
    mass: 0.1,
    type: "spring",
    velocity: 1,
  });
  return (
    <Button
      size="lg"
      variant="secondary"
      className="mt-12 px-8"
      onClick={() => scrollToId("#skills", -40)}
    >
      Discover
    </Button>
  );
}
