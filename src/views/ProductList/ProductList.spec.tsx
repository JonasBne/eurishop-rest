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
import { getAllProducts, getAllProductsFailed } from '../../tests/fixtures/product';

// TODO: why is error modal not shown?
// error is always null, how so?
describe('failed query', () => {
  test('renders a error modal', async () => {
    server.use(getAllProductsFailed(404));

    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>,
      {
        wrapper: createWrapper(),
      },
    );

    const errorModal = await screen.findByRole('alert');
    screen.debug();
    expect(errorModal).toBeInTheDocument();
  });
});

// TODO: check if number of rows matches the number of products returned by api
describe('succesful query', () => {
  test('number of table rows match the number of products returned by api', async () => {
    server.use(getAllProducts);

    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ProductList />
        </ThemeProvider>
      </BrowserRouter>,
      {
        wrapper: createWrapper(),
      },
    );

    const loadingSpinner = screen.getByRole('loading');
    expect(loadingSpinner).toBeInTheDocument();

    const table = await screen.findByRole('table');
    screen.debug(table);
  });
});
