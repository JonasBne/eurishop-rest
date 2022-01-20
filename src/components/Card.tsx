import React from "react";
import Button from "./Button";
import Header4 from "./Header4";
// import styled from "styled-components";

interface CardProps {
  title: string;
  content: string;
  image: string;
  imageDescription: string;
  buttonAction: string;
}

function Card({
  title,
  content,
  image,
  imageDescription,
  buttonAction,
}: CardProps) {
  return (
    <div>
      <img src={image} alt={imageDescription} />
      <div>
        <Header4>{title}</Header4>
        <p>{content}</p>
        <Button>{buttonAction}</Button>
      </div>
    </div>
  );
}

export default Card;
