import { getGifs } from "../../providers/getGifs";

describe("Pruebas con getGifs Fetch", () => {
  test("debe traer un array con 12 elementos", async () => {
    const gifs = await getGifs("goku");
    expect(gifs.length).toBe(12);
  });

  test("debe traer un array vacío si no se envía una categoria", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
