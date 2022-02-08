import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Product from '../../domain/product';
import theme from '../../theme/theme';
import ProductForm from './ProductForm';

/*

edit product:
- wordt de default waarde getoond?
- wordt het on submit event afgevuurd?
- wordt de aangepaste data verzonden?

*/

const title = 'product form';

const gridTemplateAreas = `
"title sku"
"basePrice price"
"stocked image"
"desc desc"
`;

const mockOnSubmit = jest.fn();

describe('edit existing product', () => {
  const initialProduct: Product = {
    title: 'pellenteque',
    sku: 'AAA-BBB',
    basePrice: 10.0,
    price: 15.0,
    stocked: true,
    image: 'https://dummyimage.com/300x300.jpg/ff4444/ffffff',
    desc: 'custom product',
  } as Product;

  test('renders a form with default values', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductForm
          initialProduct={initialProduct}
          title={title}
          gridTemplateAreas={gridTemplateAreas}
          onSubmit={mockOnSubmit}
        />
      </ThemeProvider>,
    );
    screen.debug();
  });
});
