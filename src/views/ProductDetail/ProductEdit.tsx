import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGetProduct } from "../../api/productsApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import ProductForm from "./ProductForm";

function ProductEdit() {
  const [editMode, setEditMode] = useState<boolean>(false);

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

  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {!loading && error && (
        <ErrorModal name={error.name} message={error.message} />
      )}
      {!loading && !error && 
      <ProductForm />
      )}
    </>
  );
}

export default ProductEdit;
