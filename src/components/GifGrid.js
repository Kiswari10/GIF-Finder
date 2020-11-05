import React, { useEffect, useState } from "react";
import { GifCard } from "./GifCard";

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    const getGifs = async () => {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=PIJ9beNH3hdjavbtzJ5Nje2FdpV8cp0D`
      );
      const { data } = await response.json();
      const _gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      }));
      setGifs(_gifs);
      console.log(_gifs);
    };
    getGifs();
  }, [category]);
  return (
    <div>
      <h3 style={{ color: "white" }}>{category}</h3>
      <ol>
        {gifs.map((gif) => (
          <GifCard {...gif} key={gif.id} />
        ))}
      </ol>
    </div>
  );
};
