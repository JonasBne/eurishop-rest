import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Box from "../../components/Box";
import FlexBox from "../../components/FlexBox";
import { Item } from "../../domain/ShoppingCart";

interface CartItemProps {
  item: Item;
  onUpdate: (action: string, cartItem: Item) => void;
}

function CartItem({ item, onUpdate }: CartItemProps) {
  return (
    <FlexBox justifyContent="space-around">
      <div>
        <Header as="h4" variant="tertiary">
          {item.title}
        </Header>
        <Box
          my="0.5rem"
          fontStyle="italic"
        >{`Unit price: € ${item.price}`}</Box>
        <Box my="0.5rem" fontWeight="bold">{`Total: € ${(
          item.quantity * item.price
        ).toFixed(2)}`}</Box>
      </div>

      <Box mt="3rem">
        <div>{`Amount: ${item.quantity}`}</div>
        <Button
          type="button"
          variant="secondary"
          m="1rem 1rem 1rem 0"
          width="1.25rem"
          onClick={() => onUpdate("-", item)}
        >
          -
        </Button>
        <Button
          type="button"
          variant="secondary"
          m="1rem 1rem 1rem 0"
          width="1.25rem"
          // TODO: add the remove handler
          onClick={() => onUpdate("+", item)}
        >
          +
        </Button>
      </Box>
    </FlexBox>
  );
}

export default CartItem;
