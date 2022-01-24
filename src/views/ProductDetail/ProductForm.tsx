/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { space, SpaceProps, layout, LayoutProps } from "styled-system";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { ProductDTO } from "../../api/productsApi";
import Grid from "../../components/Grid";
import Input from "../../components/Input";
import Label from "../../components/Label";
import TextArea from "../../components/TextArea";
import Header from "../../components/Header";
import Button from "../../components/Button";
import FlexBox from "../../components/FlexBox";

const StyledForm = styled.form<SpaceProps | LayoutProps>`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 40%;
  background: #fff;
  ${space}
  ${layout};
`;

interface ProductFormProps extends SpaceProps {
  title: string;
  initialData?: ProductDTO;
  gridTemplateAreas: string;
  onSubmit: (data: ProductDTO) => void;
}

function ProductForm({
  initialData,
  gridTemplateAreas,
  onSubmit,
  title,
  ...spacing
}: ProductFormProps) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<ProductDTO>({
    defaultValues: initialData ?? {},
  });

  // TODO: is it ok to add this logic here? Since the product form will always redirect a user back to the products page
  const handleCancel = () => {
    navigate("/products/admin");
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} {...spacing}>
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
