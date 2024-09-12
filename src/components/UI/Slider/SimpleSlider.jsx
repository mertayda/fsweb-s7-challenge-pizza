import React, { useState, useEffect } from "react";
import ava1 from "../../../../Assets/mile1-assets/images/ava-1.jpg";
import ava2 from "../../../../Assets/mile1-assets/images/ava-2.jpg";
import ava3 from "../../../../Assets/mile1-assets/images/ava-3.jpg";

const slides = [
  {
    image: ava1,
    text: "Their ramen and pizzas are incredibly delicious, and they deliver orders at an astonishing speed.",
    name: "Toby Charles",
  },
  {
    image: ava2,
    text: "My go-to place for an unbeatable taste.",
    name: "Sarah Johnson",
  },
  {
    image: ava3,
    text: "An amazing taste experience.",
    name: "Marcus Davis",
  },
];

export default function SimpleSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden mt-5">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              <img
                className="inline-block w-24 h-24 rounded-full object-cover"
                src={slide.image}
                alt="Avatar"
              />
              <div className="w-full lg:w-1/2 flex flex-col justify-center text-center sm:text-left">
                <blockquote className="text-lg sm:text-xl font-medium text-gray-900 font-quattrocento italic">
                  " {slide.text} "
                </blockquote>
                <p className="text-base sm:text-lg font-semibold text-gray-800 font-satisfty">
                  "{slide.name} "
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 hidden"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 hidden"
      >
        &gt;
      </button>
    </div>
  );
}
