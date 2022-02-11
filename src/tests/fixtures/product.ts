import { rest } from 'msw';
import config from '../../config';

// TODO: uitbreiden zodat ze volledig zijn
const products = [
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
];

// TODO: error code 404 teruggeven indien geen product wordt gevonden
export const getSingleProduct = rest.get(`${config.serverUrl}/api/products/:productId`, (req, res, ctx) => {
  const product = products.find((item) => item.id === parseInt(req.params.productId as string, 10));
  return res(ctx.status(200), ctx.json(product));
});

export const getSingleProductFailed = (errorCode = 404) =>
  rest.get('https://euricom-test-api.herokuapp.com/api/products/:productId', (req, res, ctx) =>
    res(ctx.status(errorCode)),
  );

export const getAllProducts = rest.get('https://euricom-test-api.herokuapp.com/api/products', (req, res, ctx) =>
  res(
    ctx.json({
      selectedProducts: products,
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
