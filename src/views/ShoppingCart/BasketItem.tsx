import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Box from '../../components/Box';
import { CartItem } from '../../domain/shoppingCart';
import FlexBox from '../../components/FlexBox';

export function calculateTotalCostPerProduct(cartItem: CartItem) {
  const cost = (cartItem.quantity * cartItem.product.price).toFixed(2);
  return cost;
}

interface BasketItemProps {
  item: CartItem;
  onUpdate: (cartItem: CartItem, action: string) => void;
}

function BasketItem({ item, onUpdate }: BasketItemProps) {
  return (
    <div>
      <Header as="h4">{item.product.title}</Header>
      <Box my="0.5rem" fontStyle="italic">{`Unit price: € ${item.product.price}`}</Box>
      <FlexBox alignItems="baseline" my="2rem">
        <Button
          type="button"
          variant="secondary"
          mr="1rem"
          onClick={() => onUpdate(item, '-')}
          disabled={item.quantity === 0}
        >
          -
        </Button>
        <div>{item.quantity}</div>
        <Button
          type="button"
          variant="secondary"
          ml="1rem"
          onClick={() => onUpdate(item, '+')}
        >
          +
        </Button>
      </FlexBox>
      <Box mt="0.5rem" mb="1rem" fontWeight="bold">
        {`Total: € ${(
          item.quantity * item.product.price
        ).toFixed(2)}`}

      </Box>
    </div>
  );
}

export default BasketItem;
