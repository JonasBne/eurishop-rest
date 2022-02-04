import { CartItem, calculateTotalCartCost } from '../../domain/shoppingCart';

describe('calculate total shopping cart cost', () => {
  test('calculate total', () => {
    const cartItems = [{ product: { price: 10.00 }, quantity: 2 },
      { product: { price: 10 }, quantity: 4 }] as CartItem[];
    const result = parseInt(calculateTotalCartCost(cartItems), 10);
    expect(result).toBe(60);
  });
});
