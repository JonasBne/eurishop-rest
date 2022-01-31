/* eslint-disable max-classes-per-file */
import { useState, useEffect, useCallback } from 'react';
import RequestError from '../errors/RequestError';
import CommunicationError from '../errors/CommunicationError';

const useFetch = <T>(url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [fetchedData, setFetchedData] = useState<T>();
  const [pageNumber, setPageNumber] = useState<number>(0);

  const fetchDataNextPage = () => {
    setPageNumber((prePage) => prePage + 1);
  };

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}/?page=${pageNumber}`);
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
  }, [url, pageNumber]);

  const refetch = async () => fetchData();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    loading,
    error,
    data: fetchedData,
    refetch,
    fetchDataNextPage,
  };
};

export default useFetch;
