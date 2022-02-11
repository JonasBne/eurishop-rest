/* eslint-disable max-len */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import 'whatwg-fetch';
import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import { useGetMultipleProducts, useGetProduct, useGetProducts } from './productsApi';
import { server } from '../mockServer';
import createWrapper from '../tests/utils/utils';
import RequestError from '../errors/RequestError';
import {
  getAllProducts,
  getAllProductsFailed,
  getSingleProduct,
  getSingleProductFailed,
} from '../tests/fixtures/product';

/*
https://tkdodo.eu/blog/testing-react-query
https://github.com/TkDodo/testing-react-query/blob/main/src/tests/hooks.test.tsx
*/

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

  // TODO: to check

  /*

  Vraag 1: Welke mock api gebruiken voor het fetchen van multiple products?

  Moet met getSingleProduct want useGetMultipleProducts mapped over urls en geeft een array
  van queries terug die gereduceerd wordt tot een array van producten. Ik heb een mock proberen maken die dit teruggeeft

  res(
    ctx.json([
      {
        id: 1,
        title: 'pellentesque',
        price: 10.00
      },
      {
        id: 2,
        title: 'ut',
        price: 10.00
      },
     {
        id: 3,
        title: 'vera',
        price: 10.00
      }
    ])
  )

  maar dan krijg je een array met arrays terug als resultaat. Het is niet mogelijk om dit te doen:

  res(
    ctx.json(
      {
        id: 1,
        title: 'pellentesque',
        price: 10.00
      },
      {
        id: 2,
        title: 'ut',
        price: 10.00
      },
     {
        id: 3,
        title: 'vera',
        price: 10.00
      }
    )
  )

  Vraag 2: waarom werkt dit niet met await waitFor(() => expect(result.current.products).toBeDefined()) --> in dat geval krijg je een lege array met products

  */

  describe('multiple products', () => {
    test('succesful query returns an array with multiple products', async () => {
      console.log('URL', process.env.REACT_APP_SERVER_URL);
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
