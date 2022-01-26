import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Box from "../../components/Box";
import FlexBox from "../../components/FlexBox";
import Header from "../../components/Header";
import Button from "../../components/Button";
import CartItem from "./CartItem";
import { Item } from "../../domain/ShoppingCart";
import FaIcon from "../../assets/FaIcon";

// representation only
// TODO: calculate total sum here
// TODO: add the global sum here

interface ShoppingCartProps {
  cartItems: Item[];
  onUpdate: (action: string, cartItem: Item) => void;
  onClear: () => void;
}

function ShoppingCart({ cartItems, onUpdate, onClear }: ShoppingCartProps) {
  const handleClear = () => {
    onClear();
  };

  return (
    <Box width="100%" mr="1rem" border="2px solid #005f73">
      <Header as="h2" textAlign="center">
        Shopping Cart
        <FaIcon ml="1rem" icon={faShoppingCart} />
      </Header>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return <CartItem item={item} onUpdate={onUpdate} />;
          })
        ) : (
          <Box margin="2rem 3rem">Oops, your cart looks empty...</Box>
        )}
      </ul>
      {cartItems.length > 0 && (
        <FlexBox justifyContent="center" m="2rem">
          <Button
            type="button"
            variant="danger"
            mx="1rem"
            onClick={handleClear}
          >
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
