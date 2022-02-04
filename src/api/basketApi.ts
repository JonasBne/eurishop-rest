/* eslint-disable max-len */
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

export const basketMapper = (products?: Product[], basketDto?: BasketDTO[]): Cart | undefined => {
  if (!basketDto || !products) return undefined;

  const cartItems: CartItem[] = products.map((product) => (
    { product, quantity: basketDto.find((item) => item.productId === product.id)!.quantity }));
  return {
    items: cartItems,
  };
};

export const useGetBasket = () => {
  const {
    loading, error, data, refetch: cartRefetch,
  } = useFetch<BasketDTO[]>(`${rootUrl}${basketUrls.base}`);

  const productIds = data?.map((cartItem) => cartItem.productId) ?? [];

  const { products } = useGetMultipleProducts(productIds, productIds.length > 0);

  return {
    loading,
    error,
    cart: basketMapper(products, data),
    cartRefetch,
  };
};

// TODO: niet nodig, meteen destructureren  in component

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
