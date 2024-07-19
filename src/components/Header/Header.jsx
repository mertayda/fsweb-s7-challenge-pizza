import React, { useState } from "react";
import logo from "../../../Assets/mile1-assets/logo.webp";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#CE2829] min-w-min">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="w-56">
            <Link to="/">
              <img src={logo} alt="Company Logo" className="object-cover" />
            </Link>
          </div>
          <nav className="w-full text-center justify-center hidden sm:flex text-lg  space-x-3 md:space-x-12  mx-auto">
            <Link
              to="/"
              className="text-white no-underline font-bold font-satisfty"
            >
              Anasayfa
            </Link>
            <Link
              to="/about"
              className="text-white no-underline font-bold font-satisfty"
            >
              Yemekler
            </Link>
            <Link
              to="/products"
              className="text-white no-underline font-bold font-satisfty"
              aria-label="My Products"
            >
              Ürünlerim
            </Link>
            <Link
              to="/contact"
              className="text-white no-underline font-bold font-satisfty"
              aria-label="Contact"
            >
              İletişim
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <span
              className="relative cursor-pointer"
              aria-label="Shopping Basket"
            >
              <i className="ri-shopping-basket-line text-white text-lg"></i>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </span>
            <Link
              to="/login"
              aria-label="User Login"
              className="text-white no-underline"
            >
              <i className="ri-user-follow-fill text-lg"></i>
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="sm:hidden text-white focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              <i className="ri-menu-line text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
