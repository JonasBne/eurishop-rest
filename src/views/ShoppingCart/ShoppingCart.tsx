import React from "react";
import Box from "../../components/Box";
import FlexBox from "../../components/FlexBox";
import Header from "../../components/Header";
import Button from "../../components/Button";
// import CartItem from "./CartItem";
import { Item } from "../../domain/ShoppingCart";

// representation only
// TODO: calculate total sum here
// TODO: show number of items bought

interface ShoppingCartProps {
  cartItems: Item[];
}

function ShoppingCart({ cartItems }: ShoppingCartProps) {
  return (
    <Box width="100%" mr="1rem" border="2px solid #005f73">
      <Header as="h2" textAlign="center">
        Shopping Cart
      </Header>
      <FlexBox justifyContent="space-around" flexWrap="wrap">
        {cartItems.length === 0 && <div>No products</div>}
        {/* {cartItems.length > 0 &&
          cartItems.map((item) => {
            return <CartItem item={item} />;
          })} */}
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
