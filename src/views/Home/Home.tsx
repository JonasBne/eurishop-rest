import React from "react";
import { useGetProducts } from "../../api/productsApi";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import FlexBox from "../../components/FlexBox";
import Box from "../../components/Box";
import LoadingSpinner from "../../components/LoadingSpinner";

function Home() {
  const { loading, error, products } = useGetProducts();

  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {!loading && error && (
        <ErrorModal name={error.name} message={error.message} />
      )}
      {!loading && !error && products !== undefined && (
        <FlexBox justifyContent="space-between" mt="1rem" mx="2rem">
          <FlexBox
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-evenly"
            flexBasis="90%"
          >
            {products.map((product) => {
              return (
                <Box m="0.5rem" flexBasis="33.33333%">
                  {product.title}
                </Box>
              );
            })}
          </FlexBox>
          <Box m="auto" flexBasis="10%">
            BASKET
          </Box>
        </FlexBox>
      )}
    </>
  );
}

export default Home;
