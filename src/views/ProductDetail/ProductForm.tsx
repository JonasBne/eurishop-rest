/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { space, SpaceProps, layout, LayoutProps } from "styled-system";
import styled from "styled-components";
import { ProductDTO } from "../../api/productsApi";
import Grid from "../../components/Grid";
import TextArea from "../../components/TextArea";
import InputField from "../../components/InputField";

const StyledForm = styled.form<SpaceProps | LayoutProps>`
  ${space}
  ${layout}
  border: 2px solid black;
`;

interface ProductFormProps {
  initialData?: ProductDTO;
  gridTemplateAreas: string;
  onSubmit: (data: ProductDTO) => void;
}

function ProductForm({
  initialData = {
    id: 0,
    sku: "",
    title: "",
    desc: "",
    image: "",
    stocked: false,
    basePrice: 0,
    price: 0,
  },
  gridTemplateAreas,
  onSubmit,
}: ProductFormProps) {
  const { register, handleSubmit } = useForm<ProductDTO>();

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Grid gridTemplateAreas={gridTemplateAreas}>
        <InputField
          label="Serial Number"
          id="sku"
          type="text"
          defaultValue={initialData.sku}
          {...register("sku")}
        />
        <InputField
          label="Title"
          id="title"
          type="text"
          defaultValue={initialData.title}
          {...register("title")}
        />
        <InputField
          label="In stock"
          id="stocked"
          type="text"
          defaultValue={initialData.stocked ? "Yes" : "No"}
          {...register("stocked")}
        />
        <InputField
          label="Base price"
          id="basePrice"
          type="number"
          defaultValue={initialData.basePrice}
          {...register("basePrice")}
        />
        <InputField
          label="Unit price"
          id="price"
          type="number"
          defaultValue={initialData.price}
          {...register("price")}
        />
        <InputField
          label="Image URL"
          id="image"
          type="text"
          defaultValue={initialData.image}
          {...register("image")}
        />
        <TextArea
          label="Description"
          id="desc"
          defaultValue={initialData.desc}
          {...register("desc")}
        />
      </Grid>
    </StyledForm>
  );
}

export default ProductForm;
