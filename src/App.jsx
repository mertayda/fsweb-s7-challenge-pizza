import { useState } from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FastFoodMenu from "./components/FastFoodMenu";
import Category from "./components/Category";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Banner></Banner>
      <FastFoodMenu></FastFoodMenu>
      <Category></Category>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
