"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import { TOTAL_FRAMES, getFrameIndex, getFramePath } from "@/lib/constants";

import HeroSection from "./HeroSection";
import EngineeringSection from "./EngineeringSection";
import LensSection from "./LensSection";
import MaterialSection from "./MaterialSection";
import CTASection from "./CTASection";

export default function CanvasSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);

  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload all frames
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let cancelled = false;

    const loadImage = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          if (cancelled) return;
          images[index] = img;
          loaded++;
          setLoadProgress(Math.floor((loaded / TOTAL_FRAMES) * 100));
          if (loaded === TOTAL_FRAMES) {
            imagesRef.current = images;
            setIsLoading(false);
            // Draw first frame
            drawFrame(0);
          }
          resolve();
        };
        img.onerror = () => {
          loaded++;
          resolve();
        };
        img.src = getFramePath(index);
      });
    };

    // Load in batches for performance
    const batchSize = 20;
    const loadBatch = async (startIdx: number) => {
      const promises: Promise<void>[] = [];
      for (let i = startIdx; i < Math.min(startIdx + batchSize, TOTAL_FRAMES); i++) {
        promises.push(loadImage(i));
      }
      await Promise.all(promises);
      if (!cancelled && startIdx + batchSize < TOTAL_FRAMES) {
        loadBatch(startIdx + batchSize);
      }
    };

    loadBatch(0);

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Draw a frame to canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];

    if (!canvas || !ctx || !img) return;

    // Set canvas size to match display
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Draw image covering the canvas (object-fit: cover)
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = rect.width / rect.height;

    let drawWidth: number, drawHeight: number, drawX: number, drawY: number;

    if (imgRatio > canvasRatio) {
      drawHeight = rect.height;
      drawWidth = drawHeight * imgRatio;
      drawX = (rect.width - drawWidth) / 2;
      drawY = 0;
    } else {
      drawWidth = rect.width;
      drawHeight = drawWidth / imgRatio;
      drawX = 0;
      drawY = (rect.height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  // Listen for scroll changes and update frame
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
    const frameIndex = getFrameIndex(latest);
    if (frameIndex !== currentFrameRef.current) {
      currentFrameRef.current = frameIndex;
      drawFrame(frameIndex);
    }
  });

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      drawFrame(currentFrameRef.current);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  return (
    <>
      {/* Premium Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-10"
            >
              {/* Brand name */}
              <h2 className="text-sm md:text-base tracking-[0.3em] uppercase gold-gradient-text font-semibold">
                Daksh&apos;s Chashmawala
              </h2>

              {/* Progress bar */}
              <div className="w-[200px] md:w-[300px]">
                <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                    style={{ width: `${loadProgress}%` }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                <p className="text-center mt-4 text-xs tracking-[0.2em] text-text-muted font-light">
                  {loadProgress}%
                </p>
              </div>

              {/* Loading text */}
              <p className="text-[11px] tracking-[0.25em] uppercase text-text-subtle animate-pulse-gold">
                Crafting your experience
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main scroll container */}
      <div ref={containerRef} className="relative" style={{ height: "600vh" }}>
        {/* Sticky canvas */}
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ display: "block" }}
          />

          {/* Vignette overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(5,5,5,0.6) 100%)",
            }}
          />
        </div>

        {/* Text overlay sections — positioned within the scroll container */}
        <div className="absolute inset-0 pointer-events-none">
          <HeroSection progress={scrollProgress} />
          <EngineeringSection progress={scrollProgress} />
          <LensSection progress={scrollProgress} />
          <MaterialSection progress={scrollProgress} />
          <CTASection progress={scrollProgress} />
        </div>
      </div>
    </>
  );
}
