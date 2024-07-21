import React from "react";
import image from "../../Assets/mile1-assets/home-banner.png";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category";
import featureImg01 from "../../Assets/mile1-assets/images/service-01.png";
import featureImg02 from "../../Assets/mile1-assets/images/service-02.png";
import featureImg03 from "../../Assets/mile1-assets/images/service-03.png";

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
    title: "Kolay Sipariş",
    imgUrl: featureImg03,
    desc: "Her pizza, özel tariflerimizle hazırlanıyor; sizi sıradanlıktan kurtarıyor!",
  },
];

const Home = () => {
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
        <div className="flex flex-col items-center justify-center content-center mt-8 bg-opacity-90 p-5 rounded-lg">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-4 font-quattrocento font-semibold text-center">
            Teknolojik Lezzetler
          </h1>
          <div className="flex flex-col text-center justify-center items-center mt-6">
            <span className="text-[#FDC913] text-3xl font-satisfty">
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
                  className="py-2 px-8 fonmt-quattrocento inline-flex items-center gap-x-2 text-md font-semibold rounded-3xl border border-transparent bg-[#FDC913] text-black hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                  ACIKTIM
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Category></Category>
      <section className="py-10">
        <div className="container mx-auto">
          <div className="text-center">
            <h5 className="text-red-600 mb-4">Ne Sunuyoruz?</h5>
            <h2 className="text-2xl font-bold">
              Evde Dinlenin, Lezzeti Kapınıza Getirelim!
            </h2>
            <h2 className="text-2xl font-bold">
              Acıktınız mı? <span className="text-red-600">Biz hallederiz</span>
            </h2>
            <p className="mb-1 mt-4 text-gray-600">
              Hayalinizdeki pizza, sadece bir tık uzağınızda! Her bir pizzamız,
              taze ve kaliteli malzemelerle, ustalıkla hazırlanıyor. Düşük
              kalorili diyet mi, klasik lezzetler mi yoksa yeni tatlar mı
              arıyorsunuz? Her damak tadına uygun bir seçenekle, pizzayı yeniden
              tanımlıyoruz!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mt-5 gap-4">
            {featureData.map((item, index) => (
              <div key={index} className="mt-5 p-4 text-center  rounded-lg">
                <img
                  src={item.imgUrl}
                  alt="feature-img"
                  className="w-1/4 mb-3 mx-auto"
                />
                <h5 className="font-bold mb-3">{item.title}</h5>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
