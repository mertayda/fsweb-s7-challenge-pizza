import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./shopping-card/cartSlice";


const store = configureStore({
  reducer: {
    cart: cartReducer
   
  },
});

export default store;
