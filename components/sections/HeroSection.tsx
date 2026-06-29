"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { EASING, DURATION } from "@/lib/easing";
import { hero } from "@/lib/images";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > window.innerHeight * 0.75);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[var(--duration-standard)] ease-[var(--ease-apple-out)] ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-black/5" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-11 items-center justify-between px-5 max-w-[1680px]">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-[var(--color-apple-gray-900)]"
          aria-label="AirPods 4"
        >
          AirPods 4
        </a>
        <div className="hidden sm:flex items-center gap-6">
          <a
            href="#"
            className="text-xs font-normal text-[var(--color-apple-gray-600)] hover:text-[var(--color-apple-black)] transition-colors"
          >
            Overview
          </a>
          <a
            href="#"
            className="text-xs font-normal text-[var(--color-apple-gray-600)] hover:text-[var(--color-apple-black)] transition-colors"
          >
            Tech Specs
          </a>
          <a
            href="#"
            className="text-xs font-normal text-[var(--color-apple-gray-600)] hover:text-[var(--color-apple-black)] transition-colors"
          >
            Compare
          </a>
        </div>
        <a
          href="https://www.apple.com/in/shop/goto/buy_airpods/airpods_4"
          className="rounded-full bg-[var(--color-apple-blue)] px-4 py-1 text-xs font-normal text-white hover:bg-[var(--color-apple-blue-hover)] transition-colors"
        >
          Buy
        </a>
      </div>
    </nav>
  );
}

function FilmModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="AirPods 4 film"
        >
          <motion.div
            className="relative w-full max-w-5xl aspect-video mx-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: DURATION.emphasis, ease: EASING.appleOut }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="w-full h-full rounded-2xl shadow-2xl"
              src="https://www.apple.com/105/media/in/airpods-4/2024/62a51629-9227-413a-98ae-ba9e09984c00/films/product/airpods-4-product-tpl-in-2024_16x9.m3u8"
              controls
              autoPlay
              playsInline
              aria-label="AirPods 4 product film"
            />
            <button
              className="absolute -top-12 right-0 text-white/70 hover:text-white text-sm transition-colors"
              onClick={onClose}
              aria-label="Close film modal"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MarqueeLockup() {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.hero, ease: EASING.appleOut, delay: 0.3 }}
    >
      <span className="text-sm font-semibold tracking-widest text-white/80 uppercase mb-4">
        AirPods
      </span>
      <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[1.05] tracking-[-0.015em] text-white">
        Iconic.
        <br />
        Now supersonic.
      </h1>
      <p className="mt-4 text-[clamp(1rem,2.5vw,1.5rem)] font-semibold text-white/90">
        AirPods 4
      </p>
      <div className="mt-8 flex items-center gap-4">
        <a
          href="https://www.apple.com/in/shop/goto/buy_airpods/airpods_4"
          className="rounded-full bg-[var(--color-apple-blue)] px-7 py-3 text-sm font-normal text-white hover:bg-[var(--color-apple-blue-hover)] transition-all duration-[var(--duration-micro)]"
        >
          Buy
        </a>
        <button className="group flex items-center gap-2 text-sm font-normal text-white/80 hover:text-white transition-colors">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/30 group-hover:border-white/60 transition-colors">
            <svg
              viewBox="0 0 28 28"
              className="w-3 h-3 fill-white ml-0.5"
              aria-hidden="true"
            >
              <path d="M10 7l9 7-9 7V7z" />
            </svg>
          </span>
          Watch the film
        </button>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const [filmOpen, setFilmOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Navbar />
      <section
        className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black"
        aria-label="Hero"
      >
        <div className="absolute inset-0">
          <Image
            src={hero.primary.src}
            alt="A person dancing while wearing AirPods 4"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          {mounted && <MarqueeLockup />}
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            className="group flex items-center gap-2 text-sm text-white/60 hover:text-white/90 transition-colors"
            onClick={() => setFilmOpen(true)}
            aria-label="Watch the AirPods 4 film"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 group-hover:border-white/50 transition-colors">
              <svg
                viewBox="0 0 28 28"
                className="w-3.5 h-3.5 fill-white/70 ml-0.5"
                aria-hidden="true"
              >
                <path d="M10 7l9 7-9 7V7z" />
              </svg>
            </span>
            Watch the film
          </button>
        </div>
      </section>
      <FilmModal isOpen={filmOpen} onClose={() => setFilmOpen(false)} />
    </>
  );
}
