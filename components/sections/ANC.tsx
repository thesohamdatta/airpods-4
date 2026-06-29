"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASING, DURATION } from "@/lib/easing";

const CDN = "https://www.apple.com/v/airpods-4/g/images/overview";

const FEATURES = [
  {
    title: "Adaptive Audio",
    text: "Blends Transparency and Active Noise Cancellation in real time, seamlessly tailoring noise control to your changing environment.",
    icon: `${CDN}/noise_icon_adaptive__eh8sgult7gae_large.png`,
  },
  {
    title: "Transparency mode",
    text: "Provides the most natural way to hear the world around you — perfect for staying connected to your surroundings.",
    icon: `${CDN}/noise_icon_transparency__buvnzqmv27ci_large.png`,
  },
  {
    title: "Conversation Awareness",
    text: "Senses when you're speaking to someone nearby and automatically lowers the volume of what's playing.",
    icon: `${CDN}/noise_icon_conversation__ez1oxr48lac2_large.png`,
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [60, 0]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center max-w-sm mx-auto"
      style={{ opacity, y }}
    >
      <div className="relative w-16 h-16 mb-5">
        <Image
          src={feature.icon}
          alt={feature.title}
          fill
          className="object-contain"
          sizes="64px"
        />
      </div>
      <h3 className="text-lg font-semibold text-[var(--color-apple-gray-900)] mb-3">
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--color-apple-gray-600)]">
        {feature.text}
      </p>
    </motion.div>
  );
}

export function ANCSection() {
  return (
    <section
      className="relative bg-black text-white overflow-hidden"
      aria-label="Active Noise Cancellation"
    >
      <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        <Image
          src={`${CDN}/noise_hero__rhegsu0w6iiy_xlarge.jpg`}
          alt="Active Noise Cancellation"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.span
            className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60 block mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.reveal, ease: EASING.appleReveal }}
          >
            Active Noise Cancellation
          </motion.span>
          <motion.h2
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.015em] text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: DURATION.hero,
              ease: EASING.appleOut,
              delay: 0.2,
            }}
          >
            The joy of quietude.
          </motion.h2>
          <motion.p
            className="text-lg font-semibold text-white/80 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: DURATION.reveal,
              ease: EASING.appleReveal,
              delay: 0.4,
            }}
          >
            Noise out. Magic in.
          </motion.p>
          <motion.p
            className="text-sm leading-relaxed text-white/60 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: DURATION.reveal,
              ease: EASING.appleReveal,
              delay: 0.5,
            }}
          >
            AirPods 4 deliver the first open-ear design with Active Noise
            Cancellation, intelligently adapting to the world around you.
          </motion.p>
        </div>
      </div>

      <div className="relative z-10 -mt-20 pb-32 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
