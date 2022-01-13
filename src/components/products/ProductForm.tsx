import React from "react";
import Product from "../../types/Product";

interface ProductFormProps {
  product: Product;
}

function ProductForm({ product }: ProductFormProps) {
  console.log(product);
  return <div>test</div>;
}

export default ProductForm;
