/* eslint-disable max-len */
import Product from '../domain/product';
import { CartItem, Cart } from '../domain/shoppingCart';

export interface BasketDTO {
  id: number;
  productId: number;
  quantity: number;
}

// const url = 'api/basket/xyz';

export const basketMapper = (data?: Product[], dto?: BasketDTO[]): Cart | undefined => {
  if (!dto || !data) return undefined;

  const filteredProducts: Product[] = data.filter((product) => dto.find((item) => item.productId === product.id));

  const cartItems: CartItem[] = filteredProducts.map((product) => (
    { product, quantity: dto.find((item) => item.productId === product.id)!.quantity }));
  return {
    items: cartItems,
  };
};
