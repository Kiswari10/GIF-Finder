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
      <h1 className="logo">GIF-Finder</h1>
      <AddCategory setCategories={setCategories} />
      {categories.map((elem) => (
        <li style={{ color: "white" }}>{elem}</li>
      ))}
    </>
  );
};
