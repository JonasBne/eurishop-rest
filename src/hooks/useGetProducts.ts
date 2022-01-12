import { useEffect, useState } from "react";
import Product from "../types/Product";

type Data = Product[];

function useGetProducts(url: string) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [fetchedData, setFetchedData] = useState<Data>([]);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setFetchedData(data);
      } else if (!response.ok) {
        throw new Error(`A problem occured while fetching the data.`);
      }
    } catch (e: any) {
      setError(`A problem occured while fetching the data (${e})`);
      throw new Error(`A problem occured while fetching the data. Error: ${e}`);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    loading,
    error,
    data: fetchedData,
  };
}

export default useGetProducts;
