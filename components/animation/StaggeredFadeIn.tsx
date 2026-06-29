"use client";

import { motion } from "framer-motion";
import { EASING, DURATION } from "@/lib/easing";

interface StaggeredFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number;
}

export function StaggeredFadeIn({
  children,
  className,
  delay = 0,
  index = 0,
}: StaggeredFadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: DURATION.reveal,
        ease: EASING.appleReveal,
        delay: delay + index * DURATION.stagger,
      }}
    >
      {children}
    </motion.div>
  );
}
