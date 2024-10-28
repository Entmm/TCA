// src/components/BrandPartners.js

import React from 'react';
import brandpartner from '../assets/tca-navigation.png';

const BrandPartners = () => {
  // Define the partners array with image sources
  const partners = Array(15).fill(brandpartner); // Create an array of 15 identical images

  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-12 xl:px-32 text-center">
        <h2 className="mb-4 text-6xl text-white font-bold">TCA Brand Partners</h2>
        <p className="text-white lg:w-8/12 lg:mx-auto mb-8">
          Join us in partnership with leading brands that share our vision and commitment to excellence.
        </p>
        
        {/* Carousel */}
        <div className="partners-carousel">
          {/* Left scrolling row */}
          <div className="carousel-row left-scroll">
            {partners.slice(4, 8).map((partner, index) => (
              <img key={index} src={partner} alt={`Partner ${index + 9}`} className="partner-image" />
            ))}
            {/* Duplicate the images for continuous scrolling */}
            {partners.slice(11, 8).map((partner, index) => (
              <img key={index + partners.length} src={partner} alt={`Partner ${index + 1}`} className="partner-image" />
            ))}
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default BrandPartners;
