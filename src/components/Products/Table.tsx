/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";

function Table() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(
        // TODO: this a dirty fix for fetching all products
        "https://euricom-test-api.herokuapp.com/api/products?page=0&pageSize=100"
      );
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else if (!response.ok) {
        throw new Error(`A problem occured while fetching the data.`);
      }
    } catch (e: any) {
      setError(`A problem occured while fetching the data (${e})`);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>PRODUCT TABLE GOES HERE</div>;
}

export default Table;
