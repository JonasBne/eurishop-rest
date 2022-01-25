import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import FlexBox from "../../components/FlexBox";
import Box from "../../components/Box";

// TODO: adjust types

interface CartItemProps {
  item: any;
}

function CartItem({ item }: CartItemProps) {
  // const handleRemove = (itemId: string) => {
  //   onRemove(itemId);
  // };

  return (
    <li>
      <div>
        <Header as="h3">{item.title}</Header>
        <FlexBox flexDirection="column">
          <img
            src="https://dummyimage.com/300x300.jpg/ff4444/ffffff"
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
        variant="primary"
        my="1rem"
        // TODO: add the remove handler
        onClick={() => alert("The product should be removed")}
      >
        Remove
      </Button>
    </li>
  );
}

export default CartItem;
