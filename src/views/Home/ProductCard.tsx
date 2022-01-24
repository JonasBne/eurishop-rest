/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { SpaceProps } from "styled-system";
import Card from "../../components/Card";
import { ProductDTO } from "../../api/productsApi";

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
    />
  );
}

export default ProductCard;
