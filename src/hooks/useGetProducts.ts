// eslint-disable-next-line max-classes-per-file
import { useEffect, useState } from "react";
import Product from "../types/Product";
import ProductData from "../types/ProductData";

// TODO: don't create alias type (in this case)
// type Response = ProductData;
// type FetchedData = Product[];

// TODO: Create a generic fetch hook and re-use
// const { loading, error, data } = useFetch(url);

class RequestError extends Error {
  status: number;

  constructor(status: number, message: string = "HttpError") {
    super(message);
    this.name = "RequestError";
    this.message = message;
    this.status = status;
  }
}

class CommunicationError extends Error {
  error: Error;

  constructor(error: Error, message: string = "CommunicationError") {
    super(message);
    this.name = "RequestError";
    this.message = message;
    this.error = error;
  }
}

function useGetProducts(url: string) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [fetchedData, setFetchedData] = useState<Product[]>([]);

  // TODO: add a unit test for this api call
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        setError(new RequestError(response.status));
        return;
      }
      const data: ProductsDTO = await response.json();
      // axios: const data = await get<ProductsDTO>(url);
      setFetchedData(data.selectedProducts);
    } catch (e: any) {
      setError(new CommunicationError(e));
    } finally {
      setLoading(false);
    }
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
