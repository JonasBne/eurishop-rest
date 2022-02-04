import Product from './product';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}

export function calculateTotalCostPerCartItem(cartItem: CartItem) {
  const cost = (cartItem.quantity * cartItem.product.price).toFixed(2);
  return cost;
}
