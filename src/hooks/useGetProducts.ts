import { useState, useEffect } from "react";

function useGetProducts(url: string) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  // TODO: typecast the useState hook
  const [fetchedData, setFetchedData] = useState([]);

  async function fetchProducts() {
    setIsLoading(true);
    const response = await fetch(url);

    if (!response.ok) {
      setError(`An error has occured: ${response.status}`);
      throw new Error(error);
    } else {
      setFetchedData(await response.json());
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    loading: isLoading,
    error,
    data: fetchedData,
  };
}

export default useGetProducts;
