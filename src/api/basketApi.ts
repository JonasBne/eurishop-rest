/* eslint-disable max-len */
import { useQuery } from 'react-query';
import Product from '../domain/product';
import { CartItem, Cart } from '../domain/shoppingCart';
import api from './fetchHelper';
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

export const basketMapper = (products?: Product[], basketDTO?: BasketDTO[]): Cart | undefined => {
  if (!basketDTO || !products) return undefined;

  const cartItems: CartItem[] = products.map((product) => (
    { product, quantity: basketDTO.find((item) => item.productId === product.id)!.quantity }));
  return {
    items: cartItems,
  };
};

export const useGetBasket = () => {
  const { data, refetch: cartRefetch } = useQuery<BasketDTO[]>(['basket'], () => api.get(`${rootUrl}${basketUrls.base}`), { keepPreviousData: true });

  const productIds = data?.map((cartItem) => cartItem.productId) ?? [];

  const { products } = useGetMultipleProducts(productIds, productIds.length > 0);

  return {
    cart: basketMapper(products, data),
    cartRefetch,
  };
};
