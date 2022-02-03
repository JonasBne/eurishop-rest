/* eslint-disable max-len */
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import Product from '../domain/product';
import { CartItem, Cart } from '../domain/shoppingCart';
import useUpdate from '../hooks/useUpdate';
import { fetchData, useGetMultipleProducts } from './productsApi';
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
  if (data && dto) {
    const filteredProducts: Product[] = data.filter((product) => dto.find((item) => item.productId === product?.id));

    const cartItems: CartItem[] = filteredProducts.map((product) => (
      { product, quantity: dto.find((item) => item.productId === product.id)!.quantity }));
    return {
      items: cartItems,
    };
  }
  return undefined;
};

export const useGetBasket = () => {
  const { data, refetch: cartRefetch } = useQuery<BasketDTO[]>(['basket'], () => fetchData(`${rootUrl}${basketUrls.base}`), { keepPreviousData: true });

  const productIds = useMemo(() => data?.map((cartItem) => cartItem.productId) ?? [], [data]);

  const { products } = useGetMultipleProducts(productIds);

  return {
    cart: basketMapper(products, data),
    cartRefetch,
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
