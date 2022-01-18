import React from "react";
import { useGetProducts } from "../../api/productsApi";
// import Table from "../../components/Table";
import LoadingSpinner from "../../components/LoadingSpinner";
// import sortBy from "../../utils/sortBy";

function ProductList() {
  const { loading, error, products } = useGetProducts();
  console.log(products);
  // const [sortBy, setSortBy] = useState<string | undefined>("");

  // TODO: is there a better way to avoid the ?. notation?
  // const tableData = products?.map((product) => {
  //   return {
  //     ...product,
  //     stocked: product.stocked ? "Yes" : "No",
  //   };
  // });

  // const handleSort = (sortByField: string) => {
  //   setSortBy((prevSortBy) => {
  //     if (prevSortBy?.includes("+")) {
  //       return `-${sortByField}`;
  //     }
  //     if (prevSortBy?.includes("-")) {
  //       return ``;
  //     }
  //     return sortByField;
  //   });
  // };

  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {!loading && error && <div>Something went wrong...</div>}
      {/* TODO: is there a more clean way to check that products has been loaded and the array is available */}
      {/* {!loading && !error && tableData !== undefined && (
        <Table data={tableData} onSort={handleSort} />
      )} */}
    </>
  );
}

export default ProductList;
