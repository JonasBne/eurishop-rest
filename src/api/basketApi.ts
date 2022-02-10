/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
import { useQuery, useQueryClient, useMutation } from 'react-query';
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

interface PostBasketVariables {
  quantity: number;
  productId: string | number;
}

const postItemToBasket = async (productId: string | number, data: any) =>
  api.post(`${rootUrl}${basketUrls.update}/${productId}`, data);

const patchBasket = async (productId: string | number, data: any) =>
  api.patch(`${rootUrl}${basketUrls.update}/${productId}`, data);

const removeItemFromBasket = async (productId: string | number) =>
  api.remove(`${rootUrl}${basketUrls.update}/${productId}`);

export const basketMapper = (products?: Product[], basketDTO?: BasketDTO[]): Cart | undefined => {
  if (!basketDTO || !products) return undefined;

  const cartItems: CartItem[] = products.map((product) => ({
    product,
    quantity: basketDTO.find((item) => item.productId === product.id)!.quantity,
  }));
  return {
    items: cartItems,
  };
};

export const useGetBasket = () => {
  const { data, refetch: cartRefetch } = useQuery<BasketDTO[]>(
    ['basket'],
    () => api.get(`${rootUrl}${basketUrls.base}`),
    { keepPreviousData: true },
  );

  const productIds = data?.map((cartItem) => cartItem.productId) ?? [];

  const { products } = useGetMultipleProducts(productIds, productIds.length > 0);

  return {
    cart: basketMapper(products, data),
    cartRefetch,
  };
};

export const useMutationBasketPost = () => {
  const queryClient = useQueryClient();
  return useMutation<BasketDTO, Error, PostBasketVariables>(
    ({ quantity, productId }) => postItemToBasket(quantity, productId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('basket');
      },
    },
  );
};
