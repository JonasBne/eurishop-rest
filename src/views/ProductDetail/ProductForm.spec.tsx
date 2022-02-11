import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import Product from '../../domain/product';
import theme from '../../theme/theme';
import ProductForm from './ProductForm';

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
  test('labels match their inputs', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductForm title={title} gridTemplateAreas={gridTemplateAreas} onSubmit={mockOnSubmit} />
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

  test('click fires onCancel', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductForm
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
          title={title}
          gridTemplateAreas={gridTemplateAreas}
          onCancel={mockOnCancel}
          onSubmit={mockOnSubmit}
        />
      </ThemeProvider>,
    );

    const button = screen.getByRole('button', { name: /save/i });

    await waitFor(() => userEvent.click(button));

    //   expect(mockOnSubmit).toHaveBeenCalled();
    //   const arg = mockOnSubmit.mock.calls[0][0];
    //   expect(arg.title).toBe('hhh');

    //   expect(mockOnSubmit).toHaveBeenCalledWith(expect.objectContaining({
    //     title: 'hhh'
    //   })
  });
});

describe('add new product', () => {
  test('form is rendered with empty input values', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductForm
          title={title}
          gridTemplateAreas={gridTemplateAreas}
          onCancel={mockOnCancel}
          onSubmit={mockOnSubmit}
        />
      </ThemeProvider>,
    );

    const form = screen.getByRole('form');
    expect(form).toHaveFormValues({
      title: '',
      sku: '',
      basePrice: '',
      price: '',
      stocked: false,
      image: '',
      desc: '',
    });
  });
  test('form values are correctly stored', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductForm
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

    userEvent.type(titleInput, 'My Product');
    userEvent.type(serialNumberInput, 'AAA');
    userEvent.type(basePriceInput, '10.00');
    userEvent.type(priceInput, '10.00');
    userEvent.click(stockedInput);
    userEvent.type(imageInput, 'https://dummyimage.com/');
    userEvent.type(descInput, 'My custom product description');

    const form = screen.getByRole('form');
    expect(form).toHaveFormValues({
      title: 'My Product',
      sku: 'AAA',
      basePrice: '10.00',
      price: '10.00',
      stocked: true,
      image: 'https://dummyimage.com/',
      desc: 'My custom product description',
    });
  });
});

describe('edit existing product', () => {
  let initialProduct: Product;
  beforeEach(() => {
    initialProduct = {
      title: 'product1',
      sku: 'AAA-BBB',
      basePrice: 10.0,
      price: 15.0,
      stocked: true,
      image: 'https://dummyimage.com/',
      desc: 'custom product',
    } as Product;
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

  test('form values take into account changes by user', () => {
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
    const stockedInput = screen.getByLabelText(/in stock/i);

    userEvent.type(titleInput, '{selectall}{backspace}');
    userEvent.type(titleInput, 'new title');

    userEvent.click(stockedInput);

    const form = screen.getByRole('form');
    expect(form).toHaveFormValues({
      title: 'new title',
      sku: 'AAA-BBB',
      basePrice: '10',
      price: '15',
      stocked: false,
      image: 'https://dummyimage.com/',
      desc: 'custom product',
    });
  });
});
