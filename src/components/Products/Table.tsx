import React from "react";
import useGetProducts from "../../hooks/useGetProducts";

function Table() {
  // TODO: refactor code and introduce context + remove console.log
  const { loading, error, data } = useGetProducts(
    "https://euricom-test-api.herokuapp.com/api/products?page=0&pageSize=100"
  );

  console.log(loading, error, data);

  return <div>Table here</div>;
}

export default Table;
