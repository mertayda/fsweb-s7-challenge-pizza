import React from "react";
import image from "../../Assets/mile1-assets/home-banner.png";
import { Button } from "reactstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Hero = () => {
  return (
    <div
      className="w-full h-screen flex flex-col text-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#CE2829",
      }}
    >
      <div className="flex flex-col items-center justify-center content-center mt-8 bg-opacity-90 p-5 rounded-lg">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-4 font-quattrocento  font-bold">
          Teknolojik Lezzetler
        </h1>
        <div className="flex flex-col text-center justify-center items-center mt-6 ">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-satisfty">
            KOD ACIKTIRIR
          </h1>

          <h1 className="text-xl sm:text-2xl lg:text-4xl font-satisfty">
            PİZZA DOYURUR
          </h1>
          <div className="mt-6">
            <Link to="/order">
              <Button block color="warning" size="lg">
                ACIKTIM
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
