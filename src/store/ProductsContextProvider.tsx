import React, { ReactNode } from "react";
import useGetProducts from "../hooks/useGetProducts";
import ProductsContext from "./ProductsContext";
import Product from "../types/Product";

interface ProductsContextProviderProps {
  children: ReactNode;
}

interface ProductsResponse {
  loading: boolean;
  error: string;
  data: Product[];
}

function ProductsContextProvider({ children }: ProductsContextProviderProps) {
  const {
    loading,
    error,
    data: products,
  } = useGetProducts(
    "https://euricom-test-api.herokuapp.com/api/products?page=0&pageSize=100"
  ) as ProductsResponse;

  return (
    // TODO: is useMemo() really necessary in this case?
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ProductsContext.Provider value={{ loading, error, products }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
