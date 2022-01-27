/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { SpaceProps } from "styled-system";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ProductDTO } from "../../api/productsApi";
import Card from "../../components/Card";
import Button from "../../components/Button";
import FaIcon from "../../assets/FaIcon";

interface ProductCardProps extends SpaceProps {
  product: ProductDTO;
  onBuy: (cartItem: ProductDTO) => void;
}

function ProductCard({ product, onBuy, ...space }: ProductCardProps) {
  const handleBuy = (event: React.MouseEvent) => {
    event.preventDefault();
    onBuy(product);
  };

  return (
    <Card
      title={product.title}
      image={product.image}
      content={product.desc}
      {...space}
    >
      {product.stocked === "Yes" ? (
        <Button
          type="button"
          variant="primary"
          my="2rem"
          mx="6rem"
          px="1rem"
          onClick={handleBuy}
        >
          ADD
          <FaIcon icon={faShoppingCart} mx=".25rem" />
        </Button>
      ) : (
        <Button type="button" variant="danger" my="2rem" mx="6rem" disabled>
          Out of stock
        </Button>
      )}
    </Card>
  );
}

export default ProductCard;
