import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card w-full bg-base-100 border border-gray-300 shadow-sm hover:shadow-md transition duration-200 ease-in-out">
      <figure>
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="text-gray-600">${product.price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
