import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import AllFood from "../pages/AllFood.jsx";
import Cart from "../pages/Cart.jsx";
import FoodDetails from "../pages/FoodDetails.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/foods" element={<AllFood />}></Route>
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};

export default Routers;
