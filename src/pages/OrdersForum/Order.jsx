import React, { useState } from "react";

function Order() {
  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg"
  );
  const [price, setPrice] = useState(25);
  const [quantity, setQuantity] = useState(1);

  const [pepperoni, setPepperoni] = useState(false);
  const [corn, setCorn] = useState(false);
  const [pineapple, setPineapple] = useState(false);
  const [ketchup, setKetchup] = useState(false);

  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sipariş bilgileri:");
    console.log("Ürün resmi:", image);
    console.log("Fiyat:", price);
    console.log("Adet:", quantity);
    console.log("Ek malzemeler:");
    console.log("Peperoni:", pepperoni);
    console.log("Mısır:", corn);
    console.log("Ananas:", pineapple);
    console.log("Ketçap:", ketchup);
    console.log("Sipariş notu:", note);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Sipariş Formu</h1>
      <form onSubmit={handleSubmit} className="bg-gray-100 rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src={image} alt="Ürün resmi" className="w-32 h-32 rounded-lg" />
          <div className="flex flex-col">
            <p className="text-xl font-semibold">Fast Food Burger</p>
            <p className="text-lg text-gray-600">Fiyat: {price} TL</p>
            <div className="flex items-center space-x-2">
              <label htmlFor="quantity" className="text-lg">
                Adet:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                max="10"
                className="w-16 border rounded-lg p-1 text-center"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold mb-2">Ek Malzemeler</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="pepperoni"
                name="pepperoni"
                checked={pepperoni}
                onChange={(e) => setPepperoni(e.target.checked)}
                className="rounded"
              />
              <label htmlFor="pepperoni" className="text-lg">
                Peperoni
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="corn"
                name="corn"
                checked={corn}
                onChange={(e) => setCorn(e.target.checked)}
                className="rounded"
              />
              <label htmlFor="corn" className="text-lg">
                Mısır
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="pineapple"
                name="pineapple"
                checked={pineapple}
                onChange={(e) => setPineapple(e.target.checked)}
                className="rounded"
              />
              <label htmlFor="pineapple" className="text-lg">
                Ananas
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="ketchup"
                name="ketchup"
                checked={ketchup}
                onChange={(e) => setKetchup(e.target.checked)}
                className="rounded"
              />
              <label htmlFor="ketchup" className="text-lg">
                Ketçap
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="note" className="text-lg font-semibold mb-2">
            Sipariş Notu
          </label>
          <textarea
            id="note"
            name="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows="4"
            cols="40"
            placeholder="Özel istekleriniz varsa buraya yazabilirsiniz."
            className="w-full border rounded-lg p-2"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Siparişi Yolla
          </button>
        </div>
      </form>
    </div>
  );
}

export default Order;
