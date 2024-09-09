import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/shopping-card/cartSlice";
import products from "../assets/data/products";
import CommonSection from "../components/UI/commonSection/CommonSection";
import { Link } from "react-router-dom";

const AllFood = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const dispatch = useDispatch();

  const categories = ["All", ...new Set(products.map((item) => item.category))];

  useEffect(() => {
    const filtered = products.filter((item) => {
      const matchesSearch =
        searchTerm === "" ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white min-h-screen">
      <CommonSection title="All Foods"></CommonSection>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 font-sans">
        <div className="flex flex-col md:flex-row justify-between items-stretch mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/3">
            <label
              htmlFor="search"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Search Food:
            </label>
            <input
              type="text"
              id="search"
              className="shadow-sm border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter food name..."
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="category"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Select Category:
            </label>
            <select
              id="category"
              className="shadow-sm border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute top-2 right-2 inline-block px-2 py-1 text-xs font-semibold uppercase text-white bg-[#CE2829] rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-4 md:p-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#CE2829]  transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {item.description}
                </p>
                <p className="text-lg font-bold ">${item.price.toFixed(2)}</p>
              </div>
              <div className="mt-auto flex border-t border-gray-200">
                <button
                  onClick={() => dispatch(addItem(item))}
                  className="w-1/2 py-3 px-4 inline-flex justify-center items-center text-sm font-medium bg-white transition-colors duration-300"
                >
                  Add to Cart
                </button>
                <Link
                  to={`/foods/${item.id}`}
                  className="w-1/2 py-3 px-4 inline-flex justify-center items-center text-white text-sm font-medium bg-[#CE2829] transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-8 text-lg">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
};

export default AllFood;
