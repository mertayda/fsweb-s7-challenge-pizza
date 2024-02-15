import { useState } from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FastFoodMenu from "./components/FastFoodMenu";
import Category from "./components/Category";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Order from "./pages/OrdersForum/Order";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/order" component={Order}></Route>
        <Route path="/" exact>
          <Navbar></Navbar>
          <Banner></Banner>
          <FastFoodMenu></FastFoodMenu>
          <Category></Category>
          <Footer></Footer>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
