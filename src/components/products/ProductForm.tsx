import React from "react";
import styled from "styled-components";
import { layout, space, SpaceProps, LayoutProps } from "styled-system";
import Product from "../../types/Product";

const Form = styled.form<SpaceProps | LayoutProps>`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  ${space}
  ${layout}
`;

const Label = styled.label<SpaceProps>`
  ${space}
`;

const Input = styled.input`
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: none;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  height: 2rem;
`;

interface ProductFormProps {
  product: Product;
}

function ProductForm({ product }: ProductFormProps) {
  return (
    <Form p="1rem" width="fit-content">
      <Label htmlFor="number" m="1rem">
        Number
        <Input id="number" type="text" defaultValue={product.sku} disabled />
      </Label>

      <Label htmlFor="title" m="1rem">
        Title{" "}
        <Input id="title" type="text" defaultValue={product.title} disabled />
      </Label>

      <Label htmlFor="description" m="1rem">
        Description
        <Input
          id="description"
          type="text"
          defaultValue={product.desc}
          disabled
        />
      </Label>

      <Label htmlFor="stocked" m="1rem">
        In stock
        <Input
          id="stocked"
          type="text"
          defaultValue={product.stocked ? "Yes" : "No"}
          disabled
        />
      </Label>

      <Label htmlFor="base-price" m="1rem">
        Base price
        <Input
          id="base-price"
          type="text"
          defaultValue={product.basePrice}
          disabled
        />
      </Label>

      <Label htmlFor="price" m="1rem">
        Unit price{" "}
        <Input id="price" type="text" defaultValue={product.price} disabled />
      </Label>
    </Form>
  );
}

export default ProductForm;
