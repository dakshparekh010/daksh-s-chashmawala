"use client";

import { motion } from "framer-motion";
import { SECTIONS } from "@/lib/constants";

interface Props {
  progress: number;
}

export default function EngineeringSection({ progress }: Props) {
  const { start, end } = SECTIONS.engineering;

  // Calculate visibility and opacity
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

  return (
    <div
      id="engineering"
      className="absolute w-full pointer-events-auto"
      style={{
        top: `${start * 100}%`,
        height: `${(end - start) * 100}%`,
      }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          animate={{ opacity }}
          transition={{ duration: 0.3 }}
          className="text-center px-6 max-w-3xl mx-auto"
        >
          {/* Gold accent line */}
          <div className="gold-divider mx-auto mb-8" />

          {/* Pre-heading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? opacity * 0.8 : 0 }}
            className="text-[11px] md:text-[13px] tracking-[0.35em] uppercase text-gold font-medium mb-6"
          >
            Engineering Excellence
          </motion.p>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1] mb-8">
            <span className="text-foreground">Precision in</span>
            <br />
            <span className="gold-gradient-text">Every Detail</span>
          </h2>

          {/* Body */}
          <p className="text-sm md:text-lg text-text-muted font-light max-w-xl mx-auto leading-relaxed mb-10">
            Every hinge, lens, curve and contour — engineered for style, durability and uncompromising comfort. 
            Where Swiss precision meets Italian artistry.
          </p>

          {/* Engineering stats */}
          <div className="flex items-center justify-center gap-8 md:gap-16">
            {[
              { value: "0.3mm", label: "Precision" },
              { value: "Ti-64", label: "Alloy" },
              { value: "22g", label: "Weight" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isActive ? opacity : 0,
                  y: isActive ? 0 : 20,
                }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold gold-gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-text-subtle">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
