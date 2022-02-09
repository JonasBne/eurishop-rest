/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import 'whatwg-fetch';
import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { useGetProduct, useGetProducts } from './productsApi';
import { server } from '../setupTests';
import { createWrapper } from '../testUtils';
import RequestError from '../errors/RequestError';

/*
https://tkdodo.eu/blog/testing-react-query
https://github.com/TkDodo/testing-react-query/blob/main/src/tests/hooks.test.tsx
*/

describe('single product', () => {
  test('succesful query returns product', async () => {
    const { result } = renderHook(() => useGetProduct('1'), { wrapper: createWrapper() });

    await waitFor(() => expect(result.current.product).toBeDefined());
    expect(result.current.product).toEqual({
      id: 1,
      sku: '254267942-8',
      title: 'pellentesque',
      desc: 'Donec posuere metus vitae ipsum.',
      image: 'https://dummyimage.com/300x300.jpg/ff4444/ffffff',
      stocked: true,
      basePrice: 16.63,
      price: 16.63,
    });
  });

  test('failed query returns RequestError ', async () => {
    server.use(
      rest.get('https://euricom-test-api.herokuapp.com/api/products/:productId', (req, res, ctx) =>
        res(ctx.status(404)),
      ),
    );

    const { result } = renderHook(() => useGetProduct('aaaa'), { wrapper: createWrapper() });

    await waitFor(() => expect(result.current.isError).toBeTruthy());

    expect(result.current.error).toBeInstanceOf(RequestError);
  });
});

describe('multiple products', () => {
  test('succesful query returns array with multiple products', async () => {
    server.use(
      rest.get('https://euricom-test-api.herokuapp.com/api/products', (req, res, ctx) =>
        res(
          ctx.json({
            selectedProducts: [
              {
                id: 1,
                title: 'pellentesque',
              },
              {
                id: 2,
                title: 'ut',
              },
              {
                id: 3,
                title: 'vera',
              },
            ],
          }),
        ),
      ),
    );

    const { result } = renderHook(() => useGetProducts(), { wrapper: createWrapper() });

    await waitFor(() => expect(result.current.products).toBeDefined());

    expect(result.current.products?.length).toBeGreaterThan(1);
  });

  test('failed query returns RequestError', async () => {
    server.use(
      rest.get('https://euricom-test-api.herokuapp.com/api/products/', (req, res, ctx) => res(ctx.status(404))),
    );

    const { result } = renderHook(() => useGetProducts(99), { wrapper: createWrapper() });

    await waitFor(() => expect(result.current.isError).toBeTruthy());

    expect(result.current.error).toBeInstanceOf(RequestError);
  });
});
