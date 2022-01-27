import React, { useContext } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "styled-components";
import Box from "../../components/Box";
import FlexBox from "../../components/FlexBox";
import Header from "../../components/Header";
import Button from "../../components/Button";
import CartItem from "./CartItem";
import { Item } from "../../domain/ShoppingCart";
import FaIcon from "../../assets/FaIcon";

interface ShoppingCartProps {
  cartItems: Item[];
  onUpdate: (action: string, cartItem: Item) => void;
  onClear: () => void;
}

function ShoppingCart({ cartItems, onUpdate, onClear }: ShoppingCartProps) {
  const theme = useContext(ThemeContext);

  const handleClear = () => {
    onClear();
  };

  const productSums = cartItems.map((item) => {
    return item.quantity * item.price;
  });

  const totalSum = productSums
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    .toFixed(2);

  return (
    <Box
      width="100%"
      mt="3rem"
      mr="1rem"
      borderRadius="35px"
      backgroundColor={theme.colors.whites.primaryWhite}
    >
      <Header as="h2" variant="tertiary">
        Shopping Cart
        <FaIcon ml="1rem" icon={faShoppingCart} />
      </Header>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} onUpdate={onUpdate} />;
          })
        ) : (
          <Box margin="2rem 3rem">Oops, your cart looks empty...</Box>
        )}
      </ul>
      {cartItems.length > 0 && (
        <div>
          <Header as="h3" mt="2rem" mb="3rem" textAlign="center">
            {`TOTAL: € ${totalSum}`}
          </Header>
          <FlexBox justifyContent="center" m="2rem">
            <Button
              type="button"
              variant="danger"
              mx="1rem"
              onClick={handleClear}
            >
              CLEAR
            </Button>
            <Button type="button" variant="success" mx="1rem">
              ORDER
            </Button>
          </FlexBox>
        </div>
      )}
    </Box>
  );
}

export default ShoppingCart;
