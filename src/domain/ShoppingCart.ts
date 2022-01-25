import { ProductDTO } from "../api/productsApi";

export interface Item {
  product: ProductDTO;
  quantity: number;
}
