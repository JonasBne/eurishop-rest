import React from "react";
import styled from "styled-components";
import Box from "./Box";
import Button from "./Button";
import Header4 from "./Header4";

const Image = styled.img`
  width: 100%;
  border-radius: 1.25rem;
  height: 20rem;
  object-fit: cover;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 2rem;
`;
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
    <Box
      m={margin}
      p={padding}
      flexBasis={flexBasis}
      height="fit-content"
      maxWidth="300px"
      border="2px solid #bacdd8"
      borderRadius="1.25rem"
    >
      {image !== undefined && <Image src={image} alt={imageDescription} />}
      <div>
        <Header4>{title}</Header4>
        <Text>{content}</Text>
        <Button backgroundColor="#405cf5">{buttonAction}</Button>
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
