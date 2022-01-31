import Product from '../../domain/product';
import { Cart, CartItem } from '../../domain/shoppingCart';
import { addProductToCart, updateProductQuantityInCart } from './Home';

const cart: Cart = {
  items: [{
    product: {
      id: 1,
      sku: '',
      title: '',
      desc: '',
      image: '',
      stocked: true,
      basePrice: 0,
      price: 0,
    },
    quantity: 1,
  }, {
    product: {
      id: 2,
      sku: '',
      title: '',
      desc: '',
      image: '',
      stocked: true,
      basePrice: 0,
      price: 0,
    },
    quantity: 3,
  },
  {
    product: {
      id: 4,
      sku: '',
      title: '',
      desc: '',
      image: '',
      stocked: true,
      basePrice: 0,
      price: 0,
    },
    quantity: 2,
  },
  ],
};

const product1: Product = {
  id: 1,
  sku: '',
  title: '',
  desc: '',
  image: '',
  stocked: true,
  basePrice: 0,
  price: 0,
};

const product3: Product = {
  id: 3,
  sku: '',
  title: '',
  desc: '',
  image: '',
  stocked: true,
  basePrice: 0,
  price: 0,
};

const product4: CartItem = {
  product: {
    id: 4,
    sku: '',
    title: '',
    desc: '',
    image: '',
    stocked: true,
    basePrice: 0,
    price: 0,
  },
  quantity: 2,
};

describe('add product to cart ', () => {
  test('Existing product: quantity is increased by 1', () => {
    const result = addProductToCart(cart, product1);
    expect(result.items.length).toBe(3);
    expect(result.items[0].quantity).toBe(2);
  });
  test('Non-existing product: product is added to cart with quantity 1', () => {
    const result = addProductToCart(cart, product3);
    expect(result.items.length).toBe(4);
    expect(result.items[3].quantity).toBe(1);
  });
});

describe('update product quantity in cart', () => {
  test('Decrease product quantity', () => {
    const result = updateProductQuantityInCart(cart, product4, '-')!;
    expect(result.items.length).toBe(3);
    expect(result.items[2].quantity).toBe(1);
  });
  test('Increase product quantity', () => {
    const result = updateProductQuantityInCart(cart, product4, '+')!;
    expect(result.items.length).toBe(3);
    expect(result.items[2].quantity).toBe(3);
  });
});
