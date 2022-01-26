import React from "react";
import { useNavigate } from "react-router";
import { ProductDTO, UpdateProductDTOMethods } from "../../api/productsApi";
import ProductForm from "./ProductForm";
import useUpdate from "../../hooks/useUpdate";

function ProductAdd() {
  const navigate = useNavigate();
  const { update, updateError } = useUpdate();

  const gridTemplateAreas = `
  "title sku"
  "basePrice price"
  "stocked image"
  "desc desc"
  `;

  // TODO: @Peter - why does TypeScript not complain that the data object holds strings for basePrice and Price?
  // TODO: redirect user back to table when success
  const handleSubmit = (data: ProductDTO) => {
    const formattedData = {
      ...data,
      basePrice: +data.basePrice,
      price: +data.price,
    };
    update(UpdateProductDTOMethods.POST, formattedData);

    if (!updateError) {
      navigate(`/products/admin`);
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
