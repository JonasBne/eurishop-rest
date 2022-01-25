/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */
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
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const handleBuy = (product: ProductDTO) => {
    if (cartItems.find((item) => item.id === product.id)) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  // TODO: add global amount (add it to ShoppingCart - not in a state)
  // TODO: add handleRemove from cart and add handleClear and add handleOrder
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
