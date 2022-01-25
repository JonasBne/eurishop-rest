import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Box from "../../components/Box";
import { Item } from "../../domain/ShoppingCart";

// TODO: add quantity to cartItem (check styling in course Udemy)

const ListItem = styled.li`
  margin: 2rem auto;
  list-style-type: none;
`;

interface CartItemProps {
  item: Item;
}

function CartItem({ item }: CartItemProps) {
  // const handleRemove = (itemId: string) => {
  //   onRemove(itemId);
  // };

  return (
    <ListItem>
      <div>
        <Header as="h4" variant="tertiary">
          {item.title}
        </Header>
        <Box my="0.5rem">{`Unit price: ${item.price}`}</Box>
        <Box my="0.5rem">{`#: ${item.quantity}`}</Box>
        <Box my="0.5rem">{`Total: ${item.quantity * item.price}`}</Box>
      </div>
      <Button
        type="button"
        variant="danger"
        m="1rem auto"
        // TODO: add the remove handler
        onClick={() => alert("The product should be removed")}
      >
        Remove
      </Button>
    </ListItem>
  );
}

export default CartItem;
