import 'whatwg-fetch';
import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import { useGetMultipleProducts, useGetProduct, useGetProducts } from './productsApi';
import { server } from '../mockServer';
import { createWrapper } from '../tests/utils/utils';
import RequestError from '../errors/RequestError';
import {
  getAllProducts,
  getAllProductsFailed,
  getSingleProduct,
  getSingleProductFailed,
} from '../tests/fixtures/product';

describe('useQuery', () => {
  describe('single product', () => {
    test('succesful query returns product', async () => {
      server.use(getSingleProduct);

      const { result } = renderHook(() => useGetProduct('1'), { wrapper: createWrapper() });

      await waitFor(() => expect(result.current.product).toBeDefined());
      expect(result.current.product).toEqual({
        id: 1,
        title: 'pellentesque',
        price: 10.0,
      });
    });

    test('failed query returns RequestError ', async () => {
      server.use(getSingleProductFailed(404));

      const { result } = renderHook(() => useGetProduct('aaaa'), { wrapper: createWrapper() });

      await waitFor(() => expect(result.current.isError).toBeTruthy());

      expect(result.current.error).toBeInstanceOf(RequestError);
    });
  });

  describe('multiple products', () => {
    test('succesful query returns an array with multiple products', async () => {
      server.use(getSingleProduct);

      const { result } = renderHook(() => useGetMultipleProducts(['1', '2', '3'], true), { wrapper: createWrapper() });

      await waitFor(() => expect(result.current.isLoading).toBeFalsy());

      expect(result.current.products.length).toEqual(3);
    });
  });

  describe('all products', () => {
    test('succesful query returns array with all products', async () => {
      server.use(getAllProducts);

      const { result } = renderHook(() => useGetProducts(), { wrapper: createWrapper() });

      await waitFor(() => expect(result.current.products).toBeDefined());

      expect(result.current.products?.length).toBeGreaterThan(1);
    });

    test('failed query returns RequestError', async () => {
      server.use(getAllProductsFailed(404));

      const { result } = renderHook(() => useGetProducts(), { wrapper: createWrapper() });

      await waitFor(() => expect(result.current.isError).toBeTruthy());

      expect(result.current.error).toBeInstanceOf(RequestError);
    });
  });
});

// TODO: add tests for mutation (use act() from React Testing Library)
describe('useMutation', () => {
  describe('post', () => {
    test('post product', () => {});
  });
});
