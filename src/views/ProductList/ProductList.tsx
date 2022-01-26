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

  const [sortExpression, setSortExpression] = useState<string>("");

  const handleRedirect = (productId: string, event: React.MouseEvent) => {
    console.log(event.target);
    navigate(`/products/${productId}/edit`);
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
      name: "remove",
      label: "Remove",
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
            my="2.5rem"
            mx="2rem"
          />
        </>
      )}
    </>
  );
}

export default ProductList;
