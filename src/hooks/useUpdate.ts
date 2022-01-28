import { useState } from "react";
import RequestError from "../errors/RequestError";
import CommunicationError from "../errors/CommunicationError";
import UpdateMethods from "../api/updateMethods";

function useUpdate<T>(url: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [updatedData, setUpdatedData] = useState<T>();

  const update = async (
    method: UpdateMethods,
    data: T,
    id: number | string = ""
  ) => {
    try {
      setLoading(true);
      const response = await fetch(`${url}/${id}`, {
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
      setUpdatedData(await response.json());
    } catch (e: any) {
      setError(new CommunicationError(e));
    } finally {
      setLoading(false);
    }
  };

  const remove = async (method: UpdateMethods, id: number | string = "") => {
    try {
      setLoading(true);
      const response = await fetch(`${url}/${id}`, {
        method,
      });

      if (!response.ok) {
        setError(new RequestError(response.status));
        return;
      }
      setUpdatedData(await response.json());
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
    data: updatedData,
  };
}

export default useUpdate;
