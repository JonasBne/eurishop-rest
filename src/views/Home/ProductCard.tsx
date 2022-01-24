/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Card from "../../components/Card";
import { ProductDTO } from "../../api/productsApi";

interface ProductCardProps {
  product: ProductDTO;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card title={product.title} image={product.image} content={product.desc} />
  );
}

export default ProductCard;
