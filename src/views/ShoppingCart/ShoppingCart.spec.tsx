/* eslint-disable max-len */
import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import ShoppingCart from './ShoppingCart';
import Product from '../../domain/product';
import theme from '../../theme/theme';
import { CartItem, calculateTotalCartCost } from '../../domain/shoppingCart';

const mockOnUpdate = jest.fn();
const mockOnClear = jest.fn();

describe('shopping cart', () => {
  let cartItems: CartItem[];
  beforeEach(() => {
    cartItems = [
      {
        product: {
          title: 'product1',
          price: 5.0,
        } as Product,
        quantity: 1,
      },
      {
        product: {
          title: 'product2',
          price: 10.0,
        } as Product,
        quantity: 1,
      },
    ];
  });

  test('button click triggers onClear event', () => {
    render(
      <ThemeProvider theme={theme}>
        <ShoppingCart cartItems={cartItems} onUpdate={mockOnUpdate} onClear={mockOnClear} />
      </ThemeProvider>,
    );

    const clearBtn = screen.getByRole('button', { name: /clear/i });
    userEvent.click(clearBtn);

    expect(mockOnClear).toHaveBeenCalledTimes(1);
  });

  test('renders a total cost', () => {
    render(
      <ThemeProvider theme={theme}>
        <ShoppingCart cartItems={cartItems} onUpdate={mockOnUpdate} onClear={mockOnClear} />
      </ThemeProvider>,
    );
    const totalCost = parseInt(calculateTotalCartCost(cartItems), 10);
    expect(totalCost).toBe(15);
  });

  test('renders two cart items', () => {
    render(
      <ThemeProvider theme={theme}>
        <ShoppingCart cartItems={cartItems} onUpdate={mockOnUpdate} onClear={mockOnClear} />
      </ThemeProvider>,
    );

    const items = screen.getAllByRole('cart-item');

    expect(items.length).toBe(2);
  });
});

/*

test("cart", () => {
   const onUpdate = jest.fn()
   const data = {}
   render(<ShoppingCard data={data} onUpdate={onUpdate})

   // screen.debug()
   const button = screen.getByRole('button', { content : '+'})
   fireEvent.click(button)

   // look at ARIA roles
   // dit kan gebruikt worden om te tellen hoeveel items er getoond worden bv
   const items = screen.getAllByRole('card-item);

   within(items[0]).getByRole('button')

   const elem = screen.getByTestId('value)
   expect(elem).thHqveConten("2334")

   expect(onUpdate).toHaveBeenCalledWith(1, 2);
})

*/
