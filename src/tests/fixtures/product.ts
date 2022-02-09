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
        sku: '254267942-8',
        title: 'pellentesque',
        desc: 'Donec posuere metus vitae ipsum.',
        image: 'https://dummyimage.com/300x300.jpg/ff4444/ffffff',
        stocked: true,
        basePrice: 16.63,
        price: 16.63,
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
);

export const getAllProductsLoading = rest.get('https://euricom-test-api.herokuapp.com/api/products', (req, res, ctx) =>
  res(
    ctx.json({
      selectedProducts: [],
    }),
  ),
);

export const getAllProductsFailed = (errorCode = 404) =>
  rest.get('https://euricom-test-api.herokuapp.com/api/products', (req, res, ctx) => res(ctx.status(errorCode)));
