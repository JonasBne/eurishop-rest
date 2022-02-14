import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Product from '../../domain/product';
import ProductForm from './ProductForm';
import { customRender } from '../../tests/utils/utils';

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
  test('click fires onSubmit', async () => {
    customRender(<ProductForm title={title} gridTemplateAreas={gridTemplateAreas} onSubmit={mockOnSubmit} />);

    const button = screen.getByRole('button', { name: /save/i });

    await waitFor(() => userEvent.click(button));

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);

    // TODO: dieper testen door te checken of de onClick ook de juiste data meegeeft

    //   expect(mockOnSubmit).toHaveBeenCalled();
    //   const arg = mockOnSubmit.mock.calls[0][0];
    //   expect(arg.title).toBe('hhh');

    //   expect(mockOnSubmit).toHaveBeenCalledWith(expect.objectContaining({
    //     title: 'hhh'
    //   })
  });
});

describe('add new product', () => {
  test('form values are correctly stored', () => {
    customRender(
      <ProductForm
        title={title}
        gridTemplateAreas={gridTemplateAreas}
        onCancel={mockOnCancel}
        onSubmit={mockOnSubmit}
      />,
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
    customRender(
      <ProductForm
        title={title}
        gridTemplateAreas={gridTemplateAreas}
        initialProduct={initialProduct}
        onCancel={mockOnCancel}
        onSubmit={mockOnSubmit}
      />,
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
    customRender(
      <ProductForm
        title={title}
        gridTemplateAreas={gridTemplateAreas}
        initialProduct={initialProduct}
        onCancel={mockOnCancel}
        onSubmit={mockOnSubmit}
      />,
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
