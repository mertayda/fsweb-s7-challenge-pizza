import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image from "../../Assets/mile1-assets/home-banner.png";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category";
import featureImg01 from "../../Assets/mile1-assets/images/service-01.png";
import featureImg02 from "../../Assets/mile1-assets/images/service-02.png";
import featureImg03 from "../../Assets/mile1-assets/images/service-03.png";
import Icon from "../../Assets/mile2-aseets/icons/1.svg";
import Icon2 from "../../Assets/mile2-aseets/icons/2.svg";
import Icon3 from "../../Assets/mile2-aseets/icons/3.svg";
import Icon4 from "../../Assets/mile2-aseets/icons/4.svg";
import Icon5 from "../../Assets/mile2-aseets/icons/5.svg";
import products from "../assets/data/products";
import ProductCard from "../../src/components/UI/productCard/ProductCard";
import delivery from "../../src/assets/images/location.png";
import SimpleSlider from "../components/UI/Slider/SimpleSlider";
import network from "../../src/assets/images/network.png";

const featureData = [
  {
    title: "Fast Delivery",
    imgUrl: featureImg01,
    desc: "Your order is prepared swiftly and delivered to your doorstep.",
  },
  {
    title: "Super Taste",
    imgUrl: featureImg02,
    desc: "Our pizzas are crafted with the freshest ingredients sourced from local suppliers.",
  },
  {
    title: "Easy Order",
    imgUrl: featureImg03,
    desc: "Ordering is a breeze with our user-friendly platform, ensuring a seamless experience.",
  },
];

