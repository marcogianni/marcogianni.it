"use client";

import { motion, useReducedMotion } from "framer-motion";

import { duration, ease } from "@/lib/motion";

// Drawn outside-in so the wave builds towards the middle line.
const paths = [
  {
    d: "M 0 207 Q 355.5 215 711 400 Q 1066.5 585 1422 207",
    opacity: 0.12,
    order: 0,
  },
  {
    d: "M 0 483 Q 355.5 215 711 400 Q 1066.5 585 1422 483",
    opacity: 0.99,
    order: 1,
  },
  {
    d: "M 0 276 Q 355.5 215 711 400 Q 1066.5 585 1422 276",
    opacity: 0.7,
    order: 2,
  },
  {
    d: "M 0 414 Q 355.5 215 711 400 Q 1066.5 585 1422 414",
    opacity: 0.47,
    order: 3,
  },
  {
    d: "M 0 345 Q 355.5 215 711 400 Q 1066.5 585 1422 345",
    opacity: 0.86,
    order: 4,
  },
];

export default function IntroAnimation() {
  const reduce = useReducedMotion();

  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 1422 800"
      className="absolute opacity-30 dark:opacity-70 left-0 -ml-1 -mr-1 right-0 z-0 w-full pointer-events-none"
    >
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="oooscillate-grad"
        >
          <stop stopColor="hsl(265, 55%, 30%)" stopOpacity="1" offset="0%" />
          <stop stopColor="hsl(265, 55%, 60%)" stopOpacity="1" offset="100%" />
        </linearGradient>
      </defs>
      <g
        strokeWidth="2"
        stroke="url(#oooscillate-grad)"
        fill="none"
        strokeLinecap="round"
      >
        {paths.map(({ d, opacity, order }) => (
          <motion.path
            key={d}
            d={d}
            opacity={opacity}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    duration: duration.draw,
                    ease: ease.inOut,
                    delay: 0.3 + order * 0.12,
                  }
            }
          />
        ))}
      </g>
    </svg>
  );
}
