// Brand constants and section breakpoints
export const BRAND = {
  name: "Daksh's Chashmawala",
  tagline: "See Beyond Ordinary",
  description: "Luxury eyewear crafted for those who lead, not follow.",
} as const;

export const TOTAL_FRAMES = 240;

// Section scroll breakpoints (as fraction of total scroll 0–1)
export const SECTIONS = {
  hero: { start: 0, end: 0.15 },
  engineering: { start: 0.15, end: 0.40 },
  lens: { start: 0.40, end: 0.65 },
  material: { start: 0.65, end: 0.85 },
  cta: { start: 0.85, end: 1.0 },
} as const;

// Map scroll progress to frame index
// Frames go: 1 (assembled) → 240 (fully exploded)
// For CTA section (85-100%), we reverse to simulate reassembly
export function getFrameIndex(scrollProgress: number): number {
  const clamped = Math.max(0, Math.min(1, scrollProgress));

  if (clamped <= SECTIONS.cta.start) {
    // Normal forward play: 0–85% maps to frames 0–239
    const normalizedProgress = clamped / SECTIONS.cta.start;
    return Math.min(Math.floor(normalizedProgress * (TOTAL_FRAMES - 1)), TOTAL_FRAMES - 1);
  } else {
    // Reverse play: 85–100% maps frames 239 back down
    const reverseProgress = (clamped - SECTIONS.cta.start) / (SECTIONS.cta.end - SECTIONS.cta.start);
    const reverseFrame = Math.floor((1 - reverseProgress) * (TOTAL_FRAMES - 1));
    return Math.max(0, reverseFrame);
  }
}

// Get frame path for a given 0-indexed frame number
export function getFramePath(index: number): string {
  const frameNum = Math.min(index + 1, TOTAL_FRAMES);
  return `/frames/ezgif-frame-${String(frameNum).padStart(3, "0")}.jpg`;
}

// Smooth scroll helper — used by all buttons and links
export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    // @ts-ignore
    if (window.lenis) {
      // @ts-ignore
      window.lenis.scrollTo(el, { duration: 2.5, easing: (t) => 1 - Math.pow(1 - t, 4) });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}

// Shared container style — guaranteed responsive padding via CSS clamp
// This serves as the single source of truth for section padding
export const CONTAINER_STYLE: React.CSSProperties = {
  maxWidth: "1200px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "clamp(24px, 5vw, 96px)",
  paddingRight: "clamp(24px, 5vw, 96px)",
};

// Navigation links — IDs must match the actual section ids in the DOM
export const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Technology", href: "#technology" },
  { label: "Craftsmanship", href: "#craftsmanship" },
  { label: "Collection", href: "#collection" },
  { label: "Testimonial", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

// Social links
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/",
  linkedin: "https://www.linkedin.com/in/daksh-parekh-97ab68313/",
  email: "mailto:hello@dakshchashmawala.com",
  phone: "tel:+1234567890",
  whatsapp: "https://wa.me/1234567890",
} as const;

// Feature cards data
export const FEATURES = [
  {
    title: "Polarized Vision",
    description: "Crystal-clear glare reduction for unmatched visual clarity in any environment.",
    icon: "polarized",
  },
  {
    title: "UV400 Protection",
    description: "Complete sun defense shielding your eyes from 100% of harmful ultraviolet rays.",
    icon: "uv",
  },
  {
    title: "Titanium Hinges",
    description: "Precision engineered durability with 24K gold-plated titanium mechanisms.",
    icon: "hinge",
  },
  {
    title: "Featherlight Comfort",
    description: "All-day premium wear at just 22 grams of meticulously balanced luxury.",
    icon: "feather",
  },
] as const;

// Collection products
export const COLLECTION = [
  {
    name: "Noir Black Edition",
    description: "The signature. Bold, timeless, unapologetically premium. For those who command every room.",
    price: "$389",
    image: "/images/noir-black.png",
    features: ["Polarized lenses", "Italian acetate frame", "24K gold hinges", "Anti-scratch coating"],
  },
  {
    name: "Royal Gold Edition",
    description: "Where luxury meets legacy. Gold-plated titanium frame designed for modern royalty.",
    price: "$489",
    image: "/images/royal-gold.png",
    features: ["Gradient tint lenses", "Titanium frame", "Full gold plating", "Premium nose pads"],
  },
  {
    name: "Urban Smoke Edition",
    description: "The streets' favorite. Smoky translucent acetate with understated metropolitan edge.",
    price: "$349",
    image: "/images/urban-smoke.png",
    features: ["Smoke gradient lenses", "Translucent acetate", "Matte hardware", "Lightweight build"],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    quote: "The most premium sunglasses I've ever owned. The weight, the finish, the details — absolutely unmatched.",
    author: "Arjun M.",
    title: "Entrepreneur",
  },
  {
    quote: "Luxury feel with everyday comfort. I've worn these daily for six months and they still look brand new.",
    author: "Priya S.",
    title: "Creative Director",
  },
  {
    quote: "From the packaging to the product, every touchpoint screams premium. This is what luxury eyewear should be.",
    author: "Rohit K.",
    title: "Fashion Consultant",
  },
] as const;

// Lens feature points (kept for backward compat with overlay sections)
export const LENS_FEATURES = [
  {
    title: "Polarized Clarity",
    description: "Advanced polarized lenses eliminate glare for crystal-clear vision in any condition.",
    icon: "◎",
  },
  {
    title: "UV400 Protection",
    description: "Complete ultraviolet protection shields your eyes from 100% of harmful UV rays.",
    icon: "☀",
  },
  {
    title: "Scratch Resistant",
    description: "Multi-layer nano-coating ensures lasting clarity and premium durability.",
    icon: "◆",
  },
  {
    title: "Crystal Contrast",
    description: "Enhanced color contrast technology for vivid, true-to-life visual experience.",
    icon: "◈",
  },
] as const;
