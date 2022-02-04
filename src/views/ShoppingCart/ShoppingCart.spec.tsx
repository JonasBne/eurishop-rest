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
