"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggeredFadeIn } from "@/components/animation/StaggeredFadeIn";

const CDN_ICON = "https://www.apple.com/v/airpods-4/g/images/overview/icon-card";
const CDN_ICON_IN = "https://www.apple.com/v/airpods-4/g/images/overview/icon-card";

interface CardData {
  title: string;
  heading: string;
  body: string;
  detail: string;
  icon: string;
  alt: string;
}

const cards: CardData[] = [
  {
    title: "Engraving",
    heading: "Personalise your AirPods for free.",
    body: "Add a personal touch with free engraving.",
    detail: "Make your AirPods unmistakably yours with a personalised engraving. Choose from a range of emoji, text and number combinations to create a look that&rsquo;s uniquely you. Available exclusively at Apple.",
    icon: `${CDN_ICON}/icon_emoji_face_grinning__cua3l9d18as2_large.png`,
    alt: "Emoji face grinning",
  },
  {
    title: "Payment",
    heading: "Monthly payment options available.",
    body: "Pay in monthly instalments with Apple Card.",
    detail: "With Apple Card, you can pay for your AirPods over time, interest-free. Choose from flexible monthly payment options that fit your budget. See what you qualify for with no impact on your credit score.",
    icon: `${CDN_ICON_IN}/icon_applecard__fjhjbuy2hwae_large.png`,
    alt: "Apple Card",
  },
  {
    title: "Delivery",
    heading: "Get flexible delivery and easy pickup.",
    body: "Choose delivery or pickup options that work for you.",
    detail: "Enjoy free delivery on all AirPods orders. Choose convenient delivery windows that fit your schedule, or select Express Pickup at your nearest Apple Store. We&rsquo;ll have your order ready when you arrive.",
    icon: `${CDN_ICON}/icon_truck_box__blkgu1iu59ea_large.png`,
    alt: "Delivery truck",
  },
  {
    title: "Specialist",
    heading: "Shop with a Specialist.",
    body: "Get expert advice from an Apple Specialist.",
    detail: "Have questions about AirPods? Talk to an Apple Specialist online or in store. They can help you compare models, find the perfect fit, and set up your new AirPods so you can start enjoying them right away.",
    icon: `${CDN_ICON}/icon_message_and_message__b00c2to00mz6_large.png`,
    alt: "Message bubble",
  },
  {
    title: "Apple Store App",
    heading: "Explore a shopping experience designed around you.",
    body: "Download the Apple Store app for a personalised experience.",
    detail: "The Apple Store app puts the power of Apple in your pocket. Get personalised recommendations, compare products, check trade-in values, and track your orders — all from one place. Download today.",
    icon: `${CDN_ICON}/icon_app_applestore__dm9p2yl2q9w2_large.png`,
    alt: "Apple Store app icon",
  },
];

function Modal({
  card,
  onClose,
}: {
  card: CardData;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={card.title}
      >
        <motion.div
          className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{
            duration: 0.4,
            ease: [0.32, 0.08, 0.24, 1],
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-apple-gray-200)] hover:bg-[var(--color-apple-gray-300)] transition-colors"
            onClick={onClose}
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[var(--color-apple-gray-700)]" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </button>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-14 h-14 flex-shrink-0">
              <Image
                src={card.icon}
                alt={card.alt}
                fill
                className="object-contain"
                sizes="56px"
              />
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-apple-black)]">
              {card.heading}
            </h3>
          </div>
          <p
            className="text-base text-[var(--color-apple-gray-600)] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: card.detail }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function WhyAppleSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [modalCard, setModalCard] = useState<CardData | null>(null);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative w-full background-alt"
      aria-label="Why Apple is the best place to buy AirPods"
    >
      <div className="section-container py-[var(--section-padding)]">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
            <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.015em] text-[var(--color-apple-black)] max-w-2xl">
              Why Apple is the best place to buy AirPods.
            </h2>
            <a
              href="https://www.apple.com/in/shop/goto/buy_airpods/airpods_4"
              className="inline-flex items-center gap-1.5 text-sm font-normal text-[var(--color-apple-blue)] hover:text-[var(--color-apple-blue-hover)] whitespace-nowrap transition-colors"
            >
              Shop AirPods
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

        <div className="relative group">
          {canScrollLeft && (
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-[var(--color-apple-gray-200)] flex items-center justify-center hover:bg-[var(--color-apple-gray-100)] transition-colors"
              onClick={() => scrollBy("left")}
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[var(--color-apple-gray-700)]" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>
          )}
          {canScrollRight && (
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-[var(--color-apple-gray-200)] flex items-center justify-center hover:bg-[var(--color-apple-gray-100)] transition-colors"
              onClick={() => scrollBy("right")}
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[var(--color-apple-gray-700)]" aria-hidden="true">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={updateScrollState}
          >
            {cards.map((card, i) => (
              <StaggeredFadeIn key={card.title} index={i} className="snap-start shrink-0">
                <motion.div
                  className="w-[300px] sm:w-[340px] bg-[var(--color-apple-gray-100)] rounded-2xl p-7 flex flex-col h-full cursor-default"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.32, 0.08, 0.24, 1] }}
                >
                  <div className="relative w-14 h-14 mb-5">
                    <Image
                      src={card.icon}
                      alt={card.alt}
                      fill
                      className="object-contain"
                      sizes="56px"
                    />
                  </div>
                  <h3 className="text-[1.75rem] font-semibold leading-tight text-[var(--color-apple-black)] mb-3">
                    {card.heading}
                  </h3>
                  <p className="text-[1.0625rem] text-[var(--color-apple-gray-600)] leading-relaxed mb-6 flex-grow">
                    {card.body}
                  </p>
                  <button
                    className="self-start text-sm font-normal text-[var(--color-apple-blue)] hover:text-[var(--color-apple-blue-hover)] transition-colors"
                    onClick={() => setModalCard(card)}
                    aria-label={`Learn more about ${card.title}`}
                  >
                    Learn more
                  </button>
                </motion.div>
              </StaggeredFadeIn>
            ))}
          </div>
        </div>
      </div>

      {modalCard && (
        <Modal card={modalCard} onClose={() => setModalCard(null)} />
      )}
    </section>
  );
}
