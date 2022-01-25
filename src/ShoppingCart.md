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
  const handleRemove = () => {
    onRemove()
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
          <Button type="button" variant="primary" onClick={handleRemove}>-</Button>
          <Button type="button" variant="primary" onClick={handleAdd}>+</Button>
      </div>
    </li>
  )
}


// ShoppingCart.tsx 

function ShoppingCart({cartItems}) {

  return (

  )

}

```