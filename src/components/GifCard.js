import React from "react";

export const GifCard = ({ id, title, url }) => {
  return (
    <>
      <img src={url} alt={title} />
    </>
  );
};
