import React from "react";
import { CardColumns, Spinner } from "react-bootstrap";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "../components/GifCard";

export const GifGrid = ({ category }) => {
  const { gifs, loading } = useFetchGifs(category);
  return (
    <div>
      <h3 className="logo animate__animated animate__fadeIn">{category}</h3>
      {loading ? (
        <Spinner animation="border" />
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
