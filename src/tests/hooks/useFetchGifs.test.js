import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";

import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Test en custom hook useFetchGifs", () => {
  const category = "Naruto";

  test("debe retornar el estado iniial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );

    const { gifs, loading } = result.current;

    await waitForNextUpdate();

    expect(gifs).toEqual([]);
    expect(loading).toBe(true);
  });

  test("debe de retornar un arreglo de imagenes y loading false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    await waitForNextUpdate();
    const { gifs, loading } = result.current;

    expect(gifs.length).toBe(12);
    expect(loading).toBe(false);
  });
});
