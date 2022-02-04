import { BasketDTO, basketMapper } from './basketApi';
import Product from '../domain/product';

function createTestProduct() {
  return [
    {
      id: 1,
      sku: '254267942-8',
      title: 'pellentesque',
      desc: 'Donec posuere metus vitae ipsum.',
      image: 'https://dummyimage.com/300x300.jpg/ff4444/ffffff',
      stocked: true,
      basePrice: 16.63,
      price: 16.63,
    },
    {
      id: 2,
      sku: '253267343-5',
      title: 'ut',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere ácubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
      image: 'https://dummyimage.com/300x300.png/cc0000/ffffff',
      stocked: false,
      basePrice: 13.72,
      price: 6.31,
    },
    {
      id: 3,
      sku: '883697330-2',
      title: 'sapien',
      desc: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
      image: 'https://dummyimage.com/300x300.jpg/ff4444/ffffff',
      stocked: false,
      basePrice: 16.86,
      price: 16.86,
    },
    {
      id: 4,
      sku: '048608527-9',
      title: 'aenean',
      desc: 'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
      image: 'https://dummyimage.com/300x300.bmp/eeeeee/000000',
      stocked: true,
      basePrice: 3.1,
      price: 3.1,
    },
  ] as Product[];
}

// const basket: BasketDTO[] = [
//   {
//     id: 1,
//     productId: 1,
//     quantity: 1,
//   },
//   {
//     id: 2,
//     productId: 2,
//     quantity: 4,
//   },
// ];

describe('basket mapper', () => {
  let products: Product[];
  let basket: BasketDTO[];
  beforeEach(() => {
    products = [
      { id: 1, title: 'pellentesque' },
      { id: 2, title: 'ut' },
    ] as any;
    basket = [
      { id: 1, productId: 1, quantity: 1 },
      { id: 2, productId: 2, quantity: 4 },
    ];
  });
  test('basket mapper returns undefined if dto is undefined', () => {
    const result = basketMapper(products, undefined)!;
    expect(result).toBe(undefined);
  });
  test('basket mapper returns undefined if products is undefined', () => {
    const result = basketMapper(undefined, basket)!;
    expect(result).toBe(undefined);
  });
  test('basket mapper returns undefined if dto and products are undefined', () => {
    const result = basketMapper(undefined, undefined)!;
    expect(result).toBe(undefined);
  });
  test('basket mapper returns a cart with items', () => {
    const result = basketMapper(products, basket)!;
    expect(result.items.length).toBe(2);
    expect(result.items[0].quantity).toBe(1);
    expect(result.items[1].quantity).toBe(4);
    expect(result.items[0].product.title).toBe('pellentesque');
    expect(result.items[1].product.title).toBe('ut');
  });
});
