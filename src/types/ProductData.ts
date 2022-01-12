import Product from "./Product";

interface ProductData extends Product {
  total: number;
  page: number;
  pageSize: number;
  selectedProducts: Product[];
}

export default ProductData;
