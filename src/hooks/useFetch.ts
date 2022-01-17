/* eslint-disable max-classes-per-file */
import { useState, useEffect } from "react";

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

const useFetch = <T>(url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [fetchedData, setFetchedData] = useState<T>();

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        setError(new RequestError(response.status));
        return;
      }
      const data: T = await response.json();
      setFetchedData(data);
    } catch (e: any) {
      setError(new CommunicationError(e));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    loading,
    error,
    data: fetchedData,
  };
};

export default useFetch;
