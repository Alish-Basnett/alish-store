import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/api";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((response) => setProduct(response.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <img src={product.images[0]} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
