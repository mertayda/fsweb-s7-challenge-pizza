import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import OrderSuccess from "../pages/OrderSuccess";
import Menu from "../pages/Menu";
import Header from "../components/Header";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment-success" element={<OrderSuccess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
