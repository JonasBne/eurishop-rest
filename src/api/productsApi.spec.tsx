/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
import 'whatwg-fetch';
import React, { ReactNode } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { QueryClient, QueryClientProvider } from 'react-query';
import { waitFor } from '@testing-library/react';
import { useGetProduct } from './productsApi';

interface WrapperProps {
  children: ReactNode;
}

const server = setupServer(
  rest.get('https://euricom-test-api.herokuapp.com/api/products/:productId', (req, res, ctx) =>
    res(
      ctx.json({
        id: 1,
        sku: '254267942-8',
        title: 'pellentesque',
        desc: 'Donec posuere metus vitae ipsum.',
        image: 'https://dummyimage.com/300x300.jpg/ff4444/ffffff',
        stocked: true,
        basePrice: 16.63,
        price: 16.63,
      }),
    ),
  ),
);

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});
afterAll(() => {
  server.close();
});
afterEach(() => server.resetHandlers());

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  // eslint-disable-next-line func-names
  return function ({ children }: WrapperProps) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
  };
};

test('renders hook', async () => {
  const { result } = renderHook(() => useGetProduct('1'), { wrapper: createWrapper() });

  await waitFor(() => expect(result.current.product).toBeDefined());
});
