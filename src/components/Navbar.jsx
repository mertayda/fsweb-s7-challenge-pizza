import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineMenuFold,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { FaWallet, FaUserFriends } from "react-icons/fa";

import { TbTruckDelivery } from "react-icons/tb";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
          {" "}
          <AiOutlineMenuFold size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Teknolojik Yemekler{" "}
        </h1>
      </div>

      {/*Search Bar*/}
      <div className=" bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
        <AiOutlineSearch size={25}></AiOutlineSearch>
        <input
          className="bg-transparent p-2 w-full focus:outline-none border-none"
          type="text"
          placeholder="Search foods"
        ></input>
      </div>
      {/*Sipari Buttonu*/}
      <Link to="/order">
        <button
          type="button"
          className="flex focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          <BsFillCartFill size={20} className="mr-2"></BsFillCartFill>Siparişi
          Ver
        </button>
      </Link>
      {/*Mobile Menu */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        ></AiOutlineClose>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4"></TbTruckDelivery>{" "}
              Siparişlerim
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4"></MdFavorite>
              Favorilerim
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4"></FaWallet>
              Cüzdan
            </li>
            <li className="text-xl py-4 flex">
              <IoMdHelpCircle size={25} className="mr-4"></IoMdHelpCircle>
              Yardım
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4"></AiFillTag>
              Promosyon Kodu
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4"></BsFillSaveFill>
              Eniyiler
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-2"></FaUserFriends>
              Arkaşlarını Davet Et indirim Kazan
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
