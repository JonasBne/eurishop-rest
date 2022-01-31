/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { space, SpaceProps, layout, LayoutProps } from "styled-system";
import styled from "styled-components";
import { useNavigate } from "react-router";
import Grid from "../../components/Grid";
import Input from "../../components/Input";
import Label from "../../components/Label";
import TextArea from "../../components/TextArea";
import Header from "../../components/Header";
import Button from "../../components/Button";
import FlexBox from "../../components/FlexBox";

const StyledForm = styled.form<SpaceProps | LayoutProps>`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 20px;
  width: 40%;
  background: ${({ theme }) => theme.colors.whites.primaryWhite};
  ${space}
  ${layout};
`;

interface ProductFormProps extends SpaceProps {
  title: string;
  initialValues?: ProductFormValues;
  gridTemplateAreas: string;
  onSubmit: (formValues: ProductFormValues) => void;
}

export interface ProductFormValues {
  sku: string;
  title: string;
  desc: string;
  image: string;
  stocked: boolean;
  basePrice: number;
  price: number;
}

function ProductForm({
  initialValues,
  gridTemplateAreas,
  onSubmit,
  title,
  ...spacing
}: ProductFormProps) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      sku: initialValues?.sku,
      title: initialValues?.title,
      desc: initialValues?.desc,
      image: initialValues?.image,
      stocked: initialValues?.stocked,
      basePrice: initialValues?.basePrice,
      price: initialValues?.price,
    },
  });

  const handleCancel = () => {
    navigate("/products/admin");
  };

  const handleFormResult = (formValues: any) = > {
    const product: Product = {
      ...formValues,
      basePrice: +formValues.basePrice,
      price: +formValues.price,
    };
    onSubmit(product)
  }

  return (
    <StyledForm onSubmit={handleSubmit(handleFormResult)} {...spacing}>
      <Header p="2rem" as="h2" textAlign="center" variant="secondary">
        {title}
      </Header>
      <Grid gridTemplateAreas={gridTemplateAreas}>
        <Label gridArea="sku">
          Serial number
          <Input id="sku" type="text" {...register("sku")} />
        </Label>

        <Label gridArea="title">
          Title
          <Input id="title" type="text" {...register("title")} />
        </Label>

        <Label gridArea="stocked">
          In stock
          <Input id="stocked" type="checkbox" {...register("stocked")} />
        </Label>

        <Label gridArea="basePrice">
          Base Price
          <Input id="basePrice" type="text" {...register("basePrice")} />
        </Label>

        <Label gridArea="price">
          Unit price
          <Input id="price" type="text" {...register("price")} />
        </Label>

        <Label gridArea="image">
          Image URL <Input id="image" type="text" {...register("image")} />
        </Label>

        <Label gridArea="desc">
          Description
          <TextArea id="desc" {...register("desc")} />
        </Label>
      </Grid>
      <FlexBox mx="2rem" my="1rem" justifyContent="flex-end">
        <Button
          type="button"
          variant="danger"
          mx="0.5rem"
          mb="1rem"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button type="submit" variant="primary" mx="0.5rem" mb="1rem">
          Save
        </Button>
      </FlexBox>
    </StyledForm>
  );
}



export default ProductForm;
