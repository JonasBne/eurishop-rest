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
        <input id="number" type="text" defaultValue={product.sku} disabled />
      </label>

      <label htmlFor="title">
        Title{" "}
        <input id="title" type="text" defaultValue={product.title} disabled />
      </label>

      <label htmlFor="description">
        Description
        <input
          id="description"
          type="text"
          defaultValue={product.desc}
          disabled
        />
      </label>

      <label htmlFor="stocked">
        In stock
        <input
          id="stocked"
          type="text"
          defaultValue={product.stocked ? "Yes" : "No"}
          disabled
        />
      </label>

      <label htmlFor="base-price">
        Base price
        <input
          id="base-price"
          type="text"
          defaultValue={product.basePrice}
          disabled
        />
      </label>

      <label htmlFor="price">
        Unit price{" "}
        <input id="price" type="text" defaultValue={product.price} disabled />
      </label>
    </form>
  );
}

export default ProductForm;
