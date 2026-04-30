"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, BRAND, scrollToSection } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
      e.preventDefault();
      scrollToSection(href.replace("#", ""));
      setMobileOpen(false);
    },
    []
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(5,5,5,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div
          className="mx-auto hidden lg:grid items-center w-full"
          style={{
            maxWidth: "1440px",
            height: "72px",
            paddingLeft: "clamp(24px, 5vw, 96px)",
            paddingRight: "clamp(24px, 5vw, 96px)",
            gridTemplateColumns: "auto 1fr auto",
            columnGap: "48px",
          }}
        >
          {/* Brand Logo */}
          <a
            href="#overview"
            className="flex items-center shrink-0"
            style={{ justifySelf: "start" }}
            onClick={(e) => handleNavClick(e, "#overview")}
          >
            <span className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase gold-gradient-text">
              {BRAND.name}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div
            className="flex items-center"
            style={{
              justifySelf: "center",
              gap: "clamp(24px, 2.2vw, 42px)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[13px] font-medium tracking-[0.1em] uppercase text-white/50 hover:text-gold transition-colors duration-300 relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Shop Now CTA */}
          <button
            onClick={(e) => handleNavClick(e, "#collection")}
            className="text-[13px] font-semibold tracking-[0.12em] uppercase px-5 py-2 text-gold border border-gold/40 rounded-lg hover:bg-gold hover:text-black transition-all duration-300 cursor-pointer shrink-0"
            style={{
              justifySelf: "end",
              boxShadow: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(201,168,76,0.25)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            Shop Now
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-6 h-[1.5px] bg-white block" />
            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-[1.5px] bg-white block" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-6 h-[1.5px] bg-white block" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 backdrop-blur-xl pt-24"
            style={{ background: "rgba(0,0,0,0.95)", padding: "96px 32px 32px 32px" }}
          >
            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-light tracking-[0.15em] uppercase text-white hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                onClick={(e) => handleNavClick(e, "#collection")}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="btn-primary w-fit mt-4"
              >
                Shop Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
