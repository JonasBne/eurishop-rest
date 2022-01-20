import React from "react";
import { useGetProducts } from "../../api/productsApi";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import Grid from "../../components/Grid";
import LoadingSpinner from "../../components/LoadingSpinner";

function Home() {
  const { loading, error, products } = useGetProducts();

  const gridTemplateAreas = `
  "product basket basket"
  `;

  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {!loading && error && (
        <ErrorModal name={error.name} message={error.message} />
      )}
      {!loading && !error && products !== undefined && (
        <Grid gridTemplateAreas={gridTemplateAreas}>
          {products.map((product) => {
            return <div>{product.title}</div>;
          })}
          <div>BASKET</div>
        </Grid>
      )}
    </>
  );
}

export default Home;
