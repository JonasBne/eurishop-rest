import { useEffect, useState } from "react";
import Product from "../types/Product";
import ProductData from "../types/ProductData";

// TODO: don't create alias type (in this case)
type Response = ProductData;
type FetchedData = Product[];

function useGetProducts(url: string) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [fetchedData, setFetchedData] = useState<FetchedData>([]);

  // TODO: add a unit test for this api call
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (response.ok) {
        const data: Response = await response.json();
        setFetchedData(data.selectedProducts);
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
