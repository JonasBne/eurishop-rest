import { CartItem, calculateTotalCostPerCartItem } from '../../domain/shoppingCart';

describe('calculate total cost per cart item', () => {
  test('multiply price by quantity', () => {
    const cartItem = {
      product: {
        price: 13.00,
      },
      quantity: 2,
    } as CartItem;
    const result = calculateTotalCostPerCartItem(cartItem);
    expect(result).toBe(26.00);
  });
});
