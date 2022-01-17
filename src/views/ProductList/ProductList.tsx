import React from "react";
// import ProductTable from "../../components/products/ProductTable";
import { useGetProduct } from "../../api/productsApi";

function ProductList() {
  const { product } = useGetProduct("1");
  console.log(product);
  // TODO: load data here and pass it to ProductTable
  return <>test{/* <ProductTable /> */}</>;
}

export default ProductList;
