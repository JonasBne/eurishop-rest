import React from "react";
// import ProductTable from "../../components/products/ProductTable";
import useGetProducts from "../../api/productsApi";

function ProductList() {
  const { data } = useGetProducts();
  console.log(data);
  // TODO: load data here and pass it to ProductTable
  return <>test{/* <ProductTable /> */}</>;
}

export default ProductList;
