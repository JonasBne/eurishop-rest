import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Box from "../../components/Box";
import { Item } from "../../domain/ShoppingCart";
import FlexBox from "../../components/FlexBox";

interface CartItemProps {
  item: Item;
  onUpdate: (action: string, cartItem: Item) => void;
}

function CartItem({ item, onUpdate }: CartItemProps) {
  return (
    <div>
      <Header as="h4">{item.title}</Header>
      <Box my="0.5rem" fontStyle="italic">{`Unit price: € ${item.price}`}</Box>
      <FlexBox alignItems="baseline" my="2rem">
        <Button
          type="button"
          variant="secondary"
          mr="1rem"
          onClick={() => onUpdate("-", item)}
          disabled={item.quantity === 0}
        >
          -
        </Button>
        <div>{item.quantity}</div>
        <Button
          type="button"
          variant="secondary"
          ml="1rem"
          onClick={() => onUpdate("+", item)}
        >
          +
        </Button>
      </FlexBox>
      <Box mt="0.5rem" mb="1rem" fontWeight="bold">{`Total: € ${(
        item.quantity * item.price
      ).toFixed(2)}`}</Box>
    </div>
  );
}

export default CartItem;
