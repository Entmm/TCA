// src/components/BrandPartners.js

import React, { useEffect, useRef } from 'react';
import brandpartner from '../assets/tca-navigation.png';


const BrandPartners = () => {
  // Define the partners array with image sources
  const partners = Array(15).fill(brandpartner); // Create an array of 15 identical images
  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: 7, // Scroll 1 pixel to the left
          behavior: 'smooth',
        });
      }
    }, 20); // Adjust the speed of scrolling by changing the interval

    return () => clearInterval(scrollInterval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-12 xl:px-32 text-center">
        <h2 className="mb-4 text-6xl text-white font-bold">TCA Brand Partners</h2>
        <p className="text-white lg:w-8/12 lg:mx-auto mb-8">
          Join us in partnership with leading brands that share our vision and commitment to excellence.
        </p>

        {/* Carousel */}
        <div className="partners-carousel" ref={carouselRef}>
          {/* Scrolling row */}
          <div className="carousel-row">
            {partners.map((partner, index) => (
              <img key={index} src={partner} alt={`Partner ${index + 1}`} className="partner-image" />
            ))}
            {/* Duplicate the images for continuous scrolling */}
            {partners.map((partner, index) => (
              <img key={index + partners.length} src={partner} alt={`Partner ${index + 1}`} className="partner-image" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPartners;
