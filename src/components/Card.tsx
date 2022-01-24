/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import { SpaceProps } from "styled-system";
import Box from "./Box";
import Header from "./Header";

const CardMedia = styled.img`
  width: 100%;
  margin: auto;
  height: 20rem;
  object-fit: cover;
`;

const CardContent = styled.p`
  font-size: 1rem;
  line-height: 2rem;
`;

export interface CardProps
  extends Omit<SpaceProps, "p" | "pl" | "pr" | "px" | "py"> {
  title: string;
  image: string;
  content: string;
}

function Card({ title, image, content, ...space }: CardProps) {
  return (
    <Box width="350px" border="2px solid gray" p="1.25rem" {...space}>
      <CardMedia src={image} />
      <Header as="h2" variant="tertiary">
        {title}
      </Header>
      <CardContent>{content}</CardContent>
    </Box>
  );
}

export default Card;
