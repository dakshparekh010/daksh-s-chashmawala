"use client";

import ScrollReveal from "./ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        {/* Section header */}
        <ScrollReveal className="testimonials-header">
          <p className="testimonials-label">
            TESTIMONIALS
          </p>
          <h2 className="testimonials-heading">
            <span className="text-white">What They </span>
            <span style={{
              background: "linear-gradient(135deg, #D4AF37, #F5E27D, #C9A84C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Say</span>
          </h2>
          <p className="testimonials-subtitle">
            Trusted by customers who value precision, comfort, and timeless style.
          </p>
          <div className="testimonials-divider" />
        </ScrollReveal>

        {/* Testimonial cards */}
        <div className="testimonials-grid">
          {TESTIMONIALS.map((testimonial, i) => (
            <ScrollReveal key={testimonial.author} delay={i * 0.12}>
              <div className="testimonial-card">
                {/* Quote icon */}
                <div className="testimonial-quote-icon">
                  &ldquo;
                </div>
                {/* Quote text */}
                <p className="testimonial-quote-text">
                  {testimonial.quote}
                </p>
                {/* Customer info */}
                <div className="testimonial-customer-row">
                  <div className="testimonial-avatar">
                    <span>{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="testimonial-customer-name">{testimonial.author}</p>
                    <p className="testimonial-customer-role">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
