import React from "react";
import PizzaBanner from "../../Assets/mile1-assets/home-banner.png";
import FastFoodMenu from "./FastFoodMenu";

const Banner = () => {
  return (
    <div>
      <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative">
          <div className="absolute w-full h-full text-gray-200 max-h-[800px] flex flex-col  justify-center text-center">
            <h1 className="text-2xl font-bold text-white mb-2 sm:text-4xl sm:mb-8">
              Teknolojik <span className="text-orange-500">Yemekler</span>
            </h1>
            <p className=" md:text-3xl sm:text-xl font-bold text-white mb-8 lg:text-5xl sm:mb-4">
              KOD ACIKTIRIR <span className="text-orange-500">PİZZA</span>{" "}
              DOYURUR
            </p>
            <div className="">
              <button
                type="button"
                class=" focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              >
                Acıktım
              </button>
            </div>
          </div>
          <img
            className="w-full  max-h-[700px] object-cover"
            src={PizzaBanner}
            alt="/"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
