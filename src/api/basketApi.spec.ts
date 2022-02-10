import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import { BasketDTO, basketMapper, useGetBasket } from './basketApi';
import Product from '../domain/product';
import { server } from '../mockServer';
import { getBasket } from '../tests/fixtures/basket';
import createWrapper from '../tests/utils/utils';
import { getMultipleProducts } from '../tests/fixtures/product';

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

// TODO: finalize
describe('useGetBasket', () => {
  test('succesful query returns a basket', async () => {
    server.use(getMultipleProducts);
    server.use(getBasket);

    const { result } = renderHook(() => useGetBasket(), { wrapper: createWrapper() });

    await waitFor(() => expect(result.current.cart).toBeDefined());

    console.log(result.current.cart);
  });
});
