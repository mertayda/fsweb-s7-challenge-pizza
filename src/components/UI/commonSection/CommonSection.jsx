import React from "react";
import banner from "../../../assets/images/banner-02.jpg";

const CommonSection = (props) => {
  return (
    <div className="relative max-w-full h-56">
      <img
        src={banner}
        alt="banner"
        className="w-full h-full object-cover absolute"
      ></img>
      <div className="absolute inset-0 flex items-center  bg-black bg-opacity-50">
        <div className="container">
          <h1 className="text-white text-5xl  font-bold mx-16 font-quattrocento">
            {props.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CommonSection;
