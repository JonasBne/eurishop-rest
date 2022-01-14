import { createContext } from "react";
import Product from "../types/Product";

export interface ProductsContextProps {
  loading: boolean;
  error: string;
  products: Product[];
}

// TODO: keep loading and error local
// or create a global error context (only context)
const ProductsContext = createContext<ProductsContextProps>({
  loading: false,
  error: "",
  products: [],
});

export default ProductsContext;
