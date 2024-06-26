import React from "react";
import image from "../../Assets/mile1-assets/home-banner.png";

const Hero = () => {
  return (
    <div
      className="w-full h-screen flex flex-col text-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#CE2829", // This sets a fallback color if the image fails to load
      }}
    >
      <div className="flex flex-col items-center justify-center content-center mt-10  bg-opacity-90 p-5 rounded-lg">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-4 font-roboto-condensed">
          Teknolojik Lezzetler
        </h1>
        <div className="flex flex-col text-center justify-center items-center mt-8 quattrocento">
          <h1 className="text-xl sm:text-2xl lg:text-3xl">KOD ACIKTIRIR</h1>
          <br />
          <h1 className="text-xl sm:text-2xl lg:text-3xl">PİZZA DOYURUR</h1>
          <div>
            <button className="bg-white text-[#CE2829] text-lg py-2 px-4 rounded mt-4 hover:bg-gray-300">
              Acıktım
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
