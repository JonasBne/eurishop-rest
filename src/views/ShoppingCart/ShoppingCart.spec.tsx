/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingCart from './ShoppingCart';
import Product from '../../domain/product';
import { CartItem } from '../../domain/shoppingCart';

// TODO: test here ineens alles

const container = document.createElement('div');
// @ts-ignore
const root = ReactDOM.createRoot(container);

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
    root.render(<ShoppingCart cartItems={cartItems} onUpdate={onUpdate} onClear={onClear} />, container);
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
