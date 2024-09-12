import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import AllFood from "../pages/AllFood.jsx";
import Cart from "../pages/Cart.jsx";
import FoodDetails from "../pages/FoodDetails.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

import ScrollToTopRoute from "../components/UI/Scroll/ScrollToTopRoute.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<ScrollToTopRoute element={<Home />} />} />
      <Route
        path="/foods/:id"
        element={<ScrollToTopRoute element={<FoodDetails />} />}
      />
      <Route
        path="/foods"
        element={<ScrollToTopRoute element={<AllFood />} />}
      />
      <Route path="/cart" element={<ScrollToTopRoute element={<Cart />} />} />
      <Route path="/login" element={<ScrollToTopRoute element={<Login />} />} />
      <Route
        path="/register"
        element={<ScrollToTopRoute element={<Register />} />}
      />
    </Routes>
  );
};

export default Routers;
