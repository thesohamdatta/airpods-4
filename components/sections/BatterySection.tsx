"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const CASE_IMAGE =
  "https://www.apple.com/v/airpods-4/g/images/overview/stories/battery_case__ey8pezx7mb6u_large.png";
const USB_IMAGE =
  "https://www.apple.com/v/airpods-4/g/images/overview/stories/battery_usb__fmcq7sazbxm6_large.jpg";
const WIRELESS_IMAGE =
  "https://www.apple.com/v/airpods-4/g/images/overview/stories/battery_charger__f8vsiut6h1aq_large.jpg";

const ECHO_TEXT = "Charges fast. And lasts";

const LAYER_COUNT = 8;

function EchoText() {
  return (
    <div className="relative">
      {Array.from({ length: LAYER_COUNT }).map((_, i) => {
        const depth = i * 2;
        const opacity = 1 - i / LAYER_COUNT;
        return (
          <motion.span
            key={i}
            className="absolute inset-0 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white pointer-events-none"
            style={{
              transform: `translateZ(${depth}px)`,
              opacity,
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1],
              delay: i * 0.06,
            }}
          >
            {ECHO_TEXT}
          </motion.span>
        );
      })}
      <span className="invisible text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
        {ECHO_TEXT}
      </span>
    </div>
  );
}

function StatCard({
  value,
  caption,
}: {
  value: string;
  caption: string;
}) {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <span
        className="text-[48px] font-semibold leading-tight"
        style={{
          background:
            "linear-gradient(330deg, rgb(24,152,94), rgb(0,190,104))",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {value}
      </span>
      <span className="mt-2 text-[20px] font-semibold leading-snug text-white/80">
        {caption}
      </span>
    </motion.div>
  );
}

function ChargeCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <motion.div
      className="relative aspect-[16/10] overflow-hidden rounded-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 734px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-white text-[clamp(1rem,2vw,1.5rem)] font-semibold leading-snug">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}

export function BatterySection() {
  const caseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: caseRef,
    offset: ["start end", "end start"],
  });

  const caseScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #fff, #a4f7cd 10%, #2cc677 22%, #10845b 38%, #014a34 59%, #002f26 73%, #011615 94%)",
      }}
      aria-label="Battery"
    >
      <div className="section-container flex flex-col items-center pt-[var(--section-padding)]">
        <motion.span
          className="text-xs font-semibold tracking-[0.15em] uppercase text-white/60"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          Battery
        </motion.span>

        <div className="relative mt-8 text-center">
          <EchoText />
        </div>

        <div
          ref={caseRef}
          className="relative w-full max-w-[400px] aspect-square mt-12"
        >
          <motion.div style={{ scale: caseScale }} className="relative w-full h-full">
            <Image
              src={CASE_IMAGE}
              alt="AirPods 4 charging case"
              fill
              className="object-contain"
              sizes="400px"
              priority
            />
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[980px]">
          <StatCard
            value="Up to 30 hours"
            caption="of listening time with the case"
          />
          <StatCard
            value="Up to 5 hours"
            caption="of listening time on a single charge"
          />
          <StatCard
            value="Up to 4 hours"
            caption="of listening time with Active Noise Cancellation on a single charge"
          />
        </div>

        <div className="mt-20 w-full max-w-[980px] grid grid-cols-1 md:grid-cols-2 gap-6 pb-[var(--section-padding)]">
          <ChargeCard title="Easy as USB-C." image={USB_IMAGE} />
          <ChargeCard title="Wireless options." image={WIRELESS_IMAGE} />
        </div>
      </div>
    </section>
  );
}
