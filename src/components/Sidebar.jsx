// src/components/Sidebar.js
import React from "react";
import ProductFilter from "./ProductFilter";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-gray-100 shadow-lg transform transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-2xl">
        &times;
      </button>
      <div className="p-4">
        <ProductFilter />
      </div>
    </div>
  );
};

export default Sidebar;
