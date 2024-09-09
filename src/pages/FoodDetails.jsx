import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import cartSlice from "../store/shopping-card/cartSlice";
import products from "../assets/data/products";
import ProductCard from "../components/UI/productCard/ProductCard";

const FoodDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [activeTab, setActiveTab] = useState("description");
  const [reviews, setReviews] = useState([
    { id: 1, author: "Harvey Specter", text: "Great food! I loved it." },
    {
      id: 2,
      author: "Mark Dougles",
      text: "A bit too spicy for me, but still good.",
    },
  ]);

  const [newReview, setNewReview] = useState({ author: "", text: "" });

  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setReviews([...reviews, { id: reviews.length + 1, ...newReview }]);
    setNewReview({ author: "", text: "" });
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

  return (
    <div className="container mx-auto mt-5 p-4 md:p-6 lg:p-8 font-roboto-condensed text-gray-900">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-md"
        />
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            {product.title}
          </h1>
          <h2 className="text-lg font-semibold text-gray-600 md:text-xl lg:text-2xl">
            Category: {product.category}
          </h2>
          <p className="text-lg font-semibold md:text-xl lg:text-2xl">
            Price: <span className="text-[#CE2829]">${product.price}</span>
          </p>
          <div>
            <button
              onClick={addItem}
              className="py-3 px-6 bg-[#CE2829] text-white rounded-lg hover:bg-[#b01f22] transition duration-300 ease-in-out shadow-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <button
            onClick={() => setActiveTab("description")}
            className={`${
              activeTab === "description"
                ? "bg-[#CE2829] text-white"
                : "text-gray-600 hover:text-gray-800"
            } font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`${
              activeTab === "reviews"
                ? "bg-[#CE2829] text-white"
                : "text-gray-600 hover:text-gray-800"
            } font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out`}
          >
            Reviews
          </button>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 shadow-md">
          {activeTab === "description" && (
            <p className="text-gray-700">{product.description}</p>
          )}
          {activeTab === "reviews" && (
            <div>
              {reviews.map((review) => (
                <div key={review.id} className="mb-4">
                  <p className="font-semibold text-gray-800">{review.author}</p>
                  <p className="text-gray-700">{review.text}</p>
                </div>
              ))}
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                  <label
                    htmlFor="author"
                    className="block font-semibold text-gray-800 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={newReview.author}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="text"
                    className="block font-semibold text-gray-800 mb-2"
                  >
                    Review
                  </label>
                  <textarea
                    id="text"
                    name="text"
                    value={newReview.text}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
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

      <div>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
