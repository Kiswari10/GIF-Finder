import React from "react";
import { Card } from "react-bootstrap";

export const GifCard = ({ id, title, url }) => {
  return (
    <Card className="animate__animated animate__fadeIn">
      <Card.Img src={url} alt={title} />
    </Card>
  );
};
