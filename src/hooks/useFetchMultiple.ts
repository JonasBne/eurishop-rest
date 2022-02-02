/* eslint-disable max-len */
import { useState, useEffect, useCallback } from 'react';
// import RequestError from '../errors/RequestError';
import CommunicationError from '../errors/CommunicationError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useFetchMultiple = <T>(urls: string[]) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [fetchedData, setFetchedData] = useState<any>();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));
      setFetchedData(data);
    } catch (e: any) {
      setError(new CommunicationError(e));
    } finally {
      setLoading(false);
    }
  }, [urls]);

  const refetch = async () => fetchData();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    loading,
    error,
    data: fetchedData,
    refetch,
  };
};

export default useFetchMultiple;
