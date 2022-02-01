/* eslint-disable max-len */
import Product from '../domain/product';
import { CartItem, Cart } from '../domain/shoppingCart';
import useFetch from '../hooks/useFetch';
import { useGetProducts } from './productsApi';
import rootUrl from './rootUrl';

export interface BasketDTO {
  id: number;
  productId: number;
  quantity: number;
}

const url = 'api/basket/xyz';

export const basketMapper = (data?: Product[], dto?: BasketDTO[]): Cart | undefined => {
  if (!dto || !data) return undefined;

  const filteredProducts: Product[] = data.filter((product) => dto.find((item) => item.productId === product.id));

  const cartItems: CartItem[] = filteredProducts.map((product) => (
    { product, quantity: dto.find((item) => item.productId === product.id)!.quantity }));
  return {
    items: cartItems,
  };
};

// TODO: rename to cartItems
export const useGetBasket = () => {
  const { products } = useGetProducts();
  const { loading, error, data } = useFetch<BasketDTO[]>(`${rootUrl}${url}`);
  return {
    loading,
    error,
    cart: basketMapper(products, data),
  };
};
