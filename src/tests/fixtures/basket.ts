/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { rest } from 'msw';

export const getBasket = rest.get('https://euricom-test-api.herokuapp.com/api/basket/xyz', (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json([
      {
        product: {
          id: 1,
          title: 'pellentesque',
          price: 10.0,
        },
        quantity: 1,
      },
      {
        product: {
          id: 2,
          title: 'ut',
          price: 10.0,
        },
        quantity: 1,
      },
      {
        product: {
          id: 3,
          title: 'vera',
          price: 10.0,
        },
        quantity: 1,
      },
    ]),
  ),
);

export const getBasketFailed = (errorCode = 404) =>
  rest.get('https://euricom-test-api.herokuapp.com/api/basket/xyz', (req, res, ctx) => res(ctx.status(errorCode)));
