import { ProductDTO } from "../api/productsApi";

// TODO: is this a good place to store this interface (since it's reused in several components such as Home, ShoppingCart, CartItem)
export interface Item extends ProductDTO {
  quantity: number;
}

// TODO: is this a good place to store this interface (since it's reused in several components such as Home, ShoppingCart, CartItem)
export interface BasketItem {
  product: ProductDTO;
  quantity: number;
}

export interface Basket {
  items: BasketItem[];
  discount: number;
}
