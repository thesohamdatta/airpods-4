"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = {
  hero: "https://www.apple.com/v/airpods-4/g/images/overview/stories/design_airpods_outside__de500neaukgi_large.jpg",
  inside:
    "https://www.apple.com/v/airpods-4/g/images/overview/stories/design_airpods_inside__exv05zud5866_large.jpg",
  stem: "https://www.apple.com/v/airpods-4/g/images/overview/stories/design_airpods_stem__ca26r79ta9f6_large.jpg",
  pair: "https://www.apple.com/v/airpods-4/g/images/overview/stories/design_airpods_pair__c4zc76vxva82_large.jpg",
};

function PinLine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        end: "top 20%",
        onUpdate: (self) => {
          gsap.set(el, { scaleX: self.progress });
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className={`origin-left scale-x-0 h-px bg-[var(--color-apple-gray-400)] ${className ?? ""}`}
    />
  );
}

function Annotation({
  title,
  description,
  pinPosition,
  linePosition,
  isIcon,
}: {
  title: string;
  description: string;
  pinPosition: string;
  linePosition: string;
  isIcon?: boolean;
}) {
  return (
    <div className={`absolute ${pinPosition} max-w-[280px]`}>
      <PinLine className={`absolute ${linePosition}`} />
      <div className="pt-3">
        {isIcon && (
          <div className="mb-2 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-apple-green)]">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-white"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
        )}
        <h3 className="text-[var(--color-apple-black)] text-lg font-semibold leading-snug">
          {title}
        </h3>
        <p className="mt-1 text-[var(--color-apple-gray-600)] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export function WearabilitySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] w-full bg-white"
      aria-label="Wearability"
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <div className="section-container flex flex-col items-center pt-20 pb-12">
          <motion.span
            className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-apple-gray-500)]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            Wearability
          </motion.span>
          <motion.h2
            className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.015em] text-center text-[var(--color-apple-black)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          >
            Redesigned for comfort.{" "}
            <span className="text-[var(--color-apple-gray-500)]">
              How fitting.
            </span>
          </motion.h2>

          <div className="relative mt-12 w-full max-w-[980px]">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={IMAGES.hero}
                alt="AirPods 4 back view"
                fill
                className="object-cover"
                sizes="(max-width: 980px) 100vw, 980px"
              />
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[IMAGES.inside, IMAGES.stem, IMAGES.pair].map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl"
                >
                  <Image
                    src={src}
                    alt={`AirPods 4 angle ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 734px) 33vw, 240px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <Annotation
            title="Physical fit-ness."
            description="Ear fit"
            pinPosition="top-[15%] left-[8%]"
            linePosition="top-0 left-[120px] w-[120px]"
          />

          <Annotation
            title="Updated stem with force sensor. With a simple pinch you can control playback and calls — and even record a video or snap a pic from your iPhone with the new camera remote functionality."
            description=""
            pinPosition="top-[45%] right-[6%]"
            linePosition="top-0 right-[120px] w-[120px]"
          />

          <Annotation
            title="Dust, sweat and water resistant. AirPods 4 and the charging case are rated IP54 dust, sweat and water resistant, so they'll withstand anything from rain to heavy workouts."
            description=""
            pinPosition="bottom-[8%] left-1/2 -translate-x-1/2"
            linePosition="hidden"
            isIcon
          />
        </div>
      </div>
    </section>
  );
}
