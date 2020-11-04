import React, { useState } from "react";
import { AddCategory } from "../components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai",
    "Naruto",
  ]);
  return (
    <>
    <AddCategory />
      <button onClick={() => setCategories((prev) => [...prev, "Dragon Ball"])}>
        Agregar
      </button>
      {categories.map((elem) => (
        <li style={{ color: "white" }}>{elem}</li>
      ))}
    </>
  );
};
