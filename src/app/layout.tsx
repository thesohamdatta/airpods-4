import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MotionConfig } from "framer-motion";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AirPods 4 - Apple",
  description:
    "AirPods 4. Iconic. Now supersonic. With Active Noise Cancellation, Personalised Spatial Audio, and the H2 chip.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>
          <MotionConfig reducedMotion="user">
            {children}
          </MotionConfig>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
