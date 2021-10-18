import React from "react";
import { shallow } from "enzyme";

import { GifCard } from "../components/GifCard";

describe("Test en <GifCard />", () => {
  const title = "Goku";
  const url = "https://localhos.pe";
  const wraper = shallow(<GifCard title={title} url={url} />);

  test("debe retornar el componente correctamente", () => {
    expect(wraper).toMatchSnapshot();
  });

  test("debe retornar la imagen con la url de los props", () => {
    const img = wraper.find("CardImg");
    expect(img.props().src).toBe(url);
  });

  test("debe retornar la imagen con el alt de los props", () => {
    const img = wraper.find("CardImg");
    expect(img.prop("alt")).toBe(title);
  });

  test("debe retornar la clase animate__fadeIn", () => {
    const div = wraper.find("Card");
    const className = div.prop("className");
    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
