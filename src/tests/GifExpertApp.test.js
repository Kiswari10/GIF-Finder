import React from "react";
import { shallow } from "enzyme";

import { GifExpertApp } from "../pages/GifExpertApp";

describe("Test en <GifExpertApp />", () => {
  test("debe retornar el componente correctamente", () => {
    const wraper = shallow(<GifExpertApp />);
    expect(wraper).toMatchSnapshot();
  });
});
