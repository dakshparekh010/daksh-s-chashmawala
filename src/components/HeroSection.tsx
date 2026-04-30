"use client";

import { motion } from "framer-motion";
import { SECTIONS, scrollToSection } from "@/lib/constants";

interface Props {
  progress: number;
}

export default function HeroSection({ progress }: Props) {
  const { start, end } = SECTIONS.hero;
  const isVisible = progress >= start && progress < end;

  const fadeOutStart = end - 0.05;
  let opacity = 1;
  if (progress >= fadeOutStart) {
    opacity = Math.max(0, 1 - (progress - fadeOutStart) / 0.05);
  }

  const translateY = progress * -150;

  if (!isVisible && progress >= end) return null;

  return (
    <div
      id="overview"
      className="absolute top-0 left-0 w-full h-[100vh] flex items-center justify-center pointer-events-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? opacity : 0 }}
        transition={{ duration: 0.5 }}
        style={{ transform: `translateY(${translateY}px)` }}
        className="text-center px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pt-[72px]"
      >
        {/* Gold accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? 60 : 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
        />

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-gold font-medium mb-6"
        >
          Premium Eyewear Collection
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.95] mb-6"
        >
          <span className="text-white">See Beyond</span>
          <br />
          <span className="gold-gradient-text">Ordinary</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-base md:text-lg lg:text-xl text-white/60 font-light max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Luxury eyewear crafted for leaders.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="btn-primary" onClick={() => scrollToSection("collection")}>
            Explore Collection
          </button>
          <button className="btn-secondary" onClick={() => scrollToSection("technology")}>
            Watch Story
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 0.5 : 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/35">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-gold/50 to-transparent"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
