import React from "react";
import { useParams } from "react-router";
import { useGetProduct, ProductDTO } from "../../api/productsApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import ProductForm from "./ProductForm";

function ProductEdit() {
  const { productId } = useParams<string>();
  const { loading, error, product } = useGetProduct(productId!);

  const gridTemplateAreas = `
  "title sku"
  "basePrice price"
  "stocked image"
  "desc desc"
  `;

  // TODO: finalize this function
  const handleSubmit = (data: ProductDTO) => {
    console.log("DATA FROM FORM SUBMIT", data);
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <ErrorModal name={error.name} message={error.message} />}
      {product && (
        <ProductForm
          title="EDIT PRODUCT"
          gridTemplateAreas={gridTemplateAreas}
          initialData={product}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default ProductEdit;
