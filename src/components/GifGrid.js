import React, { useEffect } from "react";

export const GifGrid = ({ category }) => {
  useEffect(() => {
    const getGifs = async () => {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=PIJ9beNH3hdjavbtzJ5Nje2FdpV8cp0D`
      );
      const { data } = await response.json();
      const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      }));
      console.log(gifs);
    };
    getGifs();
  }, [category]);
  return (
    <div>
      <h3 style={{ color: "white" }}>{category}</h3>
    </div>
  );
};
