import React from "react";
import Table from "../../components/Table";
// import ProductTable from "../../components/products/ProductTable";
import { useGetProducts } from "../../api/productsApi";
import LoadingSpinner from "../../components/LoadingSpinner";

function ProductList() {
  const { loading, error, products } = useGetProducts();

  // TODO: is there a better way to avoid the ?. notation?
  const tableData = products?.map((product) => {
    return {
      ...product,
      stocked: product.stocked ? "Yes" : "No",
    };
  });

  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {products === undefined && <LoadingSpinner />}
      {!loading && error && <div>Something went wrong...</div>}
      {/* TODO: is there a more clean way to check that products has been loaded and the array is available */}
      {!loading && !error && tableData !== undefined && (
        <Table data={tableData} />
      )}
    </>
  );
}

export default ProductList;
