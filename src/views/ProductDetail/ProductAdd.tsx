import React from "react";
import { ProductDTO } from "../../api/productsApi";
import ProductForm from "./ProductForm";
import useUpdate from "../../hooks/useUpdate";
import rootUrl from "../../api/rootUrl";

function ProductAdd() {
  const { update } = useUpdate();

  const gridTemplateAreas = `
  "title sku"
  "basePrice price"
  "stocked image"
  "desc desc"
  `;

  // TODO: @Peter - why does TypeScript not complain that the data object holds strings for basePrice and Price?
  const handleSubmit = (data: ProductDTO) => {
    const formattedData = {
      ...data,
      basePrice: +data.basePrice,
      price: +data.price,
    };
    update(`${rootUrl}api/products`, "post", formattedData);
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
