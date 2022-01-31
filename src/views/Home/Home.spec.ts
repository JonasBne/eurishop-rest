import Product from '../../domain/product';
import { Cart } from '../../domain/shoppingCart';
import { addProductToCart } from './Home';

const cart: Cart = {
  items: [{
    product: {
      id: 1,
      sku: 'AAA',
      title: 'Product1',
      desc: 'Product1',
      image: 'Product1',
      stocked: true,
      basePrice: 12.00,
      price: 12.00,
    },
    quantity: 1,
  }, {
    product: {
      id: 2,
      sku: 'AAA',
      title: 'Product2',
      desc: 'Product2',
      image: 'Product2',
      stocked: false,
      basePrice: 9.99,
      price: 9.99,
    },
    quantity: 1,
  }],
};

const product1: Product = {
  id: 1,
  sku: 'AAA',
  title: 'Product1',
  desc: 'Product1',
  image: 'Product1',
  stocked: true,
  basePrice: 12.00,
  price: 12.00,
};

const product3: Product = {
  id: 3,
  sku: 'AAA',
  title: 'Product3',
  desc: 'Product3',
  image: 'Product3',
  stocked: true,
  basePrice: 5.00,
  price: 5.00,
};

describe('add product to cart ', () => {
  test('Existing product: quantity is increased by 1', () => {
    const result = addProductToCart(cart, product1);
    expect(result.items.length).toBe(2);
    expect(result.items[0].quantity).toBe(2);
  });
  test('Non-existing product: product is added to cart with quantity 1', () => {
    const result = addProductToCart(cart, product3);
    expect(result.items.length).toBe(3);
    expect(result.items[2].quantity).toBe(1);
  });
});
