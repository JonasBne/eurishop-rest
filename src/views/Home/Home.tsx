import React from "react";
import { useGetProducts } from "../../api/productsApi";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import LoadingSpinner from "../../components/LoadingSpinner";
import ProductCard from "./ProductCard";

function Home() {
  const { loading, error, products } = useGetProducts();

  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {!loading && error && (
        <ErrorModal name={error.name} message={error.message} />
      )}
      {products && (
        <>
          {products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </>
      )}
    </>
  );
}

export default Home;
