import React, { useEffect } from 'react';
import './hero.css';

type HeroProps = {
  imageUrl?: string;
};

const Hero: React.FC<HeroProps> = ({ imageUrl = '/images/hero.jpg' }) => {
  useEffect(() => {
    function updateVh() {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    }
    updateVh();
    window.addEventListener('resize', updateVh);
    window.addEventListener('orientationchange', updateVh);
    return () => {
      window.removeEventListener('resize', updateVh);
      window.removeEventListener('orientationchange', updateVh);
    };
  }, []);

  const bgStyle: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: 'center 28%'
  };

  return (
    <section className="hero" aria-label="Hero — premium eyewear">
      <div className="hero__bg" style={bgStyle} role="img" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__kicker">Premium Eyewear Collection</div>

        <h1 className="hero__title">
          See Beyond <span className="accent">Ordinary</span>
        </h1>

        <p className="hero__subtitle">
          Luxury eyewear crafted for leaders. Designed for comfort, precision, and style.
        </p>

        <div className="hero__cta">
          <button className="btn btn--primary">Explore Collection</button>
          <button className="btn btn--ghost">Watch Story</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
