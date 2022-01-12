import { createContext } from "react";
import Product from "../types/Product";

export interface ProductsContextProps {
  loading: boolean;
  error: string;
  products: Product[];
}

const ProductsContext = createContext<ProductsContextProps>({
  loading: false,
  error: "",
  products: [],
});

export default ProductsContext;
