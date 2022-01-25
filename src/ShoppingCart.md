```tsx

// home.tsx (renders the products overview and shopping cart)

function Home() {
  const [cartItems, setCartItems] = useState<CartItem>([])

  
  const handleBuy = (item) => {
    setCartItems(prevCartItems => [...prevCartItems, item ])
  }

  ...

    return (
      <>
      {loading && !error && <LoadingSpinner />}
      {!loading && error && (
        <ErrorModal />
      )}
      {products && (
        <FlexBox>
          <FlexBox>
            {products.map((product) => {
              return (
                <ProductCard product={product} onBuy={handleBuy} m="2rem" />
              );
            })}
          </FlexBox>
          <FlexBox>
            <ShoppingCart cartItems={cartItems} />
          </FlexBox>
        </FlexBox>
      )}
    </>
}


// CartItem.tsx

function CartItem(item, onRemove, onAdd) {
  const handleRemove = (itemId: string) => {
    onRemove(itemId)
  }

  const handleAdd = () => {
    onAdd()
  }

  return (
    <li>
      <Header>{item.title}</Header>
      <div>
        <span>{item.price}</span>
        <span>{item.amount}</span>
      <div>
      <div>
          <Button type="button" variant="primary" onClick={() => handleRemove({item.id})}>-</Button>
          <Button type="button" variant="primary" onClick={handleAdd}>+</Button>
      </div>
    </li>
  )
}

export default CartItem;


// ShoppingCart.tsx 

function ShoppingCart({cartItems}) {

  return (
    <FlexBox>
      <Box>
        <Header as="h2" variant="primary">Your Cart</Header>       
        <Header as="h4" variant="secondary">`# products in cart: ${cartItems.length}`</Header>
      </Box>
      <ul>
         {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onAdd={handleAdd}
            />
      ))}
      </ul>
      <Box>
        <Button type="reset" variant="danger">Clear</Button>
        <Button type="submit" variant="primary">Order</Button>
      </Box>
    </FlexBox>
  )

}

```