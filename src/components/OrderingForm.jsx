import React, { useState } from "react";
import axios from "axios";

const OrderingForm = ({
  orderNote,
  setOrderNote,
  orderCount,
  setOrderCount,
  selectedIngredients,
}) => {
  const handleIncrement = () => {
    setOrderCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setOrderCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleChange = (event) => {
    setOrderNote(event.target.value);
  };

  const handleSubmit = async () => {
    const payload = {
      orderCount,
      orderNote,
      selectedIngredients,
    };

    try {
      const response = await axios.post("https://reqres.in/api/pizza", payload);
      console.log("Order submitted successfully:", response.data);
    } catch (error) {
      console.error("There was an error submitting the order:", error);
    }
  };

  return (
    <div className="w-full lg:w-[600px] flex flex-col h-full mt-5 px-4">
      <div className="flex flex-col w-full mb-5">
        <label className="text-lg font-bold mb-4" htmlFor="orderNote">
          Sipariş Notu
        </label>
        <textarea
          className="lg:w-100 w-full lg:h-40 h-32 p-2 border rounded shadow-sm"
          id="orderNote"
          placeholder="Eklemek İstediğiniz Sipariş Notunu Giriniz"
          value={orderNote}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="flex flex-col sm:flex-row w-full gap-4 h-full">
        <div className="flex items-center h-fit justify-center sm:justify-start">
          <button
            className="bg-yellow-400 text-black py-2 px-3 border border-gray-300 rounded"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="text-xl py-2 px-3 ring-1 ring-gray-200 mx-2">
            {orderCount}
          </span>
          <button
            className="bg-yellow-400 text-black py-2 px-3 border border-gray-300 rounded"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <div className="flex flex-col w-full bg-white rounded-lg shadow p-6 mt-6 sm:mt-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Sipariş Özeti
          </h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Seçimler</span>
              <span className="text-gray-900 font-medium">$10.00</span>
            </div>
          </div>
          <div className="flex justify-between items-center font-bold text-lg border-t pt-4">
            <span className="text-red-500">Total</span>
            <span>$45.00</span>
          </div>
          <button
            className="bg-yellow-400 text-black w-full py-3 mt-6 rounded-lg hover:bg-yellow-500 transition duration-300"
            onClick={handleSubmit}
          >
            Siparişi Ver
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderingForm;
