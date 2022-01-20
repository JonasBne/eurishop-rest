import React from "react";
import Box from "./Box";
import Button from "./Button";
import Header4 from "./Header4";

interface CardProps {
  margin?: string;
  padding?: string;
  flexBasis?: string;
  title: string;
  content: string;
  image?: string;
  imageDescription: string;
  buttonAction: string;
}

function Card({
  margin,
  padding,
  flexBasis,
  title,
  content,
  image,
  imageDescription,
  buttonAction,
}: CardProps) {
  return (
    <Box m={margin} p={padding} flexBasis={flexBasis}>
      {image !== undefined && <img src={image} alt={imageDescription} />}
      <div>
        <Header4>{title}</Header4>
        <p>{content}</p>
        <Button>{buttonAction}</Button>
      </div>
    </Box>
  );
}

Card.defaultProps = {
  margin: "2rem",
  padding: "1rem",
  flexBasis: "",
  image: undefined,
};

export default Card;
