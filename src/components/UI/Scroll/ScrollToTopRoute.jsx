import React from "react";
import useScrollToTop from "../../../hooks/useScrollToTop";

const ScrollToTopRoute = ({ element }) => {
  useScrollToTop();
  return element;
};

export default ScrollToTopRoute;
