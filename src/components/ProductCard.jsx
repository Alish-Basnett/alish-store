import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
    <img
      src={product.images[0]}
      alt={product.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p className="text-lg font-semibold text-blue-600 mb-2">
        ${product.price}
      </p>
      <Link
        to={`/product/${product.id}`}
        className="text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  </div>
);

export default ProductCard;
