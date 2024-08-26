import React from "react";

const ProductFilter = () => {
  return (
    <div>
      <h2>Filter Products</h2>
      {/* Filter options */}
      <div>
        <label>
          Category:
          <select>
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            {/* Add more categories */}
          </select>
        </label>
      </div>
      {/* Add more filters */}
    </div>
  );
};

export default ProductFilter;
