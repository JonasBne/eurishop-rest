import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Form from "../../components/Form";
import { useGetProduct } from "../../api/productsApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import PageNotFound from "../../components/PageNotFound";

function ProductDetail() {
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    console.log(editMode);
  }, [editMode]);

  const { productId } = useParams<string>();
  const { loading, error, product } = useGetProduct(
    `${productId !== undefined ? productId : ""}`
  );

  const gridTemplateAreas = `
  "id sku title . "
  "basePrice price stocked ."
  "image image . ."
  "desc desc desc desc"
  `;

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  // TODO: is this a clean way for guarding the undefined state?
  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {!loading && error && <PageNotFound />}
      {!loading && !error && product !== undefined && (
        <Form
          data={product}
          title="Product Detail"
          width="50rem"
          margin="2rem auto"
          buttonMargin="2rem"
          gridTemplateAreas={gridTemplateAreas}
          gridRowGap="1.25rem"
          onEdit={handleEdit}
        />
      )}
    </>
  );
}

export default ProductDetail;
