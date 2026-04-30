"use client";

import ScrollReveal from "./ScrollReveal";
import { FEATURES } from "@/lib/constants";

function PolarizedIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
      <line x1="20" y1="2" x2="20" y2="10" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="30" x2="20" y2="38" stroke="currentColor" strokeWidth="1" />
      <line x1="2" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="1" />
      <line x1="30" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function UVIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="20" cy="20" r="4" fill="currentColor" fillOpacity="0.3" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line key={angle} x1={20 + Math.cos(rad) * 12} y1={20 + Math.sin(rad) * 12} x2={20 + Math.cos(rad) * 17} y2={20 + Math.sin(rad) * 17} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        );
      })}
    </svg>
  );
}

function HingeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="14" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <rect x="22" y="14" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="20" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

function FeatherIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
      <path d="M8 32 L20 8 L32 32" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 8 C20 8 24 14 24 20 C24 26 20 32 20 32" stroke="currentColor" strokeWidth="1" />
      <path d="M20 8 C20 8 16 14 16 20 C16 26 20 32 20 32" stroke="currentColor" strokeWidth="1" />
      <line x1="14" y1="18" x2="26" y2="18" stroke="currentColor" strokeWidth="0.8" />
      <line x1="12" y1="24" x2="28" y2="24" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  polarized: <PolarizedIcon />,
  uv: <UVIcon />,
  hinge: <HingeIcon />,
  feather: <FeatherIcon />,
};

export default function FeaturesSection() {
  return (
    <section
      id="technology"
      className="technology-section"
    >
      {/* Soft radial gradient glow behind the heading */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[500px] pointer-events-none" 
        style={{ background: "radial-gradient(ellipse at center, rgba(212,175,55,0.06) 0%, transparent 70%)" }} 
      />

      <div className="technology-container">
        {/* Section header - wrapped separately to prevent transform overlap */}
        <div className="technology-heading-wrapper">
          <ScrollReveal>
            <p className="text-[12px] tracking-[4px] uppercase text-[#D4AF37] font-semibold mb-[12px]">
              TECHNOLOGY
            </p>
            <h2
              className="font-bold tracking-[-0.02em]"
              style={{ margin: 0, fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.05 }}
            >
              <span className="text-white">Engineered for </span>
              <span style={{
                background: "linear-gradient(135deg, #D4AF37, #F5E27D, #C9A84C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>Excellence</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Feature cards - separate normal-flow block */}
        <div className="technology-grid">
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <div 
                className="technology-card"
              >
                <div className="technology-card-icon">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-[#ffffff] font-bold text-[18px] mb-[10px]">{feature.title}</h3>
                <p className="text-[rgba(255,255,255,0.6)] text-[15px] leading-[1.65]">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
