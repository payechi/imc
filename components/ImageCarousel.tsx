'use client';

import { useState } from 'react';
import '@/styles/responsive.css';

interface ImageCarouselProps {
  images: string[];
  title?: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-content" style={{
        transform: `translateX(-${currentIndex * 100}%)`,
      }}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <div className="carousel-media">
              <div
                className="carousel-media-bg"
                style={{ backgroundImage: `url(${image})` }}
                aria-hidden="true"
              />
              <img
                src={image}
                alt={`${title || 'Gallery'} ${index + 1}`}
                className="carousel-image"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-buttons">
        <button 
          className="carousel-btn" 
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          ❮
        </button>
        <button 
          className="carousel-btn" 
          onClick={goToNext}
          aria-label="Next image"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
