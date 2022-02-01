import React, { useEffect } from 'react';
import { useGetProducts } from '../../api/productsApi';
import Product from '../../domain/product';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import FlexBox from '../../components/FlexBox';
import LoadingSpinner from '../../components/LoadingSpinner';
import ProductCard from './ProductCard';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { Cart, CartItem } from '../../domain/shoppingCart';
import { useGetBasket, useUpdateBasket } from '../../api/basketApi';
import rootUrl from '../../api/rootUrl';
import toasts from '../../components/toasts';

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
  const { succesToast, failToast } = toasts();
  const { loading, error, products } = useGetProducts();
  const {
    error: basketError, data: basketData, post, patch, remove,
  } = useUpdateBasket();
  const { cart, refetch } = useGetBasket();
  const cartItems = cart?.items ?? [];

  useEffect(() => {
    if (basketError) {
      failToast(basketError);
    }
    if (basketData) {
      succesToast('Item succesfully added!');
      refetch();
    }
  }, [basketError, basketData]);

  // TODO: is there a better way for working with the url's?
  const handleBuy = (productId: string | number) => {
    post({ quantity: 1 }, `${rootUrl}api/basket/xyz/product`, productId);
  };

  const handleUpdate = (quantity: number, productId: string | number) => {
    if (quantity === 0) remove(`${rootUrl}api/basket/xyz/product`, productId);
    if (quantity > 0) patch({ quantity }, `${rootUrl}api/basket/xyz/product`, productId);
  };

  const handleClear = () => {
    remove(`${rootUrl}api/basket/xyz`);
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
