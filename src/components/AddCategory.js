import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hola mundo");
  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OK");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleInputValue} />
      </form>
    </>
  );
};
