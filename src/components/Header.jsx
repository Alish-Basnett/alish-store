// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import storelogo from "../assets/storelogo.png";

const Header = ({ searchTerm, setSearchTerm }) => (
  <header className="bg-white shadow">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <img
          src={storelogo}
          alt="Alish Store"
          className="h-6 w-auto" // Adjust the height and width here
        />
      </Link>
      <nav className="flex items-center space-x-8">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Contact
        </Link>

        <Link
          to="/careers"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Careers
        </Link>
      </nav>
      <input
        type="text"
        placeholder="Search by product name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-64 md:w-80"
      />
    </div>
  </header>
);

export default Header;
