// src/components/BannerCarousel.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

const BannerCarousel = () => {
  const banners = [
    { id: 1, imageUrl: banner1, alt: "Banner 1" },
    { id: 2, imageUrl: banner2, alt: "Banner 2" },
    { id: 3, imageUrl: banner3, alt: "Banner 3" },
    { id: 4, imageUrl: banner4, alt: "Banner 4" },
  ];

  return (
    <div className="w-[70vw] h-[50vh] mx-auto mt-12">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="w-full h-full flex items-center justify-center"
          >
            <img
              src={banner.imageUrl}
              alt={banner.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
