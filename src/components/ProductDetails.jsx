import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details mb-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded shadow-md mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-lg font-bold">Price: {product.price}</p>
    </div>
  );
};

export default ProductDetails;
