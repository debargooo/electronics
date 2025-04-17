import React, { useEffect, useState } from 'react';
import modelImage from "../assets/model.png";
import iphone15 from "../assets/iphone15.png";
import boat from "../assets/boat.png";

const images = [
  { src: modelImage, type: 'model' },
  { src: iphone15, type: 'product' },
  { src: boat, type: 'product' },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative flex-1 flex sm:items-center justify-center w-[95vw] mx-auto bg-gradient-to-b from-[#5d5e8d] to-[#d3e4f7] h-[30vh] lg:min-h-[80vh]  lg:h-[80vh] text-white overflow-hidden">
      <div className="w-[90vw] sm:w-[50vw] flex flex-col items-start mx-auto min-h-fit lg:min-h-[50vh] mt-4 sm:mt-0">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex leading-none flex-col w-full">
            <span className="text-[4vw] sm:text-[1.5vw] font-semibold">Your</span>
            <span className="text-[12vw] sm:text-[9vw] uppercase font-semibold">Everyday</span>
          </div>
          <span className="text-[4vw] sm:text-[1.5vw] text-end w-full mr-4 uppercase font-semibold">outfits</span>
        </div>
      </div>

      {/* Slider images */}
      {images.map((img, index) => {
        const isCurrent = currentImage === index;
        return (
          <img
            key={index}
            src={img.src}
            alt={`Slide ${index}`}
            className="absolute bottom-0 right-1/2 translate-x-1/2 object-contain pointer-events-none transition-opacity duration-1000 z-50"
            style={{
              opacity: isCurrent ? 1 : 0,
              zIndex: isCurrent ? 10 : 1,
              width: img.type === 'model' ? '55vw' : '35vw',  // Larger for model image, smaller for product images
              maxWidth: img.type === 'model' ? '55vw' : '35vw',  // Larger maxWidth for model image
            }}
          />
        );
      })}

      {/* Text content */}
      <div className="absolute bottom-32 left-6 sm:bottom-[70px] sm:left-[75px] text-[3.5vw] sm:text-[1.2vw] z-30">
        <span className="uppercase font-semibold block">New Spring</span>
        <span className="uppercase font-semibold block">Essentials</span>
      </div>

      <div className="absolute bottom-8 right-6 sm:bottom-20 sm:right-20 text-right text-[3.5vw] sm:text-[1.2vw] z-30">
        <span className="uppercase font-semibold block">Free Shipping</span>
        <span className="uppercase font-semibold block">Over $70</span>
      </div>
    </main>
  );
};

export default Hero;
