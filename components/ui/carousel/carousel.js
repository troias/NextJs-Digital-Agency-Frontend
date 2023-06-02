import { useState } from 'react';
import Image from 'next/image';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev-button" onClick={handlePrev}>
        Prev
      </button>
      <div className="carousel-image-container">
        <Image
          src={images[currentImageIndex].url}
          alt={images[currentImageIndex].attributes.alternativeText}
          width={images[currentImageIndex].attributes.width}
          height={images[currentImageIndex].attributes.height}
        />
      </div>
      <button className="carousel-button next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;