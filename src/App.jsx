import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";
import Hero from "./components/Hero";
import Order from "./components/Order";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Hero></Hero>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
