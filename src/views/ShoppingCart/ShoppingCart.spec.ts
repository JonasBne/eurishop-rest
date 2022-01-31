import { calculateTotalCartCost } from './ShoppingCart';
import { CartItem } from '../../domain/shoppingCart';

const cartItems: CartItem[] = [{
  product: {
    id: 1,
    sku: '',
    title: '',
    desc: '',
    image: '',
    stocked: true,
    basePrice: 0,
    price: 10.00,
  },
  quantity: 2,
},
{
  product: {
    id: 2,
    sku: '',
    title: '',
    desc: '',
    image: '',
    stocked: true,
    basePrice: 0,
    price: 10,
  },
  quantity: 4,
}];
describe('calculate total shopping cart cost', () => {
  test('calculate total', () => {
    const result = parseInt(calculateTotalCartCost(cartItems), 10);
    expect(result).toBe(60);
  });
});
