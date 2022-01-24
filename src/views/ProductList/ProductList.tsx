import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useGetProducts } from "../../api/productsApi";
import Table from "../../components/Table/Table";
import LoadingSpinner from "../../components/LoadingSpinner";
import sortBy from "../../utils/sortBy";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import Button from "../../components/Button";

function ProductList() {
  const navigate = useNavigate();
  const { loading, error, products } = useGetProducts();
  const [showForm, setShowForm] = useState<boolean>(false);

  const [sortExpression, setSortExpression] = useState<string>("");

  // TODO: this logic should be inside the table (or even SortableTableHead)
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
  // YES this is the place
  const handleRedirect = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  // TODO: is there a better way to do this?
  // const sortedProducts = sortBy(products || [], sortExpression);
  let sortedProducts = [];
  if (products !== undefined) {
    sortedProducts = sortBy(products, sortExpression);
  }

  const handleAddProductClick = () => {
    setShowForm(!showForm);
  };

  // TODO:
  // Better to create Button type (primary, secondary) then using
  // backgroundColor prop

  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {error && <ErrorModal name={error.name} message={error.message} />}
      {!loading && !error && (
        <>
          <Button m="2rem 0 0 2rem" onClick={handleAddProductClick}>
            Add product +
          </Button>
          <Table
            data={sortedProducts}
            onSort={handleSort}
            sortExpression={sortExpression}
            onRowClick={handleRedirect}
          />
        </>
      )}
    </>
  );
}

export default ProductList;
