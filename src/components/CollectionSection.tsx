"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { COLLECTION, scrollToSection } from "@/lib/constants";

type Product = (typeof COLLECTION)[number];

export default function CollectionSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <section id="collection" className="collection-section">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.015] blur-[120px] pointer-events-none" />

        <div className="collection-container">
          {/* Section header */}
          <ScrollReveal className="collection-header">
            <p className="collection-label">
              The Collection
            </p>
            <h2 className="collection-heading">
              <span className="text-white">Choose Your </span>
              <span style={{
                background: "linear-gradient(135deg, #D4AF37, #F5E27D, #C9A84C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>Statement</span>
            </h2>
            <p className="collection-subtitle">
              Three distinct editions. One uncompromising standard of luxury.
            </p>
            <div className="collection-divider" />
          </ScrollReveal>

          {/* Product cards */}
          <div className="collection-grid">
            {COLLECTION.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.15}>
                <div className="collection-card">
                  {/* Product image */}
                  <div className="collection-image-wrapper">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-60" />
                    {/* Price badge */}
                    <div className="collection-price-badge">
                      {product.price}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="collection-card-body">
                    <h3 className="collection-card-title">
                      {product.name}
                    </h3>
                    <p className="collection-card-description">
                      {product.description}
                    </p>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="collection-view-button"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="modal-overlay"
            onClick={() => setSelectedProduct(null)}
          >
            <div className="modal-overlay-bg" />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProduct(null)} 
                className="modal-close-button"
                aria-label="Close modal"
              >
                ✕
              </button>
              
              <div className="modal-image-area">
                <Image 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  fill 
                  className="object-cover" 
                  sizes="680px" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.45)] via-transparent to-transparent" />
              </div>
              
              <div className="modal-content">
                <p className="modal-edition-label">Exclusive Edition</p>
                <h3 className="modal-title">{selectedProduct.name}</h3>
                <p className="modal-price">{selectedProduct.price}</p>
                <p className="modal-description">{selectedProduct.description}</p>
                
                <div className="modal-features-section">
                  <p className="modal-features-heading">Features</p>
                  <div className="modal-features-grid">
                    {selectedProduct.features.map((f) => (
                      <div key={f} className="modal-feature-item">
                        <div className="modal-feature-dot" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="modal-button-row">
                  <button 
                    onClick={() => { setSelectedProduct(null); setTimeout(() => scrollToSection("contact"), 300); }} 
                    className="modal-button modal-button-primary"
                  >
                    Enquire Now
                  </button>
                  <button 
                    onClick={() => setSelectedProduct(null)} 
                    className="modal-button modal-button-secondary"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
