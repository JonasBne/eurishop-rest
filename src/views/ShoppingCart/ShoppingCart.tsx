import React from "react";
import Box from "../../components/Box";
import FlexBox from "../../components/FlexBox";
import Header from "../../components/Header";
import Button from "../../components/Button";
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
  {
    id: "4",
    title: "product4",
    price: 6.0,
  },
  {
    id: "5",
    title: "product5",
    price: 6.0,
  },
  {
    id: "6",
    title: "product6",
    price: 6.0,
  },
];

function ShoppingCart() {
  return (
    <Box width="100%" mr="1rem" border="2px solid #005f73">
      <FlexBox flexDirection="column" alignItems="center">
        <Header as="h2">Shopping Cart (items: {DUMMY_DATA.length})</Header>
      </FlexBox>
      <FlexBox justifyContent="space-around" flexWrap="wrap">
        {DUMMY_DATA.map((item) => {
          return <CartItem item={item} />;
        })}
      </FlexBox>
      <FlexBox justifyContent="center" m="2rem">
        <Button type="button" variant="danger" mx="1rem">
          CLEAR
        </Button>
        <Button type="button" variant="primary" mx="1rem">
          ORDER
        </Button>
      </FlexBox>
    </Box>
  );
}

export default ShoppingCart;
