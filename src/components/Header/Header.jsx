import React, { useEffect, useRef, useState } from "react";
import logo from "../../../Assets/mile1-assets/logo.webp";
import { Link, NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-card/cartUiSlice.js";

const navLinks = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add("shadow-lg");
      } else {
        headerRef.current.classList.remove("shadow-lg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className="bg-[#FDC913] py-4 transition-shadow duration-300"
      ref={headerRef}
    >
      <div
        ref={menuRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
      >
        <Link to="/">
          <img src={logo} alt="Company Logo" className="object-cover w-56" />
        </Link>
        <nav className="hidden lg:flex items-center gap-5 font-satisfty text-2xl">
          {navLinks.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                `text-gray-800 hover:text-red-500 transition-colors duration-300 ${
                  isActive ? "text-red-500" : ""
                }`
              }
            >
              {item.display}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer" aria-label="Shopping Basket">
            <i className="ri-shopping-basket-line text-white text-2xl"></i>
            <span
              onClick={toggleCart}
              className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
            >
              {totalQuantity}
            </span>
          </div>
          <Link
            to="/login"
            aria-label="User Login"
            className="text-white no-underline hover:text-yellow-500"
          >
            <i className="ri-user-follow-fill text-2xl"></i>
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bg-white w-1/4 h-screen p-4 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-5 font-satisfty text-2xl">
          {navLinks.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                `text-gray-800 hover:text-red-500 transition-colors duration-300 ${
                  isActive ? "text-red-500" : ""
                }`
              }
            >
              {item.display}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
