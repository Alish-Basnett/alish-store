// src/pages/Home.js
import React from "react";
import BannerCarousel from "../components/BannerCarousel";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <h1 className="text-center text-3xl font-bold mt-8">Featured Products</h1>
      <ProductList />
    </div>
  );
};

export default Home;
