```tsx

// home.tsx (renders the products overview and shopping cart)

function Home() {
  // No need for context in this stage since it only has to be shown on the homepage
  const [cartItems, setCartItems] = useState<CartItem>([])
  
  const handleBuy = (item) => {
    setCartItems(prevCartItems => [...prevCartItems, item ])
  }

 // best practice: state wijzigen waar deze gedefinieerd wordt
 // indien werken met context: state bijhouden in context, maar ook functie om state te wijzigen in deze context bijhouden
  const handleRemove = (itemId: string) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId)
    setCartItems(updatedCartItems)
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
            <ShoppingCart cartItems={cartItems} onRemove={handleRemove} onClear={handleClear}/>
          </FlexBox>
        </FlexBox>
      )}
    </>
}

// ShoppingCart.tsx

function ShoppingCart({cartItems, onRemove}) {
  // all logic regarding products stored inside ShoppingCart (to make sure this logic only has to be written once)

  
  const handleClear = () => {
    setCartItems([])
  }

  const handleOrder = () => {
    // some payment logic here
  }

  return (
    <FlexBox>
      <Box>
        <Header as="h2" variant="primary">Your Cart</Header>       
        <Header as="h4" variant="secondary">`# products in cart: ${cartItems.length}`</Header>
      </Box>
        {cartItems.length === 0 && <span>There is nothing here...</span>}
        {cartItems.length > 0 && 
          <ul>
            {cartItems.map((item) => (
                  <CartItem
                      key={item.id}
                      item={item}
                      onRemove={handleRemove}
                    />
              ))}
        </ul>
        }
      <Box>
        <Button type="button" variant="danger" onClick={handleClear}>Clear</Button>
        <Button type="button" variant="primary" onClick={handleOrder}>Order</Button>
      </Box>
    </FlexBox>
  )

}

// CartItem.tsx

function CartItem(item, onRemove) {
  const handleRemove = (itemId: string) => {
    onRemove(itemId)
  }

  return (
    <li>
      <Header>{item.title}</Header>
      <div>
        <span>{item.price}</span>
        <span>{item.amount}</span>
      <div>
      {/* Is it ok in this stage that a products only gets added once? So there is no need for a + button? */}
      <Button type="button" variant="primary" onClick={() => handleRemove({item.id})}>-</Button>
    </li>
  )
}

```