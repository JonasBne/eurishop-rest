import React from "react";
import styled from "styled-components";
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";
import Product from "../../types/Product";

const Form = styled.form<SpaceProps | LayoutProps>`
  ${layout}
  ${space}
  display: grid;
  grid-template-areas:
    "number title . . "
    "stock basePrice . ."
    "unitPrice . . ."
    "desc desc desc desc";
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
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  height: 2rem;
`;

const TextArea = styled.textarea<SpaceProps | LayoutProps | TypographyProps>`
  ${layout}
  ${space}
  ${typography}
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
    <Form height="30rem" width="40rem" p="1rem">
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
        <TextArea
          id="description"
          defaultValue={product.desc}
          disabled
          width="100%"
          height="100%"
          mb="2rem"
          lineHeight="1.5rem"
        />
      </DescriptionLabel>
    </Form>
  );
}

export default ProductForm;
