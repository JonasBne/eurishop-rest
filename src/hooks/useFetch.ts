/* eslint-disable max-classes-per-file */
import { useState, useEffect } from "react";
import RequestError from "../errors/RequestError";
import CommunicationError from "../errors/CommunicationError";

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
