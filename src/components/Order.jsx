import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import IngredientsForm from "./IngredientsForm";

const Order = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-w-full h-screen  flex flex-col">
      <div className=" bg-[#CE2829] text-white  flex flex-col items-center w-full">
        <h1 className="text-4xl  mt-5">Teknolojik Yemekler</h1>
        <div className="w-1/2 flex flex-row justify-start  pt-5 ml-5">
          <h2 className="text-lg">Anasayfa -</h2>
          <h2 className="text-lg">Seçenekler -</h2>
          <h2 className="text-lg">Sipariş Oluştur </h2>
        </div>
      </div>
      <div className="flex flex-col w-4/12 justify-center content-center mx-auto h-full ">
        {/* Pizza Order Section */}

        <div className="flex flex-col content-center mt-6">
          <h1 className="text-xl mb-4 font-bold">
            Position Absolute Acı Pizza
          </h1>
          <div className="flex flex-row justify-between">
            <p className="font-extrabold text-2xl">85.50₺</p>
            <span className="text-gray-400">4.6</span>
            <span className="text-gray-400">(200)</span>
          </div>
        </div>
        <div className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            voluptates expedita hic dolores est voluptate nostrum aspernatur
            iste perspiciatis, eum sit, nam tenetur, mollitia laborum quam
            officiis ullam nihil distinctio.
          </p>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="w-full h-full grid grid-cols-2">
            <FormGroup className="flex flex-col">
              <div className="mb-2">
                <h2 className="mb-4">Boyut Seç</h2>
                <Input name="hamur" type="radio" value="büyük" id="büyük" />
                <Label for="büyük" className="ml-2">
                  Büyük
                </Label>
              </div>
              <div className="mb-2">
                <Input name="hamur" type="radio" value="küçük" id="küçük" />
                <Label for="küçük" className="ml-2">
                  Küçük
                </Label>
              </div>
              <div className="mb-2">
                <Input name="hamur" type="radio" value="orta" id="orta" />
                <Label for="orta" className="ml-2">
                  Orta
                </Label>
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="hamur">Hamur Kalınlığı Seç</Label>
              <Input id="hamurt" name="select" type="select" bsSize="lg">
                <option>Kalın</option>
                <option>İnce</option>
                <option>Orta</option>
                <option>İtalyan kesim</option>
              </Input>
            </FormGroup>
            <div>
              <IngredientsForm />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Order;
