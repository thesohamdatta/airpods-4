"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  start?: number;
  end?: number;
}

export function ScrollReveal({
  children,
  className,
  start = 0,
  end = 1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, start, end, 1], [0, 0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, start, end, 1], [60, 60, 0, 0]);

  return (
    <motion.div ref={ref} className={className} style={{ opacity, y }}>
      {children}
    </motion.div>
  );
}
