/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import CommunicationError from '../errors/CommunicationError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useFetchMultiple = <T>(urls: string[]) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [fetchedData, setFetchedData] = useState<T>();

  const fetchData = async () => {
    try {
      setLoading(true);
      // TODO: why does data not accept T as type?
      const data: any = await Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));
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
