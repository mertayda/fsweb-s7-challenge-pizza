import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import IngredientsForm from "./IngredientsForm";
import OrderingForm from "./OrderingForm";

const Order = () => {
  const [orderNote, setOrderNote] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [orderCount, setOrderCount] = useState(0);
  const [formError, setFormError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedIngredients.length === 0) {
      setFormError("En az bir malzeme seçmelisiniz");
      return;
    }
    setFormOrder("");
  };

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <div className="bg-[#CE2829] text-white flex flex-col items-center w-full p-4">
        <h1 className="text-2xl sm:text-4xl mt-5">Teknolojik Yemekler</h1>
        <div className="w-full sm:w-1/2 flex flex-row flex-wrap justify-center sm:justify-start pt-5 mx-5 space-x-2 sm:space-x-4">
          <h2 className="text-base sm:text-lg">Anasayfa -</h2>
          <h2 className="text-base sm:text-lg">Seçenekler -</h2>
          <h2 className="text-base sm:text-lg">Sipariş Oluştur</h2>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-8/12 lg:w-6/12 xl:w-4/12 justify-center mx-auto my-4 p-4">
        {/* Pizza Order Section */}

        <div className="w-full flex flex-col content-center mt-6 pt-8">
          <h1 className="text-lg sm:text-xl mb-4 font-bold">
            Position Absolute Acı Pizza
          </h1>
          <div className="flex flex-row justify-between items-center">
            <p className="font-extrabold text-2xl">85.50₺</p>
            <div className="flex flex-row items-center space-x-1">
              <span className="text-gray-400">4.6</span>
              <span className="text-gray-400">(200)</span>
            </div>
          </div>
        </div>
        <div className="mb-4 text-sm sm:text-base">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            voluptates expedita hic dolores est voluptate nostrum aspernatur
            iste perspiciatis, eum sit, nam tenetur, mollitia laborum quam
            officiis ullam nihil distinctio.
          </p>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormGroup className="flex flex-col col-span-full">
              <h2 className="mb-4 text-lg font-bold">Boyut Seç</h2>
              <div className="mb-2 flex items-center">
                <Input name="size" type="radio" value="büyük" id="büyük" />
                <Label for="büyük" className="ml-2">
                  Büyük
                </Label>
              </div>
              <div className="mb-2 flex items-center">
                <Input name="size" type="radio" value="küçük" id="küçük" />
                <Label for="küçük" className="ml-2">
                  Küçük
                </Label>
              </div>
              <div className="mb-2 flex items-center">
                <Input name="size" type="radio" value="orta" id="orta" />
                <Label for="orta" className="ml-2">
                  Orta
                </Label>
              </div>
            </FormGroup>
            <FormGroup className="col-span-full">
              <Label for="hamurt">Hamur Kalınlığı Seç</Label>
              <Input id="hamurt" name="select" type="select" bsSize="lg">
                <option>Kalın</option>
                <option>İnce</option>
                <option>Orta</option>
                <option>İtalyan kesim</option>
              </Input>
            </FormGroup>
            <div className="w-full flex flex-col">
              <IngredientsForm
                selectedIngredients={selectedIngredients}
                setSelectedIngredients={setSelectedIngredients}
                className="col-span-full"
              />
              <OrderingForm
                orderCount={orderCount}
                setOrderCount={setOrderCount}
                setOrderNote={setOrderNote}
                orderNote={orderNote}
                selectedIngredients={selectedIngredients}
                className="col-span-full"
              />
            </div>
          </div>
          {formError && (
            <p className="text-red-500 text-center  mt-8">{formError}</p>
          )}
        </Form>
      </div>
    </div>
  );
};

export default Order;
