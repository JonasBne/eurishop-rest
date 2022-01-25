import React, { useState } from "react";
import { ProductDTO, useGetProducts } from "../../api/productsApi";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import FlexBox from "../../components/FlexBox";
import LoadingSpinner from "../../components/LoadingSpinner";
import ProductCard from "./ProductCard";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

// TODO: where to store this interface - domain folder?

export interface Item {
  item: {
    product: ProductDTO;
    quantity: number;
  };
}

function Home() {
  const { loading, error, products } = useGetProducts();
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const handleBuy = () => {
    console.log("added to cart");
  };

  // TODO: show price on product card and stock (if not in stock not buyable)
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
