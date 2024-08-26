import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-white shadow">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        Alish Store
      </Link>
      <nav className="flex space-x-8">
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
    </div>
  </header>
);

export default Header;
