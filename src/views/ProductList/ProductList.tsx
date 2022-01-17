import React from "react";
// import ProductTable from "../../components/products/ProductTable";
import { useGetProducts } from "../../api/productsApi";
import LoadingSpinner from "../../components/LoadingSpinner";

function ProductList() {
  const { loading, error, products } = useGetProducts();
  console.log(products);

  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {!loading && error && <div>Something went wrong...</div>}
    </>
  );
}

export default ProductList;
