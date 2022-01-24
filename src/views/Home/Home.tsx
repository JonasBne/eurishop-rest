import React from "react";
import { useGetProducts } from "../../api/productsApi";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
// import FlexBox from "../../components/FlexBox";
// import Box from "../../components/Box";
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
      {/* {!loading && !error && products !== undefined && (
        <FlexBox justifyContent="space-between" mt="1rem" mx="2rem">
          <FlexBox
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-evenly"
            flexBasis="90%"
          >
            {products.map((product) => {
              return (
                <Card
                  margin="0.5rem"
                  padding="1rem"
                  title={product.title}
                  image={product.image}
                  imageDescription={product.title}
                  content={product.desc}
                  buttons={[
                    { action: "Detail", color: "#007bff" },
                    { action: "Add +", color: "#405cf5" },
                  ]}
                />
              );
            })}
          </FlexBox>
          <Box m="auto">BASKET</Box>
        </FlexBox>
      )} */}
    </>
  );
}

export default Home;
