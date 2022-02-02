/* eslint-disable max-len */
import { useMemo } from 'react';
import Product from '../domain/product';
import { CartItem, Cart } from '../domain/shoppingCart';
import useFetch from '../hooks/useFetch';
import useUpdate from '../hooks/useUpdate';
import { useGetMultipleProducts } from './productsApi';
import rootUrl from './rootUrl';

export interface BasketDTO {
  id: number;
  productId: number;
  quantity: number;
}

export const basketUrls = {
  base: 'api/basket/xyz',
  update: 'api/basket/xyz/product',
};

export const basketMapper = (data?: Product[], dto?: BasketDTO[]): Cart | undefined => {
  if (!dto || !data) return undefined;

  const filteredProducts: Product[] = data.filter((product) => dto.find((item) => item.productId === product.id));

  const cartItems: CartItem[] = filteredProducts.map((product) => (
    { product, quantity: dto.find((item) => item.productId === product.id)!.quantity }));
  return {
    items: cartItems,
  };
};

export const useGetBasket = () => {
  const {
    loading, error, data, refetch,
  } = useFetch<BasketDTO[]>(`${rootUrl}${basketUrls.base}`);

  // let productIds: string [] | number[] = [];

  // if (data) {
  //   productIds = data.map((cartItem) => cartItem.productId);
  // }

  const productIds = useMemo(() => data?.map((cartItem) => cartItem.productId), [data]) ?? [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { products } = useGetMultipleProducts(productIds);

  return {
    loading,
    error,
    cart: basketMapper(products, data),
    refetch,
  };
};

export const useUpdateBasket = () => {
  const {
    loading, error, post, put, patch, remove, data,
  } = useUpdate<BasketDTO[]>();
  return {
    loading,
    error,
    post,
    put,
    patch,
    remove,
    data,
  };
};
