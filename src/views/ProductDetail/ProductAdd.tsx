import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import toasts from "../../components/toasts";
import { ProductDTO, useUpdateProduct } from "../../api/productsApi";
import ProductForm from "./ProductForm";
import UpdateMethods from "../../api/updateMethods";

function ProductAdd() {
  const { succesToast, failToast } = toasts();
  const navigate = useNavigate();
  const { error: postError, data: postedData, update } = useUpdateProduct();

  const gridTemplateAreas = `
  "title sku"
  "basePrice price"
  "stocked image"
  "desc desc"
  `;

  useEffect(() => {
    if (postError) {
      failToast(postError);
    }
    if (postedData) {
      succesToast(`New product with id: ${postedData.id} added!`);
      navigate(`/products/admin`);
    }
  }, [postError, postedData]);

  // TODO: @Peter - why does TypeScript not complain that the data object holds strings for basePrice and Price?
  const handleSubmit = (product: Product) => {
    // const product = {
    //   ...formValues,
    //   basePrice: +formValues.basePrice,
    //   price: +formValues.price,
    // };

    const formattedData = {
      ...data,
      basePrice: +data.basePrice,
      price: +data.price,
    };
    update(UpdateMethods.POST, formattedData, formattedData.id);
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
