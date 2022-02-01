import Product from '../domain/product';

export interface BasketDTO {
  id: number;
  productId: number;
  quantity: number;
}

// const url = 'api/basket/xyz';

// TODO: add this Cart | undefined at the end
export const basketMapper = (products?: Product[], dto?: BasketDTO[]) => {
  if (!dto || !products) return undefined;

  const cartItems = products.filter((product) => dto.find((item) => item.productId === product.id));
  return cartItems;
};
