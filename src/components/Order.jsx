import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const Order = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Main Title Section */}
      <div
        className="bg-red-500 text-white flex flex-col justify-center items-center w-full"
        style={{ height: "20vh" }}
      >
        <h1 className="text-4xl mb-2">Teknolojik Yemekler</h1>
        <div className="flex flex-row w-full justify-around">
          <h2 className="text-xl">Başlık 1</h2>
          <h2 className="text-xl">Başlık 2</h2>
          <h2 className="text-xl">Başlık 3</h2>
        </div>
      </div>
      {/* Pizza Order Section */}
      <div className="flex flex-col p-4">
        <div className="flex flex-row mb-4">
          <h1 className="text-3xl">Position Absolute Acı Pizza</h1>
          <p className="ml-2">85.50t</p>
          <span className="ml-2">4.9</span>
          <span className="ml-2">(200)</span>
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
          <div>
            <h2>Büyük seç</h2>

            <FormGroup className="flex flex-col">
              <div className="mb-2">
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
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Order;
