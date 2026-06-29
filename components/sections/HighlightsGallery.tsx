"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaggeredFadeIn } from "@/components/animation/StaggeredFadeIn";
import { highlights } from "@/lib/images";

interface MediaCard {
  id: string;
  image: string;
  caption: string;
  poster?: string;
  align?: "top-left" | "top-center" | "bottom-center";
}

const cards: MediaCard[] = [
  {
    id: "anc",
    image: highlights.lifestyle.src,
    caption:
      "AirPods 4 with Active Noise Cancellation also available — a first for this design.",
  },
  {
    id: "translation",
    image: highlights.liveTranslation.src,
    caption:
      "Live Translation helps you communicate across languages.",
  },
  {
    id: "chip",
    image: highlights.chipEnd.src,
    poster: highlights.chipStart.src,
    caption:
      "Clearer calls with Voice Isolation and a hands-free way to interact with Siri.",
    align: "bottom-center",
  },
  {
    id: "charging",
    image: highlights.charging.src,
    caption:
      "Power up with USB\u2011C, an Apple Watch charger or a Qi\u2011certified charger.",
  },
];

export function HighlightsGallery({
  onPlayFilm,
}: {
  onPlayFilm?: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const updateActiveIndex = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(idx, cards.length - 1));
  }, []);

  const scrollTo = useCallback((index: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: index * scrollRef.current.clientWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  }, []);

  const startAutoAdvance = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % cards.length;
        scrollTo(next);
        return next;
      });
    }, 4000);
  }, [scrollTo]);

  const stopAutoAdvance = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isPlaying) startAutoAdvance();
    else stopAutoAdvance();
    return stopAutoAdvance;
  }, [isPlaying, startAutoAdvance, stopAutoAdvance]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => container.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  return (
    <StaggeredFadeIn>
      <section className="theme-dark">
        <div className="section-content">
          <div className="flex flex-col gap-y-8 md:flex-row md:items-end md:justify-between">
            <h2 className="headline-xxl">Get the highlights.</h2>
            <button
              onClick={onPlayFilm}
              className="flex items-center gap-2 text-[17px] font-semibold text-link hover:underline"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
              </svg>
              Watch the AirPods 4 film
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-[80px] flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative min-w-full snap-start overflow-hidden"
              style={{ borderRadius: "18px" }}
            >
              <div className="relative aspect-[1.2] md:aspect-[2.1]">
                <Image
                  src={card.image}
                  alt={card.caption}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
              <div
                className={`absolute inset-0 pointer-events-none ${
                  card.align === "bottom-center"
                    ? "flex items-end justify-center pb-8"
                    : "flex items-start justify-start p-8 md:p-16"
                }`}
              >
                <p
                  className={`text-balance text-white ${
                    card.align === "bottom-center"
                      ? "text-center text-[21px] md:text-[28px] font-semibold leading-tight max-w-[480px]"
                      : "text-[21px] md:text-[28px] font-semibold leading-tight max-w-[480px]"
                  }`}
                >
                  {card.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between px-6 pt-8">
          <div className="flex gap-2" role="tablist" aria-label="Gallery slides">
            {cards.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                onClick={() => {
                  stopAutoAdvance();
                  scrollTo(i);
                }}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="flex items-center gap-2 text-[12px] font-semibold text-white/80 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              {isPlaying ? (
                <>
                  <rect x="3" y="3" width="3" height="10" rx="1" />
                  <rect x="10" y="3" width="3" height="10" rx="1" />
                </>
              ) : (
                <polygon points="4,2 14,8 4,14" />
              )}
            </svg>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </section>
    </StaggeredFadeIn>
  );
}
