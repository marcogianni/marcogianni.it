"use client";

import {
  MotionConfig,
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";

import { duration, ease, stagger as staggerTokens } from "@/lib/motion";

type Tag =
  "div" | "span" | "section" | "header" | "h1" | "h2" | "p" | "ul" | "li";

const components = {
  div: motion.div,
  span: motion.span,
  section: motion.section,
  header: motion.header,
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
  ul: motion.ul,
  li: motion.li,
} as unknown as Record<Tag, typeof motion.div>;

interface BaseProps {
  children: React.ReactNode;
  className?: string;
  as?: Tag;
  id?: string;
}

interface EntranceProps {
  /** Vertical travel in px. Negative values enter from above. */
  distance?: number;
  /** Starting blur in px. Keep it small; it bridges the fade on text. */
  blur?: number;
}

interface TriggerProps {
  /** `true` (default): play once when scrolled into view. `false`: play on mount. */
  inView?: boolean;
}

// Trigger slightly before the element is fully on screen so content never
// feels like it's waiting for the user.
const viewport = { once: true, margin: "0px 0px -10% 0px" } as const;

function getTrigger(inView: boolean) {
  return inView ? { whileInView: "visible", viewport } : { animate: "visible" };
}

function entranceVariants(distance: number, blur: number): Variants {
  return {
    hidden: {
      opacity: 0,
      // Full transform string (not `y`) so the animation stays on the
      // compositor even while the page is busy hydrating.
      transform: `translateY(${distance}px)`,
      ...(blur ? { filter: `blur(${blur}px)` } : {}),
    },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      ...(blur ? { filter: "blur(0px)" } : {}),
      // A leftover `blur(0px)` keeps a filter layer alive (and softens text
      // in Safari), so drop it once the animation is done.
      ...(blur ? { transitionEnd: { filter: "none" } } : {}),
    },
  };
}

/**
 * Reduced motion keeps the fade (it aids comprehension) but removes travel.
 * The transform still jumps to its final value, so the SSR'd starting
 * position never gets stuck on screen.
 */
export function useMotionSafeTransition(transition: Transition): Transition {
  const reduce = useReducedMotion();
  if (!reduce) return transition;

  const delay = (transition as { delay?: number }).delay;
  return {
    ...transition,
    transform: delay === undefined ? { duration: 0 } : { duration: 0, delay },
  } as Transition;
}

/** App-wide motion defaults. Disables transform/layout animations for users who ask for it. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Fades and lifts a single element into place. */
export function Reveal({
  children,
  className,
  as = "div",
  id,
  delay = 0,
  distance = 16,
  blur = 0,
  inView = true,
}: BaseProps & EntranceProps & TriggerProps & { delay?: number }) {
  const Component = components[as];
  const transition = useMotionSafeTransition({
    duration: duration.reveal,
    ease: ease.out,
    delay,
  });

  return (
    <Component
      id={id}
      className={className}
      initial="hidden"
      variants={entranceVariants(distance, blur)}
      transition={transition}
      {...getTrigger(inView)}
    >
      {children}
    </Component>
  );
}

/** Orchestrates its `StaggerItem` children so they cascade in one after another. */
export function Stagger({
  children,
  className,
  as = "div",
  id,
  delay = 0,
  stagger = staggerTokens.base,
  inView = true,
}: BaseProps & TriggerProps & { delay?: number; stagger?: number }) {
  const Component = components[as];

  return (
    <Component
      id={id}
      className={className}
      initial="hidden"
      variants={{
        hidden: {},
        visible: {
          transition: { delayChildren: delay, staggerChildren: stagger },
        },
      }}
      {...getTrigger(inView)}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
  id,
  distance = 16,
  blur = 0,
}: BaseProps & EntranceProps) {
  const Component = components[as];
  const transition = useMotionSafeTransition({
    duration: duration.reveal,
    ease: ease.out,
  });

  return (
    <Component
      id={id}
      className={className}
      variants={entranceVariants(distance, blur)}
      transition={transition}
    >
      {children}
    </Component>
  );
}
