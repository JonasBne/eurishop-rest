import React, { useState } from 'react';
import { useGetProducts } from '../../api/productsApi';
import Product from '../../domain/product';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import FlexBox from '../../components/FlexBox';
import LoadingSpinner from '../../components/LoadingSpinner';
import ProductCard from './ProductCard';
// import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { Cart } from '../../domain/shoppingCart';

// TODO: logica bundelen en unit testen Home.spec.ts
export function addProductToCard(card: Cart, product: Product) : Cart {
  return null;
}

function Home() {
  const { loading, error, products } = useGetProducts();
  const [cart, setCart] = useState<Cart>({
    items: [],
  });

  const handleBuy = (product: Product) => {
    setCart((preCard) => addProductToCard(preCard, product));

    // TODO: move logic to the addProductToCard function

    // if (cart?.items.find((item) => item.product.id === product.id)) {
    //   setCart((prevCart) => ({
    //     items: prevCart.items.map((item) =>
    //       item.product.id === product.id
    //         ? { ...item, quantity: item.quantity + 1 }
    //         : item
    //     ),
    //   }));
    // } else {
    //   setCart((prevCart) => ({
    //     items: [
    //       ...prevCart.items,
    //       {
    //         product,
    //         quantity: 1,
    //       },
    //     ],
    //   }));
    // }
  };

  // const handleBuy = (product: Product) => {
  //   if (cart.items.find((cartItem) => cartItem.product.id === product.id)) {
  //     setCart(
  //       cart.items.map((cartItem) =>
  //         cartItem.product.id === product.id
  //           ? { ...cartItem, quantity: CartItem.quantity + 1 }
  //           : CartItem
  //       )
  //     );
  //   } else {
  //     setCart((prevCartItems) => [
  //       ...prevCartItems,
  //       {
  //         ...product,
  //         quantity: 1,
  //       },
  //     ]);
  //   }
  // };

  // const handleUpdate = (action: string, cartItem: Item) => {
  //   if (action.includes("+")) {
  //     setCart((prevCartItems) =>
  //       prevCartItems.map((item) =>
  //         item.id === cartItem.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCart((prevCartItems) =>
  //       prevCartItems.map((item) =>
  //         item.id === cartItem.id
  //           ? { ...item, quantity: item.quantity - 1 }
  //           : item
  //       )
  //     );
  //   }
  // };

  // const handleClear = () => {
  //   setCart({
  //     items: [],
  //   });
  // };

  // TODO: add following functions: handleOrder (ShoppingCart)
  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {!loading && error && (
        <ErrorModal name={error.name} message={error.message} />
      )}
      {products && (
        <FlexBox>
          <FlexBox
            flexWrap="wrap"
            justifyContent="start"
            flexDirection="row"
            order={1}
            flexBasis="75%"
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onBuy={handleBuy}
                m="4rem 3rem"
              />
            ))}
          </FlexBox>
          <FlexBox order={2} flexBasis="25%" mt="2rem" height="fit-content">
            {/* <ShoppingCart
            // cartItems={cartItems}
            // onUpdate={handleUpdate}
            // onClear={handleClear}
            /> */}
          </FlexBox>
        </FlexBox>
      )}
    </>
  );
}

export default Home;
