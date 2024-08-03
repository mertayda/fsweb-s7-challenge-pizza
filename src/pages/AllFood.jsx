import React, { useState } from "react";
import products from "../assets/data/products";

const AllFood = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [...new Set(products.map((item) => item.category))];

  const filteredProducts = products.filter((item) => {
    const matchesSearch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <label
                htmlFor="search"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Search for food:
              </label>
              <input
                type="text"
                id="search"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="mb-4 md:mb-0 md:ml-4">
              <label
                htmlFor="category"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Choose a category:
              </label>
              <select
                id="category"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Card Blog */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
                >
                  <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl"></div>
                  <div className="p-4 md:p-6">
                    <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-gray-500 dark:text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                    <a
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      View sample
                    </a>
                    <a
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      View API
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* End Grid */}
          </div>
          {/* End Card Blog */}
        </div>
      </section>
    </>
  );
};

export default AllFood;
