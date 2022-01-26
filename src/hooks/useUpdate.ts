import { useState } from "react";
import {
  mapProductUpdateMethodsToUrls,
  ProductDTO,
  UpdateProductDTOMethods,
} from "../api/productsApi";
import RequestError from "../errors/RequestError";
import CommunicationError from "../errors/CommunicationError";

function useUpdate() {
  const [updateIsLoading, setUpdateIsLoading] = useState<boolean>(false);
  const [updateError, setUpdateError] = useState<Error>();

  // TODO: work with refetch function when a new product is posted?
  const update = async (
    url: string,
    method: UpdateProductDTOMethods,
    data: ProductDTO
  ) => {
    try {
      setUpdateIsLoading(true);
      const response = await fetch(mapProductUpdateMethodsToUrls(method), {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setUpdateError(new RequestError(response.status));
        return;
      }
    } catch (e: any) {
      setUpdateError(new CommunicationError(e));
    } finally {
      setUpdateIsLoading(false);
    }
  };

  const remove = async (url: string, method: UpdateProductDTOMethods) => {
    try {
      setUpdateIsLoading(true);
      const response = await fetch(mapProductUpdateMethodsToUrls(method), {
        method,
      });

      if (!response.ok) {
        setUpdateError(new RequestError(response.status));
        return;
      }
    } catch (e: any) {
      setUpdateError(new CommunicationError(e));
    } finally {
      setUpdateIsLoading(false);
    }
  };

  return {
    updateIsLoading,
    updateError,
    update,
    remove,
  };
}

export default useUpdate;
