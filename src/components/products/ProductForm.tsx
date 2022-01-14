import React from "react";
import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";
import Product from "../../types/Product";

const Form = styled.form<LayoutProps>`
  ${layout}
  display: grid;
  grid-template-areas:
    "number title . . "
    "stock basePrice . ."
    "unitPrice . . ."
    "desc desc desc desc";
  grid-gap: 2rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
`;

const NumberLabel = styled.label<SpaceProps>`
  ${space}
  grid-area: number
`;

const TitleLabel = styled.label<SpaceProps>`
  ${space}
  grid-area: title
`;

const StockLabel = styled.label<SpaceProps>`
  ${space}
  grid-area: stock
`;

const BasePriceLabel = styled.label<SpaceProps>`
  ${space}
  grid-area: basePrice
`;

const UnitPriceLabel = styled.label<SpaceProps>`
  ${space}
  grid-area: unitPrice
`;

const DescriptionLabel = styled.label<SpaceProps>`
  ${space}
  grid-area: desc
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

const TextArea = styled.textarea<LayoutProps>`
  ${layout}
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: none;
  display: block;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  resize: none;
`;

interface ProductFormProps {
  product: Product;
}

// TODO: refactor code to grid
function ProductForm({ product }: ProductFormProps) {
  return (
    <Form width="40rem">
      <NumberLabel htmlFor="number" m="1rem">
        Number
        <Input id="number" type="text" defaultValue={product.sku} disabled />
      </NumberLabel>

      <TitleLabel htmlFor="title" m="1rem">
        Title
        <Input id="title" type="text" defaultValue={product.title} disabled />
      </TitleLabel>

      <StockLabel htmlFor="stocked" m="1rem">
        In stock
        <Input
          id="stocked"
          type="text"
          defaultValue={product.stocked ? "Yes" : "No"}
          disabled
        />
      </StockLabel>

      <BasePriceLabel htmlFor="base-price" m="1rem">
        Base price
        <Input
          id="base-price"
          type="text"
          defaultValue={product.basePrice}
          disabled
        />
      </BasePriceLabel>

      <UnitPriceLabel htmlFor="price" m="1rem">
        Unit price{" "}
        <Input id="price" type="text" defaultValue={product.price} disabled />
      </UnitPriceLabel>

      <DescriptionLabel htmlFor="description" m="1rem">
        Description
        <TextArea id="description" defaultValue={product.desc} disabled />
      </DescriptionLabel>
    </Form>
  );
}

export default ProductForm;
