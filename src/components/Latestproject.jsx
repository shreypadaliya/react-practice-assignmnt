import React, { useRef, useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import coomas from "../data/Coomas.png";
import eclips from "../data/Ellipse 1.png";

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        setCurrentSlide((prevSlide) => 
          prevSlide === 4 ? 0 : prevSlide + 1
        );
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.moveTo(currentSlide);
    }
  }, [currentSlide]);

  const carouselItems = Array.from({ length: 5 }, (_, index) => (
    <div key={index} style={{ padding: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={eclips}
            alt={`Carousel Image ${index + 1}`}
            style={{ height: '64px', width: '64px', borderRadius: '50%' }}
          />
          <div style={{ marginLeft: '16px' }}>
            <h1 style={{ fontSize: '14px', fontWeight: '600' }}>Carol Chaves</h1>
            <p style={{ fontSize: '12px', color: '#6B7280' }}>@caroles.gmail.com</p>
          </div>
        </div>
        <div style={{ alignSelf: 'flex-start', paddingTop: '16px' }}>
          <img
            src={coomas}
            alt="Quote"
            style={{ height: '20px', width: '48px' }}
          />
        </div>
      </div>
    </div>
  ));

  return (
    <div style={{ width: '100%', maxWidth: '320px', margin: '0 auto' }}>
      <Carousel
        ref={carouselRef}
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={false}
        selectedItem={currentSlide}
        onChange={setCurrentSlide}
        interval={2000}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        style={{}}
      >
        {carouselItems}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;