/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import ProductList from './ProductList';
import theme from '../../theme/theme';
import createWrapper from '../../tests/utils/utils';
import { server } from '../../mockServer';
import { getAllProducts, getAllProductsFailed } from '../../tests/fixtures/product';

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
    expect(errorModal).toBeInTheDocument();
  });
});

describe('succesful query', () => {
  test('renders a loading spinner and table', async () => {
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
    expect(table).toBeInTheDocument();
  });
});
