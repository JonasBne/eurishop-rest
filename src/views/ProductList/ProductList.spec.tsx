import React from 'react';
import { screen } from '@testing-library/react';
import ProductList from './ProductList';
import { customRender } from '../../tests/utils/utils';
import { server } from '../../mockServer';
import { getAllProducts, getAllProductsFailed } from '../../tests/fixtures/product';

describe('failed query', () => {
  test('renders a error modal', async () => {
    server.use(getAllProductsFailed(404));

    customRender(<ProductList />);

    const errorModal = await screen.findByRole('alert');
    expect(errorModal).toBeInTheDocument();
  });
});

describe('succesful query', () => {
  test('renders a loading spinner and table', async () => {
    server.use(getAllProducts);

    customRender(<ProductList />);

    const loadingSpinner = screen.getByRole('loading');
    expect(loadingSpinner).toBeInTheDocument();

    // TODO: test aantal rijen
    const table = await screen.findByRole('table');
    expect(table).toBeInTheDocument();
  });
});
