import { useState } from "react";
import { ProductDTO } from "../api/productsApi";
import RequestError from "../errors/RequestError";
import CommunicationError from "../errors/CommunicationError";

function useUpdate() {
  const [updateIsLoading, setUpdateIsLoading] = useState<boolean>(false);
  const [updateError, setUpdateError] = useState<Error>();

  // TODO: is it a good practice to pass in the method?
  const update = async (
    url: string,
    method: string,
    data: ProductDTO,
    id = ""
  ) => {
    try {
      setUpdateIsLoading(true);
      const response = await fetch(`${url}/${id}`, {
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

  // TODO: add delete and put request
  return {
    updateIsLoading,
    updateError,
    update,
  };
}

export default useUpdate;
