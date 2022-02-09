/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { rest } from 'msw';

const handlers = [
  rest.get('https://euricom-test-api.herokuapp.com/api/products/:productId', (req, res, ctx) =>
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
  ),
  rest.get('*', (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(ctx.status(500), ctx.json({ error: 'Please add request handler' }));
  }),
];

export default handlers;
