import React from "react";
import "@testing-library/jest-dom";

import { shallow } from "enzyme";

import { AddCategory } from "../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn();
  let wraper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    wraper = shallow(<AddCategory setCategories={setCategories} />);
  });

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

  test("No debe enviar información con submit si el value del input esta vacío", () => {
    const form = wraper.find("form");
    form.simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
});
