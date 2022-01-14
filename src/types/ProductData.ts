import Product from "./Product";

// TODO: move to API
interface ProductData extends Product {
  total: number;
  page: number;
  pageSize: number;
  selectedProducts: Product[];
}

export default ProductData;
