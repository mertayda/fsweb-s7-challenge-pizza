import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";

import Order from "./components/Order";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navigation from "./navigation";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
