import React, { useEffect, useState } from "react";
import { getGifs } from "../providers/getGifs";
import { GifCard } from "./GifCard";
import { CardColumns } from "react-bootstrap";

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    const getAllGifs = async () => {
      const response = await getGifs(category);
      setGifs(response);
    };
    getAllGifs();
  }, [category]);
  return (
    <div>
      <h3 className="logo">{category}</h3>
      <CardColumns>
        {gifs.map((gif) => (
          <GifCard {...gif} key={gif.id} />
        ))}
      </CardColumns>
    </div>
  );
};
