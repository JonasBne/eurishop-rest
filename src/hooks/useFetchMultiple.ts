/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import CommunicationError from '../errors/CommunicationError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useFetchMultiple = <T>(urls: string[]) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  // TODO: provide better typing
  const [fetchedData, setFetchedData] = useState<any>();

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));
      setFetchedData(data);
    } catch (e: any) {
      setError(new CommunicationError(e));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [urls]);

  return {
    loading,
    error,
    data: fetchedData,
  };
};

export default useFetchMultiple;
