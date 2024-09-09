import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-card/cartUiSlice.js";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import logo from "../../../Assets/mile1-assets/logo.webp";

const navLinks = [
  { display: "Home", path: "/" },
  { display: "Foods", path: "/foods" },
  { display: "Cart", path: "/cart" },
];

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCart = () => dispatch(cartUiActions.toggle());

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [menuRef]);

  return (
    <header className="bg-[#FDC913] p-4 shadow-md font-satisfty">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Company Logo"
            className="h-14 w-72 object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.path}
              className={({ isActive }) =>
                `text-gray-800 hover:text-red-500 transition-colors duration-300 text-lg font-medium ${
                  isActive ? "text-red-500" : ""
                }`
              }
            >
              {item.display}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleCart}
            className="relative bg-white rounded-full p-2 hover:bg-gray-100 transition duration-300"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="text-gray-800 w-6 h-6" />
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </button>

          <Link
            to="/login"
            aria-label="User Login"
            className="text-gray-800 hover:text-red-500 transition-colors duration-300"
          >
            <User className="w-6 h-6" />
          </Link>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-800 focus:outline-none"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 bg-white w-64 h-screen p-6 transform transition-transform duration-300 ease-in-out shadow-lg z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close Menu"
        >
          <X className="w-6 h-6" />
        </button>
        <nav className="flex flex-col items-start space-y-6 mt-12">
          {navLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.path}
              className={({ isActive }) =>
                `text-gray-800 hover:text-red-500 transition-colors duration-300 text-lg font-medium ${
                  isActive ? "text-red-500" : ""
                }`
              }
              onClick={toggleMenu}
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
