import React from "react";
import useGetProducts from "../../hooks/useGetProducts";

function Table() {
  const { loading, error, data } = useGetProducts(
    "https://euricom-test-api.herokuapp.com/api/products"
  );

  console.log(loading, error, data);

  return <div>PRODUCT TABLE GOES HERE</div>;
}

export default Table;
