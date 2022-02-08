/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
import 'whatwg-fetch';
import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import { useGetProduct } from './productsApi';
import { createWrapper, server } from '../setupTests';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});
afterAll(() => {
  server.close();
});
afterEach(() => server.resetHandlers());

test('succesful query single product', async () => {
  const { result } = renderHook(() => useGetProduct('1'), { wrapper: createWrapper() });

  await waitFor(() => expect(result.current.product).toBeDefined());
});

/*
https://tkdodo.eu/blog/testing-react-query
https://github.com/TkDodo/testing-react-query/blob/main/src/tests/hooks.test.tsx
*/
