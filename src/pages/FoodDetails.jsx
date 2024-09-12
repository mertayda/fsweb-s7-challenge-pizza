import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import cartSlice from "../store/shopping-card/cartSlice";
import products from "../assets/data/products";
import ProductCard from "../components/UI/productCard/ProductCard";
import { Star } from "lucide-react";

const FoodDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [activeTab, setActiveTab] = useState("description");
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: "Harvey Specter",
      text: "Great food! I loved it.",
      rating: 5,
    },
    {
      id: 2,
      author: "Mark Dougles",
      text: "A bit too spicy for me, but still good.",
      rating: 4,
    },
  ]);

  const [newReview, setNewReview] = useState({
    author: "",
    text: "",
    rating: 5,
  });

  if (!product) {
    return <div className="text-center py-8 text-xl">Product not found</div>;
  }

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id
    )
    .slice(0, 3);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setReviews([...reviews, { id: reviews.length + 1, ...newReview }]);
    setNewReview({ author: "", text: "", rating: 5 });
  };

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(
      cartSlice.actions.addItem({
        id: product.id,
        title: product.title,
        img: product.img,
        category: product.category,
        price: product.price,
        product: product.description,
      })
    );
  };

  const StarRating = ({ rating, onRatingChange }) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={24}
            fill={star <= rating ? "#FFD700" : "none"}
            stroke={star <= rating ? "#FFD700" : "#CBD5E0"}
            className="cursor-pointer"
            onClick={() => onRatingChange && onRatingChange(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-5 p-4 md:p-6 lg:p-8 font-roboto-condensed text-gray-900">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-12">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl text-gray-800">
            {product.title}
          </h1>
          <h2 className="text-lg font-semibold text-gray-600 md:text-xl lg:text-2xl">
            Category: <span className="text-[#CE2829]">{product.category}</span>
          </h2>
          <p className="text-lg font-semibold md:text-xl lg:text-2xl">
            Price:{" "}
            <span className="text-[#CE2829]">${product.price.toFixed(2)}</span>
          </p>
          <div className="mt-4">
            <button
              onClick={addItem}
              className="py-3 px-6 bg-[#CE2829] text-white rounded-lg hover:bg-[#b01f22] transition duration-300 ease-in-out shadow-md flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex flex-wrap gap-4 mb-4">
          <button
            onClick={() => setActiveTab("description")}
            className={`${
              activeTab === "description"
                ? "bg-[#CE2829] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out flex-grow md:flex-grow-0`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`${
              activeTab === "reviews"
                ? "bg-[#CE2829] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out flex-grow md:flex-grow-0`}
          >
            Reviews
          </button>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white">
          {activeTab === "description" && (
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          )}
          {activeTab === "reviews" && (
            <div>
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="mb-6 pb-4 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-gray-800">
                      {review.author}
                    </p>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-gray-700">{review.text}</p>
                </div>
              ))}
              <form
                onSubmit={handleSubmit}
                className="mt-6 bg-gray-50 p-4 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Leave a Review
                </h3>
                <div className="mb-4">
                  <label
                    htmlFor="author"
                    className="block font-semibold text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={newReview.author}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#CE2829] focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="rating"
                    className="block font-semibold text-gray-700 mb-2"
                  >
                    Rating
                  </label>
                  <StarRating
                    rating={newReview.rating}
                    onRatingChange={handleRatingChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="text"
                    className="block font-semibold text-gray-700 mb-2"
                  >
                    Review
                  </label>
                  <textarea
                    id="text"
                    name="text"
                    value={newReview.text}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#CE2829] focus:border-transparent"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-2 px-4 bg-[#CE2829] text-white rounded-lg hover:bg-[#b01f22] transition duration-300 ease-in-out shadow-md"
                >
                  Submit Review
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
