import React from "react";
import { useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  deleteItem,
} from "../../../store/shopping-card/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, title, img, price, quantity, totalPrice } = item;

  const incrementItem = () => {
    dispatch(addItem({ id, title, img, price }));
  };

  const removeItemHandler = () => {
    dispatch(removeItem(id));
  };

  const deleteItemHandler = () => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="flex gap-2 mb-4 border-b pb-2">
      <img src={img} alt={title} className="w-16 h-16 object-cover" />
      <div className="flex-1 flex items-center justify-between">
        <div>
          <h6 className="text-lg">{title}</h6>
          <p className="flex items-center gap-2">
            {quantity}x <span>${totalPrice.toFixed(2)}</span>
          </p>
          <div className="flex items-center justify-between mt-2">
            <span className="cursor-pointer" onClick={incrementItem}>
              <i className="ri-add-line"></i>
            </span>
            <span>{quantity}</span>
            <span className="cursor-pointer" onClick={removeItemHandler}>
              <i className="ri-subtract-line"></i>
            </span>
          </div>
        </div>
        <span className="cursor-pointer" onClick={deleteItemHandler}>
          <i className="ri-close-line"></i>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
