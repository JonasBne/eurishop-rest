import { ProductDTO } from "../api/productsApi";

export interface CartItem {
  product: ProductDTO;
  quantity: number;
}

export interface ShoppingCart {
  items: CartItem[];
  discount: number;
}
