/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { SpaceProps } from "styled-system";
import { ProductDTO } from "../../api/productsApi";
import Card from "../../components/Card";
import Button from "../../components/Button";

interface ProductCardProps extends SpaceProps {
  product: ProductDTO;
}

// TODO: add buttons for buying the product

function ProductCard({ product, ...space }: ProductCardProps) {
  return (
    <Card
      title={product.title}
      image={product.image}
      content={product.desc}
      {...space}
    >
      <Button type="button" variant="primary">
        Add to cart
      </Button>
    </Card>
  );
}

export default ProductCard;
