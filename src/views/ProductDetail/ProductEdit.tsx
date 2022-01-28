import React from "react";
import { useParams, useNavigate } from "react-router";
import {
  useGetProduct,
  ProductDTO,
  UpdateProductDTOMethods,
  useGetProducts,
} from "../../api/productsApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import ProductForm from "./ProductForm";
import useUpdate from "../../hooks/useUpdate";
import toasts from "../../components/toasts";

function ProductEdit() {
  const { succesToast, failToast } = toasts();
  const navigate = useNavigate();
  const { productId } = useParams<string>();
  const { loading, error, product } = useGetProduct(productId!);
  const { refetch } = useGetProducts();
  const { update, error: updateError } = useUpdate();

  const gridTemplateAreas = `
  "title sku"
  "basePrice price"
  "stocked image"
  "desc desc"
  `;

  const handleSubmit = async (data: ProductDTO) => {
    const formattedData = {
      ...data,
      basePrice: +data.basePrice,
      price: +data.price,
    };

    const response = await update(
      UpdateProductDTOMethods.PUT,
      formattedData,
      formattedData.id
    );

    if (!response?.ok || updateError) {
      failToast();
    } else {
      succesToast();
      refetch();
      navigate(`/products/admin`);
    }
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
