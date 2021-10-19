import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { GifGrid } from "../components/GifGrid";

describe("Pruebas en <GifGrid />", () => {
  test("debe retornar el componente correctamente", () => {
    const category = "Goku";
    const wraper = shallow(<GifGrid category={category} />);

    expect(wraper).toMatchSnapshot();
  });
});
