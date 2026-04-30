"use client";

import { motion } from "framer-motion";
import { SECTIONS, LENS_FEATURES } from "@/lib/constants";

interface Props {
  progress: number;
}

export default function LensSection({ progress }: Props) {
  const { start, end } = SECTIONS.lens;

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
      id="lens"
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
          className="px-6 max-w-5xl mx-auto w-full"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="gold-divider mx-auto mb-8" />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? opacity * 0.8 : 0 }}
              className="text-[11px] md:text-[13px] tracking-[0.35em] uppercase text-gold font-medium mb-6"
            >
              Lens Technology
            </motion.p>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1] mb-4">
              <span className="text-foreground">Vision,</span>{" "}
              <span className="gold-gradient-text">Perfected.</span>
            </h2>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {LENS_FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isActive ? opacity : 0,
                  y: isActive ? 0 : 30,
                }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="feature-card p-6 md:p-8 group"
              >
                {/* Icon */}
                <div className="text-2xl md:text-3xl text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-semibold tracking-[0.05em] text-foreground mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-text-muted font-light leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom gold line accent */}
                <div className="mt-4 w-0 h-[1px] bg-gold/50 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
