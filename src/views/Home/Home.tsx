/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useGetProducts } from '../../api/productsApi';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import FlexBox from '../../components/FlexBox';
import LoadingSpinner from '../../components/LoadingSpinner';
import ProductCard from './ProductCard';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import {
  useGetBasket,
  basketUrls,
  BasketDTO,
  useMutationBasketPost,
  useMutationBasketPatch,
} from '../../api/basketApi';
import rootUrl from '../../api/rootUrl';
import toasts from '../../components/toasts';
import Button from '../../components/Button';
import useUpdate from '../../hooks/useUpdate';

function Home() {
  const { succesToast, failToast } = toasts();
  const [page, setPage] = useState<number>(0);
  const { isLoading, error, products } = useGetProducts(page);
  const { error: basketError, data: basketData, remove } = useUpdate<BasketDTO>();
  const { mutate: post, error: postBasketError, data: postedData } = useMutationBasketPost();
  const { mutate: patch, error: patchBasketError, data: patchedData } = useMutationBasketPatch();
  const { cart, cartRefetch } = useGetBasket();
  const cartItems = cart?.items ?? [];

  useEffect(() => {
    if (basketError) {
      failToast(basketError);
    }
    if (basketData) {
      succesToast('Success!');
      cartRefetch();
    }
  }, [basketError, basketData]);

  const handleBuy = (productId: string | number) => {
    post({
      quantity: 1,
      productId,
    });
  };

  const handleUpdate = (quantity: number, productId: string | number) => {
    if (quantity === 0) remove(`${rootUrl}api/basket/xyz/product/${productId}`);
    if (quantity > 0) {
      patch({
        quantity,
        productId,
      });
    }
  };

  const handleClear = () => {
    remove(`${rootUrl}${basketUrls.base}`);
  };

  const handleLoadMoreData = () => {
    setPage((prePage) => prePage + 1);
  };

  return (
    <>
      {isLoading && !error && <LoadingSpinner />}
      {!isLoading && error && <ErrorModal name={error.name} message={error.message} />}
      {products && (
        <>
          <FlexBox>
            <FlexBox flexWrap="wrap" justifyContent="start" flexDirection="row" order={1} flexBasis="75%">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} onBuy={handleBuy} m="4rem 3rem" />
              ))}
            </FlexBox>
            <FlexBox order={2} flexBasis="25%" mt="2rem" height="fit-content">
              <ShoppingCart cartItems={cartItems} onUpdate={handleUpdate} onClear={handleClear} />
            </FlexBox>
          </FlexBox>
          <FlexBox justifyContent="center" mb="2rem">
            <Button type="button" variant="primary" mx="1rem" px="2rem" onClick={handleLoadMoreData}>
              LOAD MORE...
            </Button>
          </FlexBox>
        </>
      )}
    </>
  );
}

export default Home;
