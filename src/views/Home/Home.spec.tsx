/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Home from './Home';
import createWrapper from '../../tests/utils/utils';
import { server } from '../../mockServer';
import { getAllProducts, getAllProductsFailed, getMultipleProducts } from '../../tests/fixtures/product';
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

describe('succesful query', () => {
  test('renders a loading spinner, product cards and basket', async () => {
    server.use(getAllProducts, getMultipleProducts, getBasket);
    // server.use(getMultipleProducts);
    // server.use(getBasket);

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

// TODO: Hoe meerdere server.use gebruiken?
// describe('succesful query', () => {
//   test('renders a loading spinner, product cards and basket', async () => {
//     server.use(getAllProducts);

//     render(
//       <BrowserRouter>
//         <ThemeProvider theme={theme}>
//           <Home />
//         </ThemeProvider>
//       </BrowserRouter>,
//       {
//         wrapper: createWrapper(),
//       },
//     );

//     const loadingSpinner = screen.getByRole('loading');
//     expect(loadingSpinner).toBeInTheDocument();

//     const productcards = await screen.findAllByRole('card');
//     expect(productcards.length).toBeGreaterThanOrEqual(1);
//   });
// });
