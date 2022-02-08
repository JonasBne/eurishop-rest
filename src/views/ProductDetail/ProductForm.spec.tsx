import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import Product from '../../domain/product';
import theme from '../../theme/theme';
import ProductForm from './ProductForm';

/*

edit product:
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

const mockOnCancel = jest.fn();
const mockOnSubmit = jest.fn();

describe('product form', () => {
  const initialProduct: Product = {
    title: 'product1',
    sku: 'AAA-BBB',
    basePrice: 10.0,
    price: 15.0,
    stocked: true,
    image: 'https://dummyimage.com/',
    desc: 'custom product',
  } as Product;

  test('labels match their inputs', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductForm
          initialProduct={initialProduct}
          title={title}
          gridTemplateAreas={gridTemplateAreas}
          onCancel={mockOnCancel}
          onSubmit={mockOnSubmit}
        />
      </ThemeProvider>,
    );

    screen.getByLabelText(/title/i);
    screen.getByLabelText(/serial number/i);
    screen.getByLabelText('Base price');
    screen.getByLabelText('Unit price');
    screen.getByLabelText(/in stock/i);
    screen.getByLabelText(/image url/i);
    screen.getByLabelText(/description/i);
  });

  test('inputs have default values', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductForm
          initialProduct={initialProduct}
          title={title}
          gridTemplateAreas={gridTemplateAreas}
          onCancel={mockOnCancel}
          onSubmit={mockOnSubmit}
        />
      </ThemeProvider>,
    );

    const titleInput = screen.getByLabelText(/title/i);
    const serialNumberInput = screen.getByLabelText(/serial number/i);
    const basePriceInput = screen.getByLabelText('Base price');
    const priceInput = screen.getByLabelText('Unit price');
    const stockedInput = screen.getByLabelText(/in stock/i);
    const imageInput = screen.getByLabelText(/image url/i);
    const descInput = screen.getByLabelText(/description/i);

    expect(titleInput).toHaveValue('product1');
    expect(serialNumberInput).toHaveValue('AAA-BBB');
    expect(basePriceInput).toHaveValue('10');
    expect(priceInput).toHaveValue('15');
    expect(stockedInput).toBeChecked();
    expect(imageInput).toHaveValue('https://dummyimage.com/');
    expect(descInput).toHaveValue('custom product');
  });

  test('click fires onCancel', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductForm
          initialProduct={initialProduct}
          title={title}
          gridTemplateAreas={gridTemplateAreas}
          onCancel={mockOnCancel}
          onSubmit={mockOnSubmit}
        />
      </ThemeProvider>,
    );

    const button = screen.getByRole('button', { name: /cancel/i });

    userEvent.click(button);

    expect(mockOnCancel).toBeCalledTimes(1);
  });

  test('click fires onSubmit', async () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductForm
          initialProduct={initialProduct}
          title={title}
          gridTemplateAreas={gridTemplateAreas}
          onCancel={mockOnCancel}
          onSubmit={mockOnSubmit}
        />
      </ThemeProvider>,
    );

    const button = screen.getByRole('button', { name: /save/i });

    await waitFor(() => userEvent.click(button));

    expect(mockOnSubmit).toBeCalledTimes(1);
  });
});
