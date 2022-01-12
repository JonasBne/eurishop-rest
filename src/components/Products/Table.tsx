import React from "react";
import useGetProducts from "../../hooks/useGetProducts";

function Table() {
  const { loading, error, data } = useGetProducts(
    "https://euricom-test-api.herokuapp.com/api/products?page=0&pageSize=100"
  );

  return <div>PRODUCT TABLE GOES HERE</div>;
}

export default Table;
