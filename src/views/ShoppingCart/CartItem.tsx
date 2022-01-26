import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Box from "../../components/Box";
import FlexBox from "../../components/FlexBox";
import { Item } from "../../domain/ShoppingCart";

// TODO: add quantity to cartItem (check styling in course Udemy)

interface CartItemProps {
  item: Item;
}

function CartItem({ item }: CartItemProps) {
  // const handleRemove = (itemId: string) => {
  //   onRemove(itemId);
  // };

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
        <Box my="0.5rem" fontWeight="bold">{`Total: € ${
          item.quantity * item.price
        }`}</Box>
      </div>

      <Box mt="3rem">
        <div>{`Amount: ${item.quantity}`}</div>
        <Button
          type="button"
          variant="secondary"
          m="1rem 1rem 1rem 0"
          width="1.25rem"
          // TODO: add the remove handler
          onClick={() => alert("The product should be decreased")}
        >
          -
        </Button>
        <Button
          type="button"
          variant="secondary"
          m="1rem 1rem 1rem 0"
          width="1.25rem"
          // TODO: add the remove handler
          onClick={() => alert("The product should be increased")}
        >
          +
        </Button>
      </Box>
    </FlexBox>
  );
}

export default CartItem;
