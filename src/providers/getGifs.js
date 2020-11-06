export const getGifs = async (category) => {
  const response = await fetch(
    `http://api.giphy.com/v1/gifs/search?q=${category}&limit=12&api_key=PIJ9beNH3hdjavbtzJ5Nje2FdpV8cp0D`
  );
  const { data } = await response.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
