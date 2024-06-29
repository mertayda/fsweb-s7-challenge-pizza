import React, { useState } from "react";

const OrderingForm = () => {
  return (
    <div className="flex flex-col min-w-full h-full mt-5">
      <div className="flex flex-col w-full">
        <label className="text-lg font-bold mb-4" htmlFor="orderNote">
          Sipariş Notu
        </label>
        <input
          className="lg:w-80 w-full p-2 border rounded shadow-sm"
          type="textarea"
          id="orderNote"
          placeholder="Eklemek İstediğiniz Sipariş Notunu Giriniz"
        ></input>
      </div>
    </div>
  );
};

export default OrderingForm;
