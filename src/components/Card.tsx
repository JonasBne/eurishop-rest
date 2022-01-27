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

const CardFooter = styled.p`
  font-size: 0.8rem;
  line-height: 1.5rem;
  padding-top: 1rem;
  padding-inline: 1rem;
  font-weight: bold;
  font-style: italic;
`;

export interface CardProps
  extends Omit<SpaceProps, "p" | "pl" | "pr" | "px" | "py"> {
  title: string;
  image: string;
  content: string;
  footerContent?: string | number;
  children?: ReactNode;
}

function Card({
  title,
  image,
  content,
  footerContent,
  children,
  ...space
}: CardProps) {
  const theme = useContext(ThemeContext);

  return (
    <Box
      width="20rem"
      borderRadius="35px"
      backgroundColor={theme.colors.whites.primaryWhite}
      {...space}
    >
      <Header as="h3" variant="secondary" pt="1rem">
        {title}
      </Header>
      <CardMedia src={image} />
      <CardContent>{content}</CardContent>
      <CardFooter>{footerContent}</CardFooter>

      {children}
    </Box>
  );
}

export default Card;
