"use client";

import { motion } from "framer-motion";

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

export default function IntroAnimation() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 1422 800"
      opacity="1"
      className="fixed top-0 bottom-0 z-0 h-full w-full"
    >
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="oooscillate-grad"
        >
          <stop
            stop-color="hsl(265, 55%, 30%)"
            stop-opacity="1"
            offset="0%"
          ></stop>
          <stop
            stop-color="hsl(265, 55%, 60%)"
            stop-opacity="1"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <g
        stroke-width="2"
        stroke="url(#oooscillate-grad)"
        fill="none"
        stroke-linecap="round"
      >
        <path
          d="M 0 552 Q 355.5 215 711 400 Q 1066.5 585 1422 552"
          opacity="0.78"
        ></path>
        <path
          d="M 0 483 Q 355.5 215 711 400 Q 1066.5 585 1422 483"
          opacity="0.99"
        ></path>
        <path
          d="M 0 414 Q 355.5 215 711 400 Q 1066.5 585 1422 414"
          opacity="0.47"
        ></path>
        <path
          d="M 0 345 Q 355.5 215 711 400 Q 1066.5 585 1422 345"
          opacity="0.86"
        ></path>
        <path
          d="M 0 276 Q 355.5 215 711 400 Q 1066.5 585 1422 276"
          opacity="0.70"
        ></path>
        <path
          d="M 0 207 Q 355.5 215 711 400 Q 1066.5 585 1422 207"
          opacity="0.12"
        ></path>
        <path
          d="M 0 138 Q 355.5 215 711 400 Q 1066.5 585 1422 138"
          opacity="0.80"
        ></path>
      </g>
    </svg>
  );
}
