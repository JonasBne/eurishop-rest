import { ProductDTO } from "../api/productsApi";

// TODO: is this a good place to store this interface (since it's reused in several components such as Home, ShoppingCart, CartItem)
export interface Item {
  product: ProductDTO;
  quantity: number;
}
