/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
import 'whatwg-fetch';
import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { useGetProduct } from './productsApi';
import { createWrapper, server } from '../setupTests';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});
afterAll(() => {
  server.close();
});
afterEach(() => server.resetHandlers());

test('failed query single products', async () => {
  const { result } = renderHook(() => useGetProduct('1'), { wrapper: createWrapper() });

  server.use(
    rest.get('https://euricom-test-api.herokuapp.com/api/products/:productId', (req, res, ctx) => res(ctx.status(404))),
  );

  await waitFor(() => result.current.isError);

  await waitFor(() => console.log(result.current));
});

test('succesful query single product', async () => {
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

/*
https://tkdodo.eu/blog/testing-react-query
https://github.com/TkDodo/testing-react-query/blob/main/src/tests/hooks.test.tsx
*/
