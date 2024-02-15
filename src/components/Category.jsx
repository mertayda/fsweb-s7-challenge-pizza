import React from "react";
import TerminalPizza from "../../Assets/mile2-aseets/pictures/food-1.png";
import AcıPizza from "../../Assets/mile2-aseets/pictures/food-2.png";
import Hamburger from "../../Assets/mile2-aseets/pictures/food-3.png";

const Category = () => {
  const data = [
    {
      id: 1,
      name: "Terminal Pizza",
      kategori: "pizza",
      fiyat: "80tl",
      Değerlendirme: "4.9",
      image: TerminalPizza,
    },
    {
      id: 2,
      name: "Position Absolute Acı Pizza",
      kategori: "pizza",
      fiyat: "70tl",
      Değerlendirme: "4.9",
      image: AcıPizza,
    },
    {
      id: 3,
      name: "UseEffect Tavuklu Burger",
      kategori: "Hamburger",
      fiyat: "8000tl",
      Değerlendirme: "4.9",
      image: Hamburger,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col text-center items-center mb-4">
        <h1 className="text-4xl text-red-500 font-italic mb-2">
          En Çok Paketlenene Menüler
        </h1>
        <p className="text-gray-700 text-lg">
          Acıktıran Kodlara Doyuran Lezzetler
        </p>
      </div>

      <div className="flex flex-wrap text-center justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg m-4"
          >
            <img src={item.image} alt={item.name} className="w-full" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.name}</div>
              <p className="text-gray-700 text-base">
                Kategori: {item.kategori}
                <br />
                Fiyat: {item.fiyat}
                <br />
                Değerlendirme: {item.Değerlendirme}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
