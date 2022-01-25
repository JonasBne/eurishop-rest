import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Button from "../../components/Button";
import FlexBox from "../../components/FlexBox";
import Box from "../../components/Box";

const ListItem = styled.li`
  list-style-type: none;
`;

// TODO: adjust types

interface CartItemProps {
  item: any;
}

function CartItem({ item }: CartItemProps) {
  // const handleRemove = (itemId: string) => {
  //   onRemove(itemId);
  // };

  return (
    <ListItem>
      <div>
        <Header as="h3" variant="tertiary">
          {item.title}
        </Header>
        <FlexBox flexDirection="column">
          <img
            src="https://dummyimage.com/300x300/56cde8/FFF"
            alt="product"
            width="100px"
            height="100px"
          />
          <Box my="0.5rem">Unit price: ${item.price}</Box>
        </FlexBox>
      </div>
      {/* Is it ok in this stage that a products only gets added once? So there is no need for a + button? */}
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
