import React from "react";
import { Card } from "react-bootstrap";

export const GifCard = ({ id, title, url }) => {
  return (
    <Card>
      <Card.Img src={url} alt={title} />
    </Card>
  );
};
