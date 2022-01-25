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
        variant="secondary"
        m="1rem 1rem 1rem 0"
        width="2.5rem"
        // TODO: add the remove handler
        onClick={() => alert("The product should be decreased")}
      >
        -
      </Button>
      <Button
        type="button"
        variant="secondary"
        m="1rem 1rem 1rem 0"
        width="2.5rem"
        // TODO: add the remove handler
        onClick={() => alert("The product should be increased")}
      >
        +
      </Button>
    </ListItem>
  );
}

export default CartItem;
