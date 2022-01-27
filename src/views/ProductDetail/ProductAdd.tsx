import React from "react";
import { useNavigate } from "react-router";
import {
  ProductDTO,
  UpdateProductDTOMethods,
  useGetProducts,
} from "../../api/productsApi";
import ProductForm from "./ProductForm";
import useUpdate from "../../hooks/useUpdate";

function ProductAdd() {
  const navigate = useNavigate();
  const { refetch } = useGetProducts();
  const { update, updateError } = useUpdate();

  const gridTemplateAreas = `
  "title sku"
  "basePrice price"
  "stocked image"
  "desc desc"
  `;

  // TODO: @Peter - why does TypeScript not complain that the data object holds strings for basePrice and Price?
  // TODO: redirect user back to table when success
  // TODO: provide feedback to the end user
  const handleSubmit = async (data: ProductDTO) => {
    const formattedData = {
      ...data,
      basePrice: +data.basePrice,
      price: +data.price,
    };

    await update(UpdateProductDTOMethods.POST, formattedData, formattedData.id);

    if (!updateError) {
      navigate(`/products/admin`);
      refetch();
    }
  };

  return (
    <ProductForm
      title="NEW PRODUCT"
      gridTemplateAreas={gridTemplateAreas}
      onSubmit={handleSubmit}
      mt="2rem"
      mx="auto"
    />
  );
}

export default ProductAdd;
