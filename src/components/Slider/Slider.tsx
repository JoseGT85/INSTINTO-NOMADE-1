import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Slider.css';

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(0);
  const slides = [
'/images/parqueaconcagua.jpg',
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
    setCurrentSlide(prevSlide => {
      if (direction === 'next') {
        return (prevSlide + 1) % slides.length;
      } else {
        return (prevSlide - 1 + slides.length) % slides.length;
      }
    });
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => changeSlide('next'), 5000);
    return () => clearInterval(interval);
  }, [changeSlide]);

  return (
    <div className="slider-section">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <button onClick={() => changeSlide('prev')} className="slider-button slider-button-prev">
          <ChevronLeft />
        </button>
        <button onClick={() => changeSlide('next')} className="slider-button slider-button-next">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;