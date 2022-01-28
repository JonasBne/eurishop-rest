import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import toasts from "../../components/toasts";
import { ProductDTO, useUpdateProduct } from "../../api/productsApi";
import ProductForm from "./ProductForm";
import UpdateMethods from "../../api/updateMethods";

function ProductAdd() {
  const { succesToast, failToast } = toasts();
  const navigate = useNavigate();
  // const { refetch } = useGetProducts();
  const { error: postError, update } = useUpdateProduct();

  const gridTemplateAreas = `
  "title sku"
  "basePrice price"
  "stocked image"
  "desc desc"
  `;

  useEffect(() => {
    if (postError) {
      failToast();
    } else {
      succesToast();
    }
  }, [postError]);

  // TODO: @Peter - why does TypeScript not complain that the data object holds strings for basePrice and Price?
  // TODO: @Peter - Is this a correct way of using async code?
  const handleSubmit = (data: ProductDTO) => {
    const formattedData = {
      ...data,
      basePrice: +data.basePrice,
      price: +data.price,
    };

    update(UpdateMethods.POST, formattedData, formattedData.id);

    navigate(`/products/admin`);

    // if (!response?.ok || updateError) {
    //   failToast();
    // } else {
    //   succesToast();
    //   refetch();
    //   navigate(`/products/admin`);
    // }
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
