// src/components/ProductList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-full shadow-lg"
      >
        Filter
      </button>
      <div className="container mx-auto px-4 py-4 ml-64">
        <h1 className="text-2xl font-bold my-4">Product List</h1>
        <input
          type="text"
          placeholder="Search by product name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-2 rounded-md mb-4 w-full md:w-1/2"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
