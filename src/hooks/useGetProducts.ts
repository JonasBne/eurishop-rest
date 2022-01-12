import { useEffect, useState } from "react";
import Product from "../types/Product";

type Data = Product[];

// TODO: introduce further typecasting
function useGetProducts(url: string) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [fetchedData, setFetchedData] = useState<Data>([]);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        // TODO: this a dirty fix for fetching all products
        url
      );
      if (response.ok) {
        const data = await response.json();
        setFetchedData(data);
      } else if (!response.ok) {
        throw new Error(`A problem occured while fetching the data.`);
      }
    } catch (e: any) {
      setError(`A problem occured while fetching the data (${e})`);
      console.error(
        `The useGetProducts call could not be completed. Error: ${e}`
      );
    }
    setLoading(false);
  }

  useEffect(() => {
    console.log("useEffect runs...");
    fetchProducts();
  }, []);

  return {
    loading,
    error,
    data: fetchedData,
  };
}

export default useGetProducts;
