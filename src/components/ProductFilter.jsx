import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductFilter = () => {
  const [filters, setFilters] = useState({
    title: "",
    price: "",
    price_min: "",
    price_max: "",
    categoryId: "",
  });
  const [isOpen, setIsOpen] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products",
        { params: filters }
      );
      // This should be handled in ProductList
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const handleInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 w-64 bg-white shadow-md h-full p-4`}
    >
      <button onClick={toggleSidebar} className="mb-4 text-blue-500">
        {isOpen ? "Close Filter" : "Open Filter"}
      </button>
      <h2 className="text-2xl font-bold mb-4">Filter Products</h2>
      <div className="mb-4">
        <input
          type="text"
          name="title"
          placeholder="Filter by Title"
          value={filters.title}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-md mb-2 w-full"
        />
        <input
          type="number"
          name="price"
          placeholder="Filter by Price"
          value={filters.price}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-md mb-2 w-full"
        />
        <input
          type="number"
          name="price_min"
          placeholder="Min Price"
          value={filters.price_min}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-md mb-2 w-full"
        />
        <input
          type="number"
          name="price_max"
          placeholder="Max Price"
          value={filters.price_max}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-md mb-2 w-full"
        />
        <input
          type="number"
          name="categoryId"
          placeholder="Category ID"
          value={filters.categoryId}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-md mb-2 w-full"
        />
        <button
          onClick={fetchProducts}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
