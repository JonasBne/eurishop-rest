import { CartItem } from '../../domain/shoppingCart';
import { calculateTotalCostPerCartItem } from './BasketItem';

describe('calculate total cost per cart item', () => {
  test('multiply price by quantity', () => {
    const cartItem: CartItem = {
      product: {
        id: 1,
        sku: '',
        title: '',
        desc: '',
        image: '',
        stocked: true,
        basePrice: 10.00,
        price: 13.00,
      },
      quantity: 2,
    };

    const result = parseInt(calculateTotalCostPerCartItem(cartItem), 10);
    expect(result).toBe(26.00);
  });
});
