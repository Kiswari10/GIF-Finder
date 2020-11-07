export const getGifs = async (category) => {

  const API_KEY = process.env.REACT_APP_API_KEY;
  
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${category}&limit=12&api_key=${API_KEY}`
  );
  const { data } = await response.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
