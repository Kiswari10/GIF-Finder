import React from "react";
import { CardColumns } from "react-bootstrap";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "../components/GifCard";

export const GifGrid = ({ category }) => {
  const { gifs, loading } = useFetchGifs(category);
  return (
    <div>
      <h3 className="logo">{category}</h3>
      {loading ? (
        "cargando"
      ) : (
        <CardColumns>
          {gifs.map((gif) => (
            <GifCard {...gif} key={gif.id} />
          ))}
        </CardColumns>
      )}
    </div>
  );
};
