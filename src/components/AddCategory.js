import React, { useState } from "react";
import styled from "styled-components";
import { IconContext } from 'react-icons';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchCont = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 15px;
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid #11acf5;
  .social_icon {
    margin-left: 0.4rem;
    margin-top: 0.2rem;
    margin-right: 4%;
  }
`;
const InputSearch = styled.input`
  width: 200px;
  border: none;
  padding: 3px;
  background: #ffffff;
  :hover,
  :focus,
  :active {
    outline: none;
  }
`;

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
        <SearchCont>
          <IconContext.Provider
            value={{
              size: "1.6rem",
              position: "absolute",
              className: "social_icon",
            }}
          >
            <AiOutlineSearch></AiOutlineSearch>
          </IconContext.Provider>
          <InputSearch type="text"/>
        </SearchCont>
        <input value={inputValue} onChange={handleInputValue} />
      </form>
    </>
  );
};
