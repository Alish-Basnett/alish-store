// src/pages/SearchResults.js
import React from "react";
import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";

const SearchResults = ({ onSidebarToggle }) => {
  return (
    <div className="flex">
      <button
        onClick={onSidebarToggle}
        className="md:hidden bg-blue-500 text-white p-2"
      >
        Toggle Filters
      </button>
      <Sidebar />
      <div className="flex-grow">
        <ProductList />
      </div>
    </div>
  );
};

export default SearchResults;
