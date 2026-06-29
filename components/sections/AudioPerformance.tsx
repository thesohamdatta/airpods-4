"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EASING, DURATION } from "@/lib/easing";

const CDN = "https://www.apple.com/v/airpods-4/g/images/overview/stories";

const CARDS = [
  {
    title: "H2 Chip",
    text: "A roaring leap in capabilities. The powerful H2 chip comes to AirPods 4, making audio and calls sound better than ever.",
    image: `${CDN}/audio_h2__7lchtwyfpnmi_large.jpg`,
  },
  {
    title: "Voice Isolation",
    text: "Hang on every word. Using advanced computational audio, Voice Isolation minimises background noise while clarifying the sound of your voice.",
    image: `${CDN}/audio_voice__fsh5v6wchyqa_large.jpg`,
  },
  {
    title: "Acoustic Architecture",
    text: "Enjoy every note, beat and vibe. The acoustic architecture uses an Apple-designed low-distortion driver powered by a custom high dynamic range amplifier.",
    image: `${CDN}/audio_airpod__fxaq33c1a7iy_large.jpg`,
  },
  {
    title: "Adaptive EQ",
    text: "Calibrates music to your ears. Adaptive EQ automatically tunes music to your ears. Inward-facing microphones detect what you're hearing, then adjust low- and mid-range frequencies.",
    image: `${CDN}/audio_music__codaubhynsr6_large.jpg`,
  },
  {
    title: "FaceTime",
    text: "Real talk in real time. Connect on FaceTime in crisp, HD quality with an AAC-ELD speech codec.",
    image: `${CDN}/audio_facetime__cd84uowabys2_large.jpg`,
  },
];

function AudioCard({
  card,
  index,
  total,
  progress,
}: {
  card: (typeof CARDS)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, start + 0.05], [60, 0]);
  const scale = useTransform(progress, [start, start + 0.05], [0.92, 1]);

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-6 rounded-3xl bg-white/90 backdrop-blur-xl p-8 shadow-xl border border-black/5 w-full max-w-2xl mx-auto"
      style={{ opacity, y, scale }}
    >
      <div className="relative w-32 h-32 shrink-0">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-contain"
          sizes="128px"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[var(--color-apple-gray-900)] mb-2">
          {card.title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--color-apple-gray-600)]">
          {card.text}
        </p>
      </div>
    </motion.div>
  );
}

export function AudioPerformance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const pinned = pinnedRef.current;
    if (!container || !pinned) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: `+=${container.offsetHeight - window.innerHeight}`,
        pin: pinned,
        pinSpacing: false,
      });
    }, container);

    return () => ctx.revert();
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[500vh] bg-[var(--color-apple-gray-50)]"
      aria-label="Audio performance"
    >
      <div
        ref={pinnedRef}
        className="sticky top-0 h-screen flex items-center overflow-hidden"
      >
        <div className="w-full md:w-1/2 h-full relative">
          <Image
            src={`${CDN}/audio_hero__e2s9qjrif1iu_xlarge.png`}
            alt="Person wearing AirPods 4"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="hidden md:flex flex-col items-center justify-center w-1/2 h-full px-8 py-16 overflow-y-auto">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-apple-gray-500)]">
              Audio performance
            </span>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-[var(--color-apple-gray-900)]">
              A completely transformed experience.
            </h2>
          </div>

          <div className="w-full space-y-[100vh]">
            {CARDS.map((card, i) => (
              <AudioCard
                key={card.title}
                card={card}
                index={i}
                total={CARDS.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden px-6 py-16 space-y-8">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-apple-gray-500)]">
            Audio performance
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--color-apple-gray-900)]">
            A completely transformed experience.
          </h2>
        </div>

        <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden mb-8">
          <Image
            src={`${CDN}/audio_hero__e2s9qjrif1iu_xlarge.png`}
            alt="Person wearing AirPods 4"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: DURATION.reveal,
              ease: EASING.appleReveal,
              delay: i * 0.1,
            }}
            className="flex flex-col items-center gap-4 rounded-2xl bg-white p-6 shadow-md border border-black/5 text-center"
          >
            <div className="relative w-24 h-24">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-contain"
                sizes="96px"
              />
            </div>
            <h3 className="text-base font-semibold text-[var(--color-apple-gray-900)]">
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--color-apple-gray-600)]">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
