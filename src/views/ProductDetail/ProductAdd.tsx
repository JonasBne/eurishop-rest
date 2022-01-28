import React from "react";
import { useNavigate } from "react-router";
// import toast from "react-hot-toast";
import toasts from "../../components/toasts";
import {
  ProductDTO,
  UpdateProductDTOMethods,
  useGetProducts,
} from "../../api/productsApi";
import ProductForm from "./ProductForm";
import useUpdate from "../../hooks/useUpdate";

function ProductAdd() {
  const { succesToast, failToast } = toasts();
  const navigate = useNavigate();
  const { refetch } = useGetProducts();
  const { update, error: updateError } = useUpdate();

  const gridTemplateAreas = `
  "title sku"
  "basePrice price"
  "stocked image"
  "desc desc"
  `;

  // TODO: @Peter - why does TypeScript not complain that the data object holds strings for basePrice and Price?
  // TODO: @Peter - Is this a correct way of using async code?
  const handleSubmit = async (data: ProductDTO) => {
    const formattedData = {
      ...data,
      basePrice: +data.basePrice,
      price: +data.price,
    };

    const response = await update(
      UpdateProductDTOMethods.POST,
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
