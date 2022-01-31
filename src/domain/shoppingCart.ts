import { ProductDTO } from '../api/productsApi';

export interface CartItem {
  product: ProductDTO;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}
