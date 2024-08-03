import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import AllFood from "../pages/AllFood.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFood />}></Route>
    </Routes>
  );
};

export default Routers;
