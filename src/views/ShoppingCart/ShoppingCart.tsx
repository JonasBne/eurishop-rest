import React from "react";
import styled from "styled-components";
import Box from "../../components/Box";
import FlexBox from "../../components/FlexBox";
import Header from "../../components/Header";
import CartItem from "./CartItem";

// TODO: work with real data

const DUMMY_DATA = [
  {
    id: "1",
    title: "product1",
    price: 10.0,
  },
  {
    id: "2",
    title: "product2",
    price: 8.0,
  },
  {
    id: "3",
    title: "product3",
    price: 6.0,
  },
];

const UnorderedList = styled.ul`
  list-style-type: none;
`;

function ShoppingCart() {
  return (
    <Box width="100%" mr="1rem" border="2px solid gray">
      <FlexBox flexDirection="column" alignItems="center">
        <Header as="h2">Shopping Cart</Header>
        <Header as="h3" variant="tertiary">
          Current # of products in cart: {DUMMY_DATA.length}
        </Header>
      </FlexBox>
      <UnorderedList>
        {DUMMY_DATA.map((item) => {
          return <CartItem item={item} />;
        })}
      </UnorderedList>
    </Box>
  );
}

export default ShoppingCart;
