import React from "react";
import Box from "../../components/Box";
import FlexBox from "../../components/FlexBox";
import Header from "../../components/Header";
import Button from "../../components/Button";
import CartItem from "./CartItem";
import { Item } from "../../domain/ShoppingCart";

// representation only
// TODO: calculate total sum here
// TODO: add the global sum here

interface ShoppingCartProps {
  cartItems: Item[];
}

function ShoppingCart({ cartItems }: ShoppingCartProps) {
  return (
    <Box width="100%" mr="1rem" border="2px solid #005f73">
      <Header as="h2" textAlign="center">
        Shopping Cart
      </Header>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return <CartItem item={item} />;
          })
        ) : (
          <Box m="1rem auto">Your cart looks empty...</Box>
        )}
      </ul>
      {cartItems.length > 0 && (
        <FlexBox justifyContent="center" m="2rem">
          <Button type="button" variant="danger" mx="1rem">
            CLEAR
          </Button>
          <Button type="button" variant="primary" mx="1rem">
            ORDER
          </Button>
        </FlexBox>
      )}
    </Box>
  );
}

export default ShoppingCart;
