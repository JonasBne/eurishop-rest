import React from "react";
import Product from "../../types/Product";

interface ProductFormProps {
  product: Product;
}

function ProductForm({ product }: ProductFormProps) {
  return (
    <form>
      <input type="text" defaultValue={product.sku} />
      <input type="text" defaultValue={product.title} />
      <input type="text" defaultValue={product.desc} />
      <input type="text" defaultValue={product.stocked ? "Yes" : "No"} />
      <input type="text" defaultValue={product.basePrice} />
      <input type="text" defaultValue={product.price} />
    </form>
  );
}

export default ProductForm;
