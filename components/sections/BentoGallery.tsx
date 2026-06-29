"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaggeredFadeIn } from "@/components/animation/StaggeredFadeIn";
import { bento } from "@/lib/images";

interface Slide {
  id: string;
  images: { src: string; alt: string }[];
  layout: "single" | "split";
}

const slides: Slide[] = [
  {
    id: "case-open",
    images: [{ src: bento.caseOpen.src, alt: bento.caseOpen.alt }],
    layout: "single",
  },
  {
    id: "stem",
    images: [
      { src: bento.stem.src, alt: bento.stem.alt },
      { src: bento.closeup.src, alt: bento.closeup.alt },
    ],
    layout: "split",
  },
  {
    id: "case-closed",
    images: [{ src: bento.caseClose.src, alt: bento.caseClose.alt }],
    layout: "single",
  },
  {
    id: "side",
    images: [
      { src: bento.side.src, alt: bento.side.alt },
      { src: bento.angle.src, alt: bento.angle.alt },
    ],
    layout: "split",
  },
];

export function BentoGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    if (!scrollRef.current) return;
    const idx = Math.round(
      scrollRef.current.scrollLeft / scrollRef.current.clientWidth
    );
    setActiveIndex(Math.min(idx, slides.length - 1));
  }, []);

  const scrollTo = useCallback((index: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: index * scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => container.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  return (
    <StaggeredFadeIn>
      <section className="no-pad-top">
        <div className="section-content pb-20">
          <div className="flex items-end justify-between">
            <h2 className="headline-xxl">Take a closer look.</h2>
            <a
              href="#"
              className="hidden items-center gap-2 text-[17px] font-semibold text-link hover:underline md:flex"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <path d="M7 0a1 1 0 011 1v5h5a1 1 0 110 2H8v5a1 1 0 11-2 0V8H1a1 1 0 010-2h5V1a1 1 0 011-1z" />
              </svg>
              View in your space
            </a>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative min-w-full snap-start"
            >
              <div
                className={`mx-6 h-[480px] md:h-[740px] ${
                  slide.layout === "split"
                    ? "grid grid-cols-1 gap-4 md:grid-cols-2"
                    : ""
                }`}
              >
                {slide.images.map((img, i) => (
                  <div key={i} className="relative h-full overflow-hidden rounded-[18px]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 px-6 pt-10">
          <button
            onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/60 hover:border-white/60 hover:text-white/90 transition-colors"
            aria-label="Previous slide"
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="currentColor">
              <path d="M8.5 1L1.5 8l7 7" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Gallery slides">
            {slides.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                onClick={() => scrollTo(i)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => scrollTo(Math.min(slides.length - 1, activeIndex + 1))}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/60 hover:border-white/60 hover:text-white/90 transition-colors"
            aria-label="Next slide"
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="currentColor">
              <path d="M1.5 1l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </button>
        </div>
      </section>
    </StaggeredFadeIn>
  );
}
