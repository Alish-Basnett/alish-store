// src/pages/ProductDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/api";

const ProductDetail = ({ onSidebarToggle }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((response) => setProduct(response.data));
    onSidebarToggle(); // Open the sidebar when this page loads
  }, [id, onSidebarToggle]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail p-4">
      <img src={product.images[0]} alt={product.title} />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
