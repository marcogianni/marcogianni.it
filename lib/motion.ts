import type { Transition } from "framer-motion";

/**
 * Motion tokens — single source of truth for every animation on the site.
 * The same curves are exposed to CSS as `--ease-*` variables (globals.css)
 * and to Tailwind as `ease-out`, `ease-in-out` and `ease-drawer`.
 */

type Bezier = [number, number, number, number];

export const ease = {
  /** Entering / exiting elements. Starts fast, feels responsive. */
  out: [0.23, 1, 0.32, 1] as Bezier,
  /** Elements moving or morphing on screen. */
  inOut: [0.77, 0, 0.175, 1] as Bezier,
  /** iOS-like sheet curve. */
  drawer: [0.32, 0.72, 0, 1] as Bezier,
};

/** Seconds. UI stays under 300ms; only decorative/marketing motion is longer. */
export const duration = {
  press: 0.16,
  exit: 0.15,
  fast: 0.2,
  base: 0.3,
  reveal: 0.6,
  draw: 1.8,
};

/** Delay between siblings entering together. */
export const stagger = {
  tight: 0.03,
  base: 0.06,
};

export const spring = {
  /** Shared-layout indicators (e.g. active tab highlight). No bounce. */
  ui: { type: "spring", duration: 0.35, bounce: 0 },
  /** Programmatic page scrolling. */
  scroll: { type: "spring", stiffness: 100, damping: 30, restDelta: 0.01 },
} satisfies Record<string, Transition>;
