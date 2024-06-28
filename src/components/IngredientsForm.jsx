import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

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
    <div className="w-full mx-auto flex flex-col">
      <h1 className="text-lg">Ek Malzemeler</h1>
      <div className="w-full grid sm:grid-cols-3 gap-x-8 ">
        {ingredients.map((ingredient) => (
          <FormGroup key={ingredient.id} className="flex flex-col">
            <Label check className="">
              <Input
                type="checkbox"
                name={ingredient.name}
                value={ingredient.id}
                checked={selectedIngredients.includes(ingredient.id)}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">{ingredient.name}</span>
            </Label>
          </FormGroup>
        ))}

        {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default IngredientsForm;
