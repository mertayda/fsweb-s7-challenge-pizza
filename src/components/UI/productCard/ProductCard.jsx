import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/shopping-card/cartSlice.js";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import ScrollToTopRoute from "../../UI/Scroll/ScrollToTopRoute.jsx";
const ProductCard = (props) => {
  const dispatch = useDispatch();
  const { id, title, img, price, description } = props.item;

  const addToCart = () => {
    dispatch(addItem({ id, title, img, price }));
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 font-quattrocento">
      <div className="relative aspect-w-16 aspect-h-9">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover transition-full duration-300 hover:brightness-125"
        />
        <div className="absolute inset-0 bg-black opacity-25 hover:opacity-50 transition-opacity duration-300"></div>
      </div>
      <div className="p-4  sm:p-6 flex flex-col ">
        <h5 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-1">
          <Link
            element={<ScrollToTopRoute />}
            to={`/foods/${id}`}
            className="text-gray-800 hover:text-red-500"
          >
            {title}
          </Link>
        </h5>
        <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-2">
          {description}
        </p>
        <div className="mt-auto flex  justify-between items-center">
          <span className="text-red-500 text-xl sm:text-2xl font-semibold">
            ${price}
          </span>
          <button
            className="flex items-center bg-red-500 text-white px-3 py-2 rounded-md text-sm hover:bg-red-600 transition-colors duration-300"
            onClick={addToCart}
          >
            {" "}
            <ShoppingCart size={18} className="mr-2"></ShoppingCart>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
