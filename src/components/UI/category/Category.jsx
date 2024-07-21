import React from "react";
import Icon from "../../../../Assets/mile2-aseets/icons/1.svg";
import Icon2 from "../../../../Assets/mile2-aseets/icons/2.svg";
import Icon3 from "../../../../Assets/mile2-aseets/icons/3.svg";
import Icon4 from "../../../../Assets/mile2-aseets/icons/4.svg";
import Icon5 from "../../../../Assets/mile2-aseets/icons/5.svg";
import Icon6 from "../../../../Assets/mile2-aseets/icons/6.svg";

const Category = () => {
  const items = [
    { icon: Icon, label: "Ramen" },
    { icon: Icon2, label: "Pizza" },
    { icon: Icon3, label: "Hamburger" },
    { icon: Icon4, label: " Kızarmatalar" },
    { icon: Icon5, label: "Fast Food" },
    { icon: Icon6, label: "İçecekler" },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto flex justify-center flex-wrap">
        {items.map(({ icon, label }) => (
          <div
            key={label}
            className="flex flex-row items-center px-2 mx-auto text-center transition-transform duration-300 hover:scale-110"
          >
            <img
              src={icon}
              alt={label}
              className="w-12 h-12 mb-4 rounded-full"
            />
            <p className="text-gray-900 text-xl font-medium mx-auto px-3">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
