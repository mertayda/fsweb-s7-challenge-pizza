import React from "react";
import YeniKore from "../../Assets/mile2-aseets/icons/1.svg";
import Pizza from "../../Assets/mile2-aseets/icons/2.svg";
import Hamburger from "../../Assets/mile2-aseets/icons/3.svg";
import Kızarmalar from "../../Assets/mile2-aseets/icons/4.svg";
import Fastfood from "../../Assets/mile2-aseets/icons/5.svg";
import Gazlıİçecekler from "../../Assets/mile2-aseets/icons/6.svg";

const FastFoodMenu = () => {
  return (
    <div className="max-w-[1640px] flex flex-wrap flex-row mx-auto mt-8 lg:mt-24 lg:pt-24">
      <div className="menu-item flex flex-col lg:flex-row items-center w-full lg:w-1/6 h-36 p-4 bg-white shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
        <img
          src={YeniKore}
          alt="Yeni Kore"
          className="menu-img  object-cover rounded-t-lg lg:rounded-l-lg"
        />
        <span className="menu-text lg:w-1/2 h-1/2 lg:h-full text-center text-lg font-bold text-gray-700 my-2 lg:mx-2">
          Yeni Kore
        </span>
      </div>
      <div className="menu-item flex flex-col lg:flex-row items-center w-full lg:w-1/6 h-36 p-4 bg-white shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
        <img
          src={Pizza}
          alt="Pizza"
          className="menu-img  object-cover rounded-t-lg lg:rounded-l-lg"
        />
        <span className="menu-text w-full lg:w-1/2 h-1/2 lg:h-full text-center text-lg font-bold text-gray-700 my-2 lg:mx-2">
          Pizza
        </span>
      </div>
      <div className="menu-item flex flex-col lg:flex-row items-center w-full lg:w-1/6 h-36 p-4 bg-white shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
        <img
          src={Hamburger}
          alt="Hamburger"
          className="menu-img  object-cover rounded-t-lg lg:rounded-l-lg"
        />
        <span className="menu-text w-full lg:w-1/2 h-1/2 lg:h-full text-center text-lg font-bold text-gray-700 my-2 lg:mx-2">
          Hamburger
        </span>
      </div>
      <div className="menu-item flex flex-col lg:flex-row items-center w-full lg:w-1/6 h-36 p-4 bg-white shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
        <img
          src={Kızarmalar}
          alt="Kızarmalar"
          className="menu-img  object-cover rounded-t-lg lg:rounded-l-lg"
        />
        <span className="menu-text w-full lg:w-1/2 h-1/2 lg:h-full text-center text-lg font-bold text-gray-700 my-2 lg:mx-2">
          Kızarmalar
        </span>
      </div>
      <div className="menu-item flex flex-col lg:flex-row items-center w-full lg:w-1/6 h-36 p-4 bg-white shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
        <img
          src={Fastfood}
          alt="Fastfood"
          className="menu-img object-cover rounded-t-lg lg:rounded-l-lg"
        />
        <span className="menu-text w-full lg:w-1/2 h-1/2 lg:h-full text-center text-lg font-bold text-gray-700 my-2 lg:mx-2">
          FastFood
        </span>
      </div>
      <div className="menu-item flex flex-col lg:flex-row items-center w-full lg:w-1/6 h-36 p-4 bg-white shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
        <img
          src={Gazlıİçecekler}
          alt="Gazlı İçecekler"
          className="menu-img  object-cover rounded-t-lg lg:rounded-l-lg"
        />
        <span className="menu-text w-full lg:w-1/2 h-1/2 lg:h-full text-center text-lg font-bold text-gray-700 my-2 lg:mx-2">
          Gazlıİçecekler
        </span>
      </div>
    </div>
  );
};

export default FastFoodMenu;
