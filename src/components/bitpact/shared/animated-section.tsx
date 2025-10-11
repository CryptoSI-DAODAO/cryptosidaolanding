"use client";

import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  viewportOptions?: UseInViewOptions;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  viewportOptions = { once: true, amount: 0.2 }
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewportOptions);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function AnimatedFadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up"
}: AnimatedFadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: 30 };
      case "down": return { opacity: 0, y: -30 };
      case "left": return { opacity: 0, x: 30 };
      case "right": return { opacity: 0, x: -30 };
      default: return { opacity: 0, y: 30 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case "up":
      case "down": return { opacity: 1, y: 0 };
      case "left":
      case "right": return { opacity: 1, x: 0 };
      default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedStaggerProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

export function AnimatedStagger({
  children,
  className = "",
  staggerDelay = 0.1,
  initialDelay = 0
}: AnimatedStaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: initialDelay + index * staggerDelay }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}