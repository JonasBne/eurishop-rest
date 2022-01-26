import { useState } from "react";
import { ProductDTO } from "../api/productsApi";
import RequestError from "../errors/RequestError";
import CommunicationError from "../errors/CommunicationError";

function useUpdate() {
  const [updateIsLoading, setUpdateIsLoading] = useState<boolean>(false);
  const [updateError, setUpdateError] = useState<Error>();

  // TODO: work with refetch function when a new product is posted?
  // TODO: is it a good practice to pass in the method?
  const update = async (url: string, method: string, data: ProductDTO) => {
    try {
      setUpdateIsLoading(true);
      const response = await fetch(url, {
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

  const remove = async (url: string, method: string) => {
    try {
      setUpdateIsLoading(true);
      const response = await fetch(url, {
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
