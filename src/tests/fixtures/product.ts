/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
import { rest } from 'msw';

export const getSingleProduct = rest.get(
  'https://euricom-test-api.herokuapp.com/api/products/:productId',
  (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        id: 1,
        title: 'pellentesque',
        price: 10.0,
      }),
    ),
);

export const getSingleProductFailed = (errorCode = 404) =>
  rest.get('https://euricom-test-api.herokuapp.com/api/products/:productId', (req, res, ctx) =>
    res(ctx.status(errorCode)),
  );

export const getAllProducts = rest.get('https://euricom-test-api.herokuapp.com/api/products', (req, res, ctx) =>
  res(
    ctx.json({
      selectedProducts: [
        {
          id: 1,
          title: 'pellentesque',
          price: 10.0,
        },
        {
          id: 2,
          title: 'ut',
          price: 10.0,
        },
        {
          id: 3,
          title: 'vera',
          price: 10.0,
        },
      ],
    }),
  ),
);

export const getAllProductsEmpty = rest.get('https://euricom-test-api.herokuapp.com/api/products', (req, res, ctx) =>
  res(
    ctx.json({
      selectedProducts: [],
    }),
  ),
);

export const getAllProductsFailed = (errorCode = 404) =>
  rest.get('https://euricom-test-api.herokuapp.com/api/products', (req, res, ctx) => res(ctx.status(errorCode)));
