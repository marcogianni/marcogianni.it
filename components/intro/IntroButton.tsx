"use client";

import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/lib/hooks/useScrollTo";

export default function IntroButton() {
  const scrollToId = useScrollTo({
    type: "spring",
    stiffness: 100,
    damping: 30,
    restDelta: 0.01,
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