const Home = () => {
  const [allProducts, setAllProducts] = useState(products);

  const [category, setCategory] = useState("ALL");

  useEffect(() => {
    const categoryMap = {
      ALL: () => products,
      BURGER: () => products.filter((item) => item.category === "Burger"),
      PIZZA: () => products.filter((item) => item.category === "Pizza"),
      RAMEN: () => products.filter((item) => item.category === "Ramen"),
      "FRENCH FRIES": () =>
        products.filter((item) => item.category === "French Fries"),
      "FAST FOOD": () =>
        products.filter((item) => item.category === "Fast Food"),
      "SOFT DRINKS": () =>
        products.filter((item) => item.category === "Soft Drinks"),
    };

    const filterFunction =
      categoryMap[category.toUpperCase()] || categoryMap["ALL"];
    setAllProducts(filterFunction());
  }, [category]);

  useEffect(() => {
    const categoryMap = {
      ALL: () => products,
      BURGER: () => products.filter((item) => item.category === "Burger"),
      PIZZA: () => products.filter((item) => item.category === "Pizza"),
      RAMEN: () => products.filter((item) => item.category === "Ramen"),
      "FRENCH FRIES": () =>
        products.filter((item) => item.category === "French Fries"),
      "FAST FOOD": () =>
        products.filter((item) => item.category === "Fast Food"),
      "SOFT DRINKS": () =>
        products.filter((item) => item.category === "Soft Drinks"),
    };

    const filterFunction =
      categoryMap[category.toUpperCase()] || categoryMap["ALL"];
    setAllProducts(filterFunction());
  }, [category]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".feature-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".feature-item",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".product-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".product-item",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".why-choose-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".why-choose-item",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".references-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".references-item",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      "h1, h2",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "h1, h2",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <div className="container flex flex-col">
      <div
        className="w-full h-screen flex flex-col text-white "
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#CE2829",
        }}
      >
        <div className="flex flex-col items-center justify-center bg-opacity-90 p-5 rounded-lg mt-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-quattrocento font-semibold text-center">
            Teknolojik Lezzetler
          </h1>
          <div className="flex flex-col text-center mt-6">
            <span className="text-[#FDC913] text-3xl font-quattrocento">
              Don't Miss Out
            </span>
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-satisfty">
              THE CODE IS LIVE
            </h1>
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-satisfty">
              PIZZA SATISFACTION GUARANTEED
            </h1>
            <div className="mt-6">
              <Link to="/order">
                <button
                  type="button"
                  className="py-2 px-8 font-satisfty inline-flex items-center gap-x-2 text-md font-semibold rounded-3xl border border-transparent bg-[#FDC913] text-black hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                  JOIN US
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Category />

      <section className="py-10 max-w-7xl mx-auto ">
        <div className="mx-auto font-quattrocento font-bold px-4">
          <div className="text-center">
            <h5 className="text-red-600 mb-4 font-satisfty text-3xl">
              What We Offer?
            </h5>
            <h2 className="text-2xl lg:text-3xl font-bold font-satisfty">
              Let Us Bring the Flavors to Your Doorstep!
            </h2>
            <h2 className="text-2xl lg:text-3xl font-bold font-satisfty">
              Are You Hungry?{" "}
              <span className="text-red-600">We've Got You!</span>
            </h2>
            <p className="mb-1 mt-4 text-gray-600 px-4 lg:px-0">
              Your dream pizza is just a click away. Each of our pizzas is
              crafted with love and care, using the freshest ingredients.
              Whether you're seeking a low-calorie option or classic flavors,
              we've got you covered!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8 px-3">
            {featureData.map((item, index) => (
              <div
                key={index}
                className="  p-6 text-center bg-white rounded-lg shadow-md feature-item"
              >
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="w-24 h-22 mx-auto mb-3"
                />
                <h5 className="font-bold mb-3 font-satisfty">{item.title}</h5>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h1 className="font-satisfty font-bold text-3xl text-[#CE2829]">
              Most Popular Menu Items
            </h1>
            <h1 className="font-quattrocento text-3xl">
              Indulge in Our Mouthwatering Creations
            </h1>
          </div>
          <div className="flex flex-col items-center font-roboto-condensed font-bold">
            <div className="flex flex-wrap justify-center gap-4 text-black mt-6 py-4 rounded-lg">
              <button
                onClick={() => setCategory("ALL")}
                className="flex items-center bg-white text-black border rounded-md px-4 py-2 hover:bg-gray-200"
                aria-label="Show all categories"
              >
                All
              </button>
              <button
                onClick={() => setCategory("RAMEN")}
                className="flex items-center bg-white text-black border rounded-md px-4 py-2 hover:bg-gray-200"
                aria-label="Show Ramen category"
              >
                <img src={Icon} alt="" className="w-5 h-5 mr-2" />
                Ramen
              </button>
              <button
                onClick={() => setCategory("PIZZA")}
                className="flex items-center bg-white text-black border rounded-md px-4 py-2 hover:bg-gray-200"
                aria-label="Show Pizza category"
              >
                <img src={Icon2} alt="" className="w-5 h-5 mr-2" />
                Pizza
              </button>{" "}
              <button
                onClick={() => setCategory("BURGER")}
                className="flex items-center bg-white text-black border rounded-md px-4 py-2 hover:bg-gray-200"
                aria-label="Show Hamburger category"
              >
                <img src={Icon3} alt="" className="w-5 h-5 mr-2" />
                Hamburger
              </button>{" "}
              <button
                onClick={() => setCategory("FRENCH FRIES")}
                className="flex items-center bg-white text-black border rounded-md px-4 py-2 hover:bg-gray-200"
                aria-label="Show Fries category"
              >
                <img src={Icon4} alt="" className="w-5 h-5 mr-2" />
                Frenh Fries
              </button>
              <button
                onClick={() => setCategory("FAST FOOD")}
                className="flex items-center bg-white text-black border rounded-md px-4 py-2 hover:bg-gray-200"
                aria-label="Show Fast-Food Category"
              >
                <img src={Icon5} alt="" className="w-5 h-5 mr-2" />
                Fast Food
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-3">
            {allProducts.map((item) => (
              <div key={item.id} className="product-item">
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full mt-4 bg-gray-100 p-3 max-h-max">
        <div className="max-w-6xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img
              src={delivery}
              className="object-cover w-full h-full "
              alt="Delivery Image"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6  ">
            <h1 className="text-3xl font-bold text-gray-800 mb-4  font-satisfty">
              Why Choose Teknolojik Lezzetler?
            </h1>
            <p className="text-gray-600 font-quattrocento">
              At Teknolojik Lezzetler, we prioritize the use of the freshest and
              highest quality ingredients. With our state-of-the-art equipment,
              we ensure that your order arrives at your doorstep without
              compromising on flavor or freshness. Enjoy the convenience of
              fresh, delicious meals, anytime, anywhere.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 why-choose-item">
                <i className="ri-checkbox-circle-line text-green-500 text-2xl"></i>
                <div>
                  <p className="text-lg font-semibold text-gray-800 font-satisfty">
                    Fresh and High-Quality Products
                  </p>
                  <p className="text-gray-600 font-roboto-condensed">
                    Experience a burst of flavor in every bite. Our products are
                    crafted with care, using the freshest ingredients from our
                    own garden!
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 why-choose-item">
                <i className="ri-checkbox-circle-line text-green-500 text-2xl"></i>
                <div>
                  <p className="text-lg font-semibold text-gray-800 font-satisfty">
                    Live Customer Support
                  </p>
                  <p className="text-gray-600 font-roboto-condensed">
                    Our dedicated 24/7 customer support team is here to assist
                    you with any queries or feedback regarding your orders.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 why-choose-item">
                <i className="ri-checkbox-circle-line text-green-500 text-2xl"></i>
                <div>
                  <p className="text-lg font-semibold text-gray-800 font-satisfty">
                    Order from Anywhere
                  </p>
                  <p className="text-gray-600 font-roboto-condensed">
                    Whether you're at work, home, or on the move, you can easily
                    place your order through our mobile app or website, and have
                    it delivered right to your location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl py-10 mx-auto references-item">
        <div className="w-full h-full">
          <div className="flex flex-wrap mx-4">
            <div className="w-full md:w-1/2 px-4">
              <div className="flex flex-col mt-6">
                <h5 className="text-red-500 mb-4 text-lg sm:text-xl">
                  Our References
                </h5>
                <h1 className="mb-4 font-satisfty text-2xl sm:text-3xl lg:text-4xl">
                  What Our Customers <span className="text-red-500">Say</span>
                </h1>
                <h4 className="text-gray-600 mb-4 font-quattrocento italic text-base sm:text-lg">
                  Our customers rave about our products, which are made with
                  love and care, using the freshest ingredients.
                </h4>
                <SimpleSlider></SimpleSlider>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <img className="w-full " src={network} alt="Network"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
