import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../store/shopping-card/cartSlice";
import axios from "axios";
import CommonSection from "../components/UI/commonSection/CommonSection";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const notify = () => {
    toast.success("Order Placed Successfully", {
      position: "top-center",
      autoClose: 5000,
      pauseOnHover: true,
    });
  };

  const [sauces, setSauces] = useState([]);
  const [extras, setExtras] = useState([]);
  const [instructions, setInstructions] = useState("");

  const handleRemoveItem = (id) => {
    dispatch(deleteItem(id));
  };

  const handleSauceChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSauces([...sauces, value]);
    } else {
      setSauces(sauces.filter((sauce) => sauce !== value));
    }
  };

  const handleExtraChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setExtras([...extras, value]);
    } else {
      setExtras(extras.filter((extra) => extra !== value));
    }
  };

  const handleSubmitOrder = () => {
    const orderingItems = {
      cartItems,
      total,
      sauces,
      extras,
      instructions,
    };
    axios
      .post("https://reqres.in/api/orders", orderingItems)
      .then((res) => {
        console.log("Order submitted successfully", res.data);
        notify();
      })
      .catch((err) => {
        console.error("Error submitting order", err);
      });
  };

  const handleInstructionsChange = (event) => {
    setInstructions(event.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <CommonSection title="Cart"></CommonSection>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between mb-6 pb-6 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                      <p className="text-gray-600">
                        Price: ${item.price.toFixed(2)}
                      </p>
                      {item.spicy && (
                        <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mt-1">
                          <i className="fas fa-pepper-hot mr-1"></i> Spicy
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition duration-150 ease-in-out"
                  >
                    <i className="fas fa-trash-alt mr-2"></i> Remove
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Add Sauces</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Sweet and Sour",
                  "Honey Mustard",
                  "Hot Pepper",
                  "Barbecue",
                ].map((sauce) => (
                  <div className="flex items-center" key={sauce}>
                    <input
                      onChange={handleSauceChange}
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600"
                      id={sauce.replace(" ", "-").toLowerCase()}
                      value={sauce}
                    />
                    <label
                      htmlFor={sauce.replace(" ", "-").toLowerCase()}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {sauce}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Add Extras</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Rice", "Cheese", "Chicken Wings", "Pepper"].map((extra) => (
                  <div className="flex items-center" key={extra}>
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600"
                      id={extra.replace(" ", "-").toLowerCase()}
                      onChange={handleExtraChange}
                      value={extra}
                    />
                    <label
                      htmlFor={extra.replace(" ", "-").toLowerCase()}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {extra}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Special Instructions</h3>
              <textarea
                onChange={handleInstructionsChange}
                className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                placeholder="Add any special instructions or requests here"
                rows="4"
              ></textarea>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between mb-2">
                <p>Subtotal:</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>Taxes and Fees:</p>
                <p>$0.00</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="font-semibold">Total:</p>
                <p className="font-semibold">${total.toFixed(2)}</p>
              </div>
            </div>
            <button
              className="w-full bg-[#CE2829] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-150 ease-in-out"
              onClick={handleSubmitOrder}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />{" "}
    </div>
  );
};

export default Cart;
