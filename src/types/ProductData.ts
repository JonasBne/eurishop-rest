import Product from "./Product";

interface ProductDTO extends Product {
  total: number;
  page: number;
  pageSize: number;
  selectedProducts: Product[];
}
