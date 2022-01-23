/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { space, SpaceProps, layout, LayoutProps } from "styled-system";
import styled from "styled-components";
import { ProductDTO } from "../../api/productsApi";
import Grid from "../../components/Grid";
import Input from "../../components/Input";
import Label from "../../components/Label";
import TextArea from "../../components/TextArea";
import Header4 from "../../components/Header4";

const StyledForm = styled.form<SpaceProps | LayoutProps>`
  border: 2px solid ${({ theme }) => theme.secondaryDark};
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 40%;
  ${space} ${layout};
`;

interface ProductFormProps {
  title: string;
  initialData: ProductDTO;
  gridTemplateAreas: string;
  onSubmit: (data: ProductDTO) => void;
}

function ProductForm({
  initialData,
  gridTemplateAreas,
  onSubmit,
  title,
}: ProductFormProps) {
  const { register, handleSubmit } = useForm<ProductDTO>({
    defaultValues: initialData,
  });

  // TODO: add buttons (one with type 'submit')
  // TODO: change type=text to checkbox
  // Default values worden slechts één keer opgeladen
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} mx="auto" mt="5rem">
      <Header4 mb="3rem">{title}</Header4>
      <Grid gridTemplateAreas={gridTemplateAreas}>
        <Label gridArea="sku">
          Serial number
          <Input id="sku" type="text" {...register("sku")} />
        </Label>

        <Label gridArea="title">
          Title
          <Input id="title" type="text" {...register("title")} />
        </Label>

        {/* // TODO: checkbox */}
        <Label gridArea="stocked">
          In stock
          <Input id="stocked" type="text" {...register("stocked")} />
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
    </StyledForm>
  );
}

export default ProductForm;
