import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";

// TODO: adjust types

interface CartItemProps {
  item: any;
  onRemove: (id: string) => void;
}

function CartItem({ item, onRemove }: CartItemProps) {
  const handleRemove = (itemId: string) => {
    onRemove(itemId);
  };

  return (
    <li>
      <Header>{item.title}</Header>
      <div>
        <span>{item.price}</span>
        <span>{item.amount}</span>
      </div>
      {/* Is it ok in this stage that a products only gets added once? So there is no need for a + button? */}
      <Button
        type="button"
        variant="primary"
        onClick={() => handleRemove(item.id)}
      >
        -
      </Button>
    </li>
  );
}

export default CartItem;
