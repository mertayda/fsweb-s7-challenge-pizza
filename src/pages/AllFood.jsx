import React, { useState } from "react";
import products from "../assets/data/products";
import CommonSection from "../components/UI/commonSection/CommonSection";

const AllFood = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((item) => item.category))];

  const filteredProducts = products.filter((item) => {
    const matchesSearch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white min-h-screen">
      <CommonSection title="Yiyecekler" />
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 font-quattrocento">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/3">
            <label
              htmlFor="search"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Yemek Ara:
            </label>
            <input
              type="text"
              id="search"
              className="shadow-sm border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Yemek adı girin..."
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="category"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Kategori Seç:
            </label>
            <select
              id="category"
              className="shadow-sm border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-48 sm:h-52 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4 md:p-6 flex-grow">
                <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold uppercase text-blue-600 bg-blue-100 rounded-full">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.description}
                </p>
              </div>
              <div className="mt-auto flex border-t border-gray-200">
                <a
                  className="w-1/2 py-3 px-4 inline-flex justify-center items-center text-sm font-medium bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                  href="#"
                >
                  Sepete Ekle
                </a>
                <a
                  className="w-1/2 py-3 px-4 inline-flex justify-center items-center text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                  href="#"
                >
                  Ürünü Göster
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-8">Ürün bulunamadı.</p>
        )}
      </div>
    </section>
  );
};

export default AllFood;
