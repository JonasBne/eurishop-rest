import { useState, useEffect } from "react";
import CommunicationError from "../errors/CommunicationError";
import RequestError from "../errors/RequestError";

const usePut = <T>(url: string, data: T) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  async function putData() {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application.json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        setError(new RequestError(response.status));
        return;
      }
    } catch (e: any) {
      setError(new CommunicationError(e));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    putData();
  }, [url, data]);

  return {
    loading,
    error,
  };
};

export default usePut;
