import React from "react";
import Navbar from "../components/general/Navbar";
import ProductTable from "../components/products/ProductTable";
import ProductsContextProvider from "../store/ProductsContextProvider";

function ProductTableAdmin() {
  return (
    <ProductsContextProvider>
      <Navbar />
      <ProductTable />
    </ProductsContextProvider>
  );
}

export default ProductTableAdmin;
