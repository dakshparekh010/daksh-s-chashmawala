"use client";

import { motion } from "framer-motion";
import { SECTIONS } from "@/lib/constants";

interface Props {
  progress: number;
}

export default function MaterialSection({ progress }: Props) {
  const { start, end } = SECTIONS.material;
  const fadeInEnd = start + 0.05;
  const fadeOutStart = end - 0.05;

  let opacity = 0;
  if (progress >= start && progress < fadeInEnd) {
    opacity = (progress - start) / 0.05;
  } else if (progress >= fadeInEnd && progress < fadeOutStart) {
    opacity = 1;
  } else if (progress >= fadeOutStart && progress < end) {
    opacity = 1 - (progress - fadeOutStart) / 0.05;
  }

  const isActive = progress >= start && progress < end;
  if (!isActive) return null;

  const materials = [
    { name: "Luxury Acetate", detail: "Hand-polished Italian acetate frame with premium depth and texture", accent: "Frame" },
    { name: "24K Gold Plating", detail: "Premium metal hardware with precision-machined gold-plated hinges", accent: "Hinges" },
    { name: "Featherweight Build", detail: "Engineered for all-day comfort at just 22 grams of luxury", accent: "Comfort" },
  ];

  return (
    <div id="material" className="absolute w-full pointer-events-auto" style={{ top: `${start * 100}%`, height: `${(end - start) * 100}%` }}>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div animate={{ opacity }} transition={{ duration: 0.3 }} className="px-6 max-w-4xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="gold-divider mx-auto mb-8" />
            <p className="text-[11px] md:text-[13px] tracking-[0.35em] uppercase text-gold font-medium mb-6">Material Story</p>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1] mb-6">
              <span className="text-foreground">Crafted to </span>
              <span className="gold-gradient-text">Last.</span>
            </h2>
            <p className="text-sm md:text-lg text-text-muted font-light max-w-xl mx-auto leading-relaxed">
              Luxury acetate frame. Premium metal hardware. Feather-light comfort. Every material chosen with purpose.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {materials.map((mat, i) => (
              <motion.div key={mat.name} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} animate={{ opacity: isActive ? opacity : 0, x: isActive ? 0 : (i % 2 === 0 ? -30 : 30) }} transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="flex items-center gap-6 md:gap-8 p-5 md:p-6 feature-card group">
                <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 transition-colors duration-300">
                  <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-gold font-medium">{mat.accent}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold tracking-[0.03em] text-foreground mb-1">{mat.name}</h3>
                  <p className="text-xs md:text-sm text-text-muted font-light leading-relaxed">{mat.detail}</p>
                </div>
                <div className="shrink-0 text-gold/30 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
