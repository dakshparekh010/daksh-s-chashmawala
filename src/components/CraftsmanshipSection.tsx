"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function CraftsmanshipSection() {
  return (
    <section id="craftsmanship" className="craftsmanship-section">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(201,168,76,0.3) 100px, rgba(201,168,76,0.3) 101px)",
        }}
      />

      {/* Soft radial gold glow behind image */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[500px] pointer-events-none opacity-60 lg:opacity-100" 
        style={{ background: "radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)" }} 
      />

      <div className="craftsmanship-container">
        <div className="craftsmanship-grid">
          {/* Left — Text */}
          <div className="craftsmanship-content">
            <ScrollReveal>
              <p className="craftsmanship-label">
                Craftsmanship
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="craftsmanship-heading">
                <span className="text-white">Precision in</span>
                <br />
                <span style={{
                  background: "linear-gradient(135deg, #D4AF37, #F5E27D, #C9A84C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>Every Detail</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="craftsmanship-description">
                From sculpted contours to premium hinges, every component is
                designed to deliver confidence, comfort and timeless style. Each
                pair undergoes 47 quality checkpoints before it reaches you.
              </p>
            </ScrollReveal>

            {/* Stats row */}
            <ScrollReveal delay={0.3}>
              <div className="craftsmanship-stats">
                {[
                  { value: "47", label: "Quality Checks" },
                  { value: "12", label: "Hour Craft Time" },
                  { value: "0.3mm", label: "Precision" },
                ].map((stat) => (
                  <div key={stat.label} className="craftsmanship-stat-item">
                    <div className="craftsmanship-stat-value">{stat.value}</div>
                    <div className="craftsmanship-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="gold-divider" />
            </ScrollReveal>
          </div>

          {/* Right — Image */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="craftsmanship-image-card">
              <Image
                src="/images/craftsmanship.png"
                alt="Precision crafted gold hinge mechanism"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-2xl z-10" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/40 rounded-tr-2xl z-10" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/40 rounded-bl-2xl z-10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-2xl z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
