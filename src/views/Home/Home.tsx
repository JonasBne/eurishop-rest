import React, { useState } from "react";
import { ProductDTO, useGetProducts } from "../../api/productsApi";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import FlexBox from "../../components/FlexBox";
import LoadingSpinner from "../../components/LoadingSpinner";
import ProductCard from "./ProductCard";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { Item } from "../../domain/ShoppingCart";

function Home() {
  const { loading, error, products } = useGetProducts();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const handleBuy = (cartItem: ProductDTO) => {
    console.log(cartItem);
  };

  // TODO: add global amount (add it to ShoppingCart - not in a state)
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
              return (
                <ProductCard product={product} onBuy={handleBuy} m="2rem" />
              );
            })}
          </FlexBox>
          <FlexBox order={2} flexBasis="25%" mt="2rem" height="fit-content">
            <ShoppingCart cartItems={cartItems} />
          </FlexBox>
        </FlexBox>
      )}
    </>
  );
}

export default Home;
