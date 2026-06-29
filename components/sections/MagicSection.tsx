"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggeredFadeIn } from "@/components/animation/StaggeredFadeIn";

const VIDEO_URL =
  "https://www.apple.com/105/media/in/airpods-4/2024/62a51629-9227-413a-98ae-ba9e09984c00/films/feature/airpods-4-feature-tpl-in-2024_16x9.m3u8";

const CONNECT_ENDFRAME =
  "https://www.apple.com/v/airpods-4/g/images/overview/stories/airpods-connect_endframe__eyakc5xs2ei6_large.png";

const MAGIC_DETECTION =
  "https://www.apple.com/v/airpods-4/g/images/overview/stories/magic_detection__eye833zljbqu_large.jpg";

const MAGIC_FIND_MY =
  "https://www.apple.com/v/airpods-4/g/images/overview/stories/magic_find_my__bh83ouli1x4y_large.jpg";

const MAGIC_LISTEN =
  "https://www.apple.com/v/airpods-4/g/images/overview/stories/magic_listen__bfukhz82rzea_large.jpg";

const cards = [
  {
    title: "Detection",
    heading: "A great sense of detection.",
    body: "AirPods 4 give you a seamless listening experience across iPhone, Apple Watch, iPad, Mac and Apple TV.",
    image: MAGIC_DETECTION,
    alt: "AirPods 4 detection illustration",
  },
  {
    title: "Find My",
    heading: "Find My finds more.",
    body: "Track down your AirPods 4 with the Find My app.",
    image: MAGIC_FIND_MY,
    alt: "Find My app tracking AirPods 4",
  },
  {
    title: "Siri Interactions",
    heading: "Siri on standby.",
    body: "Play music, make calls, get directions or check your schedule with just a &lsquo;Hey Siri&rsquo;.",
    image: null,
    alt: "",
    conic: true,
  },
  {
    title: "Listen Together",
    heading: "Listen together.",
    body: "Easily share a song or show between any two sets of AirPods.",
    image: MAGIC_LISTEN,
    alt: "Two pairs of AirPods sharing audio",
  },
];

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const [showPoster, setShowPoster] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
      setShowPoster(false);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="w-full max-w-[538px] mx-auto">
      <div
        className="relative mx-auto w-[300px] h-[430px] sm:w-[538px] sm:h-[770px] cursor-pointer rounded-3xl overflow-hidden"
        onClick={togglePlay}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") togglePlay();
        }}
        aria-label={playing ? "Pause video" : "Play video"}
      >
        {showPoster && (
          <Image
            src={CONNECT_ENDFRAME}
            alt="AirPods 4 pairing"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 300px, 538px"
            priority
          />
        )}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={VIDEO_URL}
          playsInline
          preload="metadata"
          onEnded={() => setPlaying(false)}
          aria-label="AirPods 4 pairing animation"
        />
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          animate={{ opacity: showPoster || !playing ? 0.8 : 0 }}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.div>
      </div>
      <p className="mt-4 text-center text-sm text-[var(--color-apple-gray-600)] max-w-md mx-auto">
        An instant connection. AirPods 4 pair immediately with every device
        connected to your Apple Account.
      </p>
    </div>
  );
}

function SiriCard() {
  return (
    <div
      className="relative rounded-3xl overflow-hidden p-8 sm:p-10 text-white min-h-[320px] flex flex-col justify-end"
      style={{
        background: "conic-gradient(from 45deg, #bb64ff, #f28, #ff8b00 28%, #f2416b, #e750de 60%, #0096ff, #bb64ff)",
      }}
    >
      <div className="relative z-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
          Siri Interactions
        </span>
        <h3 className="mt-2 text-2xl sm:text-[1.75rem] font-bold leading-tight">
          <span
            className="gradient-text"
            style={{
              backgroundImage: "conic-gradient(from 45deg, #bb64ff, #f28, #ff8b00 28%, #f2416b, #e750de 60%, #0096ff, #bb64ff)",
            }}
          >
            Siri on standby.
          </span>
        </h3>
        <p className="mt-3 text-base sm:text-[1.0625rem] text-white/80 leading-relaxed">
          Play music, make calls, get directions or check your schedule with
          just a &lsquo;Hey Siri&rsquo;.
        </p>
      </div>
    </div>
  );
}

export function MagicSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(179deg, #e8543a, #e35882 42%, rgba(222,92,191,0.58) 72%, rgba(244,128,216,0) 95%)",
      }}
      aria-label="Seamless experience"
    >
      <div className="section-container py-[var(--section-padding)]">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">
              Seamless experience
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.015em] text-white max-w-3xl">
              Every little thing they do is magic.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <VideoPlayer />
        </ScrollReveal>

        <div className="mt-24 sm:mt-32 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <StaggeredFadeIn key={card.title} index={i} className="h-full">
              {card.conic ? (
                <SiriCard />
              ) : (
                <div className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm min-h-[320px] flex flex-col justify-end p-8 sm:p-10">
                  {card.image && (
                    <div className="absolute inset-0 -z-10">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className="relative z-10">
                    <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
                      {card.title}
                    </span>
                    <h3 className="mt-2 text-2xl sm:text-[1.75rem] font-bold leading-tight text-white">
                      {card.heading}
                    </h3>
                    <p className="mt-3 text-base sm:text-[1.0625rem] text-white/80 leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                </div>
              )}
            </StaggeredFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
