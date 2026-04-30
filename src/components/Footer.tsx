"use client";

import { BRAND, NAV_LINKS, SOCIAL_LINKS, scrollToSection } from "@/lib/constants";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href.replace("#", ""));
  };

  return (
    <footer
      id="contact"
      className="relative bg-black"
      style={{
        backgroundColor: "#000",
        padding: "70px 24px 28px",
        borderTop: "1px solid rgba(212,175,55,0.12)"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          boxSizing: "border-box"
        }}
      >
        {/* Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.1fr",
            gap: "56px",
            alignItems: "start",
            marginBottom: "42px"
          }}
          className="max-lg:grid-cols-2 max-lg:gap-10 max-sm:grid-cols-1 max-sm:gap-8.5"
        >
          {/* Brand Column */}
          <div>
            <h3
              className="uppercase font-bold mb-4"
              style={{
                color: "#D4AF37",
                fontSize: "16px",
                letterSpacing: "4px",
                fontWeight: 700
              }}
            >
              {BRAND.name}
            </h3>
            <p
              className="leading-7 mb-6"
              style={{
                color: "rgba(255,255,255,0.58)",
                fontSize: "14px",
                lineHeight: "1.75",
                maxWidth: "300px"
              }}
            >
              Premium modern eyewear crafted with attitude. Luxury in every
              look, confidence in every detail.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-[250ms]"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "12px",
                  border: "1px solid rgba(212,175,55,0.18)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  color: "rgba(255,255,255,0.72)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(212,175,55,0.12)";
                  e.currentTarget.style.color = "#D4AF37";
                  e.currentTarget.style.borderColor = "rgba(212,175,55,0.35)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.72)";
                  e.currentTarget.style.borderColor = "rgba(212,175,55,0.18)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span style={{ fontSize: "11px", fontWeight: 500 }}>IG</span>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-[250ms]"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "12px",
                  border: "1px solid rgba(212,175,55,0.18)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  color: "rgba(255,255,255,0.72)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(212,175,55,0.12)";
                  e.currentTarget.style.color = "#D4AF37";
                  e.currentTarget.style.borderColor = "rgba(212,175,55,0.35)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.72)";
                  e.currentTarget.style.borderColor = "rgba(212,175,55,0.18)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span style={{ fontSize: "11px", fontWeight: 500 }}>LI</span>
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="group transition-all duration-[250ms]"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "12px",
                  border: "1px solid rgba(212,175,55,0.18)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  color: "rgba(255,255,255,0.72)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(212,175,55,0.12)";
                  e.currentTarget.style.color = "#D4AF37";
                  e.currentTarget.style.borderColor = "rgba(212,175,55,0.35)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.72)";
                  e.currentTarget.style.borderColor = "rgba(212,175,55,0.18)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span style={{ fontSize: "11px", fontWeight: 500 }}>@</span>
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4
              className="uppercase font-bold mb-4"
              style={{
                color: "#D4AF37",
                fontSize: "12px",
                letterSpacing: "4px",
                fontWeight: 700
              }}
            >
              Explore
            </h4>
            <div
              className="flex flex-col"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                color: "rgba(255,255,255,0.55)",
                fontSize: "14px",
                letterSpacing: "1.5px",
                textTransform: "uppercase"
              }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "14px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    transition: "all 250ms ease",
                    cursor: "pointer",
                    textDecoration: "none"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#D4AF37";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Support Column */}
          <div>
            <h4
              className="uppercase font-bold mb-4"
              style={{
                color: "#D4AF37",
                fontSize: "12px",
                letterSpacing: "4px",
                fontWeight: 700
              }}
            >
              Support
            </h4>
            <div
              className="flex flex-col"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                color: "rgba(255,255,255,0.55)",
                fontSize: "14px",
                letterSpacing: "1.5px",
                textTransform: "uppercase"
              }}
            >
              {["Shipping Info", "Returns", "FAQ", "Size Guide", "Care Instructions"].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "14px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    transition: "all 250ms ease",
                    textDecoration: "none"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#D4AF37";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4
              className="uppercase font-bold mb-4"
              style={{
                color: "#D4AF37",
                fontSize: "12px",
                letterSpacing: "4px",
                fontWeight: 700
              }}
            >
              Contact
            </h4>
            <div
              className="flex flex-col"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                color: "rgba(255,255,255,0.55)",
                fontSize: "14px",
                letterSpacing: "1.5px",
                textTransform: "uppercase"
              }}
            >
              <a
                href="mailto:hello@dakshchashmawala.com"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "14px",
                  letterSpacing: "1.5px",
                  transition: "all 250ms ease",
                  textDecoration: "none"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#D4AF37";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                hello@dakshchashmawala.com
              </a>
              <a
                href="tel:+1234567890"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "14px",
                  letterSpacing: "1.5px",
                  transition: "all 250ms ease",
                  textDecoration: "none"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#D4AF37";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                +1 (234) 567-890
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "14px",
                  letterSpacing: "1.5px",
                  transition: "all 250ms ease",
                  textDecoration: "none"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#D4AF37";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                WhatsApp
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "14px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  transition: "all 250ms ease",
                  textDecoration: "none",
                  marginTop: "4px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#D4AF37";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                Instagram
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "14px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  transition: "all 250ms ease",
                  textDecoration: "none"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#D4AF37";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            color: "rgba(255,255,255,0.38)",
            fontSize: "11px",
            letterSpacing: "1.5px",
            textTransform: "uppercase"
          }}
          className="max-sm:flex-col max-sm:items-start"
        >
          <p className="whitespace-nowrap">
            © 2026 {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 max-sm:gap-4">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.42)",
                  fontSize: "11px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  transition: "color 250ms ease",
                  textDecoration: "none"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#D4AF37";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.42)";
                }}
              >
                {link}
              </a>
            ))}
          </div>
          <p className="whitespace-nowrap">
            Crafted with precision &amp; passion
          </p>
        </div>
      </div>
    </footer>
  );
}
