"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggeredFadeIn } from "@/components/animation/StaggeredFadeIn";

const CDN_CONTRAST = "https://www.apple.com/v/airpods-4/g/images/overview/contrast";

const AIRPODS_4_CLOSED =
  "https://www.apple.com/v/airpods-4/g/images/overview/contrast/explore_airpods_4_closed__dgo55jp7r7gy_xlarge.jpg";

const AIRPODS_4_OPENED =
  "https://www.apple.com/v/airpods-4/g/images/overview/contrast/explore_airpods_4_opened__d1lvsgfc59me_xlarge.jpg";

interface Feature {
  label: string;
  icon?: string;
  alt?: string;
  dash?: boolean;
  value?: string;
}

interface ProductTile {
  name: string;
  badge?: string;
  image: string;
  alt: string;
  buy?: boolean;
  features: Feature[];
}

const products: ProductTile[] = [
  {
    name: "AirPods 4",
    badge: "Currently viewing: AirPods 4",
    image: AIRPODS_4_CLOSED,
    alt: "AirPods 4 charging case closed",
    features: [
      { label: "Active Noise Cancellation", dash: true },
      { label: "Adaptive Audio", dash: true },
      {
        label: "Personalised Spatial Audio",
        icon: `${CDN_CONTRAST}/person_spatialaudio__cabm1tfxfz9e_large.png`,
        alt: "Personalised Spatial Audio",
      },
      {
        label: "H2 chip",
        icon: `${CDN_CONTRAST}/chip_h2__eu62bmbnh0wi_large.png`,
        alt: "H2 chip",
      },
      {
        label: "5 hours of listening time",
        value: "Up to 5 hours",
        icon: `${CDN_CONTRAST}/battery_100percent__6n3pyba2z4im_large.png`,
        alt: "Battery",
      },
      {
        label: "Up to 30 hours total with case",
        icon: `${CDN_CONTRAST}/battery_100percent__6n3pyba2z4im_large.png`,
        alt: "Total battery with case",
      },
      {
        label: "Charging case",
        icon: `${CDN_CONTRAST}/airpods_4_chargingcase__c4fwrkdadb42_large.png`,
        alt: "Charging case",
      },
      {
        label: "Water resistant",
        icon: `${CDN_CONTRAST}/drop__d6cji0kw3xg2_large.png`,
        alt: "Water resistant",
      },
    ],
  },
  {
    name: "AirPods 4 with Active Noise Cancellation",
    image: AIRPODS_4_OPENED,
    alt: "AirPods 4 with ANC out of case",
    buy: true,
    features: [
      {
        label: "Active Noise Cancellation",
        icon: `${CDN_CONTRAST}/contrast_icon_group__f8aob849c2i6_large.png`,
        alt: "Noise control",
      },
      {
        label: "Adaptive Audio and Transparency mode",
        icon: `${CDN_CONTRAST}/contrast_icon_group__f8aob849c2i6_large.png`,
        alt: "Adaptive Audio",
      },
      {
        label: "Personalised Spatial Audio",
        icon: `${CDN_CONTRAST}/person_spatialaudio__cabm1tfxfz9e_large.png`,
        alt: "Personalised Spatial Audio",
      },
      {
        label: "H2 chip",
        icon: `${CDN_CONTRAST}/chip_h2__eu62bmbnh0wi_large.png`,
        alt: "H2 chip",
      },
      {
        label: "5 hours of listening time",
        value: "Up to 5 hours",
        icon: `${CDN_CONTRAST}/battery_100percent__6n3pyba2z4im_large.png`,
        alt: "Battery",
      },
      {
        label: "Up to 30 hours total with case",
        icon: `${CDN_CONTRAST}/battery_100percent__6n3pyba2z4im_large.png`,
        alt: "Total battery with case",
      },
      {
        label: "Charging case",
        icon: `${CDN_CONTRAST}/airpods_4_chargingcase__c4fwrkdadb42_large.png`,
        alt: "Charging case",
      },
      {
        label: "Water resistant",
        icon: `${CDN_CONTRAST}/drop__d6cji0kw3xg2_large.png`,
        alt: "Water resistant",
      },
    ],
  },
];

function ProductCard({ product, index }: { product: ProductTile; index: number }) {
  return (
    <StaggeredFadeIn index={index}>
      <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-[var(--color-apple-gray-200)]">
        <div className="relative w-full aspect-[4/3] bg-[var(--color-apple-gray-100)]">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            className="object-contain p-6"
            sizes="(max-width: 734px) 100vw, 50vw"
          />
        </div>

        <div className="p-6 sm:p-8 flex flex-col flex-grow">
          {product.badge && (
            <span className="inline-block text-xs font-semibold text-[var(--color-apple-blue)] mb-2">
              {product.badge}
            </span>
          )}
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-apple-black)] leading-tight mb-4">
            {product.name}
          </h3>

          {product.buy && (
            <a
              href="https://www.apple.com/in/shop/goto/buy_airpods/airpods_4"
              className="inline-block self-start rounded-full bg-[var(--color-apple-blue)] px-6 py-2.5 text-sm font-normal text-white hover:bg-[var(--color-apple-blue-hover)] transition-colors mb-6"
            >
              Buy
            </a>
          )}

          <ul className="space-y-4 flex-grow">
            {product.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 flex-shrink-0 mt-0.5">
                  {f.dash ? (
                    <span className="block w-5 h-5 text-[var(--color-apple-gray-400)] text-center leading-5">
                      &mdash;
                    </span>
                  ) : f.icon ? (
                    <Image
                      src={f.icon}
                      alt={f.alt ?? ""}
                      width={20}
                      height={20}
                      className=""
                    />
                  ) : null}
                </span>
                <div>
                  {f.value && (
                    <span className="block text-sm font-semibold text-[var(--color-apple-black)]">
                      {f.value}
                    </span>
                  )}
                  <span className="text-xs text-[var(--color-apple-gray-600)] leading-relaxed">
                    {f.label}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StaggeredFadeIn>
  );
}

export function ProductComparison() {
  return (
    <section
      className="relative w-full background-alt"
      aria-label="Keep exploring AirPods"
    >
      <div className="section-container py-[var(--section-padding)]">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
            <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.015em] text-[var(--color-apple-black)] max-w-2xl">
              Keep exploring AirPods.
            </h2>
            <a
              href="https://www.apple.com/in/airpods/compare/"
              className="inline-flex items-center gap-1.5 text-sm font-normal text-[var(--color-apple-blue)] hover:text-[var(--color-apple-blue-hover)] whitespace-nowrap transition-colors"
            >
              Explore all AirPods
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
        >
          <a
            href="https://www.apple.com/in/airpods/compare/"
            className="inline-flex items-center gap-1.5 text-sm font-normal text-[var(--color-apple-blue)] hover:text-[var(--color-apple-blue-hover)] transition-colors"
          >
            Compare all AirPods models
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
