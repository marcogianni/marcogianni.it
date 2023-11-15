"use client";

import { motion, cubicBezier, AnimationProps, Transition } from "framer-motion";

const easing = cubicBezier(0.35, 0.17, 0.3, 0.86); // default easing

interface Props extends AnimationProps {
  children: React.ReactNode;
  className?: string;
  transition?: Transition;
}

export function Motion(props: Props) {
  const { children, className, transition, ...rest } = props;

  return (
    <motion.div
      className={className}
      transition={{ ...transition, ease: easing }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function MotionInView(props: Props) {
  const { children, className, transition, ...rest } = props;

  return (
    <motion.div
      className={className}
      transition={{ ...transition, ease: easing }}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
