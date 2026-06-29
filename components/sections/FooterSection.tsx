"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";

const directories = [
  {
    label: "Shop and Learn",
    links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"],
  },
  {
    label: "Apple Wallet",
    links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
  },
  {
    label: "Account",
    links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
  },
  {
    label: "Entertainment",
    links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple Podcasts", "Apple Books", "App Store"],
  },
  {
    label: "Apple Store",
    links: ["Find a Store", "Genius Bar", "Today at Apple", "Group Reservations", "Apple Camp", "Apple Trade In", "Ways to Buy", "Recycling Programme", "Order Status", "Shopping Help"],
  },
  {
    label: "For Business",
    links: ["Apple and Business", "Shop for Business"],
  },
  {
    label: "For Education",
    links: ["Apple and Education", "Shop for Education", "Shop for University"],
  },
  {
    label: "For Healthcare",
    links: ["Apple in Healthcare", "Health on Apple Watch"],
  },
  {
    label: "For Government",
    links: ["Shop for Government", "Shop for Veterans and Military"],
  },
  {
    label: "Apple Values",
    links: ["Accessibility", "Education", "Environment", "Privacy", "Supplier Responsibility"],
  },
  {
    label: "About Apple",
    links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"],
  },
];

const footnotes = [
  "1. Trade-in values vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit any trade-in transaction for any reason.",
  "2. Apple Hearing Study and Apple Mobility Lab data from the Research app indicates a reduction in hearing health impact and improved mobility through features available in AirPods Pro. For more information, visit apple.com/ health-research.",
  "3. AirPods (3rd generation), AirPods 4, and AirPods Pro (1st and 2nd generation) are dust resistant and sweat and water resistant for non-water sports and exercise. AirPods Pro (2nd generation) are IP54 dust and water resistant. AirPods 4 are IP54 dust and water resistant. AirPods (3rd generation) are IPX4 sweat and water resistant.",
  "4. Requires an iCloud account and a compatible device running the latest operating system software.",
  "5. Works with AirPods Pro (2nd generation) with the latest firmware when paired with a compatible Apple device running the latest operating system software.",
  "6. Tested under controlled laboratory conditions. See apple.com/in/batteries for more information.",
];

const breadcrumbs = [
  { label: "Apple", href: "https://www.apple.com/in" },
  { label: "AirPods", href: "https://www.apple.com/in/airpods" },
  { label: "AirPods 4", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Sales Policy", href: "#" },
  { label: "Legal", href: "#" },
  { label: "Site Map", href: "#" },
];

const columnGroups = [
  [directories[0], directories[1]],
  [directories[2], directories[3]],
  [directories[4]],
  [directories[5], directories[6], directories[7], directories[8]],
  [directories[9], directories[10]],
];

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumbs" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-[var(--color-apple-gray-500)]">
        {breadcrumbs.map((crumb, i) => (
          <li key={crumb.label} className="flex items-center gap-1">
            {i > 0 && (
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current" aria-hidden="true">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            )}
            <a
              href={crumb.href}
              className={`hover:underline ${
                i === breadcrumbs.length - 1
                  ? "text-[var(--color-apple-gray-700)]"
                  : "text-[var(--color-apple-gray-500)]"
              }`}
            >
              {crumb.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function Footnotes() {
  return (
    <div className="mb-8 pb-8 border-b border-[var(--color-apple-gray-200)]">
      {footnotes.map((note, i) => (
        <p
          key={i}
          className="text-xs text-[var(--color-apple-gray-500)] leading-relaxed mb-2 last:mb-0"
          dangerouslySetInnerHTML={{ __html: note }}
        />
      ))}
    </div>
  );
}

function DirectoryColumn({
  groups,
}: {
  groups: { label: string; links: string[] }[];
}) {
  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <details key={group.label} className="group md:open" open>
          <summary className="md:pointer-events-none list-none flex items-center justify-between py-2 md:py-0 cursor-pointer md:cursor-default">
            <span className="text-xs font-semibold text-[var(--color-apple-gray-700)] tracking-normal">
              {group.label}
            </span>
            <span className="md:hidden block w-4 h-4 transition-transform group-open:rotate-45">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[var(--color-apple-gray-500)]" aria-hidden="true">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </span>
          </summary>
          <ul className="mt-1 space-y-1.5 md:mt-2">
            {group.links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-xs text-[var(--color-apple-gray-500)] hover:underline"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}

function LegalBar() {
  return (
    <div className="mt-6 pt-5 border-t border-[var(--color-apple-gray-200)]">
      <p className="text-xs text-[var(--color-apple-gray-500)] mb-3">
        More ways to shop:{" "}
        <a href="#" className="text-[var(--color-apple-blue)] hover:underline">
          Find an Apple Store
        </a>{" "}
        or{" "}
        <a href="#" className="text-[var(--color-apple-blue)] hover:underline">
          other retailer
        </a>{" "}
        near you. Or call 000800 040 1966.
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--color-apple-gray-500)]">
          <span>Copyright &copy; 2026 Apple Inc. All rights reserved.</span>
          {legalLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-x-4">
              {i > 0 && (
                <span className="text-[var(--color-apple-gray-300)] hidden sm:inline">|</span>
              )}
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
            </span>
          ))}
        </div>
        <a
          href="https://www.apple.com/in"
          className="text-xs text-[var(--color-apple-gray-500)] hover:underline"
        >
          India
        </a>
      </div>
    </div>
  );
}

export function FooterSection() {
  return (
    <footer
      className="relative w-full bg-[var(--color-apple-gray-100)]"
      aria-label="Footer"
    >
      <div className="section-container py-10 sm:py-14">
        <Breadcrumbs />

        <Footnotes />

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {columnGroups.map((group, i) => (
              <DirectoryColumn key={i} groups={group} />
            ))}
          </div>
        </ScrollReveal>

        <LegalBar />
      </div>
    </footer>
  );
}
