"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import SectionDivider from "@/components/SectionDivider";
import FeaturesSection from "@/components/FeaturesSection";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import CollectionSection from "@/components/CollectionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaFullSection from "@/components/CtaFullSection";
import Footer from "@/components/Footer";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});

const CanvasSequence = dynamic(() => import("@/components/CanvasSequence"), {
  ssr: false,
});

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative">
        {/* Sticky glassmorphism navbar */}
        <Navbar />

        {/* ═══════════════════════════════════════════
            SCROLL-LINKED FRAME ANIMATION SECTION
            (Hero overlay + Engineering + Lens + Material + CTA overlays)
            ═══════════════════════════════════════════ */}
        <CanvasSequence />

        {/* ═══════════════════════════════════════════
            STANDALONE PREMIUM SECTIONS
            (Below the frame animation)
            ═══════════════════════════════════════════ */}

        {/* Features — 4 technology cards */}
        <FeaturesSection />

        <SectionDivider />

        {/* Craftsmanship — split layout with image */}
        <CraftsmanshipSection />

        <SectionDivider />

        {/* Collection — 3 product cards */}
        <CollectionSection />

        <SectionDivider />

        {/* Testimonials — 3 quote cards */}
        <TestimonialsSection />

        <SectionDivider />

        {/* Full CTA section */}
        <CtaFullSection />

        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
