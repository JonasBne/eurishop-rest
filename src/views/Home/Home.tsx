import React, { useEffect } from 'react';
import { useGetProducts } from '../../api/productsApi';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import FlexBox from '../../components/FlexBox';
import LoadingSpinner from '../../components/LoadingSpinner';
import ProductCard from './ProductCard';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { useGetBasket, useUpdateBasket, basketUrls } from '../../api/basketApi';
import rootUrl from '../../api/rootUrl';
import toasts from '../../components/toasts';
import Button from '../../components/Button';

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
      succesToast('Success!');
      refetch();
    }
  }, [basketError, basketData]);

  const handleBuy = (productId: string | number) => {
    post({ quantity: 1 }, `${rootUrl}${basketUrls.update}`, productId);
  };

  const handleUpdate = (quantity: number, productId: string | number) => {
    if (quantity === 0) remove(`${rootUrl}api/basket/xyz/product`, productId);
    if (quantity > 0) patch({ quantity }, `${rootUrl}${basketUrls.update}`, productId);
  };

  const handleClear = () => {
    remove(`${rootUrl}${basketUrls.base}`);
  };

  // TODO: add following functions: handleOrder (ShoppingCart)
  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {!loading && error && (
        <ErrorModal name={error.name} message={error.message} />
      )}
      {products && (
        <>
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
          <FlexBox justifyContent="center" mb="2rem">
            <Button type="button" variant="primary" mx="1rem" px="2rem">Load more</Button>
          </FlexBox>
        </>
      )}
    </>
  );
}

export default Home;
