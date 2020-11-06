import React, { useState } from "react";
import { AddCategory } from "../components/AddCategory";
import { GifGrid } from "../components/GifGrid";
import {Container} from "react-bootstrap";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);
  return (
    <Container>
      <h1 className="logo">GIF-Finder</h1>
      <AddCategory setCategories={setCategories} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </Container>
  );
};
