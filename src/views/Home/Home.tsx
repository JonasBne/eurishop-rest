import React, { useState } from 'react';
import { useGetProducts } from '../../api/productsApi';
import Product from '../../domain/product';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import FlexBox from '../../components/FlexBox';
import LoadingSpinner from '../../components/LoadingSpinner';
import ProductCard from './ProductCard';
// import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { Cart, CartItem } from '../../domain/shoppingCart';

export function addProductToCart(cart: Cart | undefined, product: Product): Cart {
  if (cart && cart.items.find((item) => item.product.id === product.id)) {
    return {
      items: cart.items.map((item) => (item.product.id === product.id
        ? { ...item, quantity: item.quantity + 1 } : item)),
    };
  } if (cart) {
    return {
      items: [...cart.items, { product, quantity: 1 }],
    };
  }
  return {
    items: [],
  };
}

// eslint-disable-next-line max-len
export function updateProductQuantityInCart(cart: Cart | undefined, cartItem: CartItem, action: string) {
  if (cart && action.includes('+')) {
    return {
      items: cart.items.map((item) => (item.product.id === cartItem.product.id
        ? { ...item, quantity: item.quantity + 1 } : item)),
    };
  } if (cart && action.includes('-')) {
    return {
      items: cart.items.map((item) => (item.product.id === cartItem.product.id
        ? { ...item, quantity: item.quantity - 1 } : item)),
    };
  } return cart;
}

function Home() {
  const { loading, error, products } = useGetProducts();
  const [cart, setCart] = useState<Cart>();

  const handleBuy = (product: Product) => {
    setCart((preCard) => addProductToCart(preCard, product));
  };

  const handleUpdate = (cartItem: CartItem, action: string) => {
    setCart((preCard) => updateProductQuantityInCart(preCard, cartItem, action));
  };

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

  const handleClear = () => {
    setCart({
      items: [],
    });
  };

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
            <ShoppingCart
              cartItems={cartItems}
              onUpdate={handleUpdate}
              onClear={handleClear}
            />
          </FlexBox>
        </FlexBox>
      )}
    </>
  );
}

export default Home;
