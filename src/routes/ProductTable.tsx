import React from "react";
import Navbar from "../components/general/Navbar";
import Table from "../components/products/Table";
import ProductsContextProvider from "../store/ProductsContextProvider";

function ProductTable() {
  return (
    <ProductsContextProvider>
      <Navbar />
      <Table />
    </ProductsContextProvider>
  );
}

export default ProductTable;
