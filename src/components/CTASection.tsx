"use client";

import { motion } from "framer-motion";
import { SECTIONS, BRAND } from "@/lib/constants";

interface Props {
  progress: number;
}

export default function CTASection({ progress }: Props) {
  const { start, end } = SECTIONS.cta;
  const fadeInEnd = start + 0.05;

  let opacity = 0;
  if (progress >= start && progress < fadeInEnd) {
    opacity = (progress - start) / 0.05;
  } else if (progress >= fadeInEnd && progress <= end) {
    opacity = 1;
  }

  const isActive = progress >= start && progress <= end;
  if (!isActive) return null;

  return (
    <div id="cta" className="absolute w-full pointer-events-auto" style={{ top: `${start * 100}%`, height: `${(end - start) * 100}%` }}>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div animate={{ opacity }} transition={{ duration: 0.3 }} className="text-center px-6 max-w-3xl mx-auto">
          <div className="gold-divider mx-auto mb-8" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: isActive ? opacity * 0.8 : 0 }} className="text-[11px] md:text-[13px] tracking-[0.35em] uppercase text-gold font-medium mb-6">
            The Statement Piece
          </motion.p>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1] mb-4">
            <span className="text-foreground">Wear</span>{" "}
            <span className="gold-gradient-text">Confidence.</span>
          </h2>
          <p className="text-base md:text-xl text-text-muted font-light mb-3 tracking-[0.05em]">
            {BRAND.name} Premium Series
          </p>
          <p className="text-xs md:text-sm text-text-subtle font-light mb-12 max-w-md mx-auto leading-relaxed">
            Made for streets, travel, business and bold personalities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button className="btn-primary animate-gold-glow">Shop Now</button>
            <button className="btn-secondary">See Collection</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
