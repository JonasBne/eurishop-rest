import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGetProduct, ProductDTO } from "../../api/productsApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import ProductForm from "./ProductForm";

function ProductEdit() {
  const { productId } = useParams<string>();
  const { loading, error, product } = useGetProduct(
    `${productId !== undefined ? productId : ""}`
  );

  const [formData, setFormData] = useState({
    id: 0,
    sku: "",
    title: "",
    desc: "",
    image: "",
    stocked: false,
    basePrice: 0,
    price: 0,
  });

  useEffect(() => {
    if (product !== undefined) {
      setFormData(product);
    }
  }, [product]);

  const gridTemplateAreas = `
  "id sku title . "
  "basePrice price stocked ."
  "image image . ."
  "desc desc desc desc"
  `;

  const handleSubmit = (data: ProductDTO) => {
    console.log("DATA FROM FORM SUBMIT", data);
  };

  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {!loading && error && (
        <ErrorModal name={error.name} message={error.message} />
      )}
      {!loading && !error && (
        <ProductForm
          gridTemplateAreas={gridTemplateAreas}
          initialData={formData}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default ProductEdit;
