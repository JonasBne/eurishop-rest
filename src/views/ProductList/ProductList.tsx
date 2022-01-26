import React, { useState } from "react";
import { useNavigate } from "react-router";
import { UpdateProductDTOMethods, useGetProducts } from "../../api/productsApi";
import Table from "../../components/Table/Table";
import LoadingSpinner from "../../components/LoadingSpinner";
import sortBy from "../../utils/sortBy";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import Button from "../../components/Button";
import useUpdate from "../../hooks/useUpdate";

function ProductList() {
  const navigate = useNavigate();
  const { loading, error, products, refetch } = useGetProducts();
  const { remove, updateError } = useUpdate();

  const [sortExpression, setSortExpression] = useState<string>("");

  const handleRedirect = (productId: string) => {
    navigate(`/products/${productId}/edit`);
  };

  // TODO: provide feedback after delete
  const handleAction = (productId: string) => {
    remove(UpdateProductDTOMethods.DELETE, productId);

    if (!updateError) {
      refetch();
    }
  };

  const sortedProducts = sortBy(products ?? [], sortExpression);

  const columns = [
    {
      name: "id",
      label: "Product ID",
      sortable: false,
    },
    {
      name: "sku",
      label: "Product number",
      sortable: true,
    },
    {
      name: "title",
      label: "Title",
      sortable: true,
    },
    {
      name: "desc",
      label: "Description",
      sortable: false,
    },
    {
      name: "image",
      label: "Image URL",
      sortable: false,
    },
    {
      name: "stocked",
      label: "In stock",
      sortable: true,
    },
    {
      name: "basePrice",
      label: "Base price",
      sortable: true,
    },
    {
      name: "price",
      label: "Unit price",
      sortable: true,
    },
    {
      name: "actions",
      label: "Actions",
      sortable: false,
    },
  ];

  const handleAddProductClick = () => {
    navigate("/products/new");
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
            columns={columns}
            sortExpression={sortExpression}
            setSortExpression={setSortExpression}
            onRowClick={handleRedirect}
            onActionClick={handleAction}
            my="2.5rem"
            mx="2rem"
          />
        </>
      )}
    </>
  );
}

export default ProductList;
