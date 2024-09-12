import React from "react";
import banner from "../../../assets/images/banner-02.jpg";

const CommonSection = (props) => {
  return (
    <div className="relative max-w-full h-56 md:h-72 overflow-hidden">
      <img
        src={banner}
        alt="banner"
        className="w-full h-full object-cover absolute transition-transform duration-500 ease-in-out hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t  from-black to-transparent">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl px-4  md:px-8 font-bold text-center font-satisfty">
          {props.title}
        </h1>
      </div>
    </div>
  );
};

export default CommonSection;
