import React, { useState } from "react";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";

const IngredientsForm = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const ingredients = [
    { id: 1, name: "Acı Sos" },
    { id: 2, name: "Mantar" },
    { id: 3, name: "Soğan Halkaları" },
    { id: 4, name: "Sosis" },
    { id: 5, name: "Bell Peppers" },
    { id: 6, name: "Extra Peynir" },
    { id: 7, name: "Zeytin" },
    { id: 8, name: "Jambon" },
    { id: 9, name: "Spagetti" },
    { id: 10, name: "Sarımsak" },
    { id: 11, name: "Patates Kızartması" },
  ];

  const handleCheckboxChange = (event) => {
    const { checked, value } = event.target;

    if (checked) {
      if (selectedIngredients.length >= 10) {
        setErrorMessage("You can only choose a maximum of 10 ingredients.");
        return;
      }

      setSelectedIngredients([...selectedIngredients, value]);
    } else {
      setSelectedIngredients(
        selectedIngredients.filter((ingredient) => ingredient !== value)
      );
    }

    setErrorMessage("");
  };

  return (
    <div className="w-full mx-auto mt-4">
      <h2 className="text-lg font-bold mb-4">Ek Malzemeler</h2>
      <Row>
        <Col>
          {ingredients.map((ingredient) => (
            <FormGroup key={ingredient.id}>
              <Label check>
                <Input
                  type="checkbox"
                  name={ingredient.name}
                  value={ingredient.id}
                  checked={selectedIngredients.includes(String(ingredient.id))}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                {ingredient.name}
              </Label>
            </FormGroup>
          ))}
        </Col>
      </Row>

      {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
    </div>
  );
};

export default IngredientsForm;
