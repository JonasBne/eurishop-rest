/* eslint-disable consistent-return */
import { useState } from "react";
import {
  mapProductUpdateMethodsToUrls,
  ProductDTO,
  UpdateProductDTOMethods,
} from "../api/productsApi";
import RequestError from "../errors/RequestError";
import CommunicationError from "../errors/CommunicationError";

function useUpdate() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  // TODO: @Peter is this the proper way of working with async/await?
  const update = async (
    method: UpdateProductDTOMethods,
    data: ProductDTO,
    id: number | string = ""
  ) => {
    try {
      setLoading(true);
      const response = await fetch(mapProductUpdateMethodsToUrls(method, id), {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setError(new RequestError(response.status));
        return;
      }

      return response;
    } catch (e: any) {
      setError(new CommunicationError(e));
    } finally {
      setLoading(false);
    }
  };

  const remove = async (
    method: UpdateProductDTOMethods,
    id: number | string = ""
  ) => {
    try {
      setLoading(true);
      const response = await fetch(mapProductUpdateMethodsToUrls(method, id), {
        method,
      });

      if (!response.ok) {
        setError(new RequestError(response.status));
        return;
      }
      return response;
    } catch (e: any) {
      setError(new CommunicationError(e));
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    update,
    remove,
  };
}

export default useUpdate;
