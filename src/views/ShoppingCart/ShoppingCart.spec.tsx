/* eslint-disable max-len */
import React from 'react';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import ShoppingCart from './ShoppingCart';
import Product from '../../domain/product';
import theme from '../../theme/theme';
import { CartItem } from '../../domain/shoppingCart';

/*

Te testen:
- Is het aantal basket items correct?
- Worden de buttons gerenderd?
- Wordt de functie gecalled bij onClick op button van een product?
- Wordt de basket gerenderd?

*/

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
        quantity: 2,
      },
    ];
  });
  test('renders two buttons', () => {
    const onUpdate = jest.fn();
    const onClear = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <ShoppingCart cartItems={cartItems} onUpdate={onUpdate} onClear={onClear} />
      </ThemeProvider>,
    );
    screen.debug();
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

export {};
