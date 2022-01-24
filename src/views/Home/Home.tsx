import React from "react";
import { useGetProducts } from "../../api/productsApi";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import FlexBox from "../../components/FlexBox";
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
        <FlexBox>
          <FlexBox
            flexWrap="wrap"
            justifyContent="start"
            flexDirection="row"
            order={1}
            flexBasis="75%"
          >
            {products.map((product) => {
              return <ProductCard product={product} />;
            })}
          </FlexBox>
          <FlexBox order={2} flexBasis="25%">
            BASKET
          </FlexBox>
        </FlexBox>
      )}
    </>
  );
}

export default Home;
