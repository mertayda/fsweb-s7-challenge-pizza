import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../../store/shopping-card/cartUiSlice";
import CartItem from "../cart/CartItem";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartIsVisible = useSelector((state) => state.cartUi.cartIsVisible);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <div
      className={`fixed top-0 right-0 bg-white w-96 h-screen p-4 shadow-lg transform transition-transform duration-300 z-50 ${
        cartIsVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={toggleCart} className="text-red-500">
          Close
        </button>
      </div>
      <div className="overflow-y-auto h-[80vh]">
        {cartProducts.length > 0 ? (
          cartProducts.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">
          Total: ${totalAmount.toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default Carts;
