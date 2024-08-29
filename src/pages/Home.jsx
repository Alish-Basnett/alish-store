// src/pages/Home.js
import React from "react";
import BannerCarousel from "../components/BannerCarousel";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <BannerCarousel />

      <div className="mt-24 px-4">
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
