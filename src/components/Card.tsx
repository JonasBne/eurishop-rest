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

interface CardProps extends Omit<SpaceProps, "p" | "pl" | "pr" | "px" | "py"> {
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

// const Image = styled.img`
//   width: 100%;
//   border-radius: 1.25rem;
//   height: 20rem;
//   object-fit: cover;
// `;

// const Text = styled.p`
//   font-size: 1rem;
//   line-height: 2rem;
// `;

// interface ButtonArr {
//   action: string;
//   color: string;
// }

// interface CardProps {
//   margin?: string;
//   padding?: string;
//   title: string;
//   content: string;
//   image?: string;
//   imageDescription: string;
//   buttons: ButtonArr[];
// }

// function Card({
//   margin,
//   padding,
//   title,
//   content,
//   image,
//   imageDescription,
//   buttons,
// }: CardProps) {
//   return (
//     <Box
//       m={margin}
//       p={padding}
//       height="fit-content"
//       maxWidth="300px"
//       border="2px solid #bacdd8"
//       borderRadius="1.25rem"
//     >
//       {image !== undefined && <Image src={image} alt={imageDescription} />}
//       <div>
//         <Header as="h4">{title}</Header>
//         <Text>{content}</Text>
//         {buttons.map((button) => {
//           return <Button m="1rem">{button.action}</Button>;
//         })}
//       </div>
//     </Box>
//   );
// }

// Card.defaultProps = {
//   margin: "2rem",
//   padding: "1rem",
//   image: undefined,
// };

export default Card;
