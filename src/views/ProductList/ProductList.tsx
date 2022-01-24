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

  const handleRedirect = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  const sortedProducts = sortBy(products ?? [], sortExpression);

  const handleAddProductClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {error && <ErrorModal name={error.name} message={error.message} />}
      {products && (
        <>
          <Button
            m="2rem 0 0 2rem"
            p="0.5rem 2rem"
            variant="primary"
            onClick={handleAddProductClick}
          >
            Add product +
          </Button>
          <Table
            data={sortedProducts}
            sortExpression={sortExpression}
            setSortExpression={setSortExpression}
            onRowClick={handleRedirect}
          />
        </>
      )}
    </>
  );
}

export default ProductList;
