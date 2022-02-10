/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Home from './Home';
import createWrapper from '../../tests/utils/utils';
import { server } from '../../mockServer';
import { getAllProducts, getAllProductsFailed, getSingleProduct } from '../../tests/fixtures/product';
import theme from '../../theme/theme';
import { getBasket, getBasketFailed } from '../../tests/fixtures/basket';

describe('failed query', () => {
  test('renders a error modal', async () => {
    server.use(getAllProductsFailed(404));
    server.use(getBasketFailed(404));

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
      {
        wrapper: createWrapper(),
      },
    );

    const errorModal = await screen.findByRole('alert');
    expect(errorModal).toBeInTheDocument();
  });
});

// TODO: check

/*

Test slaagt maar error over keys. getSingleProduct geeft altijd product terug met id 1.
Hoe te vermijden?
*/

describe('succesful query', () => {
  test('renders a loading spinner, product cards and basket', async () => {
    server.use(getAllProducts);
    server.use(getSingleProduct);
    server.use(getBasket);

    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </BrowserRouter>,
      {
        wrapper: createWrapper(),
      },
    );

    const loadingSpinner = screen.getByRole('loading');
    expect(loadingSpinner).toBeInTheDocument();

    const basketItems = await screen.findAllByRole('cart-item');
    expect(basketItems.length).toBeGreaterThanOrEqual(1);

    screen.debug();
  });
});
