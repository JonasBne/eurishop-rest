/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import Product from '../../domain/product';
import ProductList from './ProductList';
import theme from '../../theme/theme';
import createWrapper from '../../tests/utils/utils';
import { server } from '../../mockServer';
import { getAllProductsLoading } from '../../tests/fixtures/product';

// TODO: test aantal rijen in tabel met aantal rijen van producten api

describe('loading query', () => {
  test('renders a loading spinner', async () => {
    server.use(getAllProductsLoading);

    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>,
      {
        wrapper: createWrapper(),
      },
    );

    const loadingSpinner = screen.getByRole('alert');
    expect(loadingSpinner).toBeInTheDocument();
  });
});

describe('failed query', () => {
  test('renders a error modal', async () => {
    server.use(
      rest.get('https://euricom-test-api.herokuapp.com/api/products', (req, res, ctx) => res(ctx.status(404))),
    );

    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>,
      {
        wrapper: createWrapper(),
      },
    );

    const errorModal = screen.getByRole('dialog');
    expect(errorModal).toBeInTheDocument();
  });
});
describe('succesful query', () => {
  test('# of table rows match the number of products returned by api', async () => {
    server.use(
      rest.get('https://euricom-test-api.herokuapp.com/api/products', (req, res, ctx) =>
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
      ),
    );

    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>,
      {
        wrapper: createWrapper(),
      },
    );
  });
});
