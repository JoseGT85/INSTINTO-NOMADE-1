import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Slider.css';

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slides = [
    '/images/view-warrior-leader-from-ancient-maya-inca-empire.jpg',
'/images/potrerillos.jpeg',
'/images/cordillerario.jpeg',
'/images/puentedelinca.jpeg',
'/images/botellasvino.jpeg',
'/images/arboledacampo.jpeg',
'/images/maipo.jpeg',
'/images/lascuevas.jpeg',
  ];

  const changeSlide = useCallback((direction: 'next' | 'prev') => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(prevSlide => {
        const nextSlide = direction === 'next'
          ? (prevSlide + 1) % slides.length
          : (prevSlide - 1 + slides.length) % slides.length;
        return nextSlide;
      });
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, slides.length]);

  const nextSlide = useCallback(() => changeSlide('next'), [changeSlide]);
  const prevSlide = useCallback(() => changeSlide('prev'), [changeSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="slider-section">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''} ${isTransitioning ? 'transitioning' : ''}`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <button onClick={prevSlide} className="slider-button slider-button-prev">
          <ChevronLeft />
        </button>
        <button onClick={nextSlide} className="slider-button slider-button-next">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;