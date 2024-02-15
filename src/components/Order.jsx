import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
import SauceCheckbox from "./SauceCheckbox";

const Order = ({ product }) => {
  const [selectedSauces, setSelectedSauces] = useState([]);

  const handleSauceChange = (sauceName, isChecked) => {
    if (isChecked) {
      setSelectedSauces([...selectedSauces, sauceName]);
    } else {
      setSelectedSauces(selectedSauces.filter((sauce) => sauce !== sauceName));
    }
  };

  const handleSubmitOrder = () => {
    const orderData = {
      product: product.name,
      price: product.price,
      sauces: selectedSauces,
    };

    axios
      .post("/api/orders", orderData)
      .then((response) => {
        console.log("Order submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
      });
  };

  return (
    <div className="order-container bg-gray-100 p-4 rounded shadow-md">
      <ProductDetails product={product} />
      <h2 className="text-lg font-bold mb-4">Select Sauces:</h2>
      {product.sauces.map((sauce) => (
        <SauceCheckbox
          key={sauce.name}
          sauceName={sauce.name}
          checked={selectedSauces.includes(sauce.name)}
          onChange={handleSauceChange}
        />
      ))}
      <button
        onClick={handleSubmitOrder}
        className="bg-yellow-400 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 hover:bg-yellow-500"
      >
        Order Now
      </button>
    </div>
  );
};

export default Order;
