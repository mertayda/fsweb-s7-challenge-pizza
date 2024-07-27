import React, { useEffect, useState } from "react";
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
    title: "Hızlı Teslimat",
    imgUrl: featureImg01,
    desc: "Siparişiniz, sıcak ve taze olarak kapınıza gelsin diye hızlı bir şekilde hazırlanıyor..",
  },
  {
    title: "Süper Lezzet",
    imgUrl: featureImg02,
    desc: "Yerel tedarikçilerden aldığımız en taze malzemelerle oluşturduğumuz pizzalar.",
  },
  {
    title: "Kolay Sipariş",
    imgUrl: featureImg03,
    desc: "Her pizza, özel tariflerimizle hazırlanıyor; sizi sıradanlıktan kurtarıyor!",
  },
];

const Home = () => {
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);
  const [category, setCategory] = useState("HEPSİ");

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    const categoryMap = {
      HEPSİ: () => products,
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
      categoryMap[category.toUpperCase()] || categoryMap["HEPSİ"];
    setAllProducts(filterFunction());
  }, [category]);

  return (
    <>
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
        <div className="flex flex-col items-center justify-center bg-opacity-90 p-5 rounded-lg mt-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-quattrocento font-semibold text-center">
            Teknolojik Lezzetler
          </h1>
          <div className="flex flex-col text-center mt-6">
            <span className="text-[#FDC913] text-3xl font-quattrocento">
              Fırsatı Kaçırma
            </span>
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-satisfty">
              KOD ACIKTIRIR
            </h1>
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-satisfty">
              PİZZA DOYURUR
            </h1>
            <div className="mt-6">
              <Link to="/order">
                <button
                  type="button"
                  className="py-2 px-8 font-satisfty inline-flex items-center gap-x-2 text-md font-semibold rounded-3xl border border-transparent bg-[#FDC913] text-black hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                  ACIKTIM
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Category />

      <section className="py-10">
        <div className="container mx-auto font-quattrocento font-bold px-4">
          <div className="text-center">
            <h5 className="text-red-600 mb-4">Ne Sunuyoruz?</h5>
            <h2 className="text-2xl lg:text-3xl font-bold">
              Evde Dinlenirken, Lezzeti Kapınıza Getirelim!
            </h2>
            <h2 className="text-2xl lg:text-3xl font-bold">
              Acıktınız mı? <span className="text-red-600">Biz hallederiz</span>
            </h2>
            <p className="mb-1 mt-4 text-gray-600 px-4 lg:px-0">
              Hayalinizdeki pizza, sadece bir tık uzağınızda! Her bir pizzamız,
              taze ve kaliteli malzemelerle, ustalıkla hazırlanıyor. Düşük
              kalorili diyet mi, klasik lezzetler mi yoksa yeni tatlar mı
              arıyorsunuz? Her damak tadına uygun bir seçenekle, pizzayı yeniden
              tanımlıyoruz!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
            {featureData.map((item, index) => (
              <div
                key={index}
                className="p-6 text-center bg-white rounded-lg shadow-md"
              >
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="w-24 h-24 mx-auto mb-3"
                />
                <h5 className="font-bold mb-3">{item.title}</h5>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h1 className="font-satisfy font-bold text-[#CE2829]">
              En çok paketlenen menüler
            </h1>
            <h1 className="font-quattrocento">
              Acıktıran Kodlara Doyuran Lezzetler
            </h1>
          </div>

          <div className="flex flex-col items-center font-roboto-condensed font-bold">
            <div className="flex flex-wrap justify-center gap-4 text-black mt-6 py-4 rounded-lg">
              <button
                onClick={() => setCategory("HEPSİ")}
                className="flex items-center bg-white text-black border rounded-md px-4 py-2 hover:bg-gray-200"
                aria-label="Tüm kategorileri göster"
              >
                Hepsi
              </button>
              <button
                onClick={() => setCategory("RAMEN")}
                className="flex items-center bg-white text-black border rounded-md px-4 py-2 hover:bg-gray-200"
                aria-label="Ramen kategorisini göster"
              >
                <img src={Icon} alt="" className="w-5 h-5 mr-2" />
                Ramen
              </button>
              <button
                onClick={() => setCategory("BURGER")}
                className="flex items-center bg-white text-black border rounded-md px-4 py-2 hover:bg-gray-200"
                aria-label="Burger kategorisini göster"
              >
                <img src={Icon2} alt="" className="w-5 h-5 mr-2" />
                Burger
              </button>
              <button
                onClick={() => setCategory("FRENCH FRIES")}
                className="flex items-center bg-white text-black border rounded-md px-4 py-2 hover:bg-gray-200"
                aria-label="French Fries kategorisini göster"
              >
                <img src={Icon3} alt="" className="w-5 h-5 mr-2" />
                French Fries
              </button>
              <button
                onClick={() => setCategory("FAST FOOD")}
                className="flex items-center bg-white text-black border rounded-md px-4 py-2 hover:bg-gray-200"
                aria-label="Fast Food kategorisini göster"
              >
                <img src={Icon4} alt="" className="w-5 h-5 mr-2" />
                Fast Food
              </button>
              <button
                onClick={() => setCategory("SOFT DRINKS")}
                className="flex items-center bg-white text-black border rounded-md px-4 py-2 hover:bg-gray-200"
                aria-label="Soft Drinks kategorisini göster"
              >
                <img src={Icon5} alt="" className="w-5 h-5 mr-2" />
                Soft Drinks
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {allProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img
              src={delivery}
              className="object-cover w-full h-full rounded-lg shadow-lg"
              alt="Delivery Image"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4  font-satisfty">
                Neden Teknolojik Lezzetler?
              </h1>
              <p className="text-gray-600 font-quattrocento">
                Teknolojik Lezzetler olarak, her zaman en taze ve en kaliteli
                malzemeleri kullanıyoruz. Modern ekipmanlarımız sayesinde,
                malzemelerimiz bozulmadan ve lezzetini kaybetmeden yemeklerinize
                ulaşıyor. Böylece siz de her zaman taze ve lezzetli yemeklerin
                tadını çıkarabilirsiniz.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="ri-checkbox-circle-line text-green-500 text-2xl"></i>
                <div>
                  <p className="text-lg font-semibold text-gray-800 font-satisfty">
                    Taze ve Kaliteli Ürünler
                  </p>
                  <p className="text-gray-600 font-roboto-condensed">
                    "Her lokmada tazelik patlaması! Doğadan sofrana en kısa
                    yoldan gelen, taptaze malzemelerle hazırlanan
                    lezzetlerimizle mideni şenlendir. Hamburgerimizdeki köfteler
                    bile kendi bahçemizden!"
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-checkbox-circle-line text-green-500 text-2xl"></i>
                <div>
                  <p className="text-lg font-semibold text-gray-800 font-satisfty">
                    Canlı Müşteri Desteği
                  </p>
                  <p className="text-gray-600 font-roboto-condensed">
                    Her zaman yanınızdayız! Siparişlerinizle ilgili herhangi bir
                    sorunuz veya öneriniz olduğunda, 7/24 ulaşabileceğiniz
                    müşteri destek ekibimiz size yardımcı olmaktan mutluluk
                    duyar.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-checkbox-circle-line text-green-500 text-2xl"></i>
                <div>
                  <p className="text-lg font-semibold text-gray-800 font-satisfty">
                    Heryerden Sipariş Verin
                  </p>
                  <p className="text-gray-600 font-roboto-condensed">
                    İş yerinde, evde veya yolda... İstediğiniz her yerden
                    siparişinizi verebilirsiniz. Mobil uygulamamız veya web
                    sitemiz üzerinden kolayca siparişinizi oluşturun ve
                    kapınızda teslim alın.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4">
              <div className="flex flex-col">
                <h5 className="text-red-500 mb-4"> Referanslarımız </h5>
                <h1 class="mb-4 font-satisfty">
                  Müşterilermiz <span class="text-red-500">Ne</span> diyor?
                </h1>
                <h4 className="text-gray-600 mb-4 font-quattrocento italic">
                  Kalitemizden ödün vermeden ürettiğimiz ürünlerimizi
                  müşterilerimiz de çok seviyor.
                </h4>
                <SimpleSlider></SimpleSlider>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <img className="w-full " src={network}></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
