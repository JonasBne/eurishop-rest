```tsx

const useFetch = <T>(url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [fetchedData, setFetchedData] = useState<T>();

  const refetch = async () => fetchData();

  const fetchData = useCallback(async (url: string) => {
    // logic for fetching data here
  }, [url])
  


  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    loading,
    error,
    data: fetchedData,
    refetch
  };
};

export default useFetch;

```