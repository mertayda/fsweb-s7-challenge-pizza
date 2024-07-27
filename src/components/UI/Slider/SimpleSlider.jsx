import React, { useState, useEffect } from "react";
import ava1 from "../../../../Assets/mile1-assets/images/ava-1.jpg";
import ava2 from "../../../../Assets/mile1-assets/images/ava-2.jpg";
import ava3 from "../../../../Assets/mile1-assets/images/ava-3.jpg";

const slides = [
  {
    image: ava1,
    text: "Ramen ve Pizzaları Müthiş Lezzetli ve Siparişleri Yetiştirmede İnanılmaz Hızlılar",
    name: "Joe Doe",
  },
  {
    image: ava2,
    text: "Vazgeçemediğim Tek Lezzet",
    name: "Jane Doe",
  },
  {
    image: ava3,
    text: "Harika bir Lezzet.",
    name: "John Doe",
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
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden mt-5">
      {/* Slider */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="flex flex-row   content-center gap-6 sm:gap-10">
              <img
                class="inline-block size-12 rounded-full "
                src={slide.image}
                alt="Avatar"
              ></img>
              <div className="w-full  lg:w-1/2 flex flex-col justify-center ">
                <blockquote className=" text-lg font-medium text-gray-900 font-quattrocento italic">
                  " {slide.text} "
                </blockquote>
                <p className=" text-lg font-semibold text-gray-800 font-satisfty">
                  "{slide.name} "
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2  text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2  text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
}
