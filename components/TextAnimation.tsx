"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type TextAnimationProps = {
  text: string;
  className?: string;
};

const TextAnimation: React.FC<TextAnimationProps> = ({ text, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chars = text.split("");

  const isElementInView = useInView(containerRef, { once: true, amount: 0.05 });

  return (
    <div ref={containerRef} className={className}>
      {chars.map((char, index) => (
        <motion.span
          className="relative"
          key={index}
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          animate={{
            opacity: isElementInView ? 1 : 0,
            transform: isElementInView ? "translateY(0)" : "translateY(50px)",
          }}
          transition={{ delay: Math.random() * 1.2 + 1 }}
          viewport={{ once: true }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default TextAnimation;
