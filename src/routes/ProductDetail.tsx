import React from "react";
import { useParams } from "react-router";
import Navbar from "../components/general/Navbar";

function ProductDetail() {
  const { productId } = useParams<string>();

  return (
    <>
      <Navbar />
      <div>{`DETAIL OF PRODUCT WITH ID ${productId}`}</div>
    </>
  );
}

export default ProductDetail;
