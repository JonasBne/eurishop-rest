import React, { useState } from "react";
import { useGetProducts } from "../../api/productsApi";
import Table from "../../components/Table";
import LoadingSpinner from "../../components/LoadingSpinner";
import sortBy from "../../utils/sortBy";

function ProductList() {
  const { loading, error, products } = useGetProducts();
  const [sortExpression, setSortExpression] = useState<string>("-stocked");

  const handleSort = (sortByField: string) => {
    setSortExpression((prevSortExp) => {
      if (prevSortExp?.includes("+")) {
        return `-${sortByField}`;
      }
      if (prevSortExp?.includes("-")) {
        return ``;
      }
      return `+${sortByField}`;
    });
  };

  let sortedProducts = [];
  if (products !== undefined) {
    sortedProducts = sortBy(products, sortExpression);
  }

  console.log(sortedProducts);

  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {!loading && error && <div>Something went wrong...</div>}
      {/* TODO: is there a more clean way to check that products has been loaded and the array is available */}
      {!loading && !error && products !== undefined && (
        <Table data={sortedProducts} onSort={handleSort} />
      )}
    </>
  );
}

export default ProductList;
