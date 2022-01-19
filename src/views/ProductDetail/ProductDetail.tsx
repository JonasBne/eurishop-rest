import React from "react";
import Form from "../../components/Form";
import { useGetProduct } from "../../api/productsApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import PageNotFound from "../../components/PageNotFound";

function ProductDetail() {
  const { loading, error, product } = useGetProduct("2");

  const gridTemplateAreas = `
  "id sku title . "
  "basePrice price stocked ."
  "image . . ."
  "desc desc desc desc"
  `;

  console.log(product);

  // TODO: is this a clean way for guarding the undefined state?
  return (
    <>
      <div>PRODUCT DETAIL HERE</div>
      {loading && !error && <LoadingSpinner />}
      {!loading && error && <PageNotFound />}
      {!loading && !error && product !== undefined && (
        <Form
          data={product}
          title="TITLE"
          width="50rem"
          margin="2rem auto"
          gridTemplateAreas={gridTemplateAreas}
          gridRowGap="1.25rem"
        />
      )}
    </>
  );
}

export default ProductDetail;
