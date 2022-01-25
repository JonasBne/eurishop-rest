/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { SpaceProps } from "styled-system";
import { ProductDTO } from "../../api/productsApi";
import Card from "../../components/Card";
import Button from "../../components/Button";

interface ProductCardProps extends SpaceProps {
  product: ProductDTO;
  onBuy: () => void;
}

function ProductCard({ product, onBuy, ...space }: ProductCardProps) {
  const handleBuy = (event: React.MouseEvent) => {
    event.preventDefault();
    onBuy();
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
          onClick={handleBuy}
        >
          Add to cart
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
