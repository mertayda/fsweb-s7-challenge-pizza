import { createSlice } from "@reduxjs/toolkit";

// Get initial state from local storage
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const totalAmount = JSON.parse(localStorage.getItem("totalAmount")) || 0;
const totalQuantity = JSON.parse(localStorage.getItem("totalQuantity")) || 0;

// Helper function to update local storage
const updateLocalStorage = (cartItems, totalAmount, totalQuantity) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
  cartItems:cartItems,
  totalAmount:totalAmount,
  totalQuantity:totalQuantity
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // =========== add item ============
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalQuantity += 1;
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      updateLocalStorage(
        state.cartItems,
        state.totalAmount,
        state.totalQuantity
      );
    },

    // ========= remove item ========
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity--;
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice =
            Number(existingItem.totalPrice) - Number(existingItem.price);
        }
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        updateLocalStorage(
          state.cartItems,
          state.totalAmount,
          state.totalQuantity
        );
      }
    },

    //============ delete item ===========
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        updateLocalStorage(
          state.cartItems,
          state.totalAmount,
          state.totalQuantity
        );
      }
    },
  },
});

export const { addItem, removeItem, deleteItem } = cartSlice.actions;
export default cartSlice;
