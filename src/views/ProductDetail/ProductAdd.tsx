import React from "react";
import { ProductDTO } from "../../api/productsApi";
import ProductForm from "./ProductForm";

function ProductAdd() {
  const gridTemplateAreas = `
  "title sku"
  "basePrice price"
  "stocked image"
  "desc desc"
  `;

  const handleSubmit = (data: ProductDTO) => {
    console.log(data);
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
