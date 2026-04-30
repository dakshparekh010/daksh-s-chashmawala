"use client";

import ScrollReveal from "./ScrollReveal";
import { BRAND, scrollToSection } from "@/lib/constants";

export default function CtaFullSection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-panel">
          <div className="cta-content">
            <ScrollReveal delay={0.05}>
              <p className="cta-label">
                READY TO ELEVATE
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2 className="cta-heading">
                <span className="text-white">Wear </span>
                <span
                  style={{
                    background: "linear-gradient(135deg, #D4AF37, #F5E27D, #C9A84C)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Confidence.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="cta-description">
                Upgrade your presence with {BRAND.name}.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="cta-actions">
                <button
                  className="cta-button cta-button-primary"
                  onClick={() => scrollToSection("collection")}
                >
                  SHOP NOW
                </button>
                <button
                  className="cta-button cta-button-secondary"
                  onClick={() => scrollToSection("collection")}
                >
                  VIEW COLLECTION
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <div className="cta-trust">
                {["FREE SHIPPING", "PREMIUM PACKAGING", "2-YEAR WARRANTY"].map((badge) => (
                  <div key={badge} className="cta-trust-item">
                    <span className="cta-trust-dot">•</span>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
