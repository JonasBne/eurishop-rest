import React from "react";
import Product from "../../types/Product";
import {
  Form,
  NumberLabel,
  TitleLabel,
  StockLabel,
  BasePriceLabel,
  UnitPriceLabel,
  DescriptionLabel,
  Input,
  TextArea,
  EditBtn,
} from "./ProductForm.styles";

interface ProductFormProps {
  product: Product;
}

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
      <EditBtn>Edit</EditBtn>
    </Form>
  );
}

export default ProductForm;
