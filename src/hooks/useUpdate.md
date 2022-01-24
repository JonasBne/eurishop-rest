```jsx

// src > hooks > useUpdate.ts

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

  // same logic for put and delete but with different methods and id has to be passed

  return {
    updateIsLoading
    updateError,
    post,
    put,
    delete
  }
}

export default useUpdate;

// src > components > ProductDetail > ProductEdit.tsx

function ProductEdit () {
  const {updateIsLoading, updateError, put} = useUpdate();

    const handleSubmit = (data: ProductDTO) => {
      put("https://domain/api/products", 1, data)
  };



  return (
    <>
      {loading || updateIsLoading && <LoadingSpinner />}
      {error || updateError && <ErrorModal name={error.name} message={error.message} />}
      {product && (
        <ProductForm
          title="EDIT PRODUCT"
          gridTemplateAreas={gridTemplateAreas}
          initialData={product}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );

}



```
