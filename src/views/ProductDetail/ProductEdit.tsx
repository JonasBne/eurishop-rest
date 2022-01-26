import React from "react";
import { useParams } from "react-router";
import {
  useGetProduct,
  ProductDTO,
  UpdateProductDTOMethods,
  mapProductUpdateMethodsToUrls,
} from "../../api/productsApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import ProductForm from "./ProductForm";
import useUpdate from "../../hooks/useUpdate";

function ProductEdit() {
  const { productId } = useParams<string>();
  const { loading, error, product } = useGetProduct(productId!);
  const { update } = useUpdate();

  const gridTemplateAreas = `
  "title sku"
  "basePrice price"
  "stocked image"
  "desc desc"
  `;

  // TODO: redirect a user back to the table after a succesful request
  const handleSubmit = (data: ProductDTO) => {
    const formattedData = {
      ...data,
      basePrice: +data.basePrice,
      price: +data.price,
    };
    update(
      mapProductUpdateMethodsToUrls(UpdateProductDTOMethods.PUT, data.id),
      UpdateProductDTOMethods.PUT,
      formattedData
    );
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
          mt="2rem"
          mx="auto"
        />
      )}
    </>
  );
}

export default ProductEdit;
