import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useGetProducts } from "../../api/productsApi";
import Table from "../../components/Table";
import LoadingSpinner from "../../components/LoadingSpinner";
import sortBy from "../../utils/sortBy";
import ErrorModal from "../../components/ErrorModal/ErrorModal";

function ProductList() {
  const navigate = useNavigate();
  const { loading, error, products } = useGetProducts();
  const [sortExpression, setSortExpression] = useState<string>("");

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

  // TODO: is it ok to store the handler here since this is the smart component?
  const handleRedirect = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  // TODO: is there a better way to do this?
  let sortedProducts = [];
  if (products !== undefined) {
    sortedProducts = sortBy(products, sortExpression);
  }

  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {error && <ErrorModal name={error.name} message={error.message} />}
      {/* TODO: is there a more clean way to check that products has been loaded and the array is available */}
      {!loading && !error && products !== undefined && (
        <Table
          data={sortedProducts}
          onSort={handleSort}
          sortExpression={sortExpression}
          onRedirect={handleRedirect}
          margin="4rem auto"
        />
      )}
    </>
  );
}

export default ProductList;
