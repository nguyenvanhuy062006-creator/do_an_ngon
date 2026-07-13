import { useState } from 'react';
import type { Language } from '../types';
import { bannerSlides } from '../data/bannerData';
import { getText } from '../utils';
import './Banner.scss';

interface BannerProps {
  language: Language;
}

function Banner({ language }: BannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function showPrev() {
    if (currentIndex === 0) {
      setCurrentIndex(bannerSlides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function showNext() {
    if (currentIndex === bannerSlides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  const currentSlide = bannerSlides[currentIndex];

  return (
    <section className="banner">
      <button className="banner-arrow banner-arrow-left" onClick={showPrev}>
        ‹
      </button>

      <div className="banner-content">
        <span className="banner-emoji">{currentSlide.emoji}</span>
        <p className="banner-title">{getText(currentSlide.title, language)}</p>
      </div>

      <button className="banner-arrow banner-arrow-right" onClick={showNext}>
        ›
      </button>

      <div className="banner-dots">
        {bannerSlides.map((slide, index) => (
          <span key={slide.id} className={index === currentIndex ? 'banner-dot active' : 'banner-dot'} />
        ))}
      </div>
    </section>
  );
}

export default Banner;