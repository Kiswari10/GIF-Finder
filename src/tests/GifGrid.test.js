import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { GifGrid } from "../components/GifGrid";
import { useFetchGifs } from "../hooks/useFetchGifs";
jest.mock("../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "Goku";

  test("debe retornar el componente correctamente", () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      loading: true,
    });
    const wraper = shallow(<GifGrid category={category} />);

    expect(wraper).toMatchSnapshot();
  });

  test("debe mostrar imagenes cuando se carga data con useFetchGifs", () => {
    const gifs = [
      { id: "123", url: "http://localhost/image.jpg", title: "Una imagen" },
    ];
    useFetchGifs.mockReturnValue({
      gifs,
      loading: false,
    });
    const wraper = shallow(<GifGrid category={category} />);

    expect(wraper).toMatchSnapshot();
    expect(wraper.find("Spinner").exists()).toBe(false);
    expect(wraper.find("GifCard").length).toBe(gifs.length);
  });
});
