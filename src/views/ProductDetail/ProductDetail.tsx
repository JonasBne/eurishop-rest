import React from "react";
import Form from "../../components/Form";
import { useGetProduct } from "../../api/productsApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import PageNotFound from "../../components/PageNotFound";

function ProductDetail() {
  const { loading, error, product } = useGetProduct("2");

  console.log(product);

  // TODO: is this a clean way for guarding the undefined state?
  return (
    <>
      <div>PRODUCT DETAIL HERE</div>
      {loading && !error && <LoadingSpinner />}
      {!loading && error && <PageNotFound />}
      {!loading && !error && <Form formTitle="TITLE" data={product} />}
    </>
  );
}

export default ProductDetail;
