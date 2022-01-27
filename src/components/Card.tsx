/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
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
  children?: ReactNode;
}

function Card({ title, image, content, children, ...space }: CardProps) {
  const theme = useContext(ThemeContext);

  return (
    <Box
      width="25rem"
      borderRadius="35px"
      backgroundColor={theme.colors.whites.primaryWhite}
      p="1.25rem"
      {...space}
    >
      <Header as="h2" variant="tertiary" textAlign="center">
        {title}
      </Header>
      <CardMedia src={image} />
      <CardContent>{content}</CardContent>
      {children}
    </Box>
  );
}

export default Card;
