import React, { useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";

const Form = styled.form`
  width: 100%;
  height: 55px;
  background-color: red;
  padding: 0;
  display: flex;
  flex-direction: row;
  input {
    width: 92%;
    height: 100%;
    outline: none;
    border: none;
    margin: 0;
    padding: 0 1%;
    font-size: 18px;
    font-weight: 600;
  }
  button {
    background-image: linear-gradient(45deg, #16bf69, #22c4dc 51%, #16bf69);
    height: 100%;
    width: 8%;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }
`;

export const AddCategory = ( ) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OK");
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder="Search GIFs"
          value={inputValue}
          onChange={handleInputValue}
        />
        <button onClick={handleSubmit}>
          <IconContext.Provider
            value={{
              size: "60%",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <AiOutlineSearch />
          </IconContext.Provider>
        </button>
      </Form>
    </>
  );
};
