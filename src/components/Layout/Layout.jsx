import React from "react";
import Header from "../Header/Header";
import Routers from "../../routes/Routers";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Routers></Routers>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
