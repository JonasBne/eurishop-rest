import React from "react";
import Form from "../../components/Form";
import { useGetProduct } from "../../api/productsApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import PageNotFound from "../../components/PageNotFound";

function ProductDetail() {
  const { loading, error, product } = useGetProduct("2");

  const gridTemplateAreas = `
  "number title . . "
  "stock basePrice . ."
  "unitPrice . . ."
  "desc desc desc desc"
  " . . btn ."
  `;

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
          gridTemplateAreas={gridTemplateAreas}
          gridRowGap="1.25rem"
        />
      )}
    </>
  );
}

export default ProductDetail;
