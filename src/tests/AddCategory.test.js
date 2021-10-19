import React from "react";
import { shallow } from "enzyme";

import { AddCategory } from "../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = () => {};
  const wraper = shallow(<AddCategory setCategories={setCategories} />);

  test("debe de retornar el componente correctamente", () => {
    expect(wraper).toMatchSnapshot();
  });

  test("debe cambiar el valor del input", () => {
    const input = wraper.find("input");
    const value = "Hello World";
    input.simulate("change", { target: { value } });
    const inputAfter = wraper.find("input");

    expect(inputAfter.props().value).toBe(value);
  });
});
