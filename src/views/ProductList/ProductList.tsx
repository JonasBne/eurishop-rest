import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useGetProducts } from "../../api/productsApi";
import Table from "../../components/Table";
import LoadingSpinner from "../../components/LoadingSpinner";
import sortBy from "../../utils/sortBy";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import Button from "../../components/Button";

function ProductList() {
  const navigate = useNavigate();
  const { loading, error, products } = useGetProducts();
  const [showForm, setShowForm] = useState<boolean>(false);

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

  const handleAddProductClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {error && <ErrorModal name={error.name} message={error.message} />}
      {!loading && !error && (
        <>
          <Button
            backgroundColor="#28a745"
            m="2rem 0 0 2rem"
            onClick={handleAddProductClick}
          >
            Add product +
          </Button>
          <Table
            data={sortedProducts}
            onSort={handleSort}
            sortExpression={sortExpression}
            onRedirect={handleRedirect}
          />
        </>
      )}
    </>
  );
}

export default ProductList;
