import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-card/cartSlice";


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
   
  },
});

export default store;
