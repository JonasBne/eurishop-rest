/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import {
  BasketDTO,
  basketMapper,
  useGetBasket,
  useMutationBasketClear,
  useMutationBasketPatch,
  useMutationBasketPost,
  useMutationBasketRemoveItem,
} from './basketApi';
import Product from '../domain/product';
import { server } from '../mockServer';
import { clearBasket, getBasket, patchBasket, postItemToBasket, removeItemFromBasket } from '../tests/fixtures/basket';
import createWrapper from '../tests/utils/utils';
import { getSingleProduct } from '../tests/fixtures/product';

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

// TODO: is this ok?
describe('useGetBasket', () => {
  test('succesful query returns a basket', async () => {
    server.use(getSingleProduct);
    server.use(getBasket);

    const { result } = renderHook(() => useGetBasket(), { wrapper: createWrapper() });

    await waitFor(() => expect(result.current.cart).toBeDefined());

    expect(result.current.cart?.items.length).toBeGreaterThan(0);
    expect(result.current.cart?.items[0]).toHaveProperty('product');
    expect(result.current.cart?.items[0]).toHaveProperty('quantity');
  });
});

// TODO: are these tests ok?
describe('useMutation', () => {
  test('succesful post of product', async () => {
    server.use(postItemToBasket);

    const { result } = renderHook(() => useMutationBasketPost(), {
      wrapper: createWrapper(),
    });

    act(() =>
      result.current.mutate({
        data: {
          quantity: 1,
        },
        productId: 1,
      }),
    );

    await waitFor(() => expect(result.current.data).toBeDefined());

    expect(result.current.data).toEqual([
      {
        id: 1,
        productId: 1,
        quantity: 1,
      },
    ]);
  });

  test('succesful patch of product', async () => {
    server.use(patchBasket);

    const { result } = renderHook(() => useMutationBasketPatch(), {
      wrapper: createWrapper(),
    });

    act(() =>
      result.current.mutate({
        data: {
          quantity: 2,
        },
        productId: 1,
      }),
    );

    await waitFor(() => expect(result.current.data).toBeDefined());

    expect(result.current.data).toEqual([
      {
        id: 1,
        productId: 1,
        quantity: 2,
      },
    ]);
  });

  test('remove item from basket', async () => {
    server.use(removeItemFromBasket);

    const { result } = renderHook(() => useMutationBasketRemoveItem(), {
      wrapper: createWrapper(),
    });

    act(() =>
      result.current.mutate({
        productId: 1,
      }),
    );

    await waitFor(() => expect(result.current.data).toBeDefined());

    expect(result.current.data).toEqual([]);
  });

  test('clear basket', async () => {
    server.use(clearBasket);

    const { result } = renderHook(() => useMutationBasketClear(), {
      wrapper: createWrapper(),
    });

    act(() => result.current.mutate());

    await waitFor(() => expect(result.current.data).toBeDefined());

    expect(result.current.data).toEqual([]);
  });
});
