import React from "react";
import { shallow } from "enzyme";

import { AddCategory } from "../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("debe de retornar el componente correctamente", () => {
    const setCategories = () => {};
    const wraper = shallow(<AddCategory setCategories={setCategories} />);
    expect(wraper).toMatchSnapshot();
  });
});
