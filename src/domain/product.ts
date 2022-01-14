import { ProductsDTO } from "../api/productsApi";

export interface Product extends ProductsDTO {
  createdAt: Date;
}
