import React from "react";
import Box from "../../components/Box";
import FlexBox from "../../components/FlexBox";
import Header from "../../components/Header";

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

function ShoppingCart() {
  return (
    <Box
      width="100%"
      minHeight="fit-content"
      height="50rem"
      mr="1rem"
      border="2px solid gray"
    >
      <FlexBox flexDirection="column" alignItems="center">
        <Header as="h2">Shopping Cart</Header>
        <Header
          as="h3"
          variant="tertiary"
        >{`Current # of products in cart: ${DUMMY_DATA.length}`}</Header>
      </FlexBox>
    </Box>
  );
}

export default ShoppingCart;
