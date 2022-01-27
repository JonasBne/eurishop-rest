/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { SpaceProps } from "styled-system";
import Box from "./Box";
import Header from "./Header";

const CardMedia = styled.img`
  width: 60%;
  display: block;
  margin: auto;
`;

const CardContent = styled.p`
  font-size: 0.8rem;
  line-height: 1.5rem;
  padding-top: 1rem;
  padding-inline: 1rem;
  text-align: justify;
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
      width="20rem"
      borderRadius="35px"
      backgroundColor={theme.colors.whites.primaryWhite}
      {...space}
    >
      <Header
        as="h2"
        variant="secondary"
        mt="0"
        height="4rem"
        borderRadius="35px 35px 0 0"
        textAlign="center"
      >
        {title}
      </Header>
      <CardMedia src={image} />
      <CardContent>{content}</CardContent>
      {children}
    </Box>
  );
}

export default Card;
