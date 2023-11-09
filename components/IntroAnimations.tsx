"use client";

import { motion, cubicBezier } from "framer-motion";

const easing = cubicBezier(0.31, 0.77, 0.52, 0.26); // default easing
const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

export default function IntroAnimation() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 1422 800"
        opacity="1"
        className="absolute left-0 right-0 z-0 w-full pointer-events-none"
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
              stopColor="hsl(265, 55%, 30%)"
              stopOpacity="1"
              offset="0%"
            ></stop>
            <stop
              stopColor="hsl(265, 55%, 60%)"
              stopOpacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <g
          strokeWidth="2"
          stroke="url(#oooscillate-grad)"
          fill="none"
          strokeLinecap="round"
        >
          {/* <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ ease: easing, duration: 3, delay: 0 }}
          id="7"
          d="M 0 552 Q 355.5 215 711 400 Q 1066.5 585 1422 552"
          opacity="0.78"
        ></motion.path> */}
          <motion.path
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ ease: easing, duration: 1.5, delay: 1 }}
            id="6"
            d="M 0 483 Q 355.5 215 711 400 Q 1066.5 585 1422 483"
            opacity="0.99"
          ></motion.path>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ ease: easing, duration: 1.5, delay: 2 }}
            id="5"
            d="M 0 414 Q 355.5 215 711 400 Q 1066.5 585 1422 414"
            opacity="0.47"
          ></motion.path>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ ease: easing, duration: 2, delay: 4 }}
            id="4"
            d="M 0 345 Q 355.5 215 711 400 Q 1066.5 585 1422 345"
            opacity="0.86"
          ></motion.path>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ ease: easing, duration: 1.5, delay: 2 }}
            id="3"
            d="M 0 276 Q 355.5 215 711 400 Q 1066.5 585 1422 276"
            opacity="0.70"
          ></motion.path>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ ease: easing, duration: 1.5, delay: 1 }}
            id="2"
            d="M 0 207 Q 355.5 215 711 400 Q 1066.5 585 1422 207"
            opacity="0.12"
          ></motion.path>
          {/* <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ease: easing, duration: 3, delay: 0 }}
          id="1"
          d="M 0 138 Q 355.5 215 711 400 Q 1066.5 585 1422 138"
          opacity="0.80"
        ></motion.path> */}
        </g>
      </svg>
    </>
  );
}
