```tsx

function useUpdate(url, id , data) {
  const [updateIsLoading, setUpdateIsLoading] = useState<boolean>(false)
  const [updateError, setUpdateError] = useState<Error>();
  const post = async () => {
    try {
      setUpdateIsLoading(true)
      const response = await fetch (url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        setUpdateError(new RequestError(response.status));
        return;
      }
    } catch (e: any) {
      setUpdateError(new CommunicationError(e));
    } finally {
      setUpdateIsLoading(false)
    }
  }
  // same logic for put and delete but with different methods and with an id
  return {
    updateIsLoading
    updateError,
    post,
    put,
    delete
  }
}

```