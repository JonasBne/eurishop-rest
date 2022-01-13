import React from "react";
import Product from "../../types/Product";

interface ProductFormProps {
  product: Product;
}

function ProductForm({ product }: ProductFormProps) {
  return (
    <form>
      <label htmlFor="number">
        Number
        <input id="number" type="text" defaultValue={product.sku} />
      </label>

      <label htmlFor="title">
        Title <input id="title" type="text" defaultValue={product.title} />
      </label>

      <label htmlFor="description">
        Description
        <input id="description" type="text" defaultValue={product.desc} />
      </label>

      <label htmlFor="stocked">
        In stock
        <input
          id="stocked"
          type="text"
          defaultValue={product.stocked ? "Yes" : "No"}
        />
      </label>

      <label htmlFor="base-price">
        Base price
        <input id="base-price" type="text" defaultValue={product.basePrice} />
      </label>

      <label htmlFor="price">
        Unit price <input id="price" type="text" defaultValue={product.price} />
      </label>
    </form>
  );
}

export default ProductForm;
