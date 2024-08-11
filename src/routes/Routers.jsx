import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import AllFood from "../pages/AllFood.jsx";
import Cart from "../pages/Cart.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFood />}></Route>
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routers;
