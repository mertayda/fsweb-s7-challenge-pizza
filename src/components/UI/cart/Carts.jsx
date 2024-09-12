import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../../store/shopping-card/cartUiSlice";
import { removeItem } from "../../../store/shopping-card/cartSlice";
import CartItem from "../cart/CartItem";
import { X, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartIsVisible = useSelector((state) => state.cartUi.cartIsVisible);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div
      className={`fixed top-0 right-0 bg-white w-full sm:w-96 h-screen p-4 shadow-lg transform transition-transform duration-300 z-50 ${
        cartIsVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center mb-4 border-b pb-4">
        <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
        <button
          onClick={toggleCart}
          className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          aria-label="Close cart"
        >
          <X size={24} />
        </button>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-200px)]">
        {cartProducts.length > 0 ? (
          cartProducts.map((item) => (
            <div key={item.id} className="mb-4 border-b pb-4 last:border-b-0">
              <CartItem item={item} />
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="mt-2 flex items-center text-red-500 hover:text-red-700 transition-colors duration-200"
              >
                <Trash2 size={16} className="mr-1" />
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-8">Your cart is empty.</p>
        )}
      </div>
      <div className="flex flex-col mt-4 border-t pt-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Total: ${totalAmount.toFixed(2)}
        </h3>
        <Link
          to="/cart"
          className="maw-w-xd  text-center  mt-4 bg-[#CE2829] text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200"
          onClick={() => {
            console.log("Proceeding to checkout");
          }}
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Carts;
